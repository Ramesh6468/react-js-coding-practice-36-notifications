// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const getSuccessView = () => (
    <div className="successCard">
      <Notification>
        <div className="card2">
          <AiFillCheckCircle className="icon" />
          <div className="nameCard">
            <h1 className="heading1">Success</h1>
            <p className="para">You can access all the files in the folder</p>
          </div>
        </div>
      </Notification>
    </div>
  )

  const getFailureView = () => (
    <div className="successCard">
      <Notification>
        <div className="card2">
          <RiErrorWarningFill className="icon2" />
          <div className="nameCard">
            <h1 className="heading2">Error</h1>
            <p className="para">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </div>
      </Notification>
    </div>
  )

  const getWarningView = () => (
    <div className="successCard">
      <Notification>
        <div className="card2">
          <MdWarning className="icon3" />
          <div className="nameCard">
            <h1 className="heading3">Warning</h1>
            <p className="para">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </div>
      </Notification>
    </div>
  )

  const getInfoView = () => (
    <div className="successCard">
      <Notification>
        <div className="card2">
          <MdInfo className="icon4" />
          <div className="nameCard">
            <h1 className="heading4">Info</h1>
            <p className="para">Anyone on the internet can view these files</p>
          </div>
        </div>
      </Notification>
    </div>
  )

  return (
    <div className="bgContainer">
      <h1 className="title">Alert Notifications</h1>
      <div className="itemContainer">
        {getSuccessView()}
        {getFailureView()}
        {getWarningView()}
        {getInfoView()}
      </div>
    </div>
  )
}

export default AlertNotifications
