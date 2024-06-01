import "./MyForm.css"

import { useState } from "react"

const MyForm = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();


  const [bio, setBio] = useState("");

    const handleName = (e) =>{
    setName(e.target.value)
  }

  const [role, setRole] = useState();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name, email, bio, role)

    setEmail("");
    setName("");
    setBio("");
    setRole("");
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome..." 
                onChange={handleName}
                value={name || ""}/>
                <label>
                  <span>E-mail:</span>
                  <input 
                  type="text" 
                  name= "email" 
                  placeholder="Digite o seu e-mail..."
                  onChange={(e)=>setEmail(e.target.value)}
                  value={email || ""}/>
                </label>
                <label>
                  <span>Bio:</span>
                  <textarea 
                  name="bio" 
                  placeholder="Descrição do usuário..." 
                  onChange={(e)=> setBio(e.target.value)}
                  value={bio}>
                  </textarea>
                </label>
                <label>
                  <span>Função no sistema:</span>
                  <select 
                  name="role"
                  onChange={(e)=>setRole(e.target.value)}
                  value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                  </select>
                </label>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm