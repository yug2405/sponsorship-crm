import React, { useState } from "react";
import SponsorshipForm from "./components/sponsorship/SponsorshipForm";
import SponsorshipList from "./components/sponsorship/SponsorshipList";
import AudienceForm from "./components/audience/AudienceForm";
import AudienceList from "./components/audience/AudienceList";

function App() {
  const [refreshDeals, setRefreshDeals] = useState(false);
  const [refreshAudience, setRefreshAudience] = useState(false);

  const triggerDealRefresh = () => setRefreshDeals(!refreshDeals);
  const triggerAudienceRefresh = () => setRefreshAudience(!refreshAudience);

  return (
    <div className="App">
      <h1>Sponsorship CRM</h1>
      <SponsorshipForm triggerRefresh={triggerDealRefresh} />
      <SponsorshipList refresh={refreshDeals} />

      <hr />

      <h1>Audience Segmentation</h1>
      <AudienceForm triggerRefresh={triggerAudienceRefresh} />
      <AudienceList refresh={refreshAudience} />
    </div>
  );
}

export default App;
