import React from 'react'

const Cadastro = () => {
    return (
        <div className="container">
            <h1>Cadastrar Veículo</h1>
            <form>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="opcao1" defaultChecked/>
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Radio padrão
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Senha</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Senha"/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Cadastro