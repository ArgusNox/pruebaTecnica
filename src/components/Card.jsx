import "../style/StyleComponents/Card.css"
const Card = ({contenido}) => {

    return (
        <div className="box">
            <div className="avatar"> </div>
                <div className="content">
                    {contenido}
                
            </div>
        </div>
    )
}



export default Card

