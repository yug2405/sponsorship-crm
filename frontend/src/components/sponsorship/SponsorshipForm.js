import React, { useState } from "react";
import axios from "axios";

const SponsorshipForm = ({ triggerRefresh }) => {
  const [sponsorName, setSponsorName] = useState("");
  const [dealTitle, setDealTitle] = useState("");
  const [dealAmount, setDealAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/sponsorships", {
        sponsorName,
        dealTitle,
        dealAmount,
      });
      alert("Sponsorship deal added!");

      // Clear form
      setSponsorName("");
      setDealTitle("");
      setDealAmount("");

      // Trigger list refresh
      triggerRefresh();
    } catch (err) {
      console.error(err);
      alert("Error adding deal");
    }
  };

  return (
    <div>
      <h2>Add Sponsorship Deal</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sponsor Name"
          value={sponsorName}
          onChange={(e) => setSponsorName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Deal Title"
          value={dealTitle}
          onChange={(e) => setDealTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Deal Amount"
          value={dealAmount}
          onChange={(e) => setDealAmount(e.target.value)}
          required
        />
        <button type="submit">Add Deal</button>
      </form>
    </div>
  );
};

export default SponsorshipForm;
