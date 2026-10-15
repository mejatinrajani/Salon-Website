
import { useState } from 'react';
import './Auth.css';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">
      <a href="/" className="auth-brand">
        <span className="auth-brand-icon">S</span>
        <span>SiteMaker</span>
      </a>

      <div className="auth-card">
        <div className="auth-heading">
          <h1>{isLogin ? 'Welcome back!' : 'Create your account'}</h1>
          <p>
            {isLogin
              ? 'Login to continue building your website.'
              : 'Get started with your business website today.'}
          </p>
        </div>

        <div className="auth-tabs">
          <button
            className={isLogin ? 'auth-tab active' : 'auth-tab'}
            onClick={() => setIsLogin(true)}
            type="button"
          >
            Login
          </button>

          <button
            className={!isLogin ? 'auth-tab active' : 'auth-tab'}
            onClick={() => setIsLogin(false)}
            type="button"
          >
            Sign Up
          </button>
        </div>

        <form
          className="auth-form"
          onSubmit={(event) => {
            event.preventDefault();
           window.location.href = '/?page=category';
          }}
        >
          {!isLogin && (
            <div className="auth-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="auth-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              minLength={6}
              required
            />
          </div>

          {isLogin && (
            <div className="auth-extra">
              <label className="remember-option">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="forgot-button"
                onClick={() =>
                  alert('Password reset will be added later.')
                }
              >
                Forgot password?
              </button>
            </div>
          )}

          <button className="auth-submit" type="submit">
            {isLogin ? 'Login to Your Account' : 'Create Account'}
            <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          {' '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <p className="auth-terms">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>

      <p className="auth-footer">
        © {new Date().getFullYear()} SiteMaker. All rights reserved.
      </p>
    </div>
  );
}

export default Auth;
