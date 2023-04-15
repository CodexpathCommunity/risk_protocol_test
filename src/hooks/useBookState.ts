import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useBookState = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const [bookData, setBookData] = useState({})



    const getBooks = async () => {
      try {
        const response = await axios.get("https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
        setBookData(response.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
     getBooks()
    }, [])
    
  return (
   [loading, bookData]
  )
}

export default useBookState