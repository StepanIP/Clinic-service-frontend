import axios from 'axios';
import {LOCALSTORE_USER} from "../../data/constants";
const LoginUser = async (email, password) => {
    window.localStorage.clear()
    try {
        const resp = await axios.post('http://localhost:8081/api/v1/auth/signin', {
            email: email,
            password: password
        })
        const token = resp.data.token
        const access = resp.data.position
        console.log(access)
        const codedPass = (password) => {
            const length = password.length;
            return '*'.repeat(length);
        };
        const stars = codedPass(password)
        const user = {
            email: email,
            password: stars,
            token: token,
            access: access
        }
        console.log(user)
        window.localStorage.setItem(LOCALSTORE_USER, JSON.stringify(user))
        window.location.href = '/account';
    } catch (err) {
        console.error(err.message);
    }
}
export default LoginUser;