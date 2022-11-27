import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      className="flex flex-col h-screen bg-slate-800 "
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="text-white self-center justify-self-center " >
        <h2 className="text-center text-xl p-5">Welcome</h2>
        <p>This website uses  React.js and Tailwind to access the the cocktail database api.</p>

      </div>
    </motion.div>
  );
};

export default Home;
