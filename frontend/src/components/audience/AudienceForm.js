import React, { useState } from "react";
import axios from "axios";

const AudienceForm = ({ triggerRefresh }) => {
  const [segmentName, setSegmentName] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/audience", {
        segmentName,
        ageGroup,
        region,
      });
      alert("Audience segment added!");

      // Clear form
      setSegmentName("");
      setAgeGroup("");
      setRegion("");

      // Trigger list refresh
      triggerRefresh();
    } catch (err) {
      console.error(err);
      alert("Error adding audience segment");
    }
  };

  return (
    <div>
      <h2>Add Audience Segment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Segment Name"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Age Group"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          required
        />
        <button type="submit">Add Segment</button>
      </form>
    </div>
  );
};

export default AudienceForm;
