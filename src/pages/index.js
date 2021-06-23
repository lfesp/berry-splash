import * as React from "react"
import "../styles.scss"

// markup
const IndexPage = () => {
  return (
    <main className="layout">
      {/* <header>
        <div className="container">
          <div className="row">
            <a>ONE</a>
            <a>TWO</a>
          </div>
        </div>
      </header> */}
      <div className="container">
        <span className="logo">
          <svg width="100" height="100" viewBox="0 0 108 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M78.8663 42.8213C78.9512 43.875 78.9946 44.9404 78.9946 46.0159C78.9946 67.6664 61.4434 85.2176 39.7929 85.2176C18.1424 85.2176 0.591187 67.6664 0.591187 46.0159C0.591187 24.3654 18.1424 6.81421 39.7929 6.81421C41.3828 6.81421 42.9506 6.90886 44.491 7.09284C38.405 12.1382 37.1854 17.9201 36.7553 24.2405L36.7525 24.2458L36.7445 24.2613C40.541 33.1788 45.2116 42.2046 66.2195 43.6736C70.3348 43.9613 74.626 43.5956 78.8663 42.8213ZM99.6635 0.444768C99.2046 0.336427 98.6897 0.218355 98.1241 0.09375C98.5517 0.187946 98.9503 0.27841 99.3176 0.363758C99.4362 0.391311 99.5515 0.418328 99.6635 0.444768ZM87.9134 13.3026L87.1261 14.0664C81.2063 11.5265 74.826 9.57308 68.6343 9.14012C52.4141 8.00589 45.1001 12.0949 40.3931 18.297C40.9224 16.2587 41.7368 14.3805 43.0245 12.6067C45.519 9.1704 50.0668 5.75767 58.8104 2.66141C67.2362 -0.322309 77.7982 -0.129331 86.4969 0.912605C90.801 1.42815 94.5578 2.13959 97.2361 2.7218L97.4551 2.76963C97.2144 3.07095 96.9577 3.38896 96.6857 3.7219C94.5748 6.30562 91.5541 9.77066 87.9134 13.3026ZM97.2133 22.2913C97.2986 22.3412 97.3837 22.391 97.4684 22.4409C100.164 24.0267 102.582 25.5911 104.611 26.9747C105.591 27.6434 106.478 28.2683 107.26 28.831C107.45 28.9681 107.634 29.1014 107.811 29.2308C107.618 29.3342 107.417 29.4407 107.209 29.5499C104.54 30.9553 100.764 32.8149 96.3506 34.6278C87.4387 38.2884 76.2691 41.6125 66.4118 40.9232C56.2796 40.2147 50.4799 37.7133 46.7922 34.642C43.4347 31.8457 41.5544 28.3667 39.8338 24.4596C46.8427 23.1297 53.4977 23.9623 61.384 24.9489C67.5492 25.7202 74.4669 26.5856 82.8945 26.5856C69.8593 20.7623 54.0672 17.5497 40.7135 22.7738C42.6367 19.5454 44.8196 16.9264 48.0185 15.0374C52.1012 12.6266 58.2404 11.1771 68.442 11.8905C78.2993 12.5798 88.8975 17.426 97.2133 22.2913Z" fill="white"/>
          </svg>
          <span className="logo-text">berry</span>
        </span>
        <div className="row">
          <div>
          <p className="buttontext">Thanks for clicking our code! We’re a group of students who want to make healthy eating fast and simple. You’d really help us out by scheduling an interview and letting us know how our product can help you best. </p> 
          <p className="buttontext">We’d love to chat with you over the phone or on Zoom! This would be a 15 minute informal chat to just hear what you have to say about nutrition and shopping. (We learn about your opinions and you get to rant!)</p>
          </div>
          <a className="button" href="https://calendly.com/berryhealthy" target="_blank" rel="noreferrer"><span>schedule interview</span></a>

          {/* <a className="button" href="https://calendly.com/berryhealthy" target="_blank" rel="noreferrer"><span>take survey</span></a> */}
        </div>
        
        <a className="contact" href = "mailto:contact@berryhealthy.co?subject=hi berry team!&body=I'm interested in trying the beta version of your product!">interested in the beta? <br /> reach out to us!</a>
      </div>
      
    </main>
  )
}

export default IndexPage
