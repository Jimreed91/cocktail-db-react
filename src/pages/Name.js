import { useState, useEffect } from 'react'
import cocktailsService from '../services/cocktailsService.js'
import CardGrid from '../components/CardGrid'
import { motion } from "framer-motion"
const Name = () => {
  const [ newName, setName] = useState("")
  const [ cocktails, setCocktails ] = useState(null)

  useEffect( () => {
    setTimeout(()=>{

     }, 5000)
    cocktailsService
      .getByName("margarita")
      .then(drinks => setCocktails(drinks), [])
  }, [])
  const handleSubmit = event => {
    event.preventDefault()
    cocktailsService
      .getByName(newName)
      .then(drinks => setCocktails(drinks))
  }
  const handleName = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  return(
    <motion.div
      className="flex flex-col h-fit min-h-screen px-4 bg-slate-800 "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}

      >
      <h2 className="text-center text-xl text-white p-5">
        Search for a cocktail by name</h2>
      <div className="self-center border-orange-200">
        <form onSubmit={handleSubmit}
        className="flex flex-col border border-cyan-500 rounded">
            <input type="text" name="name"
            onChange={handleName}
            value={newName} placeholder="Margarita"
            className="text-black p-1 bg-orange-200" />
          <input type="submit" value="Submit"
          className="bg-gradient-to-tr  from-fuchsia-500 to-cyan-400
          transition hover:ease-in hover:bg-gradient-to-br duration-300 " />
        </form>
      </div>
     <CardGrid cocktails={cocktails}/>

    </motion.div>
    )
};

export default Name;
