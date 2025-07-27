import React from 'react';
import './AuthPage.css';

const RegisterPage = () => {
  return (
    <div className="auth-container">
      <h2>Đăng ký tài khoản</h2>
      <form className="auth-form">
        <input type="text" placeholder="Tên người dùng" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Mật khẩu" required />
        <input type="password" placeholder="Nhập lại mật khẩu" required />
        <button type="submit">Đăng ký</button>
      </form>
      <p>Bạn đã có tài khoản? <a href="/login">Đăng nhập</a></p>
    </div>
  );
};

export default RegisterPage;
