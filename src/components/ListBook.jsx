
import { CiLocationOn } from "react-icons/ci";

const ListBook = ({ book }) => {
    // console.log(book);
    const {image, bookName, author, tags, category, publisher, rating, review, totalPages, yearOfPublishing} = book;
    return (
      <div className="card flex card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>

        <div className="flex-1">
           <h2>{bookName}</h2>
           <p>By: {author}</p>
           <div>
              <div>
                <p>{tags[0]}</p>
                <p>{tags[1]}</p>
                <p>{tags[2]}</p>
              </div>
              <div>
                <CiLocationOn></CiLocationOn>
                <p>{yearOfPublishing}</p>
              </div>
           </div>
        </div>
      </div>
    );
  };
  
  export default ListBook;
  