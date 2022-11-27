
const IngredientList = ({cocktail}) => {
  const nullFilter =
    Object.keys(cocktail)
    .filter((k) => cocktail[k] != null)
    .reduce((a, k) => ({ ...a, [k]: cocktail[k] }), {});

  return(

    <table class="table-auto text-white">
  <thead>
  {console.log(nullFilter)}
    <tr>
      <th>Ingredient</th>
      <th>Measure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>
  )
}

export default IngredientList
