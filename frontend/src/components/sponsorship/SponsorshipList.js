import React, { useEffect, useState } from "react";
import axios from "axios";

const SponsorshipList = ({ refresh }) => {
  const [deals, setDeals] = useState([]);

  // Fetch deals from backend
  const fetchDeals = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sponsorships");
      setDeals(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching sponsorship deals");
    }
  };

  // Fetch on mount and whenever `refresh` changes
  useEffect(() => {
    fetchDeals();
  }, [refresh]);

  return (
    <div>
      <h2>Sponsorship Deals</h2>
      {deals.length === 0 ? (
        <p>No deals found</p>
      ) : (
        <ul>
          {deals.map((deal) => (
            <li key={deal._id}>
              {deal.sponsorName} - {deal.dealTitle} - ${deal.dealAmount}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SponsorshipList;
