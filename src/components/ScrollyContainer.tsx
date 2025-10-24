import React from 'react';
import TextScene from './TextScene';
import GraphicStep from './GraphicStep';
import CCUInfographic from './CCUInfographic';
import BECCSInfographic from './BECCSInfographic';

const ScrollyContainer: React.FC = () => {
  return (
    <div className="scrolly-container">
      <div className="scrolly-text-column">
        <TextScene 
          id="scene-1" 
          title="Problemet: Et Uutnyttet Biprodukt" 
          text="På Veas i Asker omdannes avløpsslam til biogass gjennom anaerob nedbrytning. Denne prosessen produserer verdifull metan, men også 5000 tonn ren, biogen CO2 hvert år – tidligere ansett som et avfallsprodukt og sluppet rett ut i atmosfæren."
        />
        <TextScene 
          id="scene-2" 
          title="Løsningen: Fangst og Flytendegjøring" 
          text="Hoop CO2 implementerer CarboPac-L-systemet fra Bright Renewables. Teknologien fanger den rå biogassen, separerer CO2-en ved hjelp av membraner, og kjøler den ned til -25°C. Resultatet er flytende, ren CO2, klar for gjenbruk."
        />
        <TextScene 
          id="scene-2-active" 
          title="Kvalitetssikring: Fra Avfall til Matvare" 
          text="For å kunne brukes i mat- og drikkevareindustrien, må CO2-en renses til EIGA-standard (matvarekvalitet). Denne prosessen fjerner alle urenheter og sikrer et produkt som er trygt nok for konsum. Det er her den virkelige verdiskapingen skjer."
        />
        <TextScene 
          id="scene-3" 
          title="Resultatet: Sirkulærøkonomi i Praksis (CCU)" 
          text={`"Dette er kortreist, grønn CO2. I stedet for å importere gassen fra Europa, kan bryggerier og brusprodusenter nå hente den lokalt. Det er sirkulærøkonomi i praksis." - Kjetil Wang-Hansen, Daglig leder i Hoop CO2`}
        />
        <TextScene 
          id="scene-4" 
          title="Fremtiden: Negative Utslipp (BECCS)" 
          text={`"Ved å fange og lagre biogent CO2 permanent, fjerner vi karbon fra atmosfæren. Dette kalles Bio-Energy with Carbon Capture and Storage (BECCS), og er en nøkkelteknologi for å oppnå reelle, negative utslipp." - Jan Milton Berge, Daglig leder i Inherit`}
        />
      </div>
      <div className="scrolly-graphic-column">
        <GraphicStep id="graphic-step-1">
          <CCUInfographic />
        </GraphicStep>
        <GraphicStep id="graphic-step-2">
          <BECCSInfographic />
        </GraphicStep>
      </div>
    </div>
  );
};

export default ScrollyContainer;