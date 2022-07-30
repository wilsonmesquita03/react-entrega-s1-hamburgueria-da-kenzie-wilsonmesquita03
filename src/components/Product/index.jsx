import { DivImg, DivInfo, ContainerLi } from "./style"

const Product = ({product, addToCart}) => {
    const {name, category, price, img} = product

    return (
        <ContainerLi>
            <DivImg>
                <img src={img} alt="" />
            </DivImg>
            <DivInfo>
                <h3>{name}</h3>
                <p>{category}</p>
                <h6>R$ {price.toFixed(2)}</h6>
                <button className="button--green" onClick={() => addToCart(product)}>Adicionar</button>
            </DivInfo>
        </ContainerLi>
    )
}

export default Product