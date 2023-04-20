import "./AboutUs.css"

import ahmadimg from "./images/ahmad4.png";
import mahdiimg from "./images/mahdi4-removebg-preview.png";
import narmeenimg from "./images/n4.png";
import ibrahimimg from "./images/ibrahim4.png";
import moanesimg from "./images/moanes.png";

import github from "./images/github.png"
import email from "./images/email.png"

import logo from "./images/logo33.png"
import book from "./images/book1.png"




export default function Details(props){

    return (
      <>
        <h1 id="aboutheader">MEET OUR TEAM</h1>
        <div id="aboutline"></div>
        <div id="aboutDiv">
          <div id="ahmad">
            <img className="member" src={ahmadimg} alt="ahmad"></img>
            <h2 class="name">Ahmad al-anati</h2>
            <h4 class="teamstate">Team leader</h4>
            <p class="bio">
              Bachelor degree in computer information system form Jordan
              university university
            </p>

            <div class="links">
              <a href="mailto:ahmadjehadalanati1@gmail.com" target="_blank">
                <img class="link4" src={email} alt=""></img>
              </a>

              <a href="https://github.com/Ahmad-Alanati" target="_blank">
                <img class="link4" src={github} alt=""></img>
              </a>
            </div>
          </div>

          <div id="mahdi">
            <img className="member" src={mahdiimg} alt="mahdi"></img>
            <h2 class="name">Mahdi malkawi</h2>
            <h4 class="teamstate">Team member</h4>
            <p class="bio">
              {" "}
              Bachelor degree in civil engineering form girne American
              university
            </p>
            <div class="links">
              <a href="mailto:mahdimalkawi98@hotmail.com" target="_blank">
                <img class="link4" src={email} alt=""></img>
              </a>

              <a href="https://github.com/mahdimalkawi1" target="_blank">
                <img class="link4" src={github} alt=""></img>
              </a>
            </div>
          </div>

          <div id="narmeen">
            <img className="member" src={narmeenimg} alt="narmeen"></img>
            <h2 class="name">Narmeen al-kattab</h2>
            <h4 class="teamstate">Team member</h4>
            <p class="bio">
              {" "}
              Bachelor degree in Biomedical engineering form Yarmouk university
            </p>
            <div class="links">
              <a href="mailto:narmeen.kattab1@gmail.com" target="_blank">
                <img class="link4" src={email} alt=""></img>
              </a>

              <a href="https://github.com/Narmeenalkatab" target="_blank">
                <img class="link4" src={github} alt=""></img>
              </a>
            </div>
          </div>
          <br />

          <div id="ibrahim">
            <img className="member" src={ibrahimimg} alt="ibrahim"></img>
            <h2 class="name">Ibrahim fqaisi</h2>
            <h4 class="teamstate">Team member</h4>
            <p class="bio">
              Bachelor degree Mechanical Engineering from Al-Balqa' Applied
            </p>
            <div class="links">
              <a href="mailto:qasrawi.ivrahim1998@gmail.com" target="_blank">
                <img class="link4" src={email} alt=""></img>
              </a>

              <a href="https://github.com/ibrahimfqaisi" target="_blank">
                <img class="link4" src={github} alt=""></img>
              </a>
            </div>
          </div>

          <div id="moanes">
            <img className="member"  src={moanesimg} alt="moanes"></img>
            <h2 class="name">Mones saeed </h2>
            <h4 class="teamstate">Team member</h4>
            <p class="bio">
              Bachelor degree in Cis major form Hashimite university university
            </p>
            <div class="links">
              <a href="mailto:Mones_leader@hotmail.com" target="_blank">
                <img class="link4" src={email} alt=""></img>
              </a>

              <a href="https://github.com/11mones" target="_blank">
                <img class="link4" src={github} alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <h1 id="aboutheader2">About </h1>
        <div id="aboutline2"></div>
        <img id="book" src={book} alt=""></img>
        <div id="p1">
          <img id="logo" src={logo} alt=""></img>
          <p id="Paper Trailp">
            A book store <br /> application where you can find a huge library of
            books and buy the book you want also you can add books on your
            favorite list.
          </p>
        </div>

        <div id="p2">
          <h3 id="vision1">Our vision </h3>
          <p id="vision">
            We are looking forward to see everyone intersted in books, so we
            encourage people and inspire them to read by producing an enjoyable
            experience .
          </p>
        </div>
      </>
    );
}