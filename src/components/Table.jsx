import React from "react";
import { Div, TableC, Th, Td } from "../css/Table.css.js";

const Table = (props) => {
  return (
    <Div>
      <TableC>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>Life Time</Th>
            <Th>Next IO</Th>
            <Th>IO</Th>
            <Th>STATUS</Th>
            <Th>QUANTUM</Th>
          </tr>
        </thead>
        <tbody>
          {props.list !== "None" ? (
            props.list?.map((i) => {
              return (
                <tr key={i.id}>
                  <Td>{i.id}</Td>
                  <Td>{i.lt}</Td>
                  <Td>{i.nextIO}</Td>
                  <Td>{i.IO}</Td>
                  <Td>{i.status}</Td>
                  <Td>{i.quantum}</Td>
                </tr>
              );
            })
          ) : (
            <tr>
              <Td>None</Td>
            </tr>
          )}
        </tbody>
      </TableC>
    </Div>
  );
};

export default Table;
