import React from 'react'

export default function Notification(notificationData) {
    return (
        <div>
            <h4>{notificationData.type}</h4>
            <p>{notificationData.text}</p>
        </div>
    )
}
