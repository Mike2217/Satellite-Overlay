import axios from 'axios'


export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/DATA`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const grabUserData = async () => {
  const response = await axios.get(BASE_URL, config)
  return response.data
}

export const postUserData = async (body) => {
  const response = await axios.post(BASE_URL, { fields: body }, config)
  return response.data
}

export const editUserData = async (body, id) => {
  const response = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config)
  return response.data
}

export const deleteUserData = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`, config)
  return response.data
}