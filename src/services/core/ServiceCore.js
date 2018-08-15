import R from 'ramda'

const fetchJson = async (url) => {
   const handShakeResponse = await fetch(url)
   const dataResponse = await handShakeResponse.json()

   return (dataResponse)
}

const getData = async (url, property, filter) => {
    const data = await fetchJson(url)
    return data.filter(filter(property))
}

const get = R.curry(getData)

export default { fetchJson, get }