import axios from 'axios';

async function registerUser() {
    try {
        const response = await axios.post('http://20.244.56.144/evaluation-service/register', {
            "email": "meghapapola05@gmail.com",     
            "name": "Megha Papola",                   
            "mobileNo": "7465962348",
            "githubUsername":"Megha-Papola",
            "rollNo":"2294045" ,
            "accessCode":"QAhDUr" 
        });
        console.log('Full Response:', response.data);
        const { clientId, clientSecret } = response.data;

        
        console.log('Client ID:', clientId);
        console.log('Client Secret:', clientSecret);

        return { clientId, clientSecret };
    } catch (error: any) {
        console.error('Failed');
        console.error(error.response?.data || error.message);
    }
}

registerUser();
