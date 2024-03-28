import { useContext } from "react";
import { listedBooksToWishList } from "../Root/Root";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { listedBooksId } from "../Utilities/listedBooks";

const BookDetails = () => {

  const {setListBooks, listBooks, bookDetails, toastContainer, setToastContainer} = useContext(listedBooksToWishList); 
//   const [read, setRead] = useState(true);

// console.log(listBooks);

  const notifyMe = () => {
        listedBooksId(bookId);
        if(!toastContainer.includes(bookId)){
          if(!listBooks.includes(bookDetails)){
            const listBook = [...listBooks, bookDetails];
            setListBooks(listBook);
          }
            toast('Read is marked!!');
            const readToast = [...toastContainer, bookId];
            setToastContainer(readToast);
        }else{
            toast('You have already read this content!!!')
        }
    }   

  const wishListToast = () => {
    if(toastContainer.includes(bookId)){
        toast('Opps!! You read it, You can not addedt it to the wish list!!!')
    }else if(toastContainer.includes(bookName)){
          toast('You have already added to the wishlist')
    }else{
        
        if(!listBooks.includes(bookDetails)){
          const listBook = [...listBooks, bookDetails];
          setListBooks(listBook);
        }
        const wishTost = [...toastContainer, bookName];
        setToastContainer(wishTost);
        toast('Added to the wish list')
    }
  }



  const {
   bookName,
    author,
    category,
    review,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
    image,
    rating,
    bookId
  } = bookDetails;

  return (
    <div className="flex mx-auto h-[500px] w-[80%] gap-6 mt-12">
      <div className="shadow-xl h-[500px] rounded-xl w-[45%]">
          <img className="rounded-xl w-full h-full"
            src={image}
          />
      </div>

      <div className="flex-1 flex flex-col justify-evenly bg-base-100">
        <h2 className="text-4xl font-bold text-black">{bookName}</h2>
        <p className="text-xl font-medium text-[#131313CC]">By: {author}</p>
        <hr className="border" />
        <p>{category}</p>
        <hr className="border" />
        <p><span className="text-[18px] font-bold text-black">Review: </span> <span className="text-[16px] font-normal text-[#131313B3]"> {review}</span></p>
        <div className="flex gap-5">
          <p className="text-[18px] font-bold text-black">Tag</p>
          <p className="text-[16px] text-[#23BE0A] px-3 py-1 rounded-2xl bg-gray-100 ">{tags[0]}</p>
          <p className="text-[16px] text-[#23BE0A] px-3 py-1 rounded-2xl bg-gray-100 ">{tags[1]}</p>
          <p className="text-[16px] text-[#23BE0A] px-3 py-1 rounded-2xl bg-gray-100 ">{tags[2]}</p>
        </div>

        <hr className="border" />
        <div className="flex items-center gap-28">
          <div>
            <p className="text-[18px] font-normal text-[#131313B3]">Number Of Pages: </p>
            <p className="text-[18px] font-normal text-[#131313B3]">Publisher: </p>
            <p className="text-[18px] font-normal text-[#131313B3]">Year of Publishig: </p>
            <p className="text-[18px] font-normal text-[#131313B3]">Rating: </p>
          </div>
          <div>
            <p className="text-[18px] font-bold">{totalPages}</p>
            <p className="text-[18px] font-bold">{publisher}</p>
            <p className="text-[18px] font-bold">{yearOfPublishing}</p>
            <p className="text-[18px] font-bold">{rating}</p>
          </div>
        </div>

        <div className="flex gap-5">
            <button onClick={notifyMe} className="btn border">Read</button>
            <button onClick={wishListToast} className="btn bg-[#50B1C9] text-white">Wishslist</button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookDetails;