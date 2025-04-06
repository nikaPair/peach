import React from "react";
import "./header.scss";
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a href="">
                        <img
                            width={125}
                            src="src/assets/images/logo.png"
                            alt="logo"
                        />
                    </a>
                    <nav className="header__nav">
                        <ul className="header__links">
                            <li className="header__link">
                                <a href="" className="header__link-item">
                                    Облачные решения
                                </a>
                            </li>
                            <li className="header__link">
                                <a href="" className="header__link-item">
                                    Кибербезопасность
                                </a>
                            </li>

                            <li className="header__link">
                                <a href="" className="header__link-item">
                                    Импортозамещение
                                </a>
                            </li>
                            <li className="header__link">
                                <a href="" className="header__link-item">
                                    Цифровая трансформация
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
