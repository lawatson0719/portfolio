var React = require('react');



function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <title>LW Designs the Web</title>
        <link rel="stylesheet" type="text/css" href="/lib/normalize.css" />
        <link rel="stylesheet" type="text/css" href="/dist/main.css" />
        <main>
          <section className="top-photo">
            <div className="image-container">
              <img src="./images/headShot.png" />
            </div>
            <div className="shadow" />
          </section>
          <section className="banner-background">
            <h1>Lauren Watson</h1>
            <h3>Web Developer &amp; Designer</h3>
          </section>
          <nav className="home-nav">
            <ul>
              <li>
                <div className="circle">
                  <img src="./images/puzzle.png" id="puzzle" />
                </div>
                <a href="#/work">Work</a>
              </li>
              <li>
                <div className="circle">
                  <img src="./images/info.png" id="info" />
                </div>
                <a href="./staticAbout.html">About</a>
              </li>
              <li>
                <div className="circle">
                  <img src="./images/sheet2.png" id="page" />
                </div>
                <a href="./staticResume.html">Resume</a>
              </li>
              <li>
                <div className="circle">
                  <img src="./images/envelope.png" id="envelope" />
                </div>
                <a href="./staticContact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </main>
      </div>
    );
  }
});

module.exports = HomePage;