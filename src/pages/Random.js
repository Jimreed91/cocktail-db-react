import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import IngredientList from '../components/IngredientList'
import Recipe from '../components/Recipe'
import cocktailsService from '../services/cocktailsService'
const Random = () => {

  const [cocktail, setCocktail] = useState()
  useEffect(() => {
    cocktailsService
    .getRandom()
    .then(response => setCocktail(response))
  },[]
  )
  const newRand = () => {
    cocktailsService
    .getRandom()
    .then(response => setCocktail(response))
  }
    if(cocktail) {
      return(
      <motion.div
        className="flex flex-wrap content-start justify-evenly w-fillmin-h-screen pt-5 bg-gradient-to-b from-slate-800 to-black "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <div className="flex-auto justify-self-start sm:max-w-2xl border-fuchsia-300 sm:p-5 rounded-lg basis-2/3 sm:basis-1/3 grow-0">
        <button className="bg-gradient-to-tr  from-fuchsia-500 to-cyan-400
                           transition hover:ease-in hover:bg-gradient-to-br duration-300 text-xl text-white"
                onClick={newRand}
          >Random Cocktail</button>
          <h2 className="text-4xl text-white mb-2">{cocktail.strDrink}</h2>
          <img
            alt="Cocktail"
            src={cocktail.strDrinkThumb}
            className="border border-cyan-300 rounded-sm"
          />
          <div className="p-2 flex-shrink">
            <p className="text-sm font-medium uppercase tracking-widest text-orange-200">
              {cocktail.strIBA}
            </p>
            <p className="text-white">{cocktail.strCategory}</p>
          </div>

        </div>
        <div className="flex flex-col sm:basis-1/3 grow-0 flex-auto self-center
        " >
          <h2 className="text-2xl text-white text-center text-cyan-200">Ingredients</h2>
            <IngredientList cocktail={cocktail}/>
        </div>
        <div className="sm:w-3/4">
          <Recipe cocktail={cocktail}/>
        </div>
      </motion.div>
    )
      }
    return(
      <motion.div
        className="flex flex-wrap content-start justify-evenly w-fillmin-h-screen pt-5 bg-gradient-to-b from-slate-800 to-black "
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >
        <button className="bg-gradient-to-tr  from-fuchsia-500 to-cyan-400
                           transition hover:ease-in hover:bg-gradient-to-br duration-300 text-xl"
                onClick={newRand}
          >New Cocktail</button>
      </motion.div>
    )
    }


export default Random;
