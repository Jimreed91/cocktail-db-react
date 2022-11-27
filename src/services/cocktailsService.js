import axios from 'axios'

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const getByName = (newName) => {
  const request = axios.get(`${baseUrl}${newName}`)
  return request.then(response => response.data.drinks)

}

export default  { getByName }
