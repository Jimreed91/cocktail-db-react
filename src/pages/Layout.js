import { LayoutGroup } from 'framer-motion'
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <>
      <nav id="nav">
        <div className="bg-gradient-to-t from-slate-800 to-black py-4">
          <h1 className=" font-mono sm:text-4xl text-xl font-thin text-transparent
                        bg-clip-text bg-gradient-to-r from-fuchsia-300 to-orange-400">
            🍹 Cocktail Hunter </h1>
        </div>
          <div className="flex justify-around flex-wrap font-bold  sm:text-2xl bg-orange-200">

            <Link
              to="/"
              className="flex-auto bg-orange-200 py-3 ease-in duration-300
               text-center hover:bg-orange-300 bg-gradient-to-r  from-cyan-300"
              >Home
            </Link>
            <Link
              to="/name"
              className="flex-auto  bg-gradient-to-l  from-fuchsia-300 py-3 hover:bg-orange-300
              ease-in duration-300 text-center"
              >By Name
            </Link>
            <Link
              to="/ingredient"
              className="flex-auto  bg-gradient-to-r from-fuchsia-300 py-3 hover:bg-orange-300
              ease-in duration-300 text-center"
              >Ingredient
            </Link>
            <Link
              to="/contact"
              className="flex-auto  bg-gradient-to-l  from-green-200 py-3 hover:bg-orange-300
              ease-in duration-300 text-center"
              >Contact
            </Link>

        </div>
      </nav>
    <LayoutGroup>
      <Outlet />
    </LayoutGroup>
      <Footer />
    </>
  )
};

export default Layout
