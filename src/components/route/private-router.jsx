
import React from 'react'
import { Navigate } from 'react-router-dom'
import { urls } from '../../configs/urls.config'
import MainLayoutContainer from '../../containers/layout/main-layout.container'
import { useSelector } from 'react-redux'

export default function PrivateRouter({ children }) {
    const { signedIn } = useSelector(state => state.auth)

    if (!signedIn) {
        return <Navigate to={urls.LOGIN} replace />
    }
    return (
        <MainLayoutContainer>{children}</MainLayoutContainer>
    )
}
