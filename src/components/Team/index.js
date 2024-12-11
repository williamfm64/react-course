import './team.css'

const Team = (props) => {
    return(
        <section className="team" style={{ backgroundColor: props.colorBack }}>
            <h3 style={{borderColor: props.colorFront}}> {props.nome} </h3>
        </section>
    )
}

export default Team