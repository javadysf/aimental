import { toast } from "react-toastify";
import axios from "../../Interceptor/Interceptor";
const getQuestionnaire = async () => {
  try {
    const result = await axios.get("/api/v1/questionnaire/imade");
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getClientQuestionnaire = async () => {
  try {
    const result = await axios.get("/api/v1/questionnaire/ihavetoanswer");
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const CreateQuestionnaire = async (details) => {

  const formData = new FormData();
  Object.keys(details).forEach(key => {
    if (key !="assign_to"){
      formData.append(key, details[key]);
    }
    else 
    {
      details[key].map((item,i)=>formData.append("assign_to",item))
    }
  });
  try {
    const result = await axios.post("/api/v1/questionnaire/add/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    debugger
    console.log(result);
    toast.success("Questionnaire created successfully!", {
      position: "top-right",
      autoClose: 3000,
      type: "success",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const EditQuestionnaire = async (id,details) => {
  const formData = new FormData();
  Object.keys(details).forEach(key => {
    if (key !="assign_to"){
      formData.append(key, details[key]);
    }
    else 
    {
      details[key].map((item,i)=>formData.append("assign_to",item))
    }
  });
  
  try {
    const result = await axios.put(`/api/v1/questionnaire/${id}/change/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const EditQuestion = async (qid,id,details) => {
  const formData = new FormData();
  formData.append('content', details.content);
  formData.append('answer_type', details.answer_type);
  formData.append('answer_config', JSON.stringify(details.answer_config));
  try {
    const result = await axios.put(`/api/v1/questionnaire/${qid}/change/questions/${id}/change/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    debugger
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const DeleteQuestionnaire = async (id) => {
  try {
    const result = await axios.delete(`/api/v1/questionnaire/${id}/destroy/`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const DeleteQuestion = async (questionnaireId,id) => {
  try {
    const result = await axios.delete(`/api/v1/questionnaire/${questionnaireId}/change/questions/${id}/destroy/`);
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const UpdateQuestionnaire = async (id, details) => {
  const formData = new FormData();
  details?.map((item)=>formData.append("assign_to", item))
  try {
    const result = await axios.put(
      `/api/v1/questionnaire/${id}/change/`,
      formData, {
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
const CreateQuestions = async (id, details) => {
  debugger
  try {
    const result = await axios.post(
      `/api/v1/questionnaire/${id}/change/questions/addlist/`,
      details,
      {
        headers: {
          "Content-Type": "application/json",
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
const AddQuestionToQuestionnaire = async (id, details) => {
  debugger
  try {
    const result = await axios.post(
      `/api/v1/questionnaire/${id}/change/questions/add/`,
      details,
      {
        headers: {
          "Content-Type": "application/json",
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

const uploadCover = async (file) => {
  debugger
  
  try {
    const result = await axios.post("/api/v1/documents/upload", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const getQuestionnaireDetails = async (id) => {
 debugger
  try {
    const result = await axios.get(`/api/v1/questionnaire/${id}/detail/`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const CreateAnswersheet = async (details) => {
  try {
    const result = await axios.post("/api/v1/questionnaire/useranswersheet/add/", details, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const AnswerToAnswersheet = async (details,id) => {
  debugger
  try {
    const result = await axios.post(`/api/v1/questionnaire/useranswersheet/${id}/change/answers/add/`, details, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(result);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export {
  getQuestionnaire,
  getQuestionnaireDetails,
  uploadCover,
  CreateQuestionnaire,
  CreateQuestions,
  DeleteQuestionnaire,
  UpdateQuestionnaire,
  getClientQuestionnaire,
  CreateAnswersheet,
  AnswerToAnswersheet,
  EditQuestionnaire,
  EditQuestion,
  DeleteQuestion,
  AddQuestionToQuestionnaire,
};
