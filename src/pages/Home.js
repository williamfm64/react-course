import { useState } from 'react'
import Banner from '../components/Banner/banner'
import MainForm from '../components/MainForm'
import Team from '../components/Team'
import Footer from '../components/Footer'
import './style.css'

function Home() {

  const teams = [
    {
      name: "Programação",
      colorFront: "#57C278",
      colorBack: "#D9F7E9"

    },
    {
      name: "Front-end",
      colorFront: "#82CFFA",
      colorBack: "#E8F8FF"

    },
    {
      name: "Data Science",
      colorFront: "#A6D157",
      colorBack: "#F0F8E2"

    },
    {
      name: "DevOps",
      colorFront: "#E03B69",
      colorBack: "#FDE7E8"

    },
    {
      name: "Ux e Design",
      colorFront: "#DB6EBF",
      colorBack: "#FAE9F5"

    },
    {
      name: "Mobile",
      colorFront: "#FFBA05",
      colorBack: "#FFF5D9"

    },
    {
      name: "Inovação e Gestão",
      colorFront: "#FF8A29",
      colorBack: "#FFEEDF"

    }
  ]

  const [coworkers, setCoworkers] = useState([])

  const addCoworker = (e) => {
    console.log(e)
    setCoworkers([...coworkers, e])
  }

  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Krona+One&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      </style>
      <Banner />

      <MainForm onCoworkerSubmit={thisCoworker => addCoworker(thisCoworker)} teamsList={teams} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        colorBack={team.colorBack}
        colorFront={team.colorFront}
        coworkers={coworkers.filter(coworker => coworker.team === team.name)}
      />)}

      <Footer />

    </div>
  );
}

export default Home;
