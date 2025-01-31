import { useState, useEffect } from 'react'
import React from 'react'
import Banner from '../components/Banner/banner'
import MainForm from '../components/MainForm'
import Team from '../components/Team'
import Footer from '../components/Footer'
import './style.css'
import api from '../services/api'

export const AppState = React.createContext()

function Home() {

  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57C278",

    },
    {
      name: "Front-end",
      color: "#82CFFA",

    },
    {
      name: "Data Science",
      color: "#A6D157",

    },
    {
      name: "DevOps",
      color: "#E03B69",

    },
    {
      name: "Ux e Design",
      color: "#DB6EBF",

    },
    {
      name: "Mobile",
      color: "#FFBA05",

    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",

    }
  ])

  const [coworkers, setCoworkers] = useState([])

  let editFlag = false;
  let coworkerToEdit = [];

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

  async function deleteCoworker(e) {
    await api.delete(`/coworkers/${e}`)
    updateCoworkers()
  }

  const changeColor = (color, name) => {
    setTeams(teams.map(team => {
      if (team.name === name) {
        team.color = color
      }
      return team
    }))
  }


  return (
    <AppState.Provider value={{ deleteCoworker }}>
      <div className="App">
        <Banner />

        <MainForm
          onCoworkerSubmit={thisCoworker => addCoworker(thisCoworker)}
          teamsList={teams}
          editFlag={editFlag}
          coworkerToEdit={coworkerToEdit}
        />

        {teams.map(team => <Team
          key={team.name}
          name={team.name}
          color={team.color}
          changeColor={changeColor}
          coworkers={coworkers.filter(coworker => coworker.team === team.name)}
        />)}

        <Footer />

      </div>
    </AppState.Provider>
  );
}

export default Home;
