import '../styles/about.css';
import img from "../img/05.jpg"

export default function About() {
    return (
        <div className="row contain">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <div className="card bg-transparent">
                    <div className="card-body box">
                        <h1 className="card-title">About Me</h1>
                        <hr></hr>
                        <img src={img} alt="Headshot"
                            className="img-thumbnail img-fluid float-left mr-3 responsive"></img>
                        <p className="text-position">
                            Welcome to my portfolio! My name is Anastasia Ivashchenko, I was born in 1991, in a big cold city
                            in Siberia.
                            I'm a self-motivated detail-oriented web developer dedicated to constructing and optimizing interactive, user-friendly, feature-rich web applications. Bachelor's degree in Information technologies from a State Technical University and a certificate in full-stack development from University of San Diego, developing a vast skill set in JavaScript, HTML, CSS.<br /> Knowledgeable in designing, testing and debugging processes, with an ability to effectively manage multiple projects and tasks during an independent workflow, as well as collaborating in team setting. Proficient in conducting extensive market and consumer research and optimizing web functionalities that improve data retrieval. Passionate about finding the most efficient solutions and resilient in problem solving.
                            <br />
                            I'd like to share my story and portfolio, motivation, ambitions and goals with anyone who's
                            interested. You can also
                            reach out to me for colaborations using the contact form on my page.

                       <br />Today, leading a busy life in a fast-paced city, we absolutely have
                        to make time for ourselves, explore our creativity and push our boundaries to open brighter
                        and wider horizons.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}