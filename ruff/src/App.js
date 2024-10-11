import React from 'react';
import './App.css';
import greenRoofImage from './assets/green-roof.jpg'; // Adicione uma imagem de telhado verde
import solarPanelImage from './assets/solar-panel.jpg'; // Adicione uma imagem de painéis solares

function App() {
  return (
    <div className="app-container">
      <div className="section green-roof">
        <img src={greenRoofImage} alt="Green Roof" className="roof-image" />
        <h1>Telhados Verdes</h1>
        <p>
          Os telhados verdes ajudam a reduzir a necessidade de climatização, melhoram o isolamento térmico e promovem a retenção de água da chuva. 
          <strong>Economia de até 25% em custos de climatização.</strong>
        </p>
        <ul>
          <li><strong>Custo de Instalação:</strong> R$ 600 a R$ 1.000 por m²</li>
          <li><strong>Área disponível:</strong> 22,69 m²</li>
          <li><strong>Investimento Total:</strong> R$ 13.614 a R$ 22.690</li>
          <li><strong>Economia em Energia:</strong> R$ 400 a R$ 500/ano</li>
        </ul>
      </div>

      <div className="section solar-panel">
        <img src={solarPanelImage} alt="Solar Panel Roof" className="roof-image" />
        <h1>Painéis Solares</h1>
        <p>
          Os painéis solares são uma fonte sustentável de energia que converte a luz solar em eletricidade. Com eficiência média de 18%, a energia gerada reduz significativamente os custos com energia elétrica.
          <strong>Geração de 6.710 kWh/ano.</strong>
        </p>
        <ul>
          <li><strong>Custo de Instalação:</strong> R$ 4.500 a R$ 6.500 por kW</li>
          <li><strong>Área disponível:</strong> 22,69 m²</li>
          <li><strong>Investimento Total:</strong> R$ 13.500 a R$ 19.500</li>
          <li><strong>Economia em Energia:</strong> R$ 4.700 a R$ 6.000/ano</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
