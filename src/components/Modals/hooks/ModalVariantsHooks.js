import {useState} from 'react'

export const useModalVariant = () => {
    const [items, setItems] = useState([])
    
    const addItems = (itemsx) => {setItems(itemsx)}
    return [items, addItems]
}