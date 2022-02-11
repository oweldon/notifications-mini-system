import React from 'react'
import Notification from './Notification'

const Notifications = ({ notifications }) => {
  return (
    <>
    {notifications.map((notification, index) => (
      <Notification key={index} notification={notification} />
    ))}
  </>
  )
}

export default Notifications
