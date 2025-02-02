import { useState } from "react"
import InputBox from "../InputBox"
import ButtonSubmit from "../ButtonSubmit"
import { SlClose } from "react-icons/sl";

function TeamForm({ sendTeamForm, teamFormVisible }) {

    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
        sendTeamForm(name, color)
        setName('')
        setColor('')
    }

    return (
        <div>
            <form className='form-box' onSubmit={formSubmit}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <SlClose size={25} className="close-button" onClick={teamFormVisible} />
                <InputBox
                    label="Nome"
                    placeholder="Digite o nome do time"
                    required
                    valueOnChange={p => setName(p)}
                    value={name}
                />

                <InputBox
                    label="Cor"
                    placeholder="Digite o valor da cor"
                    required
                    valueOnChange={p => setColor(p)}
                    value={color}
                    type="color"
                />

                <ButtonSubmit>
                    Criar time
                </ButtonSubmit>
            </form>
        </div>
    )
}

export default TeamForm