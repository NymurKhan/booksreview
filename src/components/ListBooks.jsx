import {  useState, useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import { Link, Outlet } from "react-router-dom";


const ListBooks = () => {

    const [clickBtn, setClickBtn] = useState();
    const {setSortBy} = useContext(listedBooksToWishList)

    // console.log(sortBy);

  return (
    <div>
        <div className="flex flex-col p-4 gap-5">

          <div className="h-[80px] w-full flex items-center justify-center bg-gray-200 rounded-lg">
                  <h1 className="text-2xl font-bold">Books</h1>
              </div>
              <div className="flex items-center justify-center">
                  <select onChange={(e) => setSortBy(e.target.value)} className=" px-3 py-3 rounded-lg text-white font-bold text-xl outline-none border-none bg-green-600">
                      <option className="text-white font-medium" value="Sort By">Sort By</option>
                      <option value="Rating">Rating</option>
                      <option value="Number of pages">Number of pages</option>
                      <option value="Publisher year">Publisher year</option>
                  </select>
              </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex w-[80%] ml-3">
                <Link onClick={() => setClickBtn(1)} className={`${clickBtn === 1 ? 'border-b-0 rounded-t-md font-medium' : 'border rounded-t-md border-b-0 '} ${clickBtn === 2 && 'border-t-0 border-l-0 border-r-0 border-b-2'} px-4 py-3 border-2 `} to='readbooks'>Read Books</Link>
                <Link onClick={() => setClickBtn(2)} className={`${clickBtn === 2 ? 'border-b-0 rounded-t-md font-medium' : 'border border-t-0 border-l-0 border-r-0'} px-4 py-3 border-2`} to='wishlistbooks'>Wishlist Books</Link>
                <div className="border-2 flex-1 border-t-0 border-l-0 border-r-0"></div>
          </div>
        </div>

        <Outlet></Outlet>
    </div>
  );
};

export default ListBooks;
