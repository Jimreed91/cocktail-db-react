import { motion } from 'framer-motion'
import { GiHobbitDoor } from 'react-icons/gi'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { RiMediumLine } from 'react-icons/ri'
const Footer = () => {

  const footerFloat={
    hidden:{opacity: 0, y: 50},
    visible:{ opacity: 1, y:0},
    transition:{ duration: 0.1}
  }
  return(
    <motion.div className="flex flex-col items-center justify-around h-96 w-fill bg-gradient-to-b from-black to-slate-800 text-white"
      layout
      variations={footerFloat}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{once: false, amount: 0.1}}
      transition={{staggerChildren: 0.5}}
      >
      <motion.p variants={footerFloat}>

          </motion.p>
      <motion.ul
         variants={footerFloat}
         transition={{staggerChildren:0.1}}
        className="flex items-center text-6xl font-thin text-orange-300">
        <motion.li variants={footerFloat} className="p-2" whileHover={{ scale: 1.75 }}><a href="https://www.jimreed91.me/"><GiHobbitDoor className="text-5xl" /></a></motion.li>
        <motion.li variants={footerFloat} className="p-2" whileHover={{ scale: 1.75 }}><a href="https://github.com/Jimreed91"><SlSocialGithub className="text-5xl" /></a></motion.li>
        <motion.li variants={footerFloat} className="p-2" whileHover={{ scale: 1.75 }}><a href="https://www.linkedin.com/in/jamesreed91/"><SlSocialLinkedin className="text-5xl" /></a></motion.li>
        <motion.li variants={footerFloat} className="p-2" whileHover={{ scale: 1.75 }}><a href="https://medium.com/@jamesreed3050/setting-up-polymorphic-likes-in-rails-7d8be2e01c12"><RiMediumLine className="text-5xl" /></a></motion.li>
      </motion.ul>

      <motion.p
        variants={footerFloat}
        className="text-xl text-emerald-200">{'jamesreed3050@gmail.com'}
      </motion.p>
    </motion.div>
  )
}

export default Footer
