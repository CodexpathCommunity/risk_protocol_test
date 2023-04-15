

const OrderBookComponent = ({ bids, asks  } : any) => {
  return (
    <div>
      <h2>Bids</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="">
          {bids?.records.map((record: any) => (
            <tr key={record?.order?.metaData?.orderHash}>
              <td>{record?.order?.takerAmount}</td>
              <td>{record?.order?.makerAmount}</td>
              <td>{record?.metaData?.remainingFillableTakerAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Asks</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {asks.records.map((record: any) => (
            <tr key={record?.order?.metaData?.orderHash}>
              <td>{record?.order?.takerAmount}</td>
              <td>{record?.order?.makerAmount}</td>
              <td>{record?.metaData?.remainingFillableTakerAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default OrderBookComponent