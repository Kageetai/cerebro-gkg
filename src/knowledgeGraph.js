import { API_KEY } from './constants.js'
import { memoize } from 'cerebro-tools'

/**
 * Search for an term in the Google Knowledge Graph
 *
 * @param  {String} query
 * @return {Promise}
 */
const knowledgeGraph = (query) => {
    const url = `https://kgsearch.googleapis.com/v1/entities:search?query=${encodeURIComponent(query)}&key=${API_KEY}&limit=1`
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            const result = (response.itemListElement.length) ? response.itemListElement[0].result : null
            if (!result || !(result.url || (result.detailedDescription && result.detailedDescription.url))) {
                throw 'no results or usuable data'
            }

            return result
        })
}

export default memoize(knowledgeGraph, {
    length: false,
    promise: 'then',
    // Expire features cache in 1 day
    maxAge: 24 * 60 * 60 * 1000
})
