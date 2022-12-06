
const IngredientList = ({cocktail}) => {

  // Removes null values from cocktail object
  const nullFilter =
    Object.keys(cocktail)
      .filter((k) => cocktail[k] != null)
      .reduce((a, k) => ({ ...a, [k]: cocktail[k] }), {});

  //Extracts ingredients and measures from null filtered object
  const ingredients =
    Object.keys(nullFilter)
      .filter((k) => k.includes('Ingredient'))
      .reduce((a, k) => ({ ...a, [k]: cocktail[k] }), {});

  // Maps ingredients and methods together into an array
   const ingredientPairs =
    Object.keys(ingredients)
      .map((ik, index) => {
        return(
          {ingredient: cocktail[ik],
          measure: cocktail[`strMeasure${index + 1}`]}
        )
      })

  return(

    <table className=" m-6 table-auto text-white text-center bg-slate-900 rounded  border border-fuchsia-300">
  <thead className="m-6">
    <tr>
      <th className="sm:text-2xl p-1">Ingredient</th>
      <th className="sm:text-2xl p-1 border border-fuchsia-300">Measure</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {ingredientPairs.map((ip, i) => {
      return(
        <tr className="sm:text-2xl" key={i}>
          <td className="sm:p-6 border border-orange-300 rounded-lg">{ip.ingredient}</td>
          <td className="sm:p-6 border border-orange-300 rounded-lg">{ip.measure}</td>
          <td className="" ><img className="h-18 ml-auto mr-auto" alt="ingredient" src={`https://www.thecocktaildb.com/images/ingredients/${ip.ingredient}-Small.png`}/></td>

      </tr>
      )

    })}

  </tbody>
</table>
  )
}

export default IngredientList
