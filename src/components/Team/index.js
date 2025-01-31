import { useState } from 'react'
import Coworker from '../Coworker'
import './team.css'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    const [edit, setEdit] = useState(false);

    return (
        props.coworkers.length > 0 ?
            <section className="team" style={{ backgroundColor: hexToRgba(props.color, 0.3) }}>
                <h3 onClick={() => edit ? setEdit(false) : setEdit(true)} style={{ borderColor: props.color }}> {props.name} </h3>

                {edit ? <input
                    className='color-selector'
                    type='color'
                    value={props.color}
                    onChange={event => props.changeColor(event.target.value, props.name)}
                /> : null}

                <div className='coworkers'>
                    {props.coworkers.map(coworker => <Coworker
                        key={coworker.id}
                        id={coworker.id}
                        name={coworker.name}
                        position={coworker.position}
                        image={coworker.image}
                        color={props.color}
                    />)}
                </div>
            </section> : null
    )
}

export default Team