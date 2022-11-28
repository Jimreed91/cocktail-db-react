import { useHistory, useParams, useLocation } from 'react-router-dom'
import Card from '../components/Card'
import { motion } from "framer-motion"
import IngredientList from '../components/IngredientList'
import Recipe from '../components/Recipe'
const Cocktail = () => {
const location = useLocation()
const { id } = useParams()
const cocktail = location.state
console.log(cocktail)

  return(
      <motion.div
        className="flex flex-wrap content-start justify-evenly min-h-screen pt-5 bg-slate-800 "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >

        <div className="flex-auto justify-self-start max-w-sm sm:max-w-2xl border-fuchsia-300 sm:p-5 rounded-lg">
          <Card className=""cocktail={cocktail} image={cocktail.strDrinkThumb}/>
          <Recipe cocktail={cocktail}/>
        </div>
        <div className="flex flex-col flex-initial
        " >
          <h2 className="text-3xl text-white text-center">Ingredients</h2>
            <IngredientList cocktail={cocktail}/>
        </div>
        <div className="">

        </div>
      </motion.div>
    )
}

export default Cocktail
