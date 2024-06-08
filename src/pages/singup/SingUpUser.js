import axios from 'axios';
import {LOCALSTORE_USER} from "../../data/constants";

const SingUpUser = async (
    name,
    surname,
    fathersName,
    email,
    password,
    confirmPass
) => {
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPass);

    if (password === confirmPass){
        try {
            const resp = await axios.post('http://localhost:8081/api/v1/auth/signup',{
                name: name,
                surname: surname,
                fathersName: fathersName,
                email: email,
                password: password
            })
            const token = resp.data.token

            const codedPass = (password) => {
                const length = password.length;
                return '*'.repeat(length);
            };
            const stars = codedPass(password)
            const user = {
                email: email,
                password: stars,
                token: token
            }
            console.log(user)
            window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
        }catch (err){
            console.log(err.message)
        }
    }else {
        alert('Паролі не збігаються')
    }

}
export default SingUpUser;