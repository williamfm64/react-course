import './mainForm.css'
import InputBox from '../InputBox'
import Dropdown from '../Dropdown'
import ButtonSubmit from '../ButtonSubmit'
import { useState } from 'react'
import TeamForm from '../TeamForm'

const MainForm = (props) => {

    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState(undefined)
    const [team, setTeam] = useState('')
    const [newTeamFlag, setNewTeamFlag] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()
        props.onCoworkerSubmit({
            name,
            position,
            image,
            team
        })

        setName('')
        setPosition('')
        setImage(undefined)
        setTeam('')
    }

    const sendTeamForm = (teamName, teamColor) => {
        setNewTeamFlag(false)
        props.onTeamSubmit({
            teamName,
            teamColor
        })
    }

    const teamFormVisible = () => {
        newTeamFlag ? setNewTeamFlag(false) : setNewTeamFlag(true)
    }

    return (
        <section className='form-section'>
            <form className='form-box' onSubmit={sendForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <InputBox
                    label="Nome"
                    placeholder="Digite seu nome"
                    required
                    valueOnChange={p => setName(p)}
                    value={name}
                />

                <InputBox
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    required
                    valueOnChange={p => setPosition(p)}
                    value={position}
                />

                <InputBox
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    valueOnChange={p => setImage(p)}
                    value={image}
                />

                <Dropdown
                    label="Time"
                    items={props.teamsList}
                    required
                    valueOnChange={p => setTeam(p)}
                />

                <h4 className='new-team' onClick={teamFormVisible}>Novo time...</h4>

                <ButtonSubmit>
                    Criar Card
                </ButtonSubmit>
            </form>
            {newTeamFlag ?
                <TeamForm sendTeamForm={sendTeamForm} teamFormVisible={teamFormVisible} /> : null
            }
        </section>
    )
}

export default MainForm