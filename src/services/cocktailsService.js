import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
//Retrieves cocktails by name
const getByName = (newName) => {
  const request = axios.get(`${baseUrl}search.php?s=${newName}`)
  return request.then(response => response.data.drinks)

}

const getByIngredient = (newIngredient) => {
  const request = axios.get(`${baseUrl}filter.php?i=${newIngredient}`)

  return request.then(response => response.data.drinks)
}
//Retrieves a random cocktail
const getRandom = () => {
  const request = axios.get(`${baseUrl}random.php`)
  return request.then(response => response.data.drinks[0])
}

//Retrieves lists of strings to filter cocktails by
const getList = (key) => {
  const request = axios.get(`${baseUrl}list.php?${key}=list`)
  console.log(`${baseUrl}list.php?${key}=list`)
  return request.then(response => response)
}

export default  { getByName, getByIngredient, getRandom ,getList}
