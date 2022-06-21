import axios from "axios";

let items = [];
async function getBeers() {
    try {
        const response = await axios.get('https://api.punkapi.com/v2/beers');
        response.data.map(item => items.push(item));
    } catch (error) {
        console.error(error);
    }
}

getBeers();

export default items;