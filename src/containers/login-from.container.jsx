import React, { useState } from 'react'
import LoginFromComponent from '../modules/logn-from.component'
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/auth/authSlice';

export default function LoginFromContainer() {
    const [messageApi, contextHolder] = message.useMessage();
    const [loginLoading, setLoginLoading] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = async (values) => {
        setLoginLoading(true)
        setTimeout(() => {
            messageApi.open({
                type: 'success',
                content: 'This is a success message',
            });
            setTimeout(() => {
                setLoginLoading(false)
                dispatch(loginSuccess('fsdkofdsnkf'))
            }, 1000);
        }, 1000);
    }

    return (
        <div className='login-form-container'>
            {contextHolder}
            <LoginFromComponent loading={loginLoading} onSubmit={handleSubmit} />
        </div>
    )
}
