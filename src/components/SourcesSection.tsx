import React from 'react';

const SourcesSection: React.FC = () => {
  return (
    <section id="scene-6" className="sources-section">
      <h2>Kilder</h2>
      <ul className="sources-list">
        <li>
          <strong>Interne dokumenter:</strong> "Karbonfangst_Hoop_CO2.pdf" og "Markedets Risiko.pdf", levert av Hoop CO2 for prosjektet.
        </li>
        <li>
          <strong>Intervjuer:</strong> Samtaler med Kjetil Wang-Hansen (Konsernsjef Veas AS) og Jan Milton Berge (Hoop CO2 AS).
        </li>
        <li>
          <strong>Teknologi:</strong> Informasjon om CarboPac-L-systemet fra <a href="https://bright-renewables.com/" target="_blank" rel="noopener noreferrer">Bright Renewables</a>.
        </li>
        <li>
          <strong>BECCS-partner:</strong> Informasjon om lagringstjenesten fra <a href="https://norlights.com/" target="_blank" rel="noopener noreferrer">Northern Lights JV</a>.
        </li>
        <li>
          <strong>Anleggsinformasjon:</strong> Generell informasjon om prosesser ved <a href="https://www.veas.nu/" target="_blank" rel="noopener noreferrer">Veas (Vestfjorden Avløpsselskap)</a>.
        </li>
      </ul>
    </section>
  );
};

export default SourcesSection;