import { useState } from 'react';
import Banner from './components/Banner/banner';
import MainForm from './components/MainForm';

function App() {

  const [partner, setPartner] = useState([])

  const setPartnerTest = (e) =>{
    console.log(e)
    setPartner([...partner, e])
  }

  return (
    <div className="App">
      <Banner />
      <MainForm onPartnerSubmit={partner => setPartnerTest(partner)}/> 
    </div>
  );
}

export default App;
