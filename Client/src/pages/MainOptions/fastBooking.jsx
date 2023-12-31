import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import "./fastBooking.css";

const fastBooking = () => {
  return (
    <>
      <Navbar />
      <div className="ComingSoon">
        <div className="atvs">Fast booking</div>
        <div className="soon">Coming Soon</div>
      </div>
      <Footer />
    </>
  );
};

export default fastBooking;
