import axios from '@/config/httpConfig'
// import axios from 'axios'

export function fetchPermission() {
  return axios.get('/static/permission.json')
}

export function login() {
  return axios.get('/static/login.json')
}

// export function isUserExist(username) {
//   return axios.get('localhost:8081/isUserExist',{ username: username })
// }
