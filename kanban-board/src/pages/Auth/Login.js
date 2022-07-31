import React, { useEffect, useState } from 'react';
import InputText from '../../components/input/InputText';
import Button from '../../components/elements/button/Button';
import { useAuthorization } from './action';
import './index.css';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const { LoginAction } = useAuthorization();

  const _onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const _submit = async () => {
    if (form.email && form.password) {
      await LoginAction(form);
    } 
  };

  return (
    <div className='login-page'>
      <div className='form-container'>
        <h1 className='text-center'>Welcome Back</h1>
        <div className='form-content'>
          <InputText
            inputClassName='login-input'
            label="Email"
            name="email"
            placeholder="Type ur email"
            type="email"
            value={form.email}
            onChange={_onChange}
          >
          </InputText>
          <InputText
            inputClassName='login-input'
            label="Password"
            name="password"
            placeholder="Type ur password"
            type="password"
            value={form.password}
            onChange={_onChange}
          >
          </InputText>
        </div>
        <Button text='Login' className='btn-login' onClick={() => {_submit()}} type="submit"></Button>
      </div>
    </div>
  );
};

export default Login;
