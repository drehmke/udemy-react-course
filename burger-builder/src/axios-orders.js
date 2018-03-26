import axios from 'axios'

const ordersAxios = axios.create({
  baseURL: 'https://react-burger-builder-21383.firebaseio.com'
})

export default ordersAxios
