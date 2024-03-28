import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import React, { useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const listedBooksToWishList = React.createContext();

const Root = () => {
  const [bookDetails, setBookDetails] = useState();
  const [listBooks, setListBooks] = useState([]);
  const [toastContainer, setToastContainer] = useState([]);

  // for searching book by rating or bookname
  const [sortBy, setSortBy] = useState();

  // load data
  const booksList = useLoaderData();

  return (
    <div>
      <Nav></Nav>
      <listedBooksToWishList.Provider
        value={{
          setListBooks,
          listBooks,
          booksList,
          bookDetails,
          setBookDetails,
          toastContainer,
          setToastContainer,
          sortBy,
          setSortBy,
        }}
      >
        <Outlet></Outlet>
      </listedBooksToWishList.Provider>
    </div>
  );
};

export default Root;

{
  /* <listedBooksToWishList.Provider value={{setListBooks, listBooks}}>
                   
                   </listedBooksToWishList.Provider> */
}
