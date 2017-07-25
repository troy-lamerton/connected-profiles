import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './index.css';

const Profile = ({description, ...rest}) => (
    <div className="Profile">
        <p>I am person, this be my profile</p>
        {description && <p>desc. {description}</p>}
    </div>
);

export default Profile;

Profile.propTypes = {
    description: PropTypes.string.isRequired
};
