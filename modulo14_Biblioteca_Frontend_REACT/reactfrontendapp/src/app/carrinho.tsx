"use client";
import React from "react";

export default function Carrinho() {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <>
      <nav className="navbar navbar-expand-md bg-light border-bottom border-body sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Loja WA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/carrinho">
                  Carrinho
                </a>
              </li>
            </ul>

            <button className="btn btn-dark">Sair</button>
          </div>
        </div>
      </nav>

      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th>Produto</th>
                      <th>Valor Unitário</th>
                      <th>Quantidade</th>
                      <th>Valor Total</th>
                      <th>Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr key="1">
                      <td>Notebook 1</td>
                      <td>R$ {(1500).toFixed(2)}</td>
                      <td>2</td>

                      <td>R$ {valorTotalProduto(1500, 2).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Remover
                        </button>
                      </td>
                    </tr>

                    <tr key="1">
                      <td>Notebook 2 </td>
                      <td>R$ {(1500).toFixed(2)}</td>
                      <td>2</td>

                      <td>R$ {valorTotalProduto(1500, 2).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Remover
                        </button>
                      </td>
                    </tr>

                    <tr key="1">
                      <td>Notebook 3</td>
                      <td>R$ {(1500).toFixed(2)}</td>
                      <td>3</td>

                      <td>R$ {valorTotalProduto(1500, 3).toFixed(2)}</td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Remover
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
              <p className="card-text fw-medium">Quantidade total: 7</p>
              <p className="card-text fw-medium">
                Valor total: R${(10500).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}