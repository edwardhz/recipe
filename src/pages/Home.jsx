import Vegetarian from "../components/Vegetarian";
import MostPopular from "../components/MostPopular";
import Category from "../components/Category";
import Search from "../components/Search";
const Home = () => {
  return (
    <div>
        <Search/>
        <Category/>
        <Vegetarian/>
        <MostPopular/>
    </div>
  )
}

export default Home