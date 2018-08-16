import fjs from 'functional.js'

const fetchJson = async (url) => {
   const responseHeaders = await fetch(url)
   const statusCode = responseHeaders.status

   if(statusCode !== 200 && statusCode >= 400) {
        return handleError(statusCode)
   }
   const dataResponse = await responseHeaders.json()

   return (dataResponse)
}

const handleError = (statusCode) => {
    
    switch(true) {
        case statusCode < 500:
            throw new Error("Thats character doesnt seem to be Real. We can't find them in out Database")
        default:
            throw new Error("Looks like out system down. Please try again later") 
    }
}
const get = async (url) => {
    const data = await fetchJson(url)
    return data
}

//const get = fjs.curry(getData)

export default { fetchJson, get }