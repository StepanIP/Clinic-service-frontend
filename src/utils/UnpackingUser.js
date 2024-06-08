import {LOCALSTORE_USER} from "../data/constants";

const UnpackingUser = () => {
    const storedData = window.localStorage.getItem(LOCALSTORE_USER)

    if (storedData){
        try {
            const userData = JSON.parse(storedData);
            const { email, password, token, access} = userData;

            return { email, password, token, access};
        }catch (err){
            console.log('локальне сховище',window.localStorage.getItem(LOCALSTORE_USER))
            console.error('Помилка при розпаковці даних користувача з локального сховища:', err);
        }

    }
    return { email: 'даних немає', password: 'даних немає', token: null };
}
export default UnpackingUser;