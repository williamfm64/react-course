import './coworker.css'
import { useState } from 'react'
import Tool from '../Tool'

function Coworker({ id, name, position, image, color }) {

    const [edit, setEdit] = useState(0)

    const updateCoworker = () => {
        edit === 0 ? setEdit(1) : setEdit(0)
    }

    return (
        <div className="coworker">
            <div className="header" style={{ backgroundColor: color }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4><a onClick={updateCoworker}>{name}</a></h4>
                <Tool visible={edit} />
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Coworker