import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {

    const { theme, toggle, dark } = useContext(ThemeContext)

    return (
        <div className="header">
            <nav style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0px'
            }}>
                <ul>
                    <li>
                        <a href="#home" style={{background: 'rgb(219, 199, 87)'}}>Home</a>
                    </li>

                    <li>
                        <a href="#news" style={{color: theme.color}}>News</a>
                    </li>

                    <li>
                        <a href="#about" style={{color: theme.color}}>About</a>
                    </li>

                    <li>
                        <a href="#contact" style={{color: theme.color}}>Contact</a>
                    </li>
                </ul>
                
                <div className="switch-mode-bar" style={{ position: 'relative', paddingTop: '10px', paddingRight: '15px'}}>
                    <a className="switch-mode-link" href="#" onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: "none",
                            textAlign: 'center',
                            textDecoration: "none"
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? "Dark" : "Light"} mode
                    </a>
                </div>
            </nav>
        </div>
    )
}