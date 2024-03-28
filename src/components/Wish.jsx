import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";


const Wish = ({ bookset }) => {
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
  } = bookset;
  return (
    <div className="card h-[250px] w-[80%] card-side border p-4 bg-base-100 shadow-xl">
      <figure>
        <img className="w-[400px]" src={image} />
      </figure>

      <div className="card-body p-3 pl-5">
        <h2 className="text-xl font-bold text-black">{bookName}</h2>
        <p className="text-[18px] text-slate-700">By: {author}</p>
        <div className="flex w-[58%] ">
          <p className="text-[18px] font-bold  text-black">Tag</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-5">
              <p className="px-3 py-1 rounded-2xl bg-gray-100 text-green-600">
                #{tags[0]}
              </p>
              <p className="px-3 py-1 rounded-2xl bg-gray-100 text-green-600">
                #{tags[1]}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn></CiLocationOn>
              <p className="text-slate-500">Year of Publishing: </p>
            </div>
          </div>
        </div>
        {/* pulisher naem pages */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaUserFriends></FaUserFriends>
            <p>Publisher: </p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineContactPage></MdOutlineContactPage>
            <p>page: {totalPages}</p>
          </div>
        </div>

        <hr className="border w-full" />

        <div className="flex items-center gap-4">
          <button className="bg-blue-400 px-3 py-1 text-blue-600 rounded-2xl">
            Category: {category}
          </button>
          <button className="text-yellow-300 px-3 py-1 bg-yellow-100 rounded-2xl">
            Rating: {rating}
          </button>
          <button className="px-3 py-1 rounded-2xl bg-green-700 text-white">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wish;
