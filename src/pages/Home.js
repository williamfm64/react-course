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

  async function addCoworker(thisCoworker) {
    await api.post('/coworkers', {
      name: thisCoworker.name,
      position: thisCoworker.position,
      image: thisCoworker.image,
      teamKey: thisCoworker.team
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

  async function updateColor(id) {
    const thisTeam = teams.find(team => team.id === id)
    if (thisTeam.isDefault === false) {
      await api.patch(`/teams/${id}`,
        {
          color: thisTeam.color
        })
      updateTeams()
    }
  }

  async function deleteTeam(id) {
    await api.delete(`/teams/${id}`)
    updateTeams()
  }

  async function favoriteUpdate(id) {
    const thisCoworker = coworkers.find(coworker => coworker.id === id)
    await api.patch(`/coworkers/${id}`,
      {
        isFavorite: !thisCoworker.isFavorite
      }
    )
    updateCoworkers()
  }

  return (
    <AppState.Provider value={{ deleteCoworker, favoriteUpdate }}>
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
          key={team.id}
          id={team.id}
          name={team.name}
          color={team.color}
          changeColor={changeColor}
          coworkers={coworkers.filter(coworker => coworker.teamKey === team.id)}
          updateColor={updateColor}
          deleteTeam={deleteTeam}
          def={team.isDefault}
        />)}

        <Footer />

      </div>
    </AppState.Provider>
  );
}

export default Home;
