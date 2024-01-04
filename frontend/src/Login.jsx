import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/user");
        }
    }, []);

    async function login() {
        console.warn(username, password);
        let item = { username, password };
        try {
            let result = await fetch("http://localhost:8000/api/login", {
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
            console.error("Error during login:", error);
        }
    }

    return (
        <Form className="form-control px-3">
            <h3>Login</h3>
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
            <Button
                variant="primary"
                onClick={login}
                type="button" 
                className="w-100 my-2"
            >
                Login
            </Button>
        </Form>
    );
};

export default Login;
