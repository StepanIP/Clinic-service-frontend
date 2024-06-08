import axios from "axios";
import UnpackingUser from "../utils/UnpackingUser";

const {token} = UnpackingUser();

const api = axios.create({
    baseURL: 'http://localhost:8081/api/',
    headers: {'Authorization': 'Bearer ' + token}
});
export default api