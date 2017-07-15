import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const Picture = ({src = "", types, size, geom, alt = "", caption, ...rest}) => (
    <div className="picture">
        <img src={src} className={cx(types, size)} alt={alt} {...rest} />
        {caption && <caption>{caption}</caption>}
    </div>
);

export default Picture;

Picture.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    src: PropTypes.string.isRequired,
    border: PropTypes.bool,
    thick: PropTypes.bool,
    geom: PropTypes.oneOf(['circle', 'square'])
};
