const React = require('react')
const {memoize, search} = require('cerebro-tools')

import { API_KEY } from './constants.js'
import icon from 'assets/icon.png'

const order = 2;

const getKnowledgeGraph = (query) => {
    const url = `https://kgsearch.googleapis.com/v1/entities:search?query=${encodeURIComponent(query)}&key=${API_KEY}&limit=1`
    return fetch(url)
        .then(response => response.json())
        .then(response => {
            if (!response.itemListElement.length) {
                throw 'no results'
            }

            return response.itemListElement[0].result
        })
}

const plugin = ({term, display, actions}) => {
    getKnowledgeGraph(term).then(result => {
        console.log(result)
        display({
            id: result.id,
            icon,
            order,
            title: result.name,
            subtitle: 'Google Knowledge Graph',
            onSelect: () => {
                actions.open(result.url)
            },
            // getPreview: () => <Preview query={term} key={term} search={search} />
        })
    })
}

module.exports = {
  fn: plugin
}
