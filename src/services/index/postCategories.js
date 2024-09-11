import axios from "axios"

export const getAllCategories = async() => {
    try{
        const {data} = await axios.get(`/api/posts-categories`);
        return data;
    }catch(error){
        console.error("Error updating post:", error.response ? error.response.data : error.message);
        if(error.response && error.response.data.message)
            throw new Error(error.response.data.message);
        throw new Error(error.message);
    }
}