import React from 'react';

function Hero() {
  return (
    <div class="container-md d-lg-flex align-items-center gap-5">
      <div>
        <img src="./blogweb.png" alt="Blog Image" class="main-image" />
      </div>
      <div>
        <h1 class="main-heading">Human stories & ideas</h1>
        <p class="main-paragragh">
          A place to read, write, and deepen your understanding
        </p>
      </div>
    </div>
  );
}

export default Hero;