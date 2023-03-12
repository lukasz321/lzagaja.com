import React, { useState } from "react";
import styled from "styled-components";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const AddButton = styled.button`
  margin: 0px 0px;
  padding: 0px 0px;
  width: 313px;
`;

const Button = styled.button`
color: black;
`;

const Input = styled.input`
  width: 140px;
  border: 1px solid;
  border-radius: 3px;
`;

function Table(props) {
  const [rows, setRows] = useState(
    props.initState
  );

  const handleAddRow = () => {
    const newRow = {
      id: Date.now(),
      name: "",
      object: "",
    };
    setRows([...rows, newRow]);
  };

  const handleRemoveRow = (id) => {
    if (rows.length > 1) {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
    };
  };
  
  const handleShuffle = () => {
    const shuffledNames = shuffleArray(rows.map(obj => obj.object));
    
    for (const [index, element] of rows.entries()) {
      rows[index].object = shuffledNames[index];
      handleInputChange(element.id, "object", shuffledNames[index]);
    }


  };

  const handleInputChange = (id, fieldName, value) => {
    const updatedRows = rows.map((row) => {
      if (row.id === id) {
        return { ...row, [fieldName]: value };
      }
      return row;
    });
    setRows(updatedRows);
  };

  return (
    <div>
      <table>
        {props.example ? null : 
        <thead>
          <tr>
          <th>Subject</th>
            <th>Object (Shuffled)</th>
          </tr>
        </thead>
}
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <Input
                  type="text"
                  value={row.name}
                  onChange={(e) =>
                    handleInputChange(row.id, "name", e.target.value)
                  }
                />
              </td>
              <td>
                <Input
                  type="text"
                  value={row.object}
                  onChange={(e) =>
                    handleInputChange(row.id, "object", e.target.value)
                  }
                />
              </td>
              <td>
                <button onClick={() => handleRemoveRow(row.id)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        {props.example ? null : 
          <AddButton onClick={handleAddRow}>+</AddButton>
        }
      
      {props.example ? null : <h2></h2>}
      <Button onClick={handleShuffle}>{props.example ? props.example : "Shuffle Options"}</Button>
    </div>
  );
}

export default Table;
