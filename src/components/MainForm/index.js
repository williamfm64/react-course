import './mainForm.css'
import TextBox from '../TextBox'
import Dropdown from '../Dropdown'
import ButtonSubmit from '../ButtonSubmit'
import { useState } from 'react'

const MainForm = (props) =>{

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const sendForm = (e) =>{
        e.preventDefault()
        console.log('o Formulário foi submetido')
        props.onCoworkerSubmit({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='form-section'>
            <form className='form-box' onSubmit={sendForm}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextBox 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    mustHave={true}
                    valueOnChange={p => setNome(p)}
                    value={nome}
                />

                <TextBox 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    mustHave={true}
                    valueOnChange={p => setCargo(p)}
                    value={cargo}
                />

                <TextBox 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valueOnChange={p => setImagem(p)}
                    value={imagem}
                />

                <Dropdown 
                    label="Time" 
                    itens={props.teamsList.map(times => times.nome)} 
                    mustHave={true}
                    valueOnChange={p => setTime(p)}
                    value={time}
                />

                <ButtonSubmit>
                    Criar Card
                </ButtonSubmit>
            </form>
        </section>
    )
}

export default MainForm