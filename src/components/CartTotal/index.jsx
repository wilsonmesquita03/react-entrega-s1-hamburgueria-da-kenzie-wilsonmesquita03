import { Container } from "./style"

const CartTotal = ({price, setCartList}) => {
    function resetList(){
        setCartList([])
    }

    return (
        <Container>
            <div>
                <h5>Total</h5>
                <h6>R$ {price.toFixed(2).replace('.',',')}</h6>
            </div>
            <button className="button--grey" onClick={resetList}>Remover todos</button>
        </Container>
    )
}

export default CartTotal