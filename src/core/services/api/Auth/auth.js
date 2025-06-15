import { clearStorage, getItem, setItem } from "../../common/storage.services";
import axios from "../../Interceptor/Interceptor";

const LoginApi = async (user) => {
  try {
    const response = await axios.get("/api/v1/sso/dev/login", { params: user });
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
    // toast(error.response.data.detail);
    return error;
  }
};
const LogOut = async (user) => {
  const refresh = { refresh_token: getItem("refresh_token") };
  try {
    const response = await axios.get("/api/v1/sso/logout", { params: refresh });
    console.log(response);
    clearStorage()
    return response?.data;
  } catch (error) {
    console.log(error);
    // toast(error.response.data.detail);
    return error;
  }
};
const getProfile = async () => {
  try {
    const response = await axios.get("/api/v1/users/myprofile/");
    console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const refreshToken = async () => {
  const refresh = { refresh_token: getItem("refresh_token") };
  try {
    const response = await axios.get("/api/v1/sso/dev/refresh", {
      params: refresh,
    });
    // set the refresh token to LS
    setItem("access_token", response.data.access_token);
    setItem("refresh_token", response.data.refresh_token);
    return;
  } catch (error) {
    console.log(error);
  }
};
const TherapistRegister = async (details) => {
  console.log(details);
  try {
    const result = await axios.post(
      "/api/v1/therapies/registration/",
      details,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const ClientRegister = async (details) => {
  console.log(details);
  try {
    const result = await axios.post(
      "/api/v1/users/myprofile/client/registration/",
      details,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};



const SendPrices = async (details) => {
  console.log(details);
  debugger;
  try {
    const result = await axios.post(
      "/api/v1/therapies/therepists/pricing/add",
      details,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export {
  LoginApi,
  LogOut,
  refreshToken,
  getProfile,
  TherapistRegister,
  SendPrices,
  ClientRegister,
};
