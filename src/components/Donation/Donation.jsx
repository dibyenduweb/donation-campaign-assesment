/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AddToCart from "../DonationDetails/AddToCart";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  const [notFound, setNotFound] = useState(false);

  //show all data
  const [donationLength, setDonationLength] =useState(4);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    setDonation(donationItems)
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNotFound("no data found");
   
    }
  }, []);
//console.log(donation);
return(
  
  <div >
{notFound ? <p className="h-[80vh] flex justify-center items-center">{notFound}</p> :<div>

<div className="grid grid-cols-2">
  {/* {donation.map(cart => <AddToCart key={cart.id} cart={cart}></AddToCart>)} */}
  {donation.slice(0, donationLength).map(cart => <DonationCard key={cart.id} cart={cart}></DonationCard>)}
</div>
<div className={donationLength === donation.length ? 'hidden' : '' }>
  <button onClick={() => setDonationLength(donation.length)} className="btn btn-primary ml-[600px] px-14">See All</button>

</div>


</div>}</div>

);

};

export default Donation;
