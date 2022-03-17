import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import api from "../Api";
import Table from "./Table";

const Main = () => {
  const [resultDados, setResultDados] = useState([]);
  useEffect(() => {
    api.get("/main").then((res) => {
      setResultDados(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Table dados={[resultDados]} coluna={["nome", "tipo", "fornecedor"]} />
    </>
  );
};

export default Main;
