import './tool.css'
import { SlClose } from "react-icons/sl";
import { useContext } from 'react'
import { AppState } from '../../pages/Home'

function Tool({ visible, id, def }) {

    const context = useContext(AppState)

    const { deleteCoworker } = context

    return (
        visible && !def &&
        <div className="tool">
            <SlClose onClick={() => deleteCoworker(id)} />
        </div>
    )
}

export default Tool