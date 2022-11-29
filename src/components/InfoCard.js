import {motion} from 'framer-motion'
import {useState} from 'react'

const InfoCard = ({title, p1, p2}) => {
  const [isOpen, setIsOpen] = useState(false)
  return(
    <motion.div
    layout
    transition={{layout: {duration: 2, type: "spring"}}}
    onClick={() => (setIsOpen(!isOpen))}
    className="text-white px-6 py-5 mt-12 border border-fuchsia-300 rounded bg-gray-900 hover:ring ring-fuchsia-300" >
    <motion.h2 layout="position" className=" text-xl ">{title} </motion.h2>
    {isOpen && (
    <motion.div className=" mt-2" initial={{opacity: 0}} animate={{opacity: 1}} >
      <div className="max-w-md">{p1}</div>
      <div>{p2}</div>
    </motion.div>
    )}
  </motion.div>
  )
}

export default InfoCard
