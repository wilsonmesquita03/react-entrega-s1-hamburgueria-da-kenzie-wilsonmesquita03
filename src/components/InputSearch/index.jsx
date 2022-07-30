import { useState } from "react"
import { Container } from "./style"

const InputSearch = ({filterBy, setMessage}) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <Container onSubmit={(event) => {
            event.preventDefault()
            filterBy(inputValue)
            setMessage(inputValue)
        }}>
            <input type="text" placeholder="Digitar Pesquisa" onChange={(event) => setInputValue(event.target.value)}/>
            <button type="submit" className="button--green">Pesquisar</button>
        </Container>
    )
}

export default InputSearch