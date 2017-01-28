import React from 'react'

const Preview = ({name, description, image, article, articleUrl}) => {
    image = (image) ? <img src={image} alt={name}/> : '';

    return (
        <div>
            <h1>{name}</h1>
            <h2>{description}</h2>
            {image}
            <p>{article}</p>
            <em>Source: <a href={articleUrl}>{articleUrl}</a></em>
        </div>
    )
};

Preview.propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    image: React.PropTypes.string,
    article: React.PropTypes.string.isRequired,
    articleUrl: React.PropTypes.string.isRequired,
}

export default Preview;