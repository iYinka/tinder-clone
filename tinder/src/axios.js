import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinder-create.herokuapp.com'
  // http://localhost:5001  https://tinder-create.herokuapp.com
})

export default instance; 