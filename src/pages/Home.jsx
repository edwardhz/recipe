import Vegetarian from "../components/Vegetarian";
import MostPopular from "../components/MostPopular";
import Header from 'containers/Header'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <div>
        <Header/>
      <motion.div
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration: 0.5}}
      >
        <Vegetarian/>
        <MostPopular/>
      </motion.div>
    </div>
  )
}

export default Home