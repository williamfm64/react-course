import Coworker from '../Coworker'
import './team.css'

const Team = (props) => {
    return(
        <section className="team" style={{ backgroundColor: props.colorBack }}>
            <h3 style={{borderColor: props.colorFront}}> {props.nome} </h3>
            <div className='coworkers'>
                {props.coworkers.map(coworker => <Coworker 
                    key={coworker.nome} 
                    nome={coworker.nome} 
                    cargo={coworker.cargo} 
                    imagem={coworker.imagem} 
                    cor={props.colorFront}
                />)}
            </div>
            
        </section>
    )
}

export default Team