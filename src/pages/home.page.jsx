import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../store/auth/authSlice'

function HomePage() {
    const dispatch = useDispatch()
    return (
        <div className='home-page'>
            <Button onClick={() => dispatch(logoutSuccess())}>Log Out</Button>
        </div>
    )
}

export default HomePage