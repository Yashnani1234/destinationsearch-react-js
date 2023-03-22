// Write your code here
import './index.css'

const DestinationCard = props => {
  const {cardDetails} = props
  const {imgUrl, name} = cardDetails

  return (
    <li className="card-container">
      <img src={imgUrl} className="imgEl" alt="search icon" />
      <p className="user-designation"> {name} </p>
    </li>
  )
}
export default DestinationCard
