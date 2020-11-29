import React from 'react'

export const Navbar: React.FC = () => (
    <nav>
        <div className="nav-wrapper">
            <div className="brand-log">FILMS PROJECT</div>
            <ul className="catalog-navigation">
              <li>
                <a href="/">LIST OF FILMS</a>
              </li>
              <li>
                <a href="/">ABOUT FILMS</a>
              </li>
            </ul>
        </div>
    </nav>
)