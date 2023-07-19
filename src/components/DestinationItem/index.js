// Write your code here

import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem
  return (
    <li className="image-card">
      <img src={imgUrl} alt={name} className="img" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
