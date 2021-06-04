import axios from 'axios'

const baseUrl = `https://60b850a2b54b0a0017c0364e.mockapi.io`
const client = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
