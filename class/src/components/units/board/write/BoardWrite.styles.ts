import styled from '@emotion/styled'

export const MyInput = styled.input``

interface IProps {
    active: boolean
}
export const MyButton = styled.button`
    color: ${(props: IProps) => props.active ? 'red' : 'blue'} // color: yellow
`



/* 

"안녕하세요" + aaa + "입니다~"

`안녕하세요${aaa}입니다~` 

*/