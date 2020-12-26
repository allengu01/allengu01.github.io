import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="footer-icons">
                        <a href="https://github.com/allengu01" id="github" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/allengu01/" id="linkedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                        <a href="mailto:allengu01@berkeley.edu" id="email" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i></a>
                    </div>
                <div className="handle">@allengu01</div>
            </div>
        </div>
    )
}

export default Footer
