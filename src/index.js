const React = require('react')

import getKnowledge from './knowledgeGraph'
import Preview from './Preview'
import icon from 'assets/icon.png'

const order = 11;

const plugin = ({term, display, actions}) => {
    getKnowledge(term).then(result => {
        display({
            id: result.id,
            icon,
            order,
            title: result.name,
            subtitle: 'Google Knowledge Graph',
            onSelect: () => {
                actions.open(result.url || result.detailedDescription.url)
            },
            getPreview: () => <Preview
                name={result.name}
                description={result.description}
                image={(result.image && result.image.contentUrl) ? result.image.contentUrl : null}
                article={result.detailedDescription.articleBody}
                articleUrl={result.detailedDescription.url}  />
        })
    }).catch(((message) => console.log(`Google Knowledge Graph: ${message}`)))
}

module.exports = {
    fn: plugin
}
