import axios from "axios";

axios.defaults.baseURL= "https://pixabay.com/api/";
const KEY = '30808706-03d9568f6e15a5d7585f5680b';

const pixabayApi = async ({searchQuery}, page)=> {
    const response = await axios.get(
        `/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

    console.log(response)
    return response
}

export default pixabayApi;