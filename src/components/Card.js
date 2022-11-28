import { motion } from "framer-motion"
const Card = ({cocktail, image}) => {

  return(
    <div className=""
    >
      <motion.div
        className="flex flex-col"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{ delay: 1 }}
      >
        <img
          alt="Cocktail"
          src={image}
          className="border border-cyan-300 rounded-sm"
        />
        <div className="p-2 flex-shrink">
          <p className="text-sm font-medium uppercase tracking-widest text-orange-200">
            {cocktail.strIBA}
          </p>

          <p className="text-2xl font-bold text-white">{cocktail.strDrink}</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Card
