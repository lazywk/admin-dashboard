
import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLoginning } from '../../main'
import { urls } from '../../configs/urls.config'

export default function PublicRouter({ children }) {
    if (isLoginning) {
        return <Navigate to={urls.HOME} replace />
    }
    return (
        <>{children}</>
    )
}
