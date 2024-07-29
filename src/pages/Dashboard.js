import React from "react"
import jwt from 'jsonwebtoken'
import {useHistory} from 'react-router-dom'


const Dashboard = () => {
    const history = useHistory()

    async function populateQuote(){
        const req =  await fetch('http://localhost:1337/api/quote',{
            headers:{
                'x-access-token': localStorage.getItem('token'),
            },
        })
        const data = req.json()
        consolel.log(data)
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            const User = jwt.decode(token)
            if (!User){
                localStorage.removeItem('token')
                history.replace('/login')
            }
        } 
    },[])
    return <h2>hello world</h2>
}

export default Dashboard