import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../styles/RegisterStyles.css";

const Register = () => {

    const onFinishHandler = (values) => {
        console.log(values);
    }

    return (
        <>
            <div className="form-container">
                <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
                    <h3 className="bg-primary text-white text-center p-1">Register Form</h3>
                    <Form.Item label="Name" name="name">
                        <Input type="text" required placeholder="enter username" />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input type="email" required placeholder="enter email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" required placeholder="enter password" />
                    </Form.Item>
                    <button className="btn btn-primary" type="submit">Register</button>
                    <div className="mt-2">
                        Already registered? <Link to="/login" className="m-2">Login here</Link>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Register;
