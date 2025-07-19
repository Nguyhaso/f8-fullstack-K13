import axios from 'axios';
const api = axios.create({
  baseURL: 'https://thpt2025-english-jsonserver.onrender.com',
})



export const getMethod = async (endpoint: string) => {
  try {
    const {data} = await api.get(endpoint)
    return data
  } catch (e) {
    console.log(e)
  }

  return null
}

export const postMethod = async (endpoint: string, payload: any) => {
  try {
    const {data} = await api.post(endpoint, payload)
    return data
  } catch (e) {
    console.log(e)
  }

  return null
}
