import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {
    const [seller, setSeller] = useState()
    const [productName, setProductName] = useState()
    const [productDetail, setProductDetail] = useState()
    const [productPrice, setProductPrice] = useState()

    function onChangeSeller(event){
        setSeller(event.target.value)
    }
    function onChangeProductName(event){
        setProductName(event.target.value)
    }
    function onChangeProductDetail(event){
        setProductDetail(event.target.value)
    }
    function onChangeProductPrice(event){
        setProductPrice(event.target.value)
    }

    const [asdf] = useMutation(
        gql`
            mutation       gggggggggg($aaa: String,                    $bbb: CreateProductInput!){

                createProduct(seller: $aaa,        createProductInput: $bbb){
                    _id
                    message
                }
            }
        `
    )

    function onClickSubmit(){
        asdf({
            variables: {
                aaa: seller,
                bbb: {
                    name: productName,
                    detail: productDetail,
                    price: productPrice
                }
            }
        })


    }
    return (
        <>
            <div></div>
            판매자: <input type="text" onChange={onChangeSeller} /><br />
            상품명: <input type="text" onChange={onChangeProductName} /><br />
            상품상세: <input type="text" onChange={onChangeProductDetail} /><br />
            가격: <input type="text" onChange={onChangeProductPrice} /><br />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
    )

}