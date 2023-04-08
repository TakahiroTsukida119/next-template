import { useState } from 'react';

export const HamburgerMenu = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleHamburgerClick = () => {
    setIsActiveMenu(!isActiveMenu);
  };

  return (
    <>
      <header className="hamburger-menu">
        <section className="section">
          <div className="content">
            <img className="logo" src="#" alt="#" />
            <div className="hamburger-btn" onClick={handleHamburgerClick}>
              <div className={`wrap ${isActiveMenu ? '-active' : ''}`}>
                <span className="span ${isActiveMenu ? '-active' : ''}" />
              </div>
            </div>
          </div>
          <div className={`header-menu ${isActiveMenu ? '-active' : ''}`}>
            <div className="lists">
              <div className="link">
                <img className="icon" src="/icon/logout.svg" alt="logout" />
                ログアウト
              </div>
            </div>
          </div>
        </section>
        <div
          style={{ display: isActiveMenu ? 'block' : 'none' }}
          className="mask"
          onClick={handleHamburgerClick}
        ></div>
      </header>
    </>
  );
};
