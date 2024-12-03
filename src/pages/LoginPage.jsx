import "../styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="main-container">
      <div className="left-container">
        <img src="/left-banner.png" className="image-banner" />
      </div>
      <div className="right-container">
        <img src="/logo.png" className="logo" />
        <div className="header-wrapper">
          <p className="title">Welcome Back!</p>
          <p className="subtitle">Please enter your details</p>
        </div>
        <div className="input-wrapper">
          <input type="email" placeholder="Email" className="input-element" />
          <input
            type="password"
            placeholder="Password"
            className="input-element"
          />
          <div className="action-wrappers">
            <div className="checkbox-wrapper">
              <input type="checkbox" id="remember" />
              <label htmlFor="" className="checkbox-label">
                Remember for 30 days
              </label>
            </div>
            <p className="forgot-pws-txt">Forgot password ?</p>
          </div>
        </div>
        <button className="login-btn">Log in</button>
        <div className="signup-action-wrapper">
          Didn&apos;t have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
