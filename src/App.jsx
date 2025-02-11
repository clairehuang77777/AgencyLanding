import './App.css'

function App() {
  return (
    <>
  <div className="container">
    <div className="header">
      <div className="title">
        <img className="logoSvg" src="/logo.svg"></img>
      </div>
      <div className="hamburger">
        <input type="checkbox" id="menu-toggle" className="menu-checkbox"></input>
        <label for="menu-toggle" className="menu-icon">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </label>
        <nav className="menu">
          <ul>
            <li><a href="#">MAIN</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">SERVICE</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </div>
      <div className="kv-area">
        <img className="kv-orange" src="https://i.ibb.co/hRzDJxSR/image-header.jpg"></img>
        <p className="kv-text">WE ARE <br></br>CREATIVES</p>
        <p className="kv-text-arrow">↓</p>
      </div>
      <div className="egg-glass-area">
        <div className="egg-photo">
          <img className="egg-img" src="https://i.ibb.co/DgwTjg29/image-transform.jpg"></img>
        </div>
        <div className="egg-text">
          <p className="egg-text-1">Transfrom your <br></br> brand</p>
          <p className="egg-text-2">We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <p className="egg-text-3">LEARN MORE</p>
        </div>
        <div className="glass-photo">
          <img className="glass-img" src="https://i.ibb.co/G3MXwZgZ/image-stand-out.jpg"></img>
        </div>
        <div className="glass-text">
          <p className="glass-text-1">Stand out to the right audience</p>
          <p className="glass-text-2">Learn more Stand out to the right audience Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places</p>
          <p className="glass-text-3">LEARN MORE</p>
        </div>
      </div>
      <div className="fruit-area">
        <div className="cherry-area">
          <img className="cherry-img" src="https://i.ibb.co/xqj1gYj2/image-graphic-design.jpg"></img>
          <p className="cherry-text-1">Graphic Design</p>
          <p className="cherry-text-2">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
        </div>
        <div className="orange-area">
          <img className="orange-img" src="https://i.ibb.co/yBNjhRq3/image-photography.jpg"></img>
          <p className="orange-text-1">Photography</p>
          <p className="orange-text-2">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
      <div className="client-area">
        <div className="client-title">CLIENT TESTIMONIALS</div>
        <div className="client-1">
          <img className="client-1-photo" src="https://i.ibb.co/5h3dhWdR/image-emily.jpg"></img>
          <div className="client-1-word">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</div>
          <div className="client-1-name">Emily R.</div>
          <div className="client-1-position">Marketing Director</div>
        </div>
        <div className="client-2">
          <img className="client-2-photo" src="https://i.ibb.co/qLZj8XZy/image-thomas.jpg"></img>
          <div className="client-2-word">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. </div>
          <div className="client-2-name">Thomas S.</div>
          <div className="client-2-position">Chief Operating Officer</div>
        </div>
        <div className="client-3">
          <img className="client-3-photo" src="https://i.ibb.co/v4Vnvp1t/image-jennie.jpg"></img>
          <div className="client-3-word">Operating Officer Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!</div>
          <div className="client-3-name">Jennie F.</div>
          <div className="client-3-position">Business Owner </div>
        </div>
      </div>
      <div className="four-grid-area">
        <img className="four-grid-area-milk" src="https://i.ibb.co/4ZSxryYt/image-gallery-milkbottles.jpg"></img>
        <img className="four-grid-area-orange" src="https://i.ibb.co/qqTgXYn/image-gallery-orange.jpg"></img>
        <img className="four-grid-area-icecream" src="https://i.ibb.co/HLmZq9Yk/image-gallery-cone.jpg"></img>
        <img className="four-grid-area-whitebox" src="https://i.ibb.co/B5P7qSz5/image-gallery-sugar-cubes.jpg"></img>
      </div>
      <div className="footer">
        <div className="footer-title">
          <img className="logo" src="/logo.svg"></img>
        </div>
        <div className="footer-tab">
          <a href="" className="footer-tab-about">About</a>
          <a href="" className="footer-tab-services">Services</a>
          <a href="" className="footer-tab-projects">Projects</a>
        </div>
        <div className="footer-link">
          <a href="" className="footer-link-fb">
            <img className="fblogo" src="/icon-facebook.svg"></img>
          </a>
          <a href="" className="footer-link-IG">
            <img className="iglogo" src="/icon-instagram.svg"></img>
          </a>
          <a href="" className="footer-link-Twitter">
            <img className="twitterlogo" src="/icon-twitter.svg"></img>
          </a>
          <a href="" className="footer-link-pinterest">
            <img className="pinterestlogo" src="/icon-pinterest.svg"></img>
          </a>
        </div>
      </div>
  </div>
    </>
  )
}

export default App
