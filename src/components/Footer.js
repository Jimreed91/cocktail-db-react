import { motion, useScroll } from 'framer-motion'
import { GiHobbitDoor } from 'react-icons/gi'
import { RxDot } from 'react-icons/rx'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { RiMediumLine } from 'react-icons/ri'
const Footer = () => {

  return(
    <motion.div className="flex flex-col items-center justify-around h-96 w-fill bg-gradient-to-b from-black to-slate-800 text-white"
      layout
      >
      <motion.p initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}>

          </motion.p>
      <motion.ul
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}

        className="flex items-center text-6xl font-thin text-orange-200">
        <motion.li className="p-2" whileHover={{ scale: 1.75 }}><a href="https://www.jimreed91.me/"><GiHobbitDoor className="text-5xl" /></a></motion.li>
        <motion.li className="p-2" whileHover={{ scale: 1.75 }}><a href="https://github.com/Jimreed91"><SlSocialGithub className="text-5xl" /></a></motion.li>
        <motion.li className="p-2" whileHover={{ scale: 1.75 }}><a href="https://www.linkedin.com/in/jamesreed91/"><SlSocialLinkedin className="text-5xl" /></a></motion.li>
        <motion.li className="p-2" whileHover={{ scale: 1.75 }}><a href="https://medium.com/@jamesreed3050/setting-up-polymorphic-likes-in-rails-7d8be2e01c12"><RiMediumLine className="text-5xl" /></a></motion.li>
      </motion.ul>
      {/* <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl text-fuchsia-400">{'(* ˘⌣˘)◞🍹♥🍸ヽ(•‿•  )'}
      </motion.p> */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-xl text-emerald-100">{'jamesreed3050@gmail.com'}
      </motion.p>
    </motion.div>
  )
}

export default Footer
