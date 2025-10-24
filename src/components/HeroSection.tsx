import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="scene-0" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', opacity: 1 }}>Hoop CO2</h1>
      <h2 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', opacity: 0.9 }}>Fra Avløp til Bobler</h2>
      <p style={{ maxWidth: '55ch', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', opacity: 0.8 }}>
        I skyggen av Norges største avløpsrenseanlegg, Veas, omdannes slam til en verdifull ressurs. Men prosessen skaper også et biprodukt: store mengder ren, biogen CO2. Før ble den sluppet rett ut. Nå fanges den, renses og gjenbrukes – en historie om norsk sirkulærøkonomi i praksis.
      </p>
    </section>
  );
};

export default HeroSection;