import axios from "../../Interceptor/Interceptor";

const getTickets = async () => {
    try {
      const result = await axios.get(`/api/v1/tickets/`);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
  const getTicketsPriority = async () => {
    try {
      const result = await axios.get(`/api/v1/tickets/priority`);
 
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const getTicketsDepartment = async () => {
    try {
      const result = await axios.get(`/api/v1/tickets/department`);
  
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const getTicketDetails = async (id) => {
    try {
      const result = await axios.get(`/api/v1/tickets/details/${id}`);

      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const PostNewTicket = async (detail) => {
    try {
      const result = await axios.post(`/api/v1/tickets/`,detail,{
        headers: {
          'Content-Type': 'multipart/form-data',
        }},);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  }
  export {getTickets,getTicketDetails, getTicketsPriority,getTicketsDepartment,PostNewTicket }