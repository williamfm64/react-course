import { useState } from 'react';
import Banner from './components/Banner/banner';
import MainForm from './components/MainForm';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      nome : "Programação",
      colorFront : "#57C278",
      colorBack : "#D9F7E9"

    },
    {
      nome : "Front-end",
      colorFront : "#82CFFA",
      colorBack : "#E8F8FF"

    },
    {
      nome : "Data Science",
      colorFront : "#A6D157",
      colorBack : "#F0F8E2"

    },
    {
      nome : "DevOps",
      colorFront : "#E03B69",
      colorBack : "#FDE7E8"

    },
    {
      nome : "Ux e Design",
      colorFront : "#DB6EBF",
      colorBack : "#FAE9F5"

    },
    {
      nome : "Mobile",
      colorFront : "#FFBA05",
      colorBack : "#FFF5D9"

    },
    {
      nome : "Inovação e Gestão",
      colorFront : "#FF8A29",
      colorBack : "#FFEEDF"

    }
  ]

  const [coworkers, setcoworkers] = useState([])

  const setCoworkerTest = (e) =>{
    console.log(e)
    setcoworkers([...coworkers, e])
  }

  return (
    <div className="App">
      <Banner />
      
      <MainForm onCoworkerSubmit={coworker => setCoworkerTest(coworker)} teamsList={teams}/>

      {teams.map(time => <Team
        key={time.nome} 
        nome={time.nome} 
        colorBack={time.colorBack} 
        colorFront={time.colorFront}
        coworkers={coworkers.filter(coworker => coworker.time === time.nome)}
      />)}

      <Footer/>

    </div>
  );
}

export default App;
