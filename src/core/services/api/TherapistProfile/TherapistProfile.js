import axios from "../../Interceptor/Interceptor";



const getPrices = async () => {
    try {
      const result = await axios.get(`/api/v1/therapies/therepists/pricing/list`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const getMethods = async (params) => {
    try {
      const result = await axios.get(`/api/v1/bia/therapistapproaches/`,{params:params});
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  const getSpecialization= async () => {
    try {
      const result = await axios.get(`/api/v1/bia/therapistworkfields/`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  const getTPProfile= async () => {
    try {
      const result = await axios.get(`/api/v1/therapies/`);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  const editTPProfile= async (details) => {
    const formData = new FormData();
    Object.keys(details).forEach(key => {
      if (key =="therapeutic_approaches"){
        details[key].map((item,i)=>formData.append("therapeutic_approaches",item.id))
      }
      else if(key =="work_field") 
      {
        details[key].map((item,i)=>formData.append("work_field",item.id))
      }
      else if(key =="medical_record") 
        {
          details[key].map((item,i)=>formData.append("medical_record",item))
        }
      else
      {
        formData.append(key, details[key]);
      }
    });
    try {
      const result = await axios.patch(`/api/v1/therapies/change/`,formData);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  export {getPrices,getMethods,getSpecialization,getTPProfile,editTPProfile}