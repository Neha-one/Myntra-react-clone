import BagItemContainer from "../components/BagItemContainer";
import BagSummary from "../components/BagSummary";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Bag = () => {
  return (

      <main>
        <div className="bag-page">
        <div className="bag-items-container">
          <BagItemContainer/>
          </div>
        <div className="bag-summary">
          <BagSummary/>
          </div>

        </div>
      </main>

  )
}
export default Bag;