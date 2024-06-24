import React from 'react'
import { createContext } from 'react'
export const ItemAddStyleContext = createContext()

const AddItemStyleProvider = ({ children }) => {
    const ItemAddStyle = {
        textAlign: 'center',
        color: 'rgb(22, 78, 78)',
        fontSize: '21px',
        fontWeight:"600",
        // background: 'white',
        padding: '3px 5px',
        display: 'inline-block',
        margin: '0 auto',
        zIndex: 1000,
        position: 'fixed',
        left: '50%',
        top:"30px",
        transform: 'translateX(-50%)',
    }
    return (
        <ItemAddStyleContext.Provider value={{ItemAddStyle}}>
            {children}
        </ItemAddStyleContext.Provider>
    )
}

export default AddItemStyleProvider
