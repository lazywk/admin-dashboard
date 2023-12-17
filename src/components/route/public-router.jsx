
import React from 'react'
import { Navigate } from 'react-router-dom'
import { urls } from '../../configs/urls.config'
import AuthLayoutContainer from '../../containers/layout/auth-layout.container'
import { useSelector } from 'react-redux'

export default function PublicRouter({ children }) {
    const { signedIn } = useSelector(state => state.auth)

    if (signedIn) {
        return <Navigate to={urls.HOME} replace />
    }
    return (
        <AuthLayoutContainer>{children}</AuthLayoutContainer>
    )
}
