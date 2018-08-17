const fetchJson = async url => {
   const responseHeaders = await fetch(url)
   const statusCode = responseHeaders.status

   if(statusCode !== 200 && statusCode >= 400) {
        return handleError(statusCode)
   }
   const dataResponse = await responseHeaders.json()

   return (dataResponse)
}

const handleError = statusCode => {
    switch(true) {
        case statusCode < 500:
            throw new Error("Can't find or access that Character.")
        default:
            throw new Error("Looks like our system is down. Please try again later :(") 
    }
}

const get = async url => (
    await fetchJson(url)
)

export default { get }