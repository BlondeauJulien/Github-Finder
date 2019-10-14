import React, { Fragment } from 'react'
import spinner from './spinner.gif'

const Spinner = () => <Fragment>
            <img src={spinner} alt="Loading..." style={{width: '200px', margin: 'auto', display: 'block'}}/>
        </Fragment>
// We dont need the return and the () because there isn't any javascript in the component

export default Spinner
