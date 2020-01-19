import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 9fa40b2ddc787e7fc3b38fb56bbd5359b67f333808f1ed03928e02975d5f0a24' 
    }
});