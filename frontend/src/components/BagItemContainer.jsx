import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
const BagItemContainer = () => {
  // const item = useSelector((store) => store.bag);
  // // console.log(item);

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(bagSliceActions.addbag(item[0]))
  // }, [dispatch,item])

  const item = {
    "id": "004",
    "image": "images/4.jpg",
    "company": "ADIDAS",
    "item_name": "Indian Cricket ODI Jersey",
    "original_price": 999,
    "current_price": 999,
    "discount_percentage": 0,
    "return_period": 14,
    "delivery_date": "10 Oct 2023",
    "rating": { "stars": 5, "count": 10 }
  }
  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span> return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={() => console.log("item removed!")}>X</div>
    </div>
  )
}
export default BagItemContainer;