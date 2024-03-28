import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import ReadListBook from "./ReadListBook";


const ReadBook = () => {
   
    const {listBooks, sortBy} = useContext(listedBooksToWishList);
    console.log(listBooks)
    const sortByRating = () => {
        const arr = [];
        for(const perbook of listBooks){
            arr.push(perbook.rating)
        }

        console.log(arr.sort());
    }

    sortByRating()
    return (
        <div className="flex flex-col w-full p-4 gap-5">
            
            <div className="flex flex-col items-center justify-center gap-5">
                {
                    listBooks.map(listbook => <ReadListBook key={listbook.bookName} listbook ={listbook}></ReadListBook>)
                }
            </div>
        </div>
    );
};

export default ReadBook;