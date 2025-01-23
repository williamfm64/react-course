import './coworker.css'

function Coworker({ name, position, image, color }) {
    return (
        <div className="coworker">
            <div className="header" style={{ backgroundColor: color }}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Coworker