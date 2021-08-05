import React,{Fragment} from 'react'
import Navbar from '../reuseables/Navbar'
import ShowCase from '../Layout/ShowCase'
import Qoute from '../Layout/Qoute'
import Brief from '../Layout/Brief'

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <ShowCase/>
            <Qoute/>
            <Brief/>
        </Fragment>
    )
}

export default Home
