import axios from "../../Interceptor/Interceptor";
const getBlogs = async (params) => {
  try {
    const result = await axios.get("/api/v1/blogs/",{params:params});
    console.log(result.data);
    return result.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const getBlogsCategories = async () => {
  try {
    const result = await axios.get("/api/v1/blogs/categories");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const getBlogsAuthors = async () => {
  try {
    const result = await axios.get("/api/v1/blogs/authors/");
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


const getBlogsDetail = async (slug) => {
  try {
    const result = await axios.get(`/api/v1/blogs/${slug}/detail/`);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}
const PostUserReaction = async (reactions,slug) => {
debugger
  try {
    const result = await axios.post(`/api/v1/blogs/${slug}/userreaction/`,reactions,{
      headers: {
        'Content-Type': 'multipart/form-data',
      }},);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export {getBlogs,getBlogsDetail,PostUserReaction,getBlogsCategories,getBlogsAuthors}