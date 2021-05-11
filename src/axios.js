import axios from 'axios';


const firebaseInstance = axios.create({
    baseURL: 'https://library-management-syste-ff275-default-rtdb.firebaseio.com/'
});


export default firebaseInstance;