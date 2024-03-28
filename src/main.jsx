import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
import ListBooks from './components/ListBooks.jsx';
import PagesRead from './components/PagesRead.jsx';
import BookDetails from './components/BookDetails.jsx';
import ReadBook from './components/ReadBook.jsx';
import WishListBooks from './components/WishListBooks.jsx';
// import Error from './ErrorPage/Error.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () => fetch('BooksData.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('BooksData.json')
      },
      {
        path: '/listedbooks',
        element: <ListBooks></ListBooks>,
        children: [
          {
            path: '/listedbooks/readbooks',
            element: <ReadBook></ReadBook>
          },
          {
            path:'/listedbooks/wishlistbooks',
            element: <WishListBooks></WishListBooks>
          }
        ]
      },
      {
        path: '/pagesread',
        element: <PagesRead></PagesRead>
      },
      {
        path: '/:bookId',
        element: <BookDetails></BookDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
