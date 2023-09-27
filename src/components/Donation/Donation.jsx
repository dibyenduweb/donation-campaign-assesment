import { useEffect, useState } from "react";
import AddToCart from "../DonationDetails/AddToCart";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    setDonation(donationItems)
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNotFound("no data found");
    }
  }, []);




  return <div className="grid grid-cols">
  {notFound ?
    <p className="h-[80vh] flex justify-center items-center">{notFound}</p>
   : 
    <div>
      <div>
       {donation.map(cart => <AddToCart key={cart.id} dataCart={cart}></AddToCart>)}
    
      </div>

    </div>}</div>;
};

export default Donation;
