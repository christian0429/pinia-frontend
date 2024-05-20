const axios = require('axios');
const fs = require('fs');

const fetchData = async () => {
    try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json', {
            params: {
                rss_url: 'https://www.hankyung.com/feed/it',
                api_key: 'rooa9cfdnkctmsnpiftxnozlzfyaunxvudzwajoq'
            }
        });
        const data = JSON.stringify(response.data, null, 2);
        fs.writeFileSync('rss_data.json', data);
        console.log('Data saved to rss_data.json');
    } catch (error) {
        console.error('Error fetching and saving data:', error);
    }
};

fetchData();
