import { useHistory, useParams, useLocation } from 'react-router-dom'
import Card from '../components/Card'
import { motion } from "framer-motion"
import IngredientList from '../components/IngredientList'

const Cocktail = () => {
const location = useLocation()
const { id } = useParams()
const cocktail = location.state
console.log(cocktail)

  return(
      <motion.div
      className="grid p-5 sm:grid-cols-3 grid-cols-1 h-fit min-h-screen bg-slate-800 "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
        <div className="sm:col-span-1 col-span-3 ">
          <Card cocktail={cocktail} image={cocktail.strDrinkThumb}/>
        </div>
        <div className=" sm:col-span-2 col-span-3 px-12" >
          <h2 className="text-3xl text-white">Ingredients</h2>
            <IngredientList cocktail={cocktail}/>
        </div>
      </motion.div>
    )
}

export default Cocktail
