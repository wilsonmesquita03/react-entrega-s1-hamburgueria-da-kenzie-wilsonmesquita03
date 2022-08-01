import './App.css';
import Header from './components/Header';
import GlobalStyle from './components/GlobalStyle/styles';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';
import { useState, useEffect } from 'react';
import api from "./services/index"

function App() {
  const [cartList, setCartList] = useState([])
  const [listaProdutos, setListaProdutos] = useState([])
  const [listaFiltrada, setListFiltered] = useState([])
  const [message, setMessage] = useState()

  useEffect(() => {
    api.get("")
    .then(res => setListaProdutos(res.data))
  },[])

  useEffect(() => {
    filterBy('')
  },[listaProdutos])

  function filterBy(filterBy){
    const newArr = listaProdutos.filter((produto) => produto.name.toLowerCase().includes(filterBy.toLowerCase()))

    setListFiltered(newArr)
  }
  

  function addToCart(product){
    if(!cartList.includes(product)){
      setCartList((oldList) => [product, ...oldList])
    }
  }

  function removeFromCart(produto){
    const newArr = cartList.filter(elem => elem !== produto)

    setCartList(newArr)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header filterBy={filterBy} setMessage={setMessage}></Header>
      <main>
        <div className='container'>
          {message && (
            <div className='message'>
              <h1>Resultados para:</h1>
              <h1 id='message'>{message}</h1>
            </div>
          )}
          <ProductList listaFiltrada={listaFiltrada} addToCart={addToCart}/>
        </div>
        <Cart cartList={cartList} removeFromCart={removeFromCart} setCartList={setCartList}/>
      </main>
    </div>
  );
}

export default App;
