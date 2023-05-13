import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useState } from 'react';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="auth-page-container">
        <div className="intro-paragraph">
          <h1>
            PawPals
          </h1>
          <p>Log in or Register</p>
        </div>
        <div className="auth-form-container">{showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}</div>
        <p>Or</p>
        <div className="change-sign-in-btn">
          <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Register' : 'Log In'}</h3>
        </div>
      </div>
    </>
  );
}
