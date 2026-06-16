import React from 'react'
import { useEffect } from 'react'

const UseEffectOne = () => {
    const [count, setCount] = React.useState(0)
    const [count2, setCount2] = React.useState(0)

    console.log("rendering component")



    // useEffect(() => {
    //     side effect
    //     return () => {
    //         clean-up/unmounting function
    //     }
    // }, [])  //dependency array

    useEffect(() => {
        alert("button clicked")
    }, [count])

    const handleclick = () => {
        setCount(count + 1)
    }
    const handleadd = () => {
        setCount2(count2 + 1)
    }

    return (
        <>
            <div>UseEffectOne</div>
            <h1> Count:{count}</h1>
            <button onClick={handleclick}>Counter Button</button>
            <h1> Count2:{count2}</h1>
            <button onClick={handleadd}>Counter Button 2</button>
        </>
    )
}

export default UseEffectOne



// Task 1 ---- create two counter button when you click counter button the pop will appear every time
//  and when you click on the second counter button pop should not appear