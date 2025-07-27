import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Code Challenging Platform</h1>
        <p>Nền tảng luyện tập lập trình, thi đấu và phát triển kỹ năng!</p>
        <a href="/register" className="landing-btn">Bắt đầu ngay</a>
      </header>
      <section className="landing-features">
        <div className="feature">
          <h2>Kho bài tập đa dạng</h2>
          <p>Hàng trăm bài tập từ cơ bản đến nâng cao, liên tục cập nhật.</p>
        </div>
        <div className="feature">
          <h2>Trình soạn thảo trực quan</h2>
          <p>Hỗ trợ nhiều ngôn ngữ, kiểm tra kết quả tức thì.</p>
        </div>
        <div className="feature">
          <h2>Thi đấu & Xếp hạng</h2>
          <p>Tham gia thi đấu, so tài cùng bạn bè, ghi danh trên bảng xếp hạng.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>© 2025 Code Challenging. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
