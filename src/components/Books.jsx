import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";


const Books = ({ bookSingle }) => {
//   console.log(book);
    const {setBookDetails} = useContext(listedBooksToWishList);
    const {bookId, tags, image, bookName, rating, author, category } = bookSingle;

  return (
    <Link onClick={() => setBookDetails(bookSingle)} to={`/${bookId}`}>
      <div className="card h-[650px] p-4 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className="flex items-center gap-5">
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[0]}</p>
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[1]}</p>
            <p className="px-4 py-2 text-green-400 bg-gray-50  rounded-2xl">{tags[2]}</p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="flex justify-between">
            <p>{category}</p>
            <div className="card-actions items-center justify-end">
                <p>{rating}</p>
                <FaStar></FaStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Books;
