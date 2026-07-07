import { useSelector } from "react-redux";

const BagSummary = ({ finalbagItems }) => {
  const bagitemId = useSelector((store) => store.bag);
  // useDispatch()

  let totalItem = bagitemId.length;
  let Convenience_Fee = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  finalbagItems.forEach((bagitem) => {
    totalMRP += bagitem.original_price;
    totalDiscount += bagitem.original_price - bagitem.current_price;

  });
  let finalPayment = totalMRP + Convenience_Fee - totalDiscount;

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS  {totalItem} Items</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹{Convenience_Fee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button></>
  )
}
export default BagSummary;