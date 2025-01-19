import React from "react";
import "./News.css";
import marspic from "/src/assets/mars.jpg";
import footballpic from "/src/assets/football.webp";
import politicpic from "/src/assets/tramp.webp";

function News() {
  return (
    <div className="news-container">
      <div className="news-first">
        <div className="news-pic">
          <img src={marspic} alt="" />
        </div>
        <div className="news-text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <div className="new-btn">
            <a href="">
              <button>continue reading</button>
            </a>
          </div>
        </div>
      </div>
      <div className="news-first">
        <div className="news-text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <div className="new-btn">
            <a href="">
              <button>continue reading</button>
            </a>
          </div>
        </div>
        <div className="news-pic">
          <img src={footballpic} alt="" />
        </div>
      </div>
      <div className="news-first">
        <div className="news-pic">
          <img src={politicpic} alt="" />
        </div>
        <div className="news-text">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque hic
            nobis non voluptatibus fuga, tenetur maxime molestias! Cupiditate
            delectus blanditiis a accusantium sed doloremque! Ex odio assumenda
            incidunt doloremque ut?
          </span>
          <div className="new-btn">
            <a href="">
              <button>continue reading</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
