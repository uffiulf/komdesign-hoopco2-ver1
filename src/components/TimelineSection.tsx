import React from 'react';

const TimelineSection: React.FC = () => {
  return (
    <section className="timeline-section">
      <h2>Veien til Ferdig Anlegg</h2>
      <div className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-year">2021</div>
          <div className="timeline-content">
            <h3>Idé og Konsept</h3>
            <p>De første samtalene mellom Veas og gründerne finner sted. Konseptet om å utnytte overskudds-CO2 blir født.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2022</div>
          <div className="timeline-content">
            <h3>Selskapet Stiftes</h3>
            <p>Hoop CO2 AS blir formelt stiftet. Avtaler med teknologileverandør Bright Renewables og Veas signeres.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2023</div>
          <div className="timeline-content">
            <h3>Bygging og Finansiering</h3>
            <p>Byggingen av anlegget på Veas starter. Viktig finansiering fra Innovasjon Norge og andre partnere sikres.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2024</div>
          <div className="timeline-content">
            <h3>Produksjonsstart</h3>
            <p>Anlegget står ferdig og den første flytende, resirkulerte CO2-en leveres til kunder.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;