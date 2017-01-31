const React = require('react')

import Preview from './Preview'
import icon from 'icon.png'

const id = 'gkg';
const order = 11;

const plugin = ({term, display, actions}) => {
    display({
        id,
        icon,
        order,
        title: term,
        subtitle: 'Google Knowledge Graph',
        onSelect: () => {
            // actions.open(result.url || result.detailedDescription.url)
        },
        getPreview: () => <Preview query={term} />
    })
}

module.exports = {
    fn: plugin
}
