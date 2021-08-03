import {useState} from 'react'

export default function State3Page() {

    const [count, setCount] = useState(7)

    function 함수(){
        setCount( count + 1  )
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={함수}>+1</button>
        </>
    )
}