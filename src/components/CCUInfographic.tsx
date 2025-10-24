import React from 'react';

const CCUInfographic: React.FC = () => {
  return (
    <div id="infografikk-1">
      <div className="infographic-box">
        <div className="icon-container">
          <i className="fa-solid fa-industry fa-3x anim-icon"></i>
          <div className="anim-label">Biogassanlegg (Kilde)</div>
        </div>
      </div>

      <div className="anim-co2-partikkel"></div>

      <div className="infographic-box">
        <div className="icon-container">
          <i className="fa-solid fa-box-open fa-3x anim-icon"></i>
          <div className="anim-label">Hoop CO2 Rensing</div>
        </div>
      </div>

      <div className="infographic-box">
        <div className="icon-container">
          <i className="fa-solid fa-beer-mug-empty fa-3x anim-icon"></i>
          <div className="anim-label">Bryggeri (Kunde)</div>
        </div>
      </div>
    </div>
  );
};

export default CCUInfographic;