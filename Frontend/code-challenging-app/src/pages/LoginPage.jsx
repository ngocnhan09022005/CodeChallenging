import React from 'react';
import './AuthPage.css';

const LoginPage = () => {
  return (
    <div className="auth-container">
      <h2>Đăng nhập</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng nhập</button>
      </form>
      <p>Chưa có tài khoản? <a href="/register">Đăng ký</a></p>
    </div>
  );
};

export default LoginPage;
