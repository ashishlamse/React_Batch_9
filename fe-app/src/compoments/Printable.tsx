import React, { useState, useEffect } from "react";

const Printable = ({ calculateTable }: any) => {
  const [rows, setRows] = useState<Array<number>>([]);

  useEffect(() => {
    setRows(calculateTable(5));
  }, [calculateTable]);

  return (
    <>
      {rows.map((ele, index) => {
        return <p key={index}>{ele}</p>;
      })}
    </>
  );
};

export default Printable;
