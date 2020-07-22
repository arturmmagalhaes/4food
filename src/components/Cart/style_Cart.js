import styled from 'styled-components';

export const DivContainer = styled.div`
    width: 100vw;
`
export const DivSubHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.75rem;
    text-align: center;
    font-weight: bold;
`
export const DivTitleEndereco = styled.div`
    width: 100%;
    background-color: #eeeeee;
    margin-bottom: 0.5rem;
`
export const DivCart = styled.div`
    display: flex;
    height: 2.625rem;
    justify-content: center;
    align-items: center;
`
export const DivCartFull = styled.div`
    overflow: auto;
    max-height: 58vh;
    @media (min-width: 800px){
        max-height: 40vh;
    }
`
export const DivCard = styled.div`
    display: flex;
    margin: 1rem;
    height: 7rem;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    overflow: hidden;
`
export const ImgProduct = styled.img`
    width: 6rem;
    height: 7rem;
`
export const DivProductDetail = styled.div`
    width: 100%;
`
export const QuantityProducts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.063rem;
    height: 2.063rem;
    border-bottom-left-radius: 8px;
    border: solid 1px #e8222e;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    float: right;
    color: #e8222e;
`
export const TitleProduct = styled.div`
    margin: 1.125rem 1rem 0.5rem 1rem;
    height: 1.125rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: #e8222e;
`
export const DescProduct = styled.div`
    margin: 0 1rem 0 1rem;
    height: 1.875rem;
    font-family: Roboto;
    font-size: 0.75rem;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`
export const BottomCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 0.35rem 0 0 0;
`
export const PriceProduct = styled.div`
    margin: 0.25rem 1rem 0 1rem;
    width: 6rem;
    height: 1.188rem;
    font-family: Roboto;
    font-size: 1rem;
    letter-spacing: -0.39px;
    color: black;
`
export const ButtonDeleteProduct = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5.625rem;
    height: 1.938rem;
    border-top-left-radius: 8px;
    border: solid 1px #e8222e;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    bottom: 0;
    color: #e8222e;
`
export const Pdefault = styled.div`
    color: #b8b8b8;
    padding: 1rem 1rem 0 1rem;
`
export const PAddress = styled.div`
    padding: 0 1rem 1rem 1rem;
    color: black;
`
export const DivDataPayment = styled.div`
    bottom: 3rem;
    position: fixed;
    width: 100vw;
`
export const InputRadio = styled.input`
    margin: 0.5rem 0.5rem 0.5rem 1rem; 
`
export const DivText = styled.div`
    padding: 0.5rem 1rem;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`
export const DivFreight = styled.div`
    padding: 0 1rem 0.813rem 1rem;
    margin: 0 ;
    text-align: right;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
`
export const DivPayment = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
`
export const DivHr = styled.div`
    padding: 1rem;
`
export const DivButton = styled.div`
    display: flex;
    width: 100vw;
`
export const ButtonCartEmpty = styled.button`
    margin: 1rem;
    width: 100%;
    height: 2.625rem;
    background-color: rgba(232, 34, 46, 0.5);
    border-radius: 2px;
    border: 0px;
    font-family: Roboto;
    letter-spacing: -0.39px;
    font-size: 1rem;
    color: black;
    text-align: center;
`
export const ButtonCartFull = styled.button`
    cursor: pointer;
    margin: 1rem;
    width: 100%;
    height: 2.625rem;
    background-color: #e8222e;
    border-radius: 2px;
    border: 0px;
    font-family: Roboto;
    letter-spacing: -0.39px;
    font-size: 1rem;
    color: black;
    text-align: center;
`
export const DivFooter = styled.div`
    bottom: 0;
    position: fixed;
    width: 100vw;
`