import { useState } from 'react';
import './App.css';
import ColorPallet from './components/ColorPallet.js'; 


function App() {
  const [listOfColors, setListOfColors] = useState([])
  const generateColors = () => {
    let listOfPallets = [...listOfColors];
    if(listOfPallets.length == 0){
      let numberOfPallets = 5;
      
      for(let i = 0; i < numberOfPallets; i++){
        let objColor = {
          id: i,
          color: "#" + Math.floor(Math.random()*16777215).toString(16),
          blocked: false
        }
        listOfPallets.push(objColor);
      }
    } else {
      for(let i = 0; i < listOfPallets.length; i++){
        if(listOfPallets[i].blocked === false){
          listOfPallets[i].color = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
      }
    }
    setListOfColors(listOfPallets);
  }
  
  return (
    <div className="App">
      <div className='Navbar'>
        <h3>Pallet</h3>
      </div>
      <div className='ConteudoPrincipal'>
        <h1>Colors</h1>
        <p>um texto aleatório</p>
        
      </div>
      <div className='paletas'>
        {listOfColors.map((item) => <ColorPallet id={item.id} color={item.color}></ColorPallet>)}
      </div>
      <button onClick={generateColors}>Gerar Cores</button>

    </div>
  );
}

export default App;
