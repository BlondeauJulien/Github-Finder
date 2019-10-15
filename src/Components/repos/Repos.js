import React, { Fragment, useContext } from 'react'
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const Repos = () => {
    const githubContext = useContext(GithubContext);
    const { repos } = githubContext
    return (
        <Fragment>
        <h2 style={{ textAlign: 'center'}}>Last 5 Updated Repositories</h2>
        {repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)}
        </Fragment>
    )
}


export default Repos
