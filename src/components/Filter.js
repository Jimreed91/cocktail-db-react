import { useState, useEffect } from "react"
import cocktailsService from "../services/cocktailsService"

const Filter = ({type, id, searchKey}) => {

  const [filterList, setFilterList] = useState()

  useEffect(() => {
    cocktailsService.getList(searchKey)
    .then(list => setFilterList(list))
  }, [searchKey])


  return(
    <div className="flex flex-col">
      <label for={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{type}</label>
      <select id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Any</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
        {console.log(filterList)}
      </select>
    </div>
  )
}

export default Filter
