import { useSelector } from "react-redux";
import BagItemContainer from "../components/BagItemContainer";
import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  const bagitems = useSelector((store) => store.bag)
  const items = useSelector((store) => store.item)

  const finalbagItems = items.filter(item => {
    const itemIndex = bagitems.indexOf(item.id)
    return itemIndex >= 0;
  })

  return (

    <main>
      <div className="bag-page bagitem">
        <div className="bag-items-container">
          {finalbagItems.map((item) => (
            <BagItemContainer item={item} />
          ))}
        </div>
        <div className="bag-summary">
          
          < BagSummary finalbagItems={finalbagItems} />
        </div>

      </div>
    </main>

  )
}
export default Bag;