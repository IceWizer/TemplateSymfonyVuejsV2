import {getData, removeJwt, setJwt} from "@/auth/utils/useJwt";
import {removeUserData, setUserData} from "@/auth/utils/useUserData";

const login = (jwt) => {
    setJwt(jwt);
    setUserData(getData());
}

const logout = () => {
    removeJwt();
    removeUserData();
}

export {
    login,
    logout
}