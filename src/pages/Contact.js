import { motion, useScroll } from 'framer-motion'
import { GiHobbitDoor } from 'react-icons/gi'
import { RxDot } from 'react-icons/rx'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { RiMediumLine } from 'react-icons/ri'
import { TbArrowBigDown } from 'react-icons/tb'
const Contact = () => {
  return(
    <div className="flex flex-col content-evenly justify-evenly w-full h-auto pt-5 bg-gradient-to-b from-slate-800 to-black ">
      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-orange-300 mb-96  mt-96"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 1, repeat: Infinity, repeatType: "mirror" }}>
          <TbArrowBigDown/>
      </motion.div>
      <motion.a href="https://github.com/Jimreed91"

      >
        <div className="flex flex-col items-center sm:text-9xl text-7xl text-cyan-300">
          <SlSocialLinkedin />
          <p>LinkedIn</p>
        </div>

      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-orange-300 mb-96  mt-96"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 1, repeat: Infinity, repeatType: "mirror" }}>
          <TbArrowBigDown/>
      </motion.div>

        <div className="flex flex-col items-center sm:text-9xl text-7xl text-orange-300">
          <SlSocialGithub />
          <p>GitHub</p>
        </div>

      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-orange-300 mb-96  mt-96"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 1, repeat: Infinity, repeatType: "mirror" }}>
          <TbArrowBigDown/>
      </motion.div>

        <div className="flex flex-col items-center sm:text-9xl text-7xl text-fuchsia-300 mb-72">
          <GiHobbitDoor />
          <p><span className='text-xl'>*old*</span>Portfolio</p>
        </div>


      </motion.a>
    </div>
  )
};

export default Contact;
