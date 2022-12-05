import { motion } from 'framer-motion'
import InfoCard from '../components/InfoCard'
const Home = () => {

  return (
    <motion.div
      className="flex flex-col justify-between items-center bg-gradient-to-b from-slate-800 to-black "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl my-6 text-fuchsia-400 align-start">{'(* ˘⌣˘)◞🍹♥🍸ヽ(•‿•  )'}
      </motion.p>

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
      <InfoCard
        title={"Getting Started 🍸"}
        p1={<p>Getting started is simple, just choose "By Name" from the navbar at the top to
               search for a cocktail by its name.
            </p>}
        p2={<p className="mt-2">Alternatively take a look at the "Random" tab if you dont know what you're looking for
            </p>}
        />
        <InfoCard
        title={"Cocktail-db API 🥂"}
        p1={<p>If you're curious about the api itself, you can find it here:
            </p>}
        p2={ <a href={"https://www.thecocktaildb.com/api.php"}>
          <p className="text-center text-6xl mt-3">🍹</p>
          </a>}
        />


    </motion.div>
  );
};

export default Home;
// 🇬🇧🇯🇵🍹🥂🍻🍺🍸
