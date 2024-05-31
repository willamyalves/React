import { useState } from "react"

const ListRender = () => {

    const[list] = useState(["Willamy", "Fernanda", "Manu"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Willamy", age: 24},
        {id: 2, name: "Fernanda", age: 26},
        {id: 3, name: "Manu", age: 6}
    ])

    const deleteRandom = ()=>{

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id))
        
    }

  return (
    <div>
        <ul>
            {list.map((item, i) =>(
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=>(
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender