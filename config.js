import axios from 'axios'

const API = axios.create({
  baseURL: "http://192.168.100.37/empresa_xyz/",
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  maxBodyLength: Infinity
})

export default API