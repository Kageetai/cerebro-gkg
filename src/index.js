const React = require('react')

import getKnowledge from './knowledgeGraph'
import icon from 'assets/icon.png'

const order = 2;

const plugin = ({term, display, actions}) => {
    getKnowledge(term).then(result => {
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
