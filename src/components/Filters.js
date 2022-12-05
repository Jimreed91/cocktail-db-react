import Filter from "./Filter"
const Filters = () => {

  return(
    <div className="flex">
      <Filter type={"Glass"} searchKey={"g"}/>
      <Filter type={"Alcoholic?"} searchKey={"a"}/>
      <Filter type={"Category"} searchKey={"c"}/>
    </div>
  )
}

export default Filters
