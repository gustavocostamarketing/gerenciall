import { BEARER_TOKEN } from "./secrets"
/**
 * Respond with hello worker text
 * @param {Request} request
 */
export const handleRequest = async (request) => {
    const url = `https://api.twitter.com/2/tweets/1362056727408033795`
    let params = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer '+ BEARER_TOKEN, 
      }
    }
    const twitResult = await fetch(url, params).then(resp => resp.json())
    return new Response('Hello Twitter!', {
      headers: { 'content-type': 'text/plain' },
    })
  }