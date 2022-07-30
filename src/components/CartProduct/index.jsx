import { Container, DivImg, DivInfo, DivButton, } from "./style"

const CartProduct = ({produto, removeFromCart}) => {

    const {img, name, category} = produto

    return (
    <Container>
        <div className="imgAndInfo">
            <DivImg>
                <img src={img} alt="" />
            </DivImg>
            <DivInfo>
                <h4>{name}</h4>
                <p>{category}</p>
            </DivInfo>
        </div>
        <DivButton>
            <button onClick={() => removeFromCart(produto)}>Remover</button>
        </DivButton>
    </Container>
    )
}

export default CartProduct