import axios from "../../Interceptor/Interceptor";
const getClients = async () => {
  try {
    const result = await axios.get("/api/v1/therapies/clients/");
    console.log(result.data);
    
    return result.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getTherapists = async (params) => {
    try {
      const result = await axios.get("/api/v1/therapies/therapists/",{params:params});
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };
  const ChangeUserPassword = async (passwords) => {
    try {
      const result = await axios.patch("/api/v1/users/myprofile/password/change/",passwords,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }});
      console.log(result.data);
      return result.data.results;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  export {getClients,getTherapists,ChangeUserPassword}