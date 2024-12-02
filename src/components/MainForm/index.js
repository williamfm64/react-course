import './mainForm.css'
import TextBox from '../TextBox'
import Dropdown from '../Dropdown'
import ButtonSubmit from '../ButtonSubmit'

const MainForm = () =>{
    const times = [
        'Programação',
        'Front-end',
        'Back-end',
        'Design',
        'DevOps'
    ]

    return (
        <section className='form-section'>
            <form className='form-box'>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextBox label="Nome" placeholder="Digite seu nome" />
                <TextBox label="Cargo" placeholder="Digite seu cargo" />
                <TextBox label="Imagem" placeholder="Informe o endereço da imagem" />
                <Dropdown label="Time" itens={times}/>
                <ButtonSubmit>
                    Criar Card
                </ButtonSubmit>
            </form>
        </section>
    )
}

export default MainForm