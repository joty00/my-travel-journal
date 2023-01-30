import location from '../assets/fill-219.png'
function Card(props) {
    return (
        <div className="card">
            <img className="img" src={props.imageUrl} alt="image"/>
            <div className="information">
                <div className='small-data'>
                    <img src={location} alt="*" className='location-logo'/>
                    <h3 className='country'>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className='title'>{props.title}</h2>
                <p className='date'>{props.startDate}-{props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;