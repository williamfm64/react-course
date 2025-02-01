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

  const [teams, setTeams] = useState([])

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
    updateTeams()
  }, [])

  async function updateCoworkers() {
    const serverData = await api.get('/coworkers')
    setCoworkers(serverData.data)
  }

  async function updateTeams() {
    const serverData = await api.get('/teams')
    setTeams(serverData.data)
  }

  async function deleteCoworker(e) {
    await api.delete(`/coworkers/${e}`)
    updateCoworkers()
  }

  async function addTeam(e) {
    await api.post('/teams', {
      name: e.teamName,
      color: e.teamColor
    })
    updateTeams()
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
          onTeamSubmit={thisTeam => addTeam(thisTeam)}
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
