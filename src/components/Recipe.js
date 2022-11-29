
const Recipe = ({cocktail}) => {

  return(
    <div className="flex flex-col text-center">
      <h1 className="text-cyan-200 text-3xl">Instructions</h1>
      <ul>
            <li className="text-white">Glass: {cocktail.strGlass}</li>
          </ul>
      <p className="text-white text-xl">{cocktail.strInstructions}</p>
    </div>
  )

}

export default Recipe
