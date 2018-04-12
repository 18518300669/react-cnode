import React from 'react'
import './footer.scss'

var Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-box">
                <li className="cnode">
                    <span>CNode社区提供API</span>
                    <a href="https://cnodejs.org" target="_blank" rel="noopener noreferrer">
                        <img src="https://cnodejs.org/public/images/cnodejs.svg" alt="cnode" />
                    </a>
                </li>
                <li className="cnode">
                    <span>github-pages提供网站托管</span>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../../assets/images/github.svg')} alt="github" />
                    </a>
                </li>
            </ul>            
        </footer>
    );
}

export default Footer;
