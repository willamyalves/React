import { useState } from "react"

const ConditionalRender = () => {

    const x = 5;

    const name = "Willamy";

  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true, então sim!</p>}
        <div>
            {name === "Willamy" ? (
                <div>
                    <p>{name}</p>
                    <p> Seu nome é {name}.</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado.</p>
                </div>
            )}
        </div>
    </div>
  )
}

export default ConditionalRender