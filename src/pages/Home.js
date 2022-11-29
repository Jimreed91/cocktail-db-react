import { motion } from 'framer-motion'
import { useState } from 'react'
import InfoCard from '../components/InfoCard'
const Home = () => {

  return (
    <motion.div
      className="flex flex-col justify-start items-center h-full bg-gradient-to-b from-slate-800 to-black "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
     <InfoCard
        title={"Welcome🍹"}
        p1={<p>I built this website to practice with
          <span className="text-cyan-300 font-bold"> React.js </span>
          and
          <span className="text-orange-300 font-bold"> Tailwind</span>,
          the data is all pulled from the cocktail database api.</p>}
        p2={ <p>Hope you
          <span className="text-fuchsia-300 font-bold"> enjoy! </span>
          it was fun to build {":)"}
        </p>}
      />

      <InfoCard
        title={"About me 🍻"}
        p1={<p>I'm James, a fullstack developer from the UK 🇬🇧 living in 🇯🇵 Japan.
               I've dabbled with code for a few years and now after some more
               intensive learning I'm ready for a change of career.
            </p>}
        p2={<p className="mt-3">Find my details at the bottom if you would like
              to get in touch!

            </p>}
      />
    </motion.div>
  );
};

export default Home;
// 🇬🇧🇯🇵🍹🥂🍻🍺🍸
