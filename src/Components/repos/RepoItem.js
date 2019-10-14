import React from 'react'
import PropTypes from 'prop-types';
import { blockStatement } from '@babel/types';

const RepoItem = ( { repo } ) => {
    return (
        <div className="card" >
            <h3 style={{ textAlign: 'center'}}>
                <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem
