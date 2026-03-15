import api from "../API";

const masterLogin = async ({ ship_email, ship_key }) => {
    try {
        const response = await api.post("/login", {
            role: "master",
            ship_email,
            ship_key
        });
        const token = response.data.accessToken;
        localStorage.setItem("accessToken", token);
        return token;
    } catch (error) {
        return null;
    }
};

export default masterLogin;