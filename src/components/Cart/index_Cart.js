import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as S from './style_Cart';
import Footer from '../Footer/Footer';
//rgba(232, 34, 46, 0.5);
//mock carrinho
//[{"id": 1, "product": "Cart", "price": 15, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}, {"id": 2, "product": "Cart", "price": 13, "image": "https://www.teclasap.com.br/wp-content/uploads/2011/05/hamburger.jpg"}]

const Index_Cart = (props) => {
  const history = useHistory();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')));
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [paymentMethod, setPaymentMethod] = useState('');
  const address = JSON.parse(localStorage.getItem('user'));
  const [newCart, setNewCart] = useState([]);
  const auxNewCart = []
  let restaurant

  const choosePaymentMethod = (event) => {
      setPaymentMethod(event.target.value);
  }

  useEffect(()  => {

  const listCart = () => {
    cart.forEach(item => {
        console.log("item forEach " + JSON.stringify(item))
        const inArray = auxNewCart.findIndex(index => {
            return index.id === item.id
        })
        console.log(inArray)
        if(inArray === -1){
            const prod = {
                ...item, qtd: 1
            }
            auxNewCart.push(prod)
        } else {
            auxNewCart.map(product => {
                if(product.id === item.id){
                    return {...product, qtd: product.qtd++}
                }
                return product
            })
        }
        });

        setNewCart(auxNewCart)
    }

    if(cart !== null){
        listCart();
    }

  },[])
  console.log(newCart)

  const removeProduct = (id) => {
      console.log(id)
    console.log(cart)
    const removeCart = cart.filter(item => item.product.id !== id)
    setNewCart(removeCart);
    //localStorage.removeItem('cart');
    for(let i = 0; i < cart.length; i++){
        if(cart[i].product.id === id)
        {
          cart.splice(i, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }
  }

  const confirmBuy = (products) => {
    const product = products.map(item => {
        console.log(item.products)
        return {"id": item.product.id,
                "quantity": item.quantity};
    })

    const dataBuy = {
        "products": product,
            "paymentMethod": paymentMethod 
        } 
    console.log(dataBuy)
        const dataInicial = new Date(1594994968394)
        const dataFinal = new Date(1595007421284)
        //console.log(dataInicial)
        //console.log(dataFinal)
    if(paymentMethod !== ''){
      axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/restaurants/${restaurant}/order`, 
        dataBuy, 
        {headers: {
            auth: token
        }})
        .then(response => {
            console.log(response)
            //console.log(response.order.createdAt);
            //console.log(response.order.expiresAt);
            localStorage.removeItem('cart');
            history.push('/feed')
        }).catch(error => {
            console.log(error.message)
        })
    }
    
  }

  if (cart === null || newCart.length === 0 ){
    return(<><S.DivContainer>
        <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
        <S.DivTitleEndereco>
            <S.Pdefault>Endereço de entrega</S.Pdefault>
            <S.PAddress>{address.address}</S.PAddress>
        </S.DivTitleEndereco>
        <S.DivCart>Carrinho vazio</S.DivCart>
        <S.DivFreight>frete R$0,00</S.DivFreight>
        <S.DivPayment>
            <div>SubTotal</div>
            <div>R$0,00</div>
        </S.DivPayment>
        <S.DivText>Forma de pagamento</S.DivText>
        <S.DivHr><hr /></S.DivHr>
        <div>
            <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
        </div>
        <div>
            <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="creditcard" onChange={choosePaymentMethod}/> Cartão de crédito
        </div>
        <S.DivDataPayment>
            <S.DivButton>
                <S.ButtonCartEmpty>Confirmar</S.ButtonCartEmpty> 
            </S.DivButton>
        </S.DivDataPayment>
        </S.DivContainer>
        <S.DivFooter>
            <Footer />
        </S.DivFooter>
        </>)
  } else {
      return (
      <>
        <S.DivContainer>
            <S.DivSubHeader>Meu carrinho</S.DivSubHeader>
            <S.DivTitleEndereco>
                <S.Pdefault>Endereço de entrega</S.Pdefault>
                <S.PAddress>{address.address}</S.PAddress>
            </S.DivTitleEndereco>
            <S.DivCartFull>
              {cart.length > 0 && cart.map((product) => {
                restaurant = product.restautant
                return (
                <S.DivCard key={product.product.id}>
                    <S.ImgProduct src={product.product.photoUrl} />
                    <S.DivProductDetail>
                        <S.QuantityProducts>{product.quantity}</S.QuantityProducts>
                        <S.TitleProduct>{product.product.name}</S.TitleProduct>
                        <S.DescProduct>{product.product.description}</S.DescProduct>
                      <S.BottomCard>  
                        <S.PriceProduct>R$ {product.product.price.toFixed(2)}</S.PriceProduct>
                        <S.ButtonDeleteProduct onClick={() => removeProduct(product.product.id)}>remover</S.ButtonDeleteProduct>
                      </S.BottomCard>
                    </S.DivProductDetail>
                </S.DivCard>)
            })}
            </S.DivCartFull>
            <S.DivFreight>Frete R$6,00</S.DivFreight>
            <S.DivPayment>
                <div>SubTotal</div>
                <div>R${(newCart.reduce((acumulador, valor) => acumulador + valor.product.price, 6)).toFixed(2)}</div>
            </S.DivPayment>
            <S.DivText>Forma de pagamento</S.DivText>
            <hr />
            <div>
                <S.InputRadio data-testid="money" name="paymentMethod" type="radio" id="money" value="money" onChange={choosePaymentMethod}/> Dinhero
            </div>
            <div>
                <S.InputRadio data-testid="card" name="paymentMethod" type="radio" id="card" value="creditcard" onChange={choosePaymentMethod}/> Cartão de crédito
            </div>  
          <S.DivDataPayment>
            <S.DivButton>
                <S.ButtonCartFull onClick={() => {confirmBuy(cart)}}>Confirmar</S.ButtonCartFull> 
            </S.DivButton>
          </S.DivDataPayment> 
        </S.DivContainer>
        <S.DivFooter>
            <Footer />
        </S.DivFooter>
      </>
        )
  }
}

export default Index_Cart;