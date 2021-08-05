import React,{Fragment} from 'react'
import Navbar from '../reuseables/Navbar'
import ShowCase from '../Layout/ShowCase'
import Qoute from '../Layout/Qoute'

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <ShowCase/>
            <Qoute/>
        </Fragment>
    )
}

export default Home
