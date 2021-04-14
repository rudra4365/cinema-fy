import axios from "axios";

// base url to make hit the movie database API with
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})
// call it like: instance.get('/this_is_later_part_of_URL')

export default instance;