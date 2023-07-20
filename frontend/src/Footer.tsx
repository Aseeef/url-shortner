import React from 'react';
function Footer() {
    return <>
        <footer className="text-center bg-dark" style={{width: "100%"}}>
            <div
                className="container text-white py-4 py-lg-5"
                style={{width: "100%"}}
            >
                <ul className="list-inline">
                    <li className="list-inline-item me-4">
                        <a className="link-light" href="#">
                            About
                        </a>
                    </li>
                    <li className="list-inline-item me-4">
                        <a className="link-light" href="#">
                            Privacy
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="link-light" href="#">
                            Terms of Service
                        </a>
                    </li>
                </ul>
                <p className="text-light mb-0">Copyright © 2023 Aseefian</p>
            </div>
        </footer>
    </>
}

export default Footer