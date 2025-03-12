import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/HomePage/Home';
import Nav from './components/Nav/Nav';

function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const shouldShowNavBar = !location.pathname.startsWith("/Dashboard");
  const shouldShowFooter = !location.pathname.startsWith("/Dashboard");

  return (
    <BrowserRouter>
      {shouldShowNavBar && (
          <div
          className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
            showNavBar ? "translate-y-0" : "-translate-y-full"
          } ${
            isTopOfPage
              ? "bg-transparent transition-colors duration-500"
              : "bg-[#7B3F00] shadow-md transition-colors duration-500"
          }`}
          >
            <Nav />
          </div>
        )}
      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
