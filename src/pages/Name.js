import { useState, useEffect } from 'react'
import cocktailsService from '../services/cocktailsService.js'
import CardGrid from '../components/CardGrid'
import { motion } from "framer-motion"
import Filters from '../components/Filters.js';

const Name = () => {
  const [ newName, setName] = useState("")
  const [ cocktails, setCocktails ] = useState(null)
  const [ cocktailsToShow, setCocktailsToShow ] = useState(cocktails)
  const [ currentFilter, setCurrentFilter ] =useState(null)
  useEffect( () => {
    setTimeout(()=>{

     }, 5000)
    cocktailsService
      .getByName("margarita")
      .then(drinks => {
        setCocktails(drinks)
        setCocktailsToShow(drinks)}
      , [])
      setName("")
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    cocktailsService
      .getByName(newName)
      .then(drinks => {
        setCocktails(drinks)
        setCocktailsToShow(drinks)}
      , [])

  }

  const handleFilter = (event, fullSearchKey) => {
    event.preventDefault()
    const filterText = event.target.value
    console.log(filterText)
    if (filterText == "Any") {
      setCocktailsToShow(cocktails)
    } else {
    setCocktailsToShow(
      cocktails.filter((cocktail) =>
        cocktail[fullSearchKey] === filterText
      )
    )
    }
  }
  const handleName = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  return(
    <motion.div
      className="flex flex-col h-fit min-h-screen px-4 bg-gradient-to-b from-slate-800 to-black "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      >
      <h2 className="text-center text-xl text-white p-5 ">
        Search for a cocktail by name</h2>
      <div className="flex self-center border-orange-200">
        <form onSubmit={handleSubmit}
        className="flex border border-cyan-500 rounded">
            <input type="text" name="name"
            onChange={handleName}
            value={newName} placeholder="Margarita"
            className="text-black p-1 bg-orange-200" />
          <input type="submit" value="Submit" onBlur={handleSubmit}
          className="bg-gradient-to-tr  from-fuchsia-500 to-cyan-400
          transition hover:ease-in hover:bg-gradient-to-br duration-300 text-xl" />
        </form>
      </div>
      <Filters handleFilter={handleFilter}/>
     <CardGrid cocktails={cocktailsToShow}/>

    </motion.div>
    )
};

export default Name;
