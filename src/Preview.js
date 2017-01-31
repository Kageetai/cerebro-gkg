import React, { Component, PropTypes } from 'react'
import Preload from 'Preload'
import getKnowledge from 'knowledgeGraph'
import styles from 'styles.css'

export default class Preview extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
    }

    renderResult(result) {
        const image = (result.image && result.image.contentUrl) ? <img src={result.image.contentUrl} alt={result.name.contentUrl}/> : ''
        return (
            <div className={styles.gkg}>
                <h1>{result.name}</h1>
                <h2>{result.description}</h2>
                {image}
                <p>{result.detailedDescription.articleBody}</p>
                <em>Source: <a href={result.detailedDescription.url}>{result.detailedDescription.url}</a></em>
            </div>
        )
    }

    render() {
        const { query } = this.props
        return (
            <Preload promise={getKnowledge(query)}>
                {(result) => this.renderResult(result || [])}
            </Preload>
        )
    }
}
