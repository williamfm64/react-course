import { useState } from 'react'
import Coworker from '../Coworker'
import './team.css'
import hexToRgba from 'hex-to-rgba';
import { SlClose } from "react-icons/sl";

const Team = (props) => {

    const [edit, setEdit] = useState(false);

    return (
        props.coworkers.length > 0 ?
            <section className="team" style={{ backgroundColor: hexToRgba(props.color, 0.3) }}>
                <h3 onClick={() => edit ? setEdit(false) : setEdit(true)} style={{ borderColor: props.color }}> {props.name} </h3>

                {edit ?
                    <section>
                        <input
                            className='color-selector'
                            type='color'
                            value={props.color}
                            onChange={event => props.changeColor(event.target.value, props.name)}
                            onBlur={() => props.updateColor(props.id)}
                        />
                        {!props.def &&
                            <SlClose onClick={() => props.deleteTeam(props.id)} size={25} className='delete-button' />
                        }
                    </section>

                    : null}

                <div className='coworkers'>
                    {props.coworkers.map(coworker => <Coworker
                        key={coworker.id}
                        id={coworker.id}
                        name={coworker.name}
                        position={coworker.position}
                        image={coworker.image}
                        color={props.color}
                        def={coworker.isDefault}
                    />)}
                </div>
            </section> : null
    )
}

export default Team