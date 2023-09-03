import { useEffect, useState } from 'react'
import { User } from './UserCard'



export default function UsersFromServer({getItems}: {getItems: React.Dispatch<React.SetStateAction<User[]>>}) {
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(data => getItems(data))
}, [])
return <></>
}
