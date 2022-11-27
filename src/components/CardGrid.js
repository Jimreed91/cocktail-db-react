import Card from './Card'
import { Link } from "react-router-dom"
const CardGrid = ({cocktails}) => {
  if(cocktails !== null) {return(
    <div className=" m-4 lg:m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-12 gap-4 md:gap-6">
      {cocktails.map(cocktail =>
      <Link
        to={`/cocktail/${cocktail.idDrink}`}
        state={cocktail}
        key={cocktail.idDrink}
       >
        <Card  cocktail={cocktail} image={`${cocktail.strDrinkThumb}/preview`}/>
      </Link>
        )}
    </div>
  )
  }
}

export default CardGrid
