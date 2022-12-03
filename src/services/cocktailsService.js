import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'
const random = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

const getByName = (newName) => {
  const request = axios.get(`${baseUrl}search.php?s=${newName}`)
  return request.then(response => response.data.drinks)

}

const getByIngredient = (newIngredient) => {
  const request = axios.get(`${baseUrl}filter.php?i=${newIngredient}`)

  return request.then(response => response.data.drinks)
}

const getRandom = () => {
  const request = axios.get(random)
  return request.then(response => response.data.drinks[0])
}

export default  { getByName, getByIngredient, getRandom}
