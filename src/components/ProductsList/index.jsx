import Product from "../Product"

import { ContainerUl } from "./style"

const ProductList = ({addToCart, listaFiltrada}) => {
    
    return (
        <>
            <ContainerUl>
                {listaFiltrada?.map((product, key) => {
                    return (
                        <Product addToCart={addToCart} product={product} key={key} />
                    )
                })}
            </ContainerUl>
        </>
    )
}

export default ProductList