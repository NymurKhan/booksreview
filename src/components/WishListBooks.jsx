import { listedBooksToWishList } from "../Root/Root";
import { useContext } from "react";
import Wish from "./Wish";



const WishListBooks = () => {
    const {listBooks} = useContext(listedBooksToWishList);
    return (
        <div className="flex flex-col items-center justify-center mt-4 gap-5">
            {
                listBooks.map(bookset => <Wish key={bookset.id} bookset={bookset}></Wish>)
            }
        </div>
    );
};

export default WishListBooks;