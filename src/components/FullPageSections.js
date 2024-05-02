import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

// const colours = ["#06d689", "#2ec4b6", "#e71d36", "#ff9f1c"]; //original colours
const colours = ["#6dd5cc", "#51e2ac", "#ee6173", "#ee6173"]; //lightened colours
const body = document.querySelector("body");
const anchors = ["Home", "Services", "About", "Portfolio", "Contact"];
let prevCol;

const getCol = () => {
  let newCol = Math.round(Math.random() * colours.length);
  while (prevCol == newCol) {
    newCol = Math.round(Math.random() * colours.length);
  }
  if (prevCol !== newCol) {
    prevCol = newCol;
    return newCol;
  }
};

const FullpageWrapper = (props, destinationSection) => (
  <ReactFullpage
    menu="#menu"
    anchors={anchors}
    navigation
    afterLoad={(origin, destination, direction) => {
      destinationSection = destination;
      destinationSection.item.classList.add("active");
      props.destination(destination.anchor);
    }}
    onLeave={(origin, destination, direction) => {
      body.style.backgroundColor = colours[getCol()];
    }}
    scrollOverflow={false}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div content={"Home"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned">
                  <h1>Dominykas.dev</h1>
                </div>
                <div className="row middle aligned">
                  <p>
                    Full Stack Developer, lover of history, philosophy and
                    politics.
                  </p>
                </div>
                <div className="row middle aligned">
                  <p>Interested in Judo, reading and video games.</p>
                </div>
                <div className="row middle aligned">
                  <p>Amateur photographer.</p>
                </div>
              </div>
            </div>
          </div>
          <div content={"Services"} className="section servicesPage">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned">
                  <h2> Services </h2>
                </div>
                <div className="ui row aligned equal width grid stackable">
                  <div className="ui column aligned">
                    <h3>
                      <i className="thumbs up outline icon" /> Website
                      Development
                    </h3>
                    <p>
                      Want a website ? Whether it 's a bespoke one page site, a
                      blog or an online shop I can lend you my knowledge and
                      skills to realise your ideas. You will be online in no
                      time!
                    </p>
                  </div>
                  <div className="ui column aligned">
                    <h3>
                      <i className="wrench check icon" /> Website Management
                    </h3>
                    <p>
                      Already own a website ? I can offer to update your website
                      to the latest tech and check for bugs.I also offer
                      suggestions to improve your SEO (Search Engine
                      Optimisation), layout or anything else that may improve
                      user experience.
                    </p>
                  </div>
                  <div className="ui column aligned">
                    <h3>
                      <i className="hourglass icon" /> Efficient Process
                    </h3>
                    <p>
                      I aim to respond to requests as soon as possible!If you
                      are looking for a quote do not hesitate to{" "}
                      <a href="mailto:contact@dominykas.dev?subject=Dominykas.dev: Services Request">
                        contact me
                      </a>
                      . After a short discussion about your requirements and
                      timelines I can give you a quote within <b>48 hours</b>
                      .You will be regularly updated throughout development and
                      be involved in the project to give feedback. <br />
                      <a href="mailto:contact@dominykas.dev?subject=Dominykas.dev: Services Request">
                        Contact me now for a quote!
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div content={"About Me"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight">
              <div className="column middle aligned fifteen wide mobile twelve wide tablet eight wide computer">
                <h2 className="header"> About Me </h2>
                <p>
                  Hi, my name is Dominykas, and I'm an experienced Full Stack
                  Engineer.
                </p>
                <p>
                  I've been developing websites since 2016, and have worked in a
                  number of industries including shipbrokeridge, fintech and
                  pharmaceuticals.
                </p>
                <p>
                  I have extensive experience designing UIs, programming
                  frontend tech using Javascript, Typescript, ReactJS, Angular,
                  Redux, SASS, LESS, JQuery. I have also worked on backend
                  development with PHP, C#, ASP .NET Core, NodeJS, ExpressJS,
                  and database management using MongoDB and SQL.
                </p>
                <p>
                  I have worked with tools such as Azure and Azure DevOps, Asana
                  and Jira and Git source control. My knowledge and experience
                  extends to but is not limited to cross-browser compatibility,
                  responsive design, working with CMS frameworks, data
                  visualisation, SEO, API design.
                </p>
              </div>
              {/* <div className="iconContainer">{skillList()}</div> */}
            </div>
          </div>
          <div content={"Portfolio"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight portfolioPage">
              <div className="column middle aligned sixteen wide mobile twelve wide tablet eight wide computer">
                <div className="row middle aligned">
                  <h2> Portfolio </h2>
                </div>
                <div className="row middle aligned">
                  <h3> Websites </h3>
                  <div>
                    <a
                      target="_blank"
                      className="delayAnimation800 animated fadeIn"
                      href="https://pablodifrancesco.com/"
                      rel="noreferrer"
                    >
                      Pablo di Francesco
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      className="delayAnimation1000 animated fadeIn"
                      href="https://thepcsurgeon.co.uk/"
                      rel="noreferrer"
                    >
                      The PC Surgeon
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      className="delayAnimation1200 animated fadeIn"
                      href="https://www.psychicfuture.com/"
                      rel="noreferrer"
                    >
                      Psychic Future
                    </a>
                  </div>
                </div>
                <div className="row middle aligned">
                  <h3> Projects </h3>
                  <div>
                    <a
                      target="_blank"
                      className="delayAnimation1400 animated fadeIn"
                      href="https://dominykas.dev/projects/crypto_app/"
                      rel="noreferrer"
                    >
                      Crypto tracking web app(React - Redux)
                    </a>
                  </div>
                  <div>
                    <a
                      className="delayAnimation1600 animated fadeIn"
                      href="https://trustedtechy.co.uk/diagnostic-wizard/"
                    >
                      Trusted Techy diagnostic wizard(in development)
                    </a>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      className="delayAnimation1800 animated fadeIn"
                      href="https://codepen.io/domdev/"
                      rel="noreferrer"
                    >
                      CodePen Mini Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div content={"Contact"} className="section">
            <div className="ui grid centered aligned column fullScreenHeight contactPage">
              <div className="column middle aligned equal width grid">
                <h2 className="ui row middle aligned sixteen wide">
                  Contact Me
                </h2>
                <a
                  target="_blank"
                  className="column"
                  href="https://www.linkedin.com/in/dominykas-genys-bb466795/"
                  rel="noreferrer"
                  title="LinkedIn - Dominykas Genys"
                >
                  <i className="linkedin icon massive yellow animated"> </i>
                </a>
                <a
                  target="_blank"
                  className="column"
                  href="mailto:contact@dominykas.dev"
                  rel="noreferrer"
                  title="Email contact@dominykas.dev"
                >
                  <i className="mail icon massive yellow animated"> </i>
                </a>
                <a
                  target="_blank"
                  className="column"
                  href="https://codepen.io/domdev/"
                  rel="noreferrer"
                  title="CodePen - Domdev"
                >
                  <i className="codepen icon massive yellow animated"> </i>
                </a>
                <a
                  target="_blank"
                  className="column"
                  href="https://github.com/dominykasdev"
                  rel="noreferrer"
                  title="GitHub - dominykasdev"
                >
                  <i className="github icon massive yellow animated"> </i>
                </a>
              </div>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default FullpageWrapper;
