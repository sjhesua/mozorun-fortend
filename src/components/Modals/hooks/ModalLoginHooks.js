import {useState} from 'react'

export const useModalLogin = (initialValue = false) => {
    const [isOpen, setIsOpen] = useState(initialValue)
    const [items, setItems] = useState([])

    const openModalLogin = () => setIsOpen(true)
    const closeModalLogin = () => {setIsOpen(false);setItems(null)} 

    const addItems = (itemsx) => {setItems(itemsx)}

    
    return [isOpen, openModalLogin, closeModalLogin, items, addItems]
}