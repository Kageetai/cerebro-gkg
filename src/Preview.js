import React from 'react'

const Preview = ({name, description, image, article, articleUrl}) => (
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <img src={image} alt={name} />
        <p>{article}</p>
        <em>Source: <a href={articleUrl}>{articleUrl}</a></em>
    </div>
);

Preview.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    article: React.PropTypes.string.isRequired,
    articleUrl: React.PropTypes.string.isRequired,
}

export default Preview;