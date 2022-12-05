import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react';
import { SlControlStart } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer'

  const ContactCard = ({logo, text, ccStyle, link}) => {

    const contactVariants = {
      hidden: {
        scale: 0,
        opacity:0,
              },
      visible: {
        scale: 1,
        opacity:1,
      },
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.7
      }
    }
    const logoAnimate={
      hidden: {
        scale: 0,
        opacity:0,
        x: 200
              },
      visible: {
        scale: 1,
        opacity:1,
        x: 0
      }
    }
    const textAnimate={
      hidden: {
        scale: 0,
        opacity:0,
        x: -200
              },
      visible: {
        scale: 1,
        opacity:1,
        x: 0
      }
    }

    return(
    <motion.a href={link}
      initial={"hidden"}
      whileInView={"visible"}
      transition={{staggerChildren: 0.2}}
      viewport={{once: true, amount: 1}}
      className={ccStyle}>
      <motion.div
            variants={logoAnimate}>{logo}</motion.div>
      <motion.p
            variants={textAnimate}>{text}</motion.p>
    </motion.a>
    )
  }

  export default ContactCard
