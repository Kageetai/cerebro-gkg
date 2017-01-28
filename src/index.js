const React = require('react')

import getKnowledge from './knowledgeGraph'
import Preview from './Preview'
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
            getPreview: () => <Preview
                name={result.name}
                description={result.description}
                image={result.image.contentUrl}
                article={result.detailedDescription.articleBody}
                articleUrl={result.detailedDescription.url}  />
        })
    })
}

module.exports = {
    fn: plugin
}
