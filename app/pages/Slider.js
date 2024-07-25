"use client";
import React, { useEffect, useRef } from 'react';

const Slider = ({ setSliderIndex }) => {
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const sliderRef = useRef(null);
  
    useEffect(() => {
      const nextBtn = nextBtnRef.current;
      const prevBtn = prevBtnRef.current;
      const slider = sliderRef.current;
      const sliderList = slider.querySelector('.list');
      const thumbnail = slider.querySelector('.thumbnail');
  
      let thumbnailItems = thumbnail.querySelectorAll('.item');
  
      thumbnail.appendChild(thumbnailItems[0]);
  
      const moveSlider = (direction) => {
        const sliderItems = sliderList.querySelectorAll('.item');
        const thumbnailItems = thumbnail.querySelectorAll('.item');
  
        if (direction === 'next') {
          sliderList.appendChild(sliderItems[0]);
          thumbnail.appendChild(thumbnailItems[0]);
          slider.classList.add('next');
        } else {
          sliderList.prepend(sliderItems[sliderItems.length - 1]);
          thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
          slider.classList.add('prev');
        }
  
        slider.addEventListener(
          'animationend',
          () => {
            if (direction === 'next') {
              slider.classList.remove('next');
            } else {
              slider.classList.remove('prev');
            }
            const newIndex = Array.from(sliderList.children).indexOf(sliderList.querySelector('.item:nth-child(1)'));
            setSliderIndex(newIndex);
          },
          { once: true }
        );
      };
  
      nextBtn.onclick = () => moveSlider('next');
      prevBtn.onclick = () => moveSlider('prev');
    }, [setSliderIndex]);
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        body {
          margin: 0;
          background-color: #000;
          color: #eee;
          font-family: Poppins;
          font-size: 12px;
        }

        a {
          text-decoration: none;
        }

        header {
          width: 1140px;
          max-width: 80%;
          margin: auto;
          height: 50px;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 100;
        }

        header a {
          color: #eee;
          margin-right: 5px;
          padding: 5px 10px;
          transition: 0.2s;
        }

        a.active {
          background: #14ff72cb;
          border-radius: 2px;
        }

        header a:hover {
          background: #14ff72cb;
          border-radius: 2px;
        }

        .slider {
          height: 100vh;
          margin-top: -50px;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }
        .slider .list .item {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0 0 0 0;
        }
        .slider .list .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .slider .list .item .content {
          position: absolute;
          top: 20%;
          width: 1140px;
          max-width: 80%;
          left: 50%;
          transform: translateX(-50%);
          padding-right: 30%;
          box-sizing: border-box;
          color: #fff;
          text-shadow: 0 5px 10px #0004;
        }

        .slider .list .item .content .title,
        .slider .list .item .content .type {
          font-size: 5em;
          font-weight: bold;
          line-height: 1.3em;
        }
        .slider .list .item .type {
          color: #14ff72cb;
        }
        .slider .list .item .button {
          display: grid;
          grid-template-columns: repeat(2, 130px);
          grid-template-rows: 40px;
          gap: 5px;
          margin-top: 20px;
        }
        .slider .list .item .button button {
          border: none;
          background-color: #eee;
          font-family: Poppins;
          font-weight: 500;
          cursor: pointer;
          transition: 0.4s;
          letter-spacing: 2px;
        }

        .slider .list .item .button button:hover {
          letter-spacing: 3px;
        }
        .slider .list .item .button button:nth-child(2) {
          background-color: transparent;
          border: 1px solid #fff;
          color: #eee;
        }

        .thumbnail {
          position: absolute;
          bottom: 50px;
          left: 50%;
          width: max-content;
          z-index: 100;
          display: flex;
          gap: 20px;
        }

        .thumbnail .item {
          width: 150px;
          height: 220px;
          flex-shrink: 0;
          position: relative;
        }

        .thumbnail .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 5px 0 15px rgba(0, 0, 0, 0.3);
        }

        .nextPrevArrows {
          position: absolute;
          top: 80%;
          right: 52%;
          z-index: 100;
          width: 300px;
          max-width: 30%;
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .nextPrevArrows button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #14ff72cb;
          border: none;
          color: #fff;
          font-family: monospace;
          font-weight: bold;
          transition: 0.5s;
          cursor: pointer;
        }
        .nextPrevArrows button:hover {
          background-color: #fff;
          color: #000;
        }

        .slider .list .item:nth-child(1) {
          z-index: 1;
        }

        .slider .list .item:nth-child(1) .content .title,
        .slider .list .item:nth-child(1) .content .type,
        .slider .list .item:nth-child(1) .content .description,
        .slider .list .item:nth-child(1) .content .buttons {
          transform: translateY(50px);
          filter: blur(20px);
          opacity: 0;
          animation: showContent 0.5s 1s linear 1 forwards;
        }
        @keyframes showContent {
          to {
            transform: translateY(0px);
            filter: blur(0px);
            opacity: 1;
          }
        }
        .slider .list .item:nth-child(1) .content .title {
          animation-delay: 0.4s !important;
        }
        .slider .list .item:nth-child(1) .content .type {
          animation-delay: 0.6s !important;
        }
        .slider .list .item:nth-child(1) .content .description {
          animation-delay: 0.8s !important;
        }
        .slider .list .item:nth-child(1) .content .buttons {
          animation-delay: 1s !important;
        }

        .slider.next .list .item:nth-child(1) img {
          width: 150px;
          height: 220px;
          position: absolute;
          bottom: 50px;
          left: 50%;
          border-radius: 30px;
          animation: showImage 0.5s linear 1 forwards;
        }

        @keyframes showImage {
          to {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 0;
          }
        }

        .slider.next .thumbnail .item:nth-last-child(1) {
          overflow: hidden;
          animation: showThumbnail 0.5s linear 1 forwards;
        }
        .slider.prev .list .item img {
          z-index: 100;
        }

        @keyframes showThumbnail {
          from {
            width: 0;
            opacity: 0;
          }
        }

        .slider.next .thumbnail {
          animation: effectNext 0.5s linear 1 forwards;
        }

        @keyframes effectNext {
          from {
            transform: translateX(150px);
          }
        }

        .slider.prev .list .item:nth-child(2) {
          z-index: 2;
        }

        .slider.prev .list .item:nth-child(2) img {
          position: absolute;
          bottom: 50px;
          left: 50%;
          width: 150px;
          height: 220px;
          border-radius: 20px;
          animation: outFrame 0.5s linear 1 forwards;
        }
        @keyframes outFrame {
          to {
            width: 150px;
            height: 220px;
            bottom: 50px;
            left: 50%;
            border-radius: 20px;
          }
        }

        .slider.prev .thumbnail .item:nth-child(1) {
          overflow: hidden;
          opacity: 0;
          animation: showThumbnail 0.5s linear 1 forwards;
        }
        .slider.next .nextPrevArrows button,
        .slider.prev .nextPrevArrows button {
          pointer-events: none;
        }

        .slider.prev .list .item:nth-child(2) .content .title,
        .slider.prev .list .item:nth-child(2) .content .type,
        .slider.prev .list .item:nth-child(2) .content .description,
        .slider.prev .list .item:nth-child(2) .content .buttons {
          animation: contentOut 1.5s linear 1 forwards !important;
        }

        @keyframes contentOut {
          to {
            transform: translateY(-150px);
            filter: blur(20px);
            opacity: 0;
          }
        }
        @media screen and (max-width: 678px) {
          .slider .list .item .content {
            padding-right: 0;
          }
          .slider .list .item .content .title {
            font-size: 50px;
          }
        }
      `}</style>
      <div className="slider" ref={sliderRef}>
        <div className="list">
          <div className="item">
            <img src="/img1.jpg" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">FLOWER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img2.jpg" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">NATURE</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img4.jpg" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">PLANT</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
          <div className="item">
            <img src="/img3.jpg" alt="" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">NATURE</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti temporibus quis eum consequuntur voluptate quae
                doloribus distinctio. Possimus, sed recusandae. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src="/img1.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img2.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img4.jpg" alt="" />
          </div>
          <div className="item">
            <img src="/img3.jpg" alt="" />
          </div>
        </div>

        <div className="nextPrevArrows">
          <button className="prev" ref={prevBtnRef}>
            &lt;
          </button>
          <button className="next" ref={nextBtnRef}>
            &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
