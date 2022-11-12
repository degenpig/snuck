import React from 'react'
import Header from '../components/layout/Header'
import HomeWelcome from '../components/Home/HomeWelcome'
import HomeTopSlider from '../components/Home/HomeTopSlider'
import HomeRoadMap from '../components/Home/HomeRoadMap'
import HomeMeetTeam from '../components/Home/HomeMeetTeam'
import '../assets/css/home.css'
import Footer from '../components/layout/Footer'

const Home = () => {
    return (
        <>
            <div className="home-layout min-h-screen overflow-unset">
                {/* Marketplace Header */}
                <Header />
                {/* Main Content */}
                <div className="main-part flex">
                    <HomeWelcome />
                    <HomeTopSlider />
                    <HomeRoadMap />
                    <HomeMeetTeam />
                </div>
                {/* Marketplace Footer */}
                <Footer />
            </div>
        </>
    )
}

export default Home;