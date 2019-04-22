import axios from 'axios'
export default axios.create({
  dbUrl = "http://localhost:3000/users/login"
})
