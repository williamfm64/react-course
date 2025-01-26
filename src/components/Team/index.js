import Coworker from '../Coworker'
import './team.css'

const Team = (props) => {
    return (
        props.coworkers.length > 0 &&
        <section className="team" style={{ backgroundColor: props.colorBack }}>
            <h3 style={{ borderColor: props.colorFront }}> {props.name} </h3>
            <div className='coworkers'>
                {props.coworkers.map(coworker => <Coworker
                    key={coworker.id}
                    name={coworker.name}
                    position={coworker.position}
                    image={coworker.image}
                    color={props.colorFront}
                />)}
            </div>

        </section>
    )
}

export default Team