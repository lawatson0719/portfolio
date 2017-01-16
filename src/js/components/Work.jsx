var React = require('react');
var $ = require('jQuery');

var BurgerMenu = require('./BurgerMenu.jsx');

function getActiveClass (path) {
    var current = window.location.hash.slice(1);
    return current === path ? 'active' : '';
}

var HomePage = React.createClass({

  getInitialState: function () {
    return {
      expanded: false
    }
  },


  render: function() {
    return (
      <div>
        <BurgerMenu />
          <main className="projects">
            <section className="project-container" id="sortie">
              <a href className="project-link">
                {/* <img class="project-image" src="./images/Sortie.png"> */}
                <div className="project-info">
                  <h4 className="title">Sortie</h4>
                  <div className="hidden">
                    <h4>Group Project</h4>
                    <p>A single page application that maps and shows detailed information of all U.S. Drone strikes from 2002 - present.
                    </p>
                    <h4>Skills</h4>
                    <p>HTML, CSS, Javascript, React, Experience Design</p>
                  </div>
                </div>
              </a>
            </section>
            <section className="project-container" id="star-wars">
              <a href="http://star-wars-app-lwdtw.herokuapp.com/" className="project-link">
                {/* <img class="project-image" src="./images/Starwars.png"> */}
                <div className="project-info">
                  <h4 className="title">Star Wars App</h4>
                  <div className="hidden">
                    <h4>Individual Project</h4>         
                    <p>Scroll through the Star Wars Gallaxy and see what resides on each Planet. <br />** Currently working on better functionality.</p>
                    <h4>Skills</h4>
                    <p>HTML, CSS, Javascript, React</p>
                  </div>
                </div>
              </a>
            </section>
            <section className="project-container" id="marvel">
              <a href="http://marvel-app-lwdtw.herokuapp.com/" className="project-link">
                {/* <img class="project-image" src="./images/Marvel.png"> */}
                <div className="project-info">
                  <h4 className="title">Marvel Battle <br />App</h4>
                  <div className="hidden">
                    <h4>Group Project</h4>
                    <p>Pick your battle! Select Marvel characters to go head to head in battle. <br />** Currently working on responsiveness</p>
                    <h4>Skills</h4>
                    <p>HTML, CSS, Sketch</p>
                  </div>
                </div>
              </a>
            </section>
            <section className="project-container" id="weather">
              <a href className="project-link">
                {/* <img class="project-image" src="./images/Weather.png"> */}
                <div className="project-info">
                  <h4 className="title">Weather App</h4>
                  <div className="hidden">
                    <h4>Group Project</h4>
                    <p>View weather information in a pre-determined area.
                    </p>
                    <h4>Skills</h4>
                    <p>HTML, CSS, Photoshop</p>
                  </div>
                </div>
              </a>
            </section>
            <section className="project-container" id="todos">
              <a href="https://lawatson0719.github.io/to-do-list/" className="project-link">
                {/* <img class="project-image" src="./images/Todos.png"> */}
                <div className="project-info">
                  <h4 className="title">Todos</h4>
                  <div className="hidden">
                    <h4>Group Project</h4>
                    <p>A single page app that allows you to add items to a list, remove them, and mark complete or incomplete.
                    </p>
                    <h4>Skills</h4>
                    <p>HTML, CSS</p>
                  </div>
                </div>
              </a>
            </section>
          </main>
        </div>
    );
  },

  handleClick: function () {
    $('button').click(function() {
      $(this).toggleClass('expanded').siblings('div').slideToggle();
    });
  }

});

module.exports = HomePage;