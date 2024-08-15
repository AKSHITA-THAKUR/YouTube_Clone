// const API_KEY = "AIzaSyDKNhKAy9GTucs5RCjvnVJtfPV-5oC7WmU"
import axios from "axios";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const Categories = async () => {
	//The above categories list
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
	//Most popular videos of feed
	try {
		const popular = await axios.get(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${API_KEY}&maxResults=50`
		);
		return popular.data.items;
	} catch (error) {
		console.error("Error in Most Popular Api", error);
	}
};

export const singleVideo = async (id:string | undefined) => { //To get the details of a specific video
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
