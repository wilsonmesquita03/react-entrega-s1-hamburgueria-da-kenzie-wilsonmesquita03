import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import { ContainerCart, Ul } from "./style"

const Cart = ({cartList, removeFromCart, setCartList}) => {
    const price = cartList.reduce((acc, cur) => {
        return acc + cur.price
    }, 0)

    return (
        <ContainerCart>
            <div className="cart">
                <div className="cart--header">
                    <h3>Carrinho de compras</h3>
                </div>
                {
                cartList.length ?
                    <>
                        <Ul>
                            {cartList.map((produto, key) => <CartProduct key={key} produto={produto} removeFromCart={removeFromCart}/>)}
                        </Ul>
                        <CartTotal price={price} setCartList={setCartList}/>
                    </>
                    :
                    <div className="cart--content">
                        <h3>Sua sacola está vazia</h3>
                        <h6>Adicione itens</h6>
                    </div>
                }
            </div>
        </ContainerCart>
    )
}

export default Cart