import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-body">
                        <div className="footer-content">Stay up to date<br /><span className="display-block">Gym’ Newsletter</span></div>
                        <div className="footer-content">
                            <div className="contact"><span>Name</span><input type="text" name="name" /></div>
                            <div className="contact"><span>Email</span><input type="email" name="email" /></div>
                            <div className="count-me-btn">
                                <button className="btn-count text-center" tabIndex="0" type="button">COUNT ME IN!</button>
                            </div>
                        </div>
                    </div>
                    <div className="footer-image"><img src="./Shredded Ape NFT Staking_files/cropped-transparent_logo.f034a238.png"
                        alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Footer;