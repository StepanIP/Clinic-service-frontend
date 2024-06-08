import React, { useState } from 'react';
import './signUp.css';
import { Form } from "react-bootstrap";
import Input from "../../components/Input";
import { ButtonV2 } from "../../components/ButtonsComponent";
import SingUpUser from "./SingUpUser";

const SignUp =() => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSingUp = async () => {
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPass);

        await SingUpUser(
            name,
            surname,
            patronymic,
            email,
            password,
            confirmPass
        )
    }

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return(
        <div className="SignUp">
            <div className='SignUp-Form bg-light50'>
                <h3 className='Card-title tx-green Caption'><b>Реєстрація</b></h3>
                <div className='SignUp-input-group'>
                    <div className='SignUp-inp1'>
                        <Input
                            width={320}
                            type='text'
                            placeholder='Ім`я'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <Input
                            width={320}
                            type='text'
                            placeholder='Прізвище'
                            onChange={e => setSurname(e.target.value)}
                            value={surname}
                        />
                        <Input
                            width={320}
                            type='text'
                            placeholder='По батькові'
                            onChange={e => setPatronymic(e.target.value)}
                            value={patronymic}
                        />
                    </div>
                    <div className='SignUp-inp2'>
                        <Input
                            width={320}
                            type='email'
                            placeholder='Пошта'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <Input
                            width={320}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Пароль'
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <Input
                            width={320}
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Повторіть пароль'
                            onChange={e => setConfirmPass(e.target.value)}
                            value={confirmPass}
                        />
                        <Form>
                            <Form.Check className='checkbox' type='checkbox' >
                                <Form.Check.Input  type='checkbox' isValid onChange={toggleShowPassword}/>
                                <Form.Check.Label className='Small'>Показати пароль</Form.Check.Label>
                            </Form.Check>
                        </Form>
                    </div>
                </div>
                <div className='SignUp-button-container'>
                    <ButtonV2 onClick={handleSingUp} title='Продовжити' width={320}/>
                    <a className='link tx-green Button-text-link-2' href='/login'>є акаунту</a>
                </div>
            </div>
        </div>
    );
};
export default SignUp;