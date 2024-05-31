import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome..."/>
                <label>
                    <span>E-mail:</span>
                    <input type="text" name= "email" placeholder="Digite o seu e-mail..."/>
                </label>
                <input type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default MyForm