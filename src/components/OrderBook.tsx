

const OrderBookComponent = ({ orderBook  } : any) => {
  return (
    <>
      <h2>Bids</h2>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderBook?.bids?.records.map((record: any) => (
            <tr key={record?.order?.metaData?.orderHash}>
              <td>{record?.order?.takerAmount}</td>
              <td>{record?.order?.makerAmount}</td>
              <td>{record?.metaData?.remainingFillableTakerAmount}</td>
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
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderBook.asks.records.map((record: any) => (
            <tr key={record?.order?.metaData?.orderHash}>
              <td>{record?.order?.takerAmount}</td>
              <td>{record?.order?.makerAmount}</td>
              <td>{record?.metaData?.remainingFillableTakerAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};


export default OrderBookComponent