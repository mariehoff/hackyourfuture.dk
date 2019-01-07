import React from 'react'
import Logo from "../Layouts/Logo"

const MyParallax = _ =>
  <div className="container">
    {/*language=CSS*/ }
    <style jsx>{ `
        .container {
            display: flex;
            flex-direction: column;
            height: 60vh;
            background: fixed url('/static/background.jpg') no-repeat center center/cover;
            alin-items: center;
            jsutify-content: center;
            text-align: center;
            position: relative;
            left: 0;
            right: 0;
            top: 0;
            z-index: -1;
        }

        .logo {
            max-height: 50vh;
            max-width: 50vh;
            display: block;
            margin: auto;
        }
    ` }
    </style>
    {/*<img className="logo" src="/static/HYF_LOGO.png"/>*/ }
    <div className="logo">
      <Logo fill="rgba(255,255,255,0.9)"/>
    </div>
  </div>

export default MyParallax
