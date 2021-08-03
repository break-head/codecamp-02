import styled from '@emotion/styled'

const MyImg = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
`

const MyImg2 = styled.img`
    width: 30px;
    height: 30px;
    background-color: green;
    position: absolute;
    top: 0px;
    left: 0px;
`

const MyDiv = styled.div`
    width: 100px;
    height: 100px;
    /* background-color: red; */
    background-image: url("/mypage/profile.png");
    background-size: 100%;
`

const Background = styled.img`
    width: 100px;
    height: 100px;
    position: relative;
`

const BackgroundTrans = styled.div`
    background-color: rgba(0, 0, 0, 0.4) ;
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
`

export default function ImagePage(){


    return (
        <>
            <MyImg src="/mypage/profile.png" />
            <MyImg2 src="/mypage/marker.png"/>
            <MyDiv />
            <Background src="/mypage/profile.png"/>
            <BackgroundTrans/>
            <div>이미지연습</div>
        </>
    )
}