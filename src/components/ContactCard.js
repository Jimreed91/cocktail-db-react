import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react';
import { SlControlStart } from 'react-icons/sl';
import { useInView } from 'react-intersection-observer'

  const ContactCard = ({logo, text, ccStyle, link}) => {
    const { ref, inView } = useInView();
    const controls = useAnimationControls()

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
      if (!inView) {
        controls.start('hidden')
      }
    }, [controls, inView])

    const contactVariants = {
      hidden: {scale: 0,
               opacity:0,
               y: -50
              },
      visible: {
        scale: 1,
        opacity:1,
        y: 10


      }
    }

    return(
    <motion.a href={link}
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.5,
        delay: 0.3,
        // ease: "ease-in"
      }}
      variants={contactVariants}
      className={ccStyle}>
      {logo}
      <p>{text}</p>
    </motion.a>
    )
  }

  export default ContactCard
