import React from 'react';

const ContextSection: React.FC = () => {
  return (
    <section id="scene-5" style={{ minHeight: 'auto', padding: '10rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '65ch' }}>
        <h2>Tillit i et Uryddig Marked</h2>
        <p>
          Karbonmarkedet er preget av en tillitskrise. Store aktører har blitt avslørt i å selge kreditter fra prosjekter med tvilsom eller ikke-eksisterende effekt, ofte tusenvis av mil unna. Dette har ført til utbredt "grønnvasking".
        </p>
      </div>

      <div className="comparison-container">
        <div className="comparison-box risk">
          <h3>Risikabelt: Abstrakte Kreditter</h3>
          <ul>
            <li>❌ Ofte basert på vage estimater</li>
            <li>❌ Vanskelig å verifisere (f.eks. en skog i utlandet)</li>
            <li>❌ Risiko for dobbelt-telling og svindel</li>
            <li>❌ Uklar "additionalitet" - ville tiltaket skjedd uansett?</li>
          </ul>
        </div>

        <div className="comparison-box verified">
          <h3>Verifisert: Fysisk, Målbart Karbon</h3>
          <ul>
            <li>✅ Hvert eneste kilo CO2 er fysisk fanget og målt</li>
            <li>✅ Full sporbarhet fra kilde til kunde</li>
            <li>✅ Lokal, norsk verdikjede</li>
            <li>✅ Garantert 100% additionalitet</li>
          </ul>
        </div>
      </div>
      <p style={{ textAlign: 'center', maxWidth: '65ch', opacity: 0.8, marginTop: '2rem' }}>
        Hoop CO2 sin modell er annerledes. De selger ikke en abstrakt kreditt, men et fysisk produkt. Dette gir en sporbarhet og sikkerhet som markedet skriker etter.
      </p>
    </section>
  );
};

export default ContextSection;