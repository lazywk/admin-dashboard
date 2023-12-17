
import React from 'react'
import { Navigate } from 'react-router-dom'
import { urls } from '../../configs/urls.config'
import { isLoginning } from '../../main'

export default function PrivateRouter({ children }) {
    if (!isLoginning) {
        return <Navigate to={urls.LOGIN} replace />
    }
    return (
        <>{children}</>
    )
}
