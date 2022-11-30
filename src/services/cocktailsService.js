import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/'

const getByName = (newName) => {
  const request = axios.get(`${baseUrl}search.php?s=${newName}`)
  return request.then(response => response.data.drinks)

}

const getByIngredient = (newIngredient) => {
  const request = axios.get(`${baseUrl}filter.php?i=${newIngredient}`)

  return request.then(response => response.data.drinks)
}

export default  { getByName, getByIngredient}
