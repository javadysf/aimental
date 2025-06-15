import axios from "../../Interceptor/Interceptor";
const getDocuments = async (id) => {
  if(id)
  {

    try {
      const result = await axios.get(`/api/v1/documents/get/document/${id}`);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  }

  export {getDocuments}