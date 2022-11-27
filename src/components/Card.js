
const Card = ({cocktail}) => {

  return(
    <a href="#" className="border border-fuchsia-300 p-5 rounded-lg bg-slate-900">


    <div className="flex flex-col">
    <img
      alt="Cocktail"
      src={`${cocktail.strDrinkThumb}/preview`}
      className="border border-cyan-300 rounded-sm"
    />
      <div className="p-2">
        <p className="text-sm font-medium uppercase tracking-widest text-orange-200">
          {cocktail.strIBA}
        </p>

        <p className="text-2xl font-bold text-white">{cocktail.strDrink}</p>
      </div>
    </div>
  </a>

  )
}

export default Card
