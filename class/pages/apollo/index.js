import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
export default function ApolloPage() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [school, setSchool] = useState();

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeAge(event) {
    setAge(event.target.value);
  }
  function onChangeSchool(event) {
    setSchool(event.target.value);
  }

  const [createBoard] = useMutation(
    gql`
      mutation createProfile($name: String, $age: Int, $school: String) {
        createProfile(name: $name, age: $age, school: $school) {
          message
        }
      }
    `
  );

  async function onClickSubmit() {
    try {
      console.log(name, age, school);
      await createBoard({
        variables: {
          name: name,
          age: Number(age),
          school: school,
        },
      });
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div></div>
      이름:
      <input type="text" onChange={onChangeName} />
      <br />
      나이:
      <input type="text" onChange={onChangeAge} />
      <br />
      학교:
      <input type="text" onChange={onChangeSchool} />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>
  );
}
