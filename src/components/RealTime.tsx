import { useWebSocket } from "@/hooks/useWebsocket";
import { useEffect, useState } from "react";



type Order = {
  makerAmount: string;
  takerAmount: string;
};

type OrderUpdate = {
  type: "update";
  channel: "orders";
  payload: { order: Order }[];
};

const OrderBook = () => {
  const [asks, setAsks] = useState<Order[]>([]);
  const [bids, setBids] = useState<Order[]>([]);
   const handleMessage = (event: MessageEvent) => {
    console.log('Received message:', event.data);
  };

  useWebSocket('wss://api.0x.org/orderbook/v1', handleMessage)

   
  

  return (
    <div>
      <h2>Bids</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((order, i) => (
            <tr key={i}>
              <td>{Number(order.takerAmount) / Number(order.makerAmount)}</td>
              <td>{Number(order.makerAmount)}</td>
              <td>{Number(order.takerAmount)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Asks</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {asks.map((order, i) => (
            <tr key={i}>
              <td>{Number(order.takerAmount) / Number(order.makerAmount)}</td>
              <td>{Number(order.makerAmount)}</td>
              <td>{Number(order.takerAmount)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default OrderBook