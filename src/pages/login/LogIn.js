import React, {useState} from 'react';
import './logIn.css';
import { Form} from "react-bootstrap";
import Input from "../../components/Input";
import { ButtonV2 } from "../../components/ButtonsComponent";
import LoginUser from "./LoginUser";

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        await LoginUser(email, password)
    };

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return(
        <div className="LogIn">
            <div className='LogIn-Form bg-light50'>
                <h3 className='LogIn-card-title tx-green Caption'><b>Увійти</b></h3>
                <div className='LogIn-input-group'>
                    <div className='LogIn-inp1'>
                        <Input
                            width={240}
                            type='email'
                            placeholder='Пошта'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className='LogIn-inp2'>
                        <Input
                            width={240}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Пароль'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <Form>
                            <Form.Check className='checkbox' type='checkbox' >
                                <Form.Check.Input  type='checkbox' isValid onChange={toggleShowPassword}/>
                                <Form.Check.Label className='Small'>Показати пароль</Form.Check.Label>
                            </Form.Check>
                        </Form>
                    </div>
                </div>
                <div className='LogIn-button-container'>
                    <ButtonV2 onClick={handleLogin} title='Продовжити' width={240}/>
                    <a className='link tx-green Button-text-link-2' href='/signup'>немає акаунту</a>
                </div>
            </div>
        </div>
    );
}
export default LogIn;