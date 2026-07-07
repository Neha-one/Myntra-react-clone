import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {

  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handlebagAdd = () => {
    dispatch(bagSliceActions.addtoBag(item.id));
  }
  const removefromBag = () => {
    dispatch(bagSliceActions.removefromBag(item.id))

  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars}  | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ?
        <button type="button" className="btn btn-add-bag btn-danger d-flex align-items-center justify-content-center gap-2" onClick={removefromBag}><MdDelete />Remove</button>
        :
        <button type="button" className="btn btn-add-bag btn-success d-flex align-items-center justify-content-center gap-2" onClick={handlebagAdd}> <IoIosAddCircleOutline />Add to Bag</button>
      }
    </div>
  )
}
export default HomeItem;