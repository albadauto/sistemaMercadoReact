import React, { useEffect, useState } from "react";

const Table = ({ dados, coluna }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          {coluna.map((col, i) => {
            return <th scope="col" key={Math.random()}>{col}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {dados.map((res) => {
        })}
        <tr></tr>
        
      </tbody>
    </table>
  );
};

export default Table;
