import React,{Fragment} from 'react'
import Navbar from '../reuseables/Navbar'
import ShowCase from '../Layout/ShowCase'
import Qoute from '../Layout/Qoute'
import Brief from '../Layout/Brief'
import Scripture from '../Layout/Scripture'
import Join from '../Layout/Join'
import Footer from '../reuseables/Footer'
import Features from '../Layout/Features'

const Home = () => {
    return (
        <Fragment>
            <Navbar/>
            <ShowCase/>
            <Qoute/>
            <Brief/>
            <Scripture/>
            <Join/>
            <Features/>
            <Footer/>
        </Fragment>
    )
}

export default Home
