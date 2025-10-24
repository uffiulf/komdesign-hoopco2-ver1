import React from 'react';

const DashboardCard: React.FC = () => {
  return (
    <div className="dashboard-card">
      <div id="co2-teller">0</div>
      <div id="teller-label">CO2-UTSLIPP (TONN)</div>
      <div id="co2-teller-fangst">0</div>
      <div id="teller-label-fangst">CO2-FANGST (TONN)</div>
    </div>
  );
};

export default DashboardCard;