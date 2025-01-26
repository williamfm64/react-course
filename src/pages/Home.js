import { useState, useEffect } from 'react'
import Banner from '../components/Banner/banner'
import MainForm from '../components/MainForm'
import Team from '../components/Team'
import Footer from '../components/Footer'
import './style.css'
import api from '../services/api'

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

  async function addCoworker(e) {
    await api.post('/coworkers', {
      name: e.name,
      position: e.position,
      image: e.image,
      team: e.team
    })
    updateCoworkers()
  }

  useEffect(() => {
    updateCoworkers()
  }, [])

  async function updateCoworkers() {
    const serverData = await api.get('/coworkers')
    setCoworkers(serverData.data)
  }

  return (
    <div className="App">
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
