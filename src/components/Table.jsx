import React, { useEffect, useState } from "react";

const Table = ({ dados, coluna }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {coluna.map((col, i) => {
            return (
              <th scope="col" key={Math.random()}>
                {col}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {dados.map((res, i) => {
          return (
            <>
              <th key={Math.random}>{res.nome}</th>
              <th key={Math.random}>{res.tipo}</th>
              <th key={Math.random}>{res.fornecedor}</th>
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
