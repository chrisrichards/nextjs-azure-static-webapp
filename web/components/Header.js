import React from 'react';

const Header = () => {

    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="0 0 20 20" role="img" fill="currentColor">
                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto flex-grow-1 mb-2 justify-content-left mb-md-0">
                        <li><a href="/" className="nav-link px-2 text-white">Media Files</a></li>
                    </ul>

                    <div className="text-end">
                        <button type="button" className="btn btn-outline-light me-2">Login</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header