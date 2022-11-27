import { useState } from 'react'
import axios from 'axios'

const Name = () => {
  const [ newName, setName] = useState("")
  const [ cocktails, setCocktails ] = useState([])
  const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

  const handleSubmit = event => {
    event.preventDefault()
    const request = axios.get(`${baseUrl}${newName}`)
    return request.then(response => setCocktails(response.data.drinks))
  }
  const handleName = event => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  return(
    <div className="flex flex-col h-screen bg-slate-800 ">
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
    </div>
    )
};

export default Name;
