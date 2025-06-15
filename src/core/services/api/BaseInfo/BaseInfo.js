import axios from "../../Interceptor/Interceptor";

const getTherapistServices = async () => {
  try {
    const result = await axios.get("/api/v1/bia/therapistservices/");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getClientSex = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/sexualorientations/");
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getClientEducation = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/usereducations/");
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getClientOccupation = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/userjobs/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getEconomicStatus = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/userecostatus/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getAddictionHistory = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/useraddictionhistory/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getMedicalHistory = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/usermedicalhistory/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getPhysicalStatus = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/userphysicalcond/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getMeritalStatus = async (user) => {
  try {
    const response = await axios.get("/api/v1/bia/usermaritalstatus/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getTasksPriority = async (details) => {
  try {
    const response = await axios.get("/api/v1/bia/taskpriorities/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getTasksTags = async (details) => {
  try {
    const response = await axios.get("/api/v1/bia/tasktags/");
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
const getTherapistDetails = async (id) => {
  try {
    const response = await axios.get(`/api/v1/therapies/therapists/${id}/`);
    return response?.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export {
  getTherapistServices,
  getClientSex,
  getClientEducation,
  getClientOccupation,
  getEconomicStatus,
  getAddictionHistory,
  getMedicalHistory,
  getPhysicalStatus,
  getMeritalStatus,
  getTasksPriority,
  getTasksTags,
  getTherapistDetails
};
