import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Create() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function user() {
    console.warn(username, password, name, email);
    let item = { username, password, name, email };
    try {
      let result = await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });
      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      console.error("Result:", result);
      navigate("/user");
    } catch (error) {
      console.error("Error Add User:", error);
    }
  }

  return (
    <>
      <h1>This is form</h1>
      <Form className="form-control px-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Username</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="ex: satria_rajendra"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                    <b>Password</b>
                </Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Name</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="ex: satria rajendra"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                    <b>Email</b>
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="ex: satria rajendra"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </Form.Group>

            <Button
                variant="primary"
                onClick={user}
                type="button" 
                className="w-100 my-2"
            >
                Tambah
            </Button>
        </Form>
    </>
  );
}

export default Create;
