const apiKey = import.meta.env.VITE_RAPID_API_KEY

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }
};
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
    'x-rapidapi-key': apiKey
  }
};




export const fetchData = async (url, option) => {
  const response = await fetch(url, option)
  const data = await response.json()

  return data
}