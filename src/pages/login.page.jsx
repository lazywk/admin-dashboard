import AuthLayoutContainer from "../containers/layout/auth-layout.container"
import LoginFromContainer from "../containers/login-from.container"


function LoginPage() {
  return (
    <AuthLayoutContainer>
      <div className="login-page">
        <LoginFromContainer />
      </div>
    </AuthLayoutContainer>
  )
}

export default LoginPage