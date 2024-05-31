const TemplateExpression = () => {
    const name = "Willamy";

    const data = {
        age: 24,
        job: "programador"
    }

  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} e a sua profissão é {data.job}</p>
    </div>
  )
}

export default TemplateExpression