import './coworker.css'
import { useState } from 'react'
import Tool from '../Tool'
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { useContext } from 'react'
import { AppState } from '../../pages/Home'

function Coworker({ id, name, position, image, color, def, isFavorite }) {

    const [visible, setVisible] = useState(false)

    const context = useContext(AppState)

    const { favoriteUpdate } = context

    const coworkerTools = () => {
        visible === false ? setVisible(true) : setVisible(false)
    }

    const heartProperties = {
        size: 25,
        onClick: () => favoriteUpdate(id),
        className: 'favorite'
    }

    return (
        <div className="coworker">
            <div className="header" style={{ backgroundColor: color }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                {isFavorite ? <IoIosHeart {...heartProperties} color='#ff0000' /> :
                    <IoIosHeartEmpty {...heartProperties} />
                }
                <h4 onClick={coworkerTools}>{name}</h4>
                <Tool visible={visible} id={id} def={def} />
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Coworker