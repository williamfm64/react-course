import './coworker.css'

function Coworker ({nome, cargo, imagem, cor}){
    return(
        <div className="coworker">
            <div className="header" style={{backgroundColor: cor}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className="footer">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Coworker