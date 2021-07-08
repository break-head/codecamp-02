import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
export default function ApolloPage() {
  const [Seller, setSeller] = useState();
  const [ProductName, setProductName] = useState();
  const [ProductDetail, setProductDetail] = useState();
  const [ProductPrice, setProductPrice] = useState();

  function onChangeSeller(event) {
    setSeller(event.target.value);
  }
  function onChangeProductName(event) {
    setProductName(event.target.value);
  }
  function onChangeProductDetail(event) {
    setProductDetail(event.target.value);
  }
  function onChangeProductPrice(event) {
    setProductPrice(event.target.value);
  }

  const [createProductInput] = useMutation(
    gql`
      mutation createProductInput(
        $Seller: String
        $CreateProductInput: CreateProductInput!
      ) {
        createProduct(
          seller: $Seller
          createProductInput: $CreateProductInput
        ) {
          message
        }
      }
    `
  );
  async function onClickSubmit() {
    try {
      console.log(Seller, ProductName, ProductDetail, ProductPrice);
      const result = await createProductInput({
        variables: {
          Seller: "오리온",
          CreateProductInput: {
            name: "초코파이",
            detail: "맛있어요",
            price: "aa",
          },
        },
      });
      console.log(result.data.createProduct);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div></div>
      판매자:
      <input type="text" onChange={onChangeSeller} />
      <br />
      제품명:
      <input type="text" onChange={onChangeProductName} />
      <br />
      제품설명:
      <input type="text" onChange={onChangeProductDetail} />
      <br />
      가격:
      <input type="number" onChange={onChangeProductPrice} />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>
  );
}
