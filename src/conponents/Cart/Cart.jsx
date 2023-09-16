import { NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FcPlus } from "react-icons/fc";
import { FaMinusCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { addToThali, decreseFromThali, removeFromThali } from "../../globalStore/FoodManager/FoodManagerSlice";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const Cart = () => {
   const [showSuccessModal, setShowSuccessModal] = useState(false);

 const navigate = useNavigate()
 const dispatch = useDispatch()
  const mainThali = useSelector((state) => state.foodManager.thaliList);
   
   const handleDecreaseQuantity = (item) => {
    console.log(item)
     if (item.quantity > 1) {
       const updatedItem = { ...item, quantity: item.quantity -1};
       dispatch(decreseFromThali(updatedItem));
      }
   };

    const removeItem = (id) => {
      dispatch(removeFromThali(id));
    };

 const cartThaliList = mainThali?.map((item, index) => {
    return (
      <div
        key={index}
        className="row mb-4 d-flex justify-content-between align-items-center"
      >
        <div className="col-md-2 col-lg-2 col-xl-2">
          <img
            src={item.images}
            alt={item.name}
            className="food-image image-fluid"
          />
        </div>
        <div className="col-md-3 col-lg-3 col-xl-3">
          <h6 className="text-black mt-2">{item.name}</h6>
        </div>
        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
          <button
            className="btn btn-link px-2"
            onClick={() => dispatch(addToThali(mainThali[index]))}
          >
            <FcPlus size={"2rem"} />
          </button>

          <input
            min="0"
            name="quantity"
            value={item.quantity}
            className="form-control "
          />

          <button
            className="btn px-2"
            onClick={() => handleDecreaseQuantity(item)}
          >
            <FaMinusCircle color={"black"} size={"2rem"} />
          </button>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h6 className="mb-0">$ {item.price}</h6>
        </div>
        <div
          onClick={() => removeItem(item.id)}
          className="col-md-1 col-lg-1 col-xl-1 text-end "
        >
          <MdDeleteForever cursor={"pointer"} size={"2rem"} color="red" />
        </div>
      </div>
    );
  })
 
 const totalPrice = mainThali?.reduce((acc, item) => {
   return acc + item.price * item.quantity;
 }, 0);


 const orderFailed = () => {
  alert('Please Add more then Two items in Thali for Order...')
 }

 const orderSuccess = () => {
setShowSuccessModal(true)
 }

 const closeSuccessModal = () => {
  setShowSuccessModal(false)
 }
 

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Thali Item's
                        </h1>
                        <h6 className="mb-0 text-muted">
                          {mainThali.length} items
                        </h6>
                      </div>
                      <hr className="my-4" />

                      {mainThali.length == 0 && (
                        <div className="d-flex justify-content-center align-items-center m-5">
                          <h1 className="fw-bold  text-danger">
                            Your Thali is Empty... :)
                          </h1>
                        </div>
                      )}
                      {cartThaliList}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <NavLink
                            onClick={() => navigate("/")}
                            className="text-success "
                          >
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to Menu
                          </NavLink>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-1" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>$ {totalPrice.toFixed(2)}</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                        onClick={
                          mainThali.length > 2 ? orderSuccess : orderFailed
                        }
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showSuccessModal} onHide={closeSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been successfully placed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Cart;