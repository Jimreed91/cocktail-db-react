import { motion, useScroll } from 'framer-motion'
import { GiHobbitDoor } from 'react-icons/gi'
import { RxDot } from 'react-icons/rx'
import { SlSocialGithub, SlSocialLinkedin } from 'react-icons/sl'
import { RiMediumLine } from 'react-icons/ri'
import { TbArrowBigDown } from 'react-icons/tb'

import ContactCard from '../components/ContactCard'
const Contact = () => {

  return(
    <div className="flex flex-col content-evenly justify-evenly w-full h-auto pt-5 bg-gradient-to-b from-slate-800 to-black ">
      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-orange-300 mb-36  mt-96"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 1, repeat: Infinity, repeatType: "mirror" }}>
          <TbArrowBigDown/>
      </motion.div>

        <ContactCard
          logo={<SlSocialLinkedin />}
          text={"LinkedIn"}
          ccStyle={"flex flex-col items-center sm:text-9xl text-7xl text-cyan-300"}
          link={"https://www.linkedin.com/in/jamesreed91/"}
        />

      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-fuchsia-300 mb-36  mt-36"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 2, repeat: Infinity, repeatType: "yo-yo" }}>
          <TbArrowBigDown/>
      </motion.div>

        <ContactCard
          logo={<SlSocialGithub />}
          text={"GitHub"}
          ccStyle={"flex flex-col items-center sm:text-9xl text-7xl text-orange-300"}
          link={"https://github.com/Jimreed91"}
        />

      <motion.div className="flex flex-col items-center sm:text-9xl text-7xl text-cyan-300 mb-36  mt-36"
        initial={{y: 20}}
        animate={{y: -20}}
        transition={{duration: 1, repeat: Infinity, repeatType: "mirror" }}>
          <TbArrowBigDown/>
      </motion.div>

      <ContactCard
          logo={<GiHobbitDoor />}
          text={<span><span className='text-xl'>*old*</span>Portfolio</span>}
          ccStyle={"flex flex-col items-center sm:text-9xl text-7xl text-fuchsia-300 mb-36"}
          link={"https://www.jimreed91.me"}
        />

    </div>
  )
};

export default Contact;
