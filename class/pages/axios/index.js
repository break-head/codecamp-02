import axios from 'axios'
import { useState } from 'react'

export default function AxiosPage(){

    const [data, setData] = useState('')
    const [data2, setData2] = useState('')

    const handleClickData = async () => {
        const aaa = await axios.get('https://koreanjson.com/posts')
        // console.log(aaa.data)
        // console.log(aaa.data[0])
        // console.log(aaa.data[1])
        setData(aaa.data[3].title) 
        setData2(aaa.data[3].content)
    }

    return (
        <>
            <div>{data}</div>
            <hr />
            <div>{data2}</div>
            <hr />
            <button onClick={handleClickData}>데이터 불러오기</button>
        </>
    )

}