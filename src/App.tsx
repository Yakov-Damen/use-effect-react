import {useState} from 'react'
import './App.css'
import UserCard , {User} from './UserCard'
import UsersFromServer from './UsersFromServer'
const [items, setItems] = useState<User[]>([]);

function App() {
 

  return (
    <>
      <UsersFromServer getUsers={setItems}/>
      <UserCard users={items}/>
    </>
  )
}

export default App
