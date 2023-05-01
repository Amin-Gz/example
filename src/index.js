import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";

import About from "./Component/About";
import Books from "./Component/Books";
import Book from "./Component/Book";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route index  element={<main><p>کتاب مورد نظر خود را وارد نمایید</p></main>}/>
            <Route path="books/:bookId" element={<Book />} />
          </Route>
        </Route>
        <Route path="*" element={
          <main><h2 className="text-center text-xl"> صفحه یافت نشد</h2></main>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
