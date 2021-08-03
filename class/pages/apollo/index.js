import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [school, setSchool] = useState()



    function onChangeName(event){
        setName(event.target.value)
    }
    function onChangeAge(event){
        setAge(event.target.value)
    }
    function onChangeSchool(event){
        setSchool(event.target.value)
    }

    const [asdf] = useMutation(
        gql`
            mutation  zzzzzzzzzzzz($aaa: String,     $bbb: Int,         $ccc: String){

                createProfile(name:$aaa,         age:$bbb,       school:$ccc){
                    message
                }
            }
        `
    )

    function onClickSubmit(){
        console.log(name)
        console.log(age)
        console.log(school)
        asdf({
            variables: {
                aaa: name,
                bbb: Number(age),
                ccc: school
            }
        })
    }
    return (
        <>
            <div></div>
            이름: <input type="text" onChange={onChangeName} /><br />
            나이: <input type="text" onChange={onChangeAge} /><br />
            학교: <input type="text" onChange={onChangeSchool} /><br />
            <button onClick={onClickSubmit}>데이터 입력하기</button>
        </>
    )

}