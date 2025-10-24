import React from 'react';

const ContextSection: React.FC = () => {
  return (
    <section id="scene-5" style={{ minHeight: 'auto', padding: '10rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '65ch' }}>
        <h2>Tillit i et Uryddig Marked</h2>
        <p>
          Karbonmarkedet er preget av en dyp tillitskrise. En nylig skandale, avslørt av en <a href="https://www.dw.com/en/how-a-chinese-firm-ran-a-billion-euro-carbon-credit-scam/a-71010148" target="_blank" rel="noopener noreferrer">rapport fra DW</a>, viste hvordan et kinesisk selskap, China National Building Material Group (CNBM), genererte milliarder av euro fra karbonkreditter basert på prosjekter som allerede var lønnsomme uten kredittene. Dette er et klassisk eksempel på manglende "additionalitet" – kredittene representerte ingen reell reduksjon i utslipp utover det som ville skjedd uansett. Slike hendelser har ført til utbredt "grønnvasking" og svekket tilliten til abstrakte, ikke-sporbare kreditter globalt.
        </p>
      </div>

      <div className="comparison-container">
        <div className="comparison-box risk">
          <h3>Risikabelt: Abstrakte Kreditter</h3>
          <ul>
            <li>❌ Ofte basert på vage estimater fra prosjekter i utlandet.</li>
            <li>❌ Vanskelig å verifisere reell effekt og additionalitet.</li>
            <li>❌ Risiko for dobbelt-telling og ren svindel (som CNBM-saken).</li>
            <li>❌ Uklar "additionalitet" - ville tiltaket skjedd uansett?</li>
          </ul>
        </div>

        <div className="comparison-box verified">
          <h3>Verifisert: Fysisk, Målbart Karbon</h3>
          <ul>
            <li>✅ Hvert eneste kilo CO2 er fysisk fanget og målt på Veas.</li>
            <li>✅ Full sporbarhet fra kilde til kunde via loggføring.</li>
            <li>✅ 100% lokal, norsk verdikjede.</li>
            <li>✅ Garantert 100% additionalitet – uten fangsten ville CO2-en blitt sluppet ut.</li>
          </ul>
        </div>
      </div>
      <p style={{ textAlign: 'center', maxWidth: '65ch', opacity: 0.8, marginTop: '2rem' }}>
        Hoop CO2 sin modell er fundamentalt annerledes. De selger ikke en abstrakt kreditt, men et fysisk produkt. Dette gir en sporbarhet og sikkerhet som markedet skriker etter.
      </p>
    </section>
  );
};

export default ContextSection;