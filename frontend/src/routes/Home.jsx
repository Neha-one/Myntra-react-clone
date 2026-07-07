import { useSelector } from "react-redux";
// import { ItemActions } from "../store/item";
import HomeItem from "../components/HomeItem";

const Home = () => {

  const items = useSelector((store) => store.item)
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main >
  )
}
export default Home;