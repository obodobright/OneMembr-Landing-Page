import React, { useState } from "react";
import "./modal.css";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useRegister } from "../../hooks/useRegister";
import { Loader } from "../Loader/Loader";

export const Modal = ({ removeBtn }) => {
  const { loading, error, Register } = useRegister();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const postUser = (e) => {
    e.preventDefault();
    if (email === "" || username === "") {
      setErr(true);
    } else {
      Register(username, email);

      window.setTimeout(() => {
        setIsSuccess(true);
      }, 4000);
      window.setTimeout(() => {
        removeBtn();
      }, 6000);
      setEmail("");
      setUsername("");
    }
  };

  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="form-container">
          <p className="form-text">
            Thanks for showing interest in OneMembr. This version is currently going through
            internal testing,kindly drop your email so you can be alerted when it's available on the
            store
          </p>
          <label>
            Username <br />
            <Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Email <br />
            <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {err && <p style={{ color: "red", alignItems: "left" }}>Please input all valid field</p>}
          {loading ? (
            <button disabled className="sumbit-btn-disabled">
              <Loader />
            </button>
          ) : (
            <button className="sumbit-btn" onClick={postUser}>
              Submit
            </button>
          )}
          {isSuccess && <p style={{ color: "green" }}>Request submitted successfully</p>}
          {error && <p>{error}</p>}
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
