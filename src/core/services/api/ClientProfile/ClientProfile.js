import axios from "../../Interceptor/Interceptor";

const getCLProfile= async () => {
    try {
      const result = await axios.get(`/api/v1/users/myprofile/client/`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  const editCLProfile = async (details) => {
    try {
      const result = await axios.patch(`/api/v1/users/myprofile/client/change/`,details);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  

  export {getCLProfile,editCLProfile}