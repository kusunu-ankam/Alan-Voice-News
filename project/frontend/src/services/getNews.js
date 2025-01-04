import axios from 'axios';
export  function getNews(category){
    const API_Key='67bb6108d32844f6ac36a02b0ed3d80f'
    const API_Endpoint='https://newsapi.org/v2/top-headlines?country=in&category='+category
    return axios.get(API_Endpoint+'&apikey='+API_Key)
  
}