import { useDispatch, useSelector } from "react-redux";
import thaliImage from "../../images/logo1.png";
import foodListData from "../../services/foodList";
import { addToThali } from "../../globalStore/FoodManager/FoodManagerSlice";

const HomePage = () => {

const dispatch = useDispatch();
 const mainThali = useSelector((state) => state.foodManager.thaliList);
 console.log(mainThali);



  const foodCard = foodListData.map((item, index) => {
    return (
      <div key={index} className="food-card">
        <img src={item.images} alt={item.name} className="food-image" />
        <div className="food-details">
          <h3 className="food-name">{item.name}</h3>
          <p className="food-price">${item.price.toFixed(2)}</p>
         <button onClick={() => dispatch(addToThali(foodListData[index]))} className="addBtn">add to Thali</button>
        </div>
      </div>
    );
  });

  return (
    <>
      <section className="HomeBanner">
        <div className="container">
          <div className="row">
            <div className="col-12 bannerBox">
              <div className="bannerHeadingBox">
                <h1>Thali </h1> <img src={thaliImage} alt="" />
              </div>
              <p>Best Restaurant in the World</p>
              <button className="orderButton">
                <a href="#orderBox">Order Now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="foodContainer" id="orderBox">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 foodItemHeading">
              <h2>Your favorite food items</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-12 cardBox">{foodCard}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
