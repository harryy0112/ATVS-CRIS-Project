import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import "./printMobileTicket.css";

const printMobileTicket = () => {
  const Submit = () => {
    alert("Coming Soon");
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <div className="left">
          <div className="entry">
            <div>
              <h5>Please Enter the Booking Id</h5>
            </div>
            <div className="input">
              MOBILE NO. : <input type="text" />
              BOOKING ID : <input type="text" />
            </div>
            <div className="cancel-btn-padding-mobile">
              <button className="cancel-btn-mobile">
                <Link style={{ textDecoration: "none" }} to="/">
                  <span style={{ color: "white" }}> Cancel Transaction</span>
                </Link>
              </button>
              <button className="Submit-btn" onClick={Submit}>
                Submit Now
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="help">
            <p>
              <b>Customer Care Support :</b>
              <br />
              1. Customer Care Phone Number : XXXXXXXXXX
              <br />
              2. Customer Care Email ID : XXXXXXXXXX@gmail.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default printMobileTicket;
