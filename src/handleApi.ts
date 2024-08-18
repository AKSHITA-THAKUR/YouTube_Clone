// const API_KEY = "AIzaSyDKNhKAy9GTucs5RCjvnVJtfPV-5oC7WmU"
import axios from "axios";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const Categories = async () => {
	
	try {
		const response = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${API_KEY}`
		);

		return response.data.items;
	} catch (error) {
		console.error("Error in categories API", error);
	}
};

export const MostPopular = async () => {

	try {
		const popular = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=50`
		);
		return popular.data.items;
	} catch (error) {
		console.error("Error in Most Popular Api", error);
	}
};

export const singleVideo = async (id:string | undefined) => { 
	try {
		const video = await axios.get(
			` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
		);
		return video.data.items;
	} catch (error) {
		console.error("Error in single video API", error);
	}
};

export const channel = async(id:string) =>{
	try{
      const details = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`)
	  console.log("This is from handleApi",details.data.items)
	  return details.data.items
	}
	catch(error){
		console.error("Error in channel API",error);
	}
}

export const search = async(word:string|undefined) =>{ //API for search
	try{
   const search = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${word}s&key=${API_KEY}`)
   console.log("The result from your query is ",search.data.items)
   return search.data.items
	}
	catch(error){
		console.error("Error in search API",error);
	}
}