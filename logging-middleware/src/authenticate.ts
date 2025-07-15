import axios from 'axios';


async function getAccessToken() {
    try {
        const response = await axios.post('http://20.244.56.144/evaluation-service/auth', {
            "email": "meghapapola05@gmail.com",
            "name": "Megha Papola",
            "rollNo": "2294045",
            "accessCode":"QAhDUr",
            "clientID": "e7cba0b9-2e03-43a4-b229-2bcd690e84f9",
			"clientSecret": "gtaQMPZyhpheqnwB"


        });

        console.log('Access Token:', response.data.access_token);
        return response.data.access_token;
    } catch (error: any) {
        console.error('Authorization Failed:', error.response?.data || error.message);
    }
}

getAccessToken();
