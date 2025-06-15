import axios from "../../Interceptor/Interceptor";

const CreateEvent = async (details) => {
    try {
      const result = await axios.post("/api/v1/events/base/add/", details, {
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
  const getEvents = async () => {
    try {
      const result = await axios.get("/api/v1/events/");
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const CreateTasks = async (details) => {
    const formData = new FormData();
    Object.keys(details).forEach(key => {
      debugger
     if(key =="participant")
      {
        details[key].map((item,i)=>formData.append("participant",item))
      }
      else if(key =="tags")
        {
          details[key].map((item,i)=>formData.append("tags",item))
          
        }
       else{
          formData.append(key, details[key]);
        }
    });
    try {
      const result = await axios.post("/api/v1/events/tasks/add/", formData, {
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
  const getTasks = async () => {
    try {
      const result = await axios.get("/api/v1/events/tasks");
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const getTasksDetails = async (id) => {
    try {
      const result = await axios.get(`/api/v1/events/tasks/${id}`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const DeleteTask = async (id) => {
    try {
      const result = await axios.delete(`/api/v1/events/tasks/${id}/destroy/`);
      console.log(result);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const UpdateTask = async (id,details) => {
    const formData = new FormData();
    Object.keys(details).forEach(key => {
     if(key =="participant")
      {
        details[key].map((item,i)=>formData.append("participant",item))
      }
      else if(key =="tags")
        {
          details[key].map((item,i)=>formData.append("tags",item))
          
        }
       else{
          formData.append(key, details[key]);
        }
    });
    try {
      const result = await axios.patch(`/api/v1/events/tasks/${id}/change/`,formData, {
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
  }

  export {CreateEvent,getEvents,CreateTasks,getTasks,DeleteTask,getTasksDetails,UpdateTask}