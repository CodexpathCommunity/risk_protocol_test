import { useEffect, useState } from "react";
import { io } from "socket.io-client";
// const socket = io('wss://api.0x.org/orderbook/v1');
const socket = io('wss://api.0x.org/sra/v3');


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

 socket.on('connect', () => {
  console.log('Connected to 0x Orderbook API');
})

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