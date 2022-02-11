import React from 'react'

const Notification = ({ notification }) => {
    const phone = Object.values(notification).map((a) => a.phone)
    const nameObject = Object.values(notification).map((a) => a.name)
    const firstName = nameObject.map((a) => a.first)
    const lastName = nameObject.map((a) => a.last)
    const locationObject = Object.values(notification).map((a) => a.location)
    const city = locationObject.map((a) => a.city)
    const state = locationObject.map((a) => a.state)
  return (
    <div style={{ border: '1px solid black', margin: '15px' }}>
        <h2>{firstName} {lastName}</h2>
        <h3>{phone}</h3>
        <h4>{city}, {state}</h4>
    </div>
  )
}

export default Notification
