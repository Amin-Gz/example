import { GetBooks } from "../data/data";

import { NavLink, Outlet } from "react-router-dom";
const Books = () => {
  const books = GetBooks();
  return (
    <>
      <nav className=" flex shadow  ">
        <div className=" p-5 border-l-2 border-rose-500">
          <input
            type="text"
            id="first_name"
            class=" w-72 m-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="جست و جوی کتاب"
            required
          />
          {books.map((books) => (
            <NavLink
              className={ ({isActive})=>(isActive?"text-rose-500":"") }
              to={`books/${books.number}`}
              key={books.number}
            >
              {({isActive})=>(
                <div className={isActive?"bg-rose-500 text-black text-xl py-5 my-5  rounded-full":"text-xl py-5 my-5 shadow-xl rounded-full"} >{books.name}</div>
              )}

            </NavLink>
          ))}
        </div>
        <div className=" grow  shadow-xl rounded-lg p-6 m-10">
          {" "}
          <Outlet />
        </div>
      </nav>
    </>
  );
};
export default Books;
