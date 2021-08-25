import React from 'react'

const Header = () => {
    return (
        <div className="color-bg">
            <ul className="nav justify-content-end">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Botão dropdown
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Alguma ação</a>
                        <a className="dropdown-item" href="#">Outra ação</a>
                        <a className="dropdown-item" href="#">Alguma coisa aqui</a>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default Header