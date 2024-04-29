import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Bileşen herhangi bir JSX döndürmediği için null döndürüyoruz
}

export default ScrollToTop;
