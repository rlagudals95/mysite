import styled from "@emotion/styled";
import { useEffect } from "react";
const MainPage = () => {
  useEffect(() => {

      const listStyleChangeStartY = 373;
      const listStyleChangeEndY = 1585;

      const listItems = document.querySelectorAll(".list-item");

      const division =
        (listStyleChangeEndY - listStyleChangeStartY) / listItems.length;

      const panel1Img = document.getElementById("panel1-img")!!;
      const flyingSantaImage = document.getElementById("flying-santa-image")!!;

      const videoPlayBack = 500;

      const videoElement = document.getElementById("video")!!;
      const videoSection = document.getElementById("video-section")!!;

      const fixedWrapper = document.getElementById("fixed-wrapper")!!;

      const fixedDescription = document.getElementById("fixed-description");

      function centerElement(elementId: string, video?: any) {
        const element = document.getElementById(elementId) !!;
        const parent = element.parentElement!!;

        if (
          window.scrollY >
          parent.offsetTop -
            (document.documentElement.clientHeight - element.offsetHeight) / 2
        ) {
          element.style.position = "fixed";
          element.style.top = "50%";
          element.style.left = "50%";
          element.style.transform = "translate(-50%, -50%)";

          if (video)
            video.currentTime =
              (window.scrollY - videoSection.offsetTop) / videoPlayBack;
        } else {
          element.style.position = "relative";
          element.style.top = "initial";
          element.style.left = "initial";
          element.style.transform = "initial";
        }
      }

      videoElement.addEventListener("loadedmetadata", () => {
        document.getElementById("video-section").style.height =
          videoElement.duration * videoPlayBack + "px";
      });

      const fixedDescriptionAppearTiming = 3470;
      const fixedDescriptionAppearEnds = 3800;

      window.addEventListener("scroll", () => {
        if (document.getElementById("on"))
          document.getElementById("on").removeAttribute("id");

        if (
          window.scrollY > listStyleChangeStartY &&
          window.scrollY < listStyleChangeEndY
        ) {
          const targetIndex = Math.round(
            (window.scrollY - listStyleChangeStartY) / division
          );

          if (listItems[targetIndex]) listItems[targetIndex].id = "on";
        }

        const scrollYBottom =
          window.scrollY + document.documentElement.clientHeight;

        if (
          scrollYBottom > panel1Img.offsetTop &&
          scrollYBottom < panel1Img.offsetTop + panel1Img.offsetHeight + 100
        ) {
          const translateX =
            80 -
            (80 * 1.3 * (scrollYBottom - panel1Img.offsetTop)) /
              (panel1Img.offsetHeight + 100);
          const translateY =
            -13 +
            (13 * (scrollYBottom - panel1Img.offsetTop)) /
              (panel1Img.offsetHeight + 100);

          const rotationDegree =
            23 -
            (23 * 1.7 * (scrollYBottom - panel1Img.offsetTop)) /
              (panel1Img.offsetHeight + 100);

          flyingSantaImage.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotationDegree}deg)`;
        }

        centerElement("fixed-wrapper", videoElement);

        if (
          window.scrollY >
          videoSection.offsetTop +
            videoSection.offsetHeight -
            (fixedWrapper.offsetHeight +
              (document.documentElement.clientHeight -
                fixedWrapper.offsetHeight) /
                2)
        ) {
          console.log('video:')
          fixedWrapper.style.position = "relative";
          fixedWrapper.style.top = "initial";
          fixedWrapper.style.left = "initial";
          fixedWrapper.style.transform = `translateY(${
            videoSection.offsetHeight - fixedWrapper.offsetHeight
          }px)`;
        }

        if (
          window.scrollY > fixedDescriptionAppearTiming &&
          window.scrollY < fixedDescriptionAppearEnds
        ) {
          fixedDescription.style.transform = `translateY(${
            fixedDescriptionAppearEnds - window.scrollY
          }px)`;

          fixedDescription.style.opacity =
            (window.scrollY - fixedDescriptionAppearTiming) / 300;
        } else if (window.scrollY > fixedDescriptionAppearEnds) {
          fixedDescription.style.transform = `translateY(0px)`;
          fixedDescription.style.opacity = 1;
        } else {
          fixedDescription.style.transform = `translateY(100px)`;
          fixedDescription.style.opacity = 0;
        }

        centerElement("bank-beyond");
      });

      let currentImage = 0;

      const sliderImages = document.querySelectorAll(".slider-image");

      const sliderIndex = document.getElementById("slider-index");

      const handleSlideChange = (step) => {
        currentImage += step;

        if (currentImage < 0) {
          currentImage = sliderImages.length - 1;
        } else if (currentImage >= sliderImages.length) {
          currentImage = 0;
        }

        sliderContentWrapper.scrollLeft = sliderImages[currentImage].offsetLeft;
      };

      document.getElementById("left-button").addEventListener("click", () => {
        handleSlideChange(-1);
      });
      document.getElementById("right-button").addEventListener("click", () => {
        handleSlideChange(1);
      });

      const sliderContentWrapper = document.getElementById(
        "slider-content-wrapper"
      );

      sliderContentWrapper.addEventListener("scroll", () => {
        const imageWidth =
          document.querySelectorAll(".slider-image")[0].offsetWidth;

        currentImage = Math.round(sliderContentWrapper.scrollLeft / imageWidth);
        sliderIndex.innerText = `${currentImage + 1}/${sliderImages.length}`;
      });
    


  });

  return (
    <Container className="place-items-center">
      <div id="main-img-wrapper">
        <img
          width="320"
          src="./Lovepik_com-401339128-data-management-data-analysis-icon-free-vector-illustration-mate.png"
          alt="coding image"
        />
      </div>
      <div id="intro-main">
        <p>이미 모두의 은행, 패스트뱅크</p>
        <p>함께 일해요.</p>
        <p id="join-us-text">Join us!</p>
        <img
          id="down-arrow-icon"
          src="./down-arrow.png"
          alt="down arrow icon"
        />
      </div>
      <ul id="list-item-wrapper">
        <li className="list-item">26주적금</li>
        <li className="list-item">저금</li>
        <li className="list-item">패스트캠퍼스</li>
        <li className="list-item">떡볶이</li>
        <li className="list-item">치킨</li>
        <li className="list-item">축구</li>
        <li className="list-item">축구선수</li>
        <li className="list-item">마이너스통장대출</li>
        <li className="list-item">26주적금</li>
        <li className="list-item">저금</li>
        <li className="list-item">패스트캠퍼스</li>
        <li className="list-item">떡볶이</li>
        <li className="list-item">치킨</li>
        <li className="list-item">축구</li>
        <li className="list-item">축구선수</li>
        <li className="list-item">마이너스통장대출</li>
        <li className="list-item">26주적금</li>
        <li className="list-item">저금</li>
        <li className="list-item">패스트캠퍼스</li>
        <li className="list-item">떡볶이</li>
        <li className="list-item">치킨</li>
        <li className="list-item">축구</li>
        <li className="list-item">축구선수</li>
        <li className="list-item">마이너스통장대출</li>
        <li className="list-item">26주적금</li>
        <li className="list-item">저금</li>
        <li className="list-item">패스트캠퍼스</li>
        <li className="list-item">떡볶이</li>
        <li className="list-item">치킨</li>
        <li className="list-item">축구</li>
        <li className="list-item">축구선수</li>
        <li className="list-item">마이너스통장대출</li>
      </ul>
      <main>
        <section id="panel1-img">
          <img
            id="flying-santa-image"
            src="./santa_flying.png"
            alt="santa flying"
          />
        </section>
        <section id="video-section">
          <div id="fixed-wrapper">
            <video
              id="video"
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
              type="video/mp4"
              muted
              loop
            ></video>
            <div id="fixed-description">
              <div>혁신이 만든</div>
              <div>압도적인 성장</div>
            </div>
          </div>
        </section>
        <div id="bank-beyond-wrapper">
          <div id="bank-beyond">
            <img width="315" src="./05-text.png" alt="sample text" />
          </div>
        </div>
        <div id="white-wrapper">
          <div id="slider-container">
            <div id="slider-content-wrapper">
              <div id="slider-content">
                <img
                  src="https://picsum.photos/id/1/600/933"
                  className="slider-image"
                  alt=""
                />
                <img
                  src="https://picsum.photos/id/59/600/933"
                  className="slider-image"
                  alt=""
                />
                <img
                  src="https://picsum.photos/id/89/600/933"
                  className="slider-image"
                  alt=""
                />
              </div>
            </div>
            <div className="slider-button" id="left-button">
              &lt;
            </div>
            <div className="slider-button" id="right-button">
              &gt;
            </div>
            <div id="slider-index">1/3</div>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default MainPage;

const Container = styled.div``;
