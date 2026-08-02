
import Home from './components/Home/Home'
import About from './components/About/About'
import NotFound from './components/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Layout/Layout'
import Favourites from './components/Favourites/Favourites';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <About /> },
        { path: 'Home', element: <Home /> },
        { path: 'favourites', element: <Favourites /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ])

  return <RouterProvider router={routes} />
}

export default App
