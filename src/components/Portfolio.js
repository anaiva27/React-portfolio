import s1 from "../img/screenshotWA.jpg"
import s2 from "../img/screenshotWP.jpg"
import s3 from "../img/screenshotWP2.jpg"
import s4 from "../img/01.png"
import s5 from "../img/s1.jpg"
import s6 from "../img/s3.png"
import '../styles/about.css';

export default function Portfolio(props) {
  return (
   
    <div className="row contain">
    <div className="col-md-2"></div>
    <div className="col-md-8">
        <div className="card bg-transparent">
            <div className="card-body box">

    {/* <div class="row">
      <div class="col-md-10">
        <div class="card">
          <div class="card-body"> */}
            <h1 class="card-title">Portfolio</h1>
            <hr />
            <div class="row">
              <div class="col-lg-12">
                <h2>Weather Forecast App</h2>
                <a
                  href="https://anaiva27.github.io/Weather-Application/"
                  target="blank"
                  >Deployed application</a
                ><br />
                <a
                  href="https://github.com/anaiva27/Weather-Application"
                  target="blank"
                  >GitHub repository</a
                ><br /><br />
                <img
                  src={s1}
                  alt="weather app screnshot"
                  class="float-left mb-4 img-fluid"
                />
                <p>
                  Weather forecast application that allows the user to check
                  the weather information all around the world, such as
                  temperature, humidity, UV index and same parameters for the
                  next five days. The application has to save the search
                  history and present the last requested city's weather, using
                  local storage, JSON, jQuery, HTML, CSS, APIs, Ajax calls<br />Role:
                  sole developer.
                </p>
                <hr />
                <h2>Wedding Scheduler App</h2>
                <a
                  href="https://mbubel.github.io/projectwedding/"
                  target="blank"
                  >Deployed application</a
                ><br />
                <a
                  href="https://github.com/mbubel/projectwedding"
                  target="blank"
                  >GitHub repository</a
                ><br /><br />
                <img
                  src={s2}
                  alt="wedding planner app screenshot"
                  class="float-left mb-4 img-fluid"
                />
                <img
                  src={s3}
                  alt="weather app screenshot"
                  class="float-left mb-4 img-fluid"
                />
                <p>
                  Wedding day scheduler that prioritizing golden hour and
                  dynamically generating a color-coded schedule. When the user
                  enters the date of the event, the ceremony location, the
                  photo shoot location, and the reception destination, the app
                  calculates and displays: The travel time from the ceremony
                  to the photo shoot location; Golden hour; and The travel
                  time from the photo shoot location to the reception
                  location. Utilizes local storage, JSON, jQuery, HTML, CSS,
                  APIs, Ajax calls.<br />Role: collaborated on developing
                  JavaScript, HTML and CSS structure.
                </p>
                <hr />
                <h2>Google Books Search App</h2>
                <a
                  href="https://google-books-search-ana.herokuapp.com/"
                  target="blank"
                  >Deployed application</a
                ><br />
                <a
                  href="https://github.com/anaiva27/Google-books"
                  target="blank"
                  >GitHub repository</a
                ><br /><br />
                <img
                  src={s4}
                  alt="google books search app screenshot"
                  class="float-left mb-4 img-fluid"
                />
                <p>
                This is a full-stack app that allows a user to search for a book using the Google Books API. Users may save books that they search for, or view the book in Google Books. Users may also delete books from the saved list. When a user saves a book, other users will be notified. The code is organized according to the standards of MVC framework. Utilizes JavaScript, SQL, jQuery, HTML, CSS,
                  API requests, ORM, Ajax calls, Express.js and Node.js.<br />Role: sole developer               
                </p>
                <hr />
                <h2>Student Portal</h2>
                <a
                  href="https://vast-shore-72326.herokuapp.com/"
                  target="blank"
                  >Deployed application</a
                ><br />
                <a
                  href="https://github.com/larrygamboa/project2"
                  target="blank"
                  >GitHub repository</a
                ><br /><br />
                <img
                  src={s5}
                  alt="signup page screenshot"
                  class="float-left mb-4 img-fluid"
                />
                <br/>
                <img
                  src={s6}
                  alt="signup page screenshot"
                  class="float-left mb-4 img-fluid"
                />
                <p>
                  This application allows students to create an account by signing up with an email and a password and then log into the account to access the information about topics that they want to study that could be marked as "completed" and the percentage of completion will be displayed in the progress bar. The app implements a variety of technologies and programming languages such as JavaScript, jQuery, HTML, CSS, SQL, API requests, Ajax calls, Express.js, Node.js, Passport.js, Sequelize, Nodemailer and Bcrypt. <br />Role: lead developer (produced 90% of JS, HTML and CSS code)              
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

