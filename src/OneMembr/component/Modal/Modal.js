import React, { useState } from "react";
import "./modal.css";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useRegister } from "../../hooks/useRegister";
export const Modal = ({ removeBtn }) => {
  const { loading, error, Register } = useRegister();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const postUser = (e) => {
    e.preventDefault();
    Register(username, email);
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="form-container">
          <h3>Pre-register for the upcoming link</h3>
          <label>
            Username <br />
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Email <br />
            <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button className="sumbit-btn">Submit</button>
          <button onClick={removeBtn} className="remove-btn">
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
};

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid lightgray;
  outline: none;
`;
