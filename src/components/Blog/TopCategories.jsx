import Image from "next/image"
import ADHD from "../../assets/img/blog/Addictions.png"
import { getBlogs, getBlogsCategories } from "@/core/services/api/Blogs/blogs"
import { useEffect, useState } from "react"
import { getDocuments } from "@/core/services/api/Documents/documents"
import { setitemType } from "@/redux/features/WSConnection/WebsocketSlice"

const TopCategories = ({items,setItems,setBlogs,filterParams,setFilterParams}) => {
  const [categories,setCategories] = useState()
  const [categoriPic,setCategoriPic] = useState()
  useEffect(()=>{
  const setCategoriesHandler=async(e)=>{
     setBlogs(await getBlogs(filterParams))
  }
  setCategoriesHandler()
},[filterParams])
    useEffect(()=>{
      const getBlogsCategoriesHandler = async()=>{
        setCategories(await getBlogsCategories())
      }
      getBlogsCategoriesHandler()
    },[])
    useEffect(() => {
      if (categories) {
        const fetchPictures = async () => {
          try {
            await Promise.all(
              categories?.map(async (category, index) => {
                const response = await getDocuments(category?.image);
                setCategoriPic((prevPictures) => ({
                  ...prevPictures,
                  [index]: response,
                }));
              })
            );
          } catch (error) {
            setError("Failed to fetch pictures");
          }
        };
  
        fetchPictures();
      }
    }, [categories]);

console.log(categoriPic&&categoriPic[0]?.file);

  return <div className="col gap-4 py-4">
    <h1 className="font-semibold text-3xl text-deepBlue">Top Categories</h1>
    <div className="flex gap-3 flex-wrap justify-start" >
        {categories?.map((item,index)=>
        <div key={item?.id} onClick={(e)=>setFilterParams({...filterParams,categories:e.target.name})}   className=" col gap-1 cursor-pointer">
            <Image width={132} name={item.id} height={132} alt="categories" className=" cursor-pointer rounded-full self-center w-24 h-24"  src={categoriPic&&categoriPic[index]?.file ? categoriPic[index].file : ADHD} />
            <h4 className="flex flex-wrap w-24 text-sm text-center center content-center">{item?.title}</h4>
        </div>
        )}
    </div>

    </div>;
};

export default TopCategories;