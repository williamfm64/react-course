import './coworker.css'
import { useState } from 'react'
import Tool from '../Tool'

function Coworker({ id, name, position, image, color, def }) {

    const [visible, setVisible] = useState(false)

    const coworkerTools = () => {
        visible === false ? setVisible(true) : setVisible(false)
    }

    return (
        <div className="coworker">
            <div className="header" style={{ backgroundColor: color }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4 onClick={coworkerTools}>{name}</h4>
                <Tool visible={visible} id={id} def={def} />
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Coworker