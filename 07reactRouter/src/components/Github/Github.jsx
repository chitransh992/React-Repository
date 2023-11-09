import { useEffect, useState } from "react"
import React from 'react'

export default function Github(){
    const[data, setData] = useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/chitransh992')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    })

    return(
        <div className = "bg-blue-400 p-6 text-white text-2xl text-center">Github Followers : {data.followers}</div>
    )
}