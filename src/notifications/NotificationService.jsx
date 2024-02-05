import React, { createContext, useContext, useState } from "react";
import Notification from "./Notification";

const NotificationContext = createContext({
    showNotification: () => { }
})



export default function NotificationProvider({ children }) {
    const [notificationData, setNotificationData] = useState({
        type: 'error',
        text: 'El producto ya fue agregado al carrito'
    })

    const showNotification = (type, text) => {

    }

    return (
        <NotificationContext.Provider value={showNotification()}>
            <Notification notificationData={notificationData} />
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}