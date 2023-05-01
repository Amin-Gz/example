import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className=" font-extrabold text-4xl mb-10">این یک متن است</h1>
      <nav className="border-b-2 border-rose-500 pb-5">
        <Link to="/about " className="m-4 text-xl active:border active: border-rose-500 focus:border  ">
          درباره ما
        </Link>
        <Link to="/books" className="m-4 text-xl">
          کتاب ها
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
