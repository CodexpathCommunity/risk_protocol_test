import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useWebSocket } from './useWebsocket'


const useBookState = () => {
    const [loading, setLoading] = useState<boolean>(true)
   
    const [bids, setBids] = useState<any>({})
    const [asks, setAsks] = useState<any>({})


const handleMessage = (event: MessageEvent) => {
    const data = JSON.parse(event.data);
    
    if (data.type === 'update' && data.channel === 'orders') {
     
      const payload = data.payload[0];
      const order = payload.order;
      const metaData = payload.metaData;
      const orderHash = metaData.orderHash;
      const remainingFillableTakerAmount = metaData.remainingFillableTakerAmount;
      const state = metaData.state;
      if (order.takerToken === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
        // Update bids
        const newBids  = { ...bids }  ;
        if (state === 'ADDED' || state === 'FILLED') {
          newBids[orderHash] = { order, metaData };
        } else {
          delete newBids[orderHash];
        }
        setBids(newBids);
      } else if (order.makerToken === '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2') {
        // Update asks
        const newAsks  = { ...asks };
        if (state === 'ADDED' || state === 'FILLED') {
          newAsks[orderHash] = { order, metaData };
        } else {
          delete newAsks[orderHash];
        }    
        
        setAsks(newAsks);
      }
    }
  };


  useWebSocket('wss://api.0x.org/orderbook/v1', handleMessage)


    const getBooks = async () => {
      try {
        const response = await axios.get("https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
       
        setBids(response?.data?.bids)
        setAsks(response?.data?.asks)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
     getBooks()
    }, [])
    
  return (
   [loading, bids, asks]
  )
}

export default useBookState