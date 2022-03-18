import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import api from "../Api";
import Table from "./Table";
import Modal from "./Modal";

const Main = () => {
  const history = useHistory();
  const [productRegister, setProductRegister] = useState({
    nome: "",
    tipo: "",
    fornecedor: "",
  });
  const [resultDados, setResultDados] = useState([]);
  useEffect(() => {
    api.get("/main").then((res) => {
      setResultDados(res.data.result);
    });
  }, []);

  const handleOnClick = (event) => {
    event.preventDefault();
    api.post('/main/insert', resultDados).then((res) => {
      if (!res.data.error){
        history.push('/main');
      }
    })
  };

  return (
    <>
      <Header />
      <Modal
        buttonName={"Criar novo produto"}
        titulo={"Adicionar novo produto"}
        onclick={handleOnClick}
      >
        <div className="row">
          <div className="col-6">
            Nome:
            <input
              type="text"
              name="nome"
              id=""
              className="form-control"
              value={productRegister.nome}
              onChange={(e) =>
                setProductRegister({ ...productRegister, nome: e.target.value })
              }
            />
          </div>
          <div className="col-6">
            Tipo:
            <input
              type="text"
              name="tipo"
              id=""
              className="form-control"
              value={productRegister.tipo}
              onChange={(e) =>
                setProductRegister({ ...productRegister, tipo: e.target.value })
              }
            />
          </div>
        </div>

        <div className="row">
          Fornecedor:
          <input
            type="text"
            name="fornecedor"
            id=""
            className="form-control"
            value={productRegister.fornecedor}
            onChange={(e) =>
              setProductRegister({ ...productRegister, fornecedor: e.target.value })
            }
          />
        </div>
      </Modal>
      <Table dados={resultDados} coluna={["nome", "tipo", "fornecedor"]} />
    </>
  );
};

export default Main;
