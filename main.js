import './style.css'

document.querySelector('#app').innerHTML = `

  <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
    speed="600" parallax="true" pagination="true" pagination-clickable="true" navigation="true">
    <div slot="container-start" class="parallax-bg"
      style="background-image: url(https://i.ibb.co/r5Wyqj5/bgggg.webp;" data-swiper-parallax="-23%"></div>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">Smart Contract </div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Eu faucibus libero leo, malesuada justo, tortor pellentesque quis sit. Dui viverra at odio sodales duis integer rhoncus pulvinar. Commodo massa aliquam.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">Proof</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
        Nisl, sed morbi porta orci nunc. Curabitur vitae hendrerit justo ultricies quam vitae pellentesque tellus felis. Elementum tortor quis est morbi ullamcorper.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column min-vh-100'>
      <div class="title" data-swiper-parallax="-300">NFT solutions</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.
        </p>
      </div>
    </swiper-slide>
  </swiper-container>`

setupCounter(document.querySelector('#counter'))