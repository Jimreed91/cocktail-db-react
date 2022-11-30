import { useState, useEffect } from 'react'
import cocktailsService from '../services/cocktailsService.js'
import CardGrid from '../components/CardGrid'
import { motion } from "framer-motion"
const Ingredient = () => {
  const [ newIngredient, setIngredient] = useState("")
  const [ cocktails, setCocktails ] = useState(null)

  // useEffect( () => {
  //   setTimeout(()=>{

  //    }, 5000)

  //   cocktailsService
  //     .getByIngredient(newIngredient)
  //     .then(drinks => setCocktails(drinks), [])
  //     setIngredient("")
  // }, [])
  const handleSubmit = event => {
    event.preventDefault()
    cocktailsService
      .getByIngredient(newIngredient)
      .then(drinks => console.log(drinks))
      .then(drinks => setCocktails(drinks))
      setIngredient("")

  }
  const handleIngredient = event => {
    console.log(event.target.value)
    setIngredient(event.target.value)
  }
  return(
    <motion.div
      className="flex flex-col h-fit min-h-screen px-4 bg-gradient-to-b from-slate-800 to-black "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      >
      <h2 className="text-center text-xl text-white p-5 ">
        Search for a cocktail by Ingredient</h2>
      <div className="self-center border-orange-200">
        <form onSubmit={handleSubmit}
        className="flex flex-col border border-cyan-500 rounded">
            <input type="text" Ingredient="Ingredient"
            onChange={handleIngredient}
            value={newIngredient} placeholder="Margarita"
            className="text-black p-1 bg-orange-200" />
          <input type="submit" value="Submit" onBlur={handleSubmit}
          className="bg-gradient-to-tr  from-fuchsia-500 to-cyan-400
          transition hover:ease-in hover:bg-gradient-to-br duration-300 text-xl" />
        </form>
      </div>
     <CardGrid cocktails={cocktails}/>

    </motion.div>
    )
};

export default Ingredient;
