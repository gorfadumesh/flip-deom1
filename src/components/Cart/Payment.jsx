import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PriceSidebar from "./PriceSidebar";
import Stepper from "./Stepper";
import { clearErrors, newOrder } from "../../redux/actions/order.actions";
import { useSnackbar } from "notistack";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import MetaData from "../Layouts/MetaData";
import { emptyCart } from "../../redux/actions/cart.actions";

const Payment = ({ stripeApiKey }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [payDisable, setPayDisable] = useState(false);

  const [selected, setSelected] = useState("");

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    var deviceType = getDeviceType();
    console.log(
      "The website is being accessed from a " + deviceType + " device."
    );
  }, []);

  function getDeviceType() {
    var userAgent = navigator.userAgent;
    if (userAgent.match(/Android/i)) {
      setIsIOS(false);
      return "Android";
    } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
      setIsIOS(true);
      return "iOS";
    } else {
      return "Desktop";
    }
  }

  // const order = {
  //   shippingInfo,
  //   orderItems: cartItems,
  //   user,
  //   totalPrice,
  // };
  // console.log("order in Payment.jsx", order);

  const makePayment = async () => {
    if (selected === "googlepay") {
      handleGooglePay();
    } else if (selected === "paytm") {
      handlePayTM();
    } else if (selected === "phonepe") {
      handlePhonePe();
    } else {
      console.log("please select method");
    }
  };

  const handleChange = (e) => {
    console.log("e.target", e.target.value);
    setSelected(e.target.value);
  };

  const handleGooglePay = () => {
    let packageName = "com.google.android.apps.nbu.paisa.user";
    const upiId = "suji-2@axl";
    const amount = totalPrice;
    const intentUrl = `intent://pay?pa=${upiId}&pn=Ashav%20lunagariya&am=${amount}&cu=INR&tn=Payment%20to%20Ashav%20lunagariya#Intent;scheme=upi;package=${packageName};end`;
    window.location.href = intentUrl;
  };

  const handlePayTM = () => {
    let packageName = "net.one97.paytm";
    const upiId = "suji-2@axl";
    const amount = totalPrice;
    const intentUrl = `intent://pay?pa=${upiId}&pn=Ashav%20lunagariya&am=${amount}&cu=INR&tn=Payment%20to%20Ashav%20lunagariya#Intent;scheme=upi;package=${packageName};end`;
    window.location.href = intentUrl;
  };

  const handlePhonePe = () => {
    const upiId = "q278400026@ybl";
    const URL = `phonepe://pay?pa=${upiId}&pn=Vijay%20Gorfad&am=${totalPrice}&cu=INR&tn=love`;
    console.log(URL, "URL");
    window.location.href = URL;
  };

  return (
    <>
      <MetaData title="Flipkart: Secure Payment | Paytm" />

      <main className="w-full mt-20">
        {/* <!-- row --> */}
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          {/* <!-- cart column --> */}
          <div className="flex-1">
            <Stepper activeStep={3}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="payment-radio-group"
                  defaultValue="stripe"
                  name="payment-radio-button"
                  onChange={handleChange}>
                  <FormControlLabel
                    value="phonepe"
                    control={<Radio />}
                    label={
                      <div className="flex items-center gap-4">
                        <img
                          draggable="false"
                          className="h-6 w-10 object-contain"
                          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png"
                          alt="Paytm Logo"
                        />
                        <span>PhonePe</span>
                      </div>
                    }
                  />
                  {!isIOS ? (
                    <>
                      <FormControlLabel
                        value="googlepay"
                        control={<Radio />}
                        label={
                          <div className="flex items-center gap-4">
                            <img
                              draggable="false"
                              className="h-6 w-10 object-contain"
                              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png"
                              alt="Paytm Logo"
                            />
                            <span>Google Pay</span>
                          </div>
                        }
                      />
                      <FormControlLabel
                        value="paytm"
                        control={<Radio />}
                        label={
                          <div className="flex items-center gap-4">
                            <img
                              draggable="false"
                              className="h-6 w-10 object-contain"
                              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paytm-icon.png"
                              alt="Paytm Logo"
                            />
                            <span>Paytm</span>
                          </div>
                        }
                      />
                    </>
                  ) : (
                    ""
                  )}
                </RadioGroup>
              </FormControl>
              <button
                className={`btn btn-success ${
                  payDisable
                    ? "bg-primary-grey cursor-not-allowed"
                    : "bg-primary-orange cursor-pointer"
                } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
                disabled={payDisable}
                onClick={makePayment}
                type="button">
                Pay ₹{totalPrice.toLocaleString()}
              </button>
            </Stepper>
          </div>

          <PriceSidebar cartItems={cartItems} />
        </div>
      </main>
    </>
  );
};

export default Payment;
