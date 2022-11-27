
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <div className="bg-slate-800 py-4">
          <h1 className="sm:text-center font-mono sm:text-8xl text-xl font-thin text-transparent
                        bg-clip-text bg-gradient-to-r from-fuchsia-300 to-orange-200">
            Cocktails-db</h1>
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

      <Outlet />

    </>
  )
};

export default Layout
