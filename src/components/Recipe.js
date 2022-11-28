
const Recipe = ({cocktail}) => {

  return(
    <div className="flex flex-col text-center">
      <h1 className="text-white text-3xl">Instructions</h1>
      <p className="text-white text-xl">{cocktail.strInstructions}</p>
    </div>
  )

}

export default Recipe
