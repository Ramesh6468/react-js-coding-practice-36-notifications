// Write your code here
import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="resultContainer">
      <div className="result">{children}</div>
      <GrFormClose className="icon" />
    </div>
  )
}

export default Notification
