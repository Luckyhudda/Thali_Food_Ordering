import Footer from '../conponents/Footer/Footer';
import Header from '../conponents/Header/Header';
import { Outlet } from 'react-router-dom';

const MasterLayout = () => {
  return (
      <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MasterLayout;