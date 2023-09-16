import chepImage from '../../images/0402-chef.png'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            &copy; {new Date().getFullYear()} Thali Ordering App <img src={chepImage} alt='Logo'  height={'30px'}/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
