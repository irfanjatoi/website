import React from 'react'
import './App.css'

export default (props) => {
  return (
    <div>
      <div className='App-header1'>
        <img className='App-logo' src='./images/deNoah_logo.jpg' alt='' />
        <h3>Overview</h3>
        <h3>DeFi</h3>
        <h3>NFT</h3>
        <h3>PMS</h3>
        <h3>Enterprise</h3>
        <button>Connect Wallet</button>
      </div>
      {props.children}
      <div>
        <div className='footer'>
          <div className='footer_comp'>
            <h1>About Us</h1>
            <p>Careers</p>
            <p>Business Contact</p>
            <p>Community</p>
            <p>deNoah Blog</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Announcements</p>
            <p>News</p>
            <p>Notices</p>
          </div>
          <div className='footer_comp'>
            <h1>Products</h1>
            <p>Careers</p>
            <p>Business Contact</p>
            <p>Community</p>
            <p>deNoah Blog</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Announcements</p>
            <p>News</p>
            <p>Notices</p>
          </div>
          <div className='footer_comp'>
            <h1>Service</h1>
            <p>Downloads</p>
            <p>Business Contact</p>
            <p>Community</p>
            <p>deNoah Blog</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Announcements</p>
            <p>News</p>
            <p>Notices</p>
          </div>
          <div className='footer_comp'>
            <h1>Support</h1>
            <p>Give Us Feedback</p>
            <p>Business Contact</p>
            <p>Community</p>
            <p>Binance Blog</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Announcements</p>
            <p>News</p>
            <p>Notices</p>
          </div>
          <div className='footer_comp'>
            <h1>Learn</h1>
            <p>Buy BNB</p>
            <p>Buy BUSD</p>
            <p>Community</p>
            <p>deNoah Blog</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Announcements</p>
            <p>News</p>
            <p>Notices</p>
          </div>
          <div className='footer_comp_grid'>
            <h1>Community</h1>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
