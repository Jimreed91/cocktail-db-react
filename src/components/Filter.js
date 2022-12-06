import { useState, useEffect } from "react"
import cocktailsService from "../services/cocktailsService"

const Filter = ({type, id, searchKey, handleFilter}) => {

  const [filterList, setFilterList] = useState([])
  const [selected, setSelected] = useState("Any")
  useEffect(() => {
    cocktailsService.getList(searchKey)
    .then(list => setFilterList(list))
  }, [searchKey])

  //converting single letter key for api filter list call to the cocktail object
  //full length key for filtering
  const fullSearchKey =
    (searchKey === "c") ? "strCategory" :
    (searchKey === "g") ? "strGlass" : "strAlcoholic";



  const handleChange = event => {
    event.preventDefault()
    handleFilter(event, fullSearchKey)
    setSelected(event.target.value)
  }

  return(
    <div className="flex flex-col">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{type}</label>
      <select id={id}
        value={selected}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      {filterList.length > 0 &&
        filterList.map((item) => {
          return <option  key={item} value={item}>{item}</option>
      })
      }
      </select>
    </div>
  )
}

export default Filter
