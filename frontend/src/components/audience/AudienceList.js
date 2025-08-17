import React, { useEffect, useState } from "react";
import axios from "axios";

const AudienceList = ({ refresh }) => {
  const [segments, setSegments] = useState([]);

  const fetchSegments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/audience");
      setSegments(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching audience segments");
    }
  };

  useEffect(() => {
    fetchSegments();
  }, [refresh]);

  return (
    <div>
      <h2>Audience Segments</h2>
      {segments.length === 0 ? (
        <p>No segments found</p>
      ) : (
        <ul>
          {segments.map((seg) => (
            <li key={seg._id}>
              {seg.segmentName} - {seg.ageGroup} - {seg.region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AudienceList;
