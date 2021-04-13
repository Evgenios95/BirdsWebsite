const myCarousel = document.querySelector('.carouselHere');
function displayCarousel(){
    const carouselString = `
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="images/Startingpage/image1.jpg" alt="First slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bird</h5>
          <p>Lorem ipsum dolor sit amet cons</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="images/Startingpage/image4.jpg" alt="Second slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bird</h5>
          <p>Lorem ipsum dolor sit amet cons</p>
        </div>
      </div>

      <div class="carousel-item">
        <img class="d-block w-100" src="images/Startingpage/image3.jpg" alt="Third slide">
        <div class="carousel-caption d-none d-md-block">
          <h5>Bird</h5>
          <p>Lorem ipsum dolor sit amet cons</p>
        </div>
      </div>
    </div>
    <!--Carousel left-right buttons here!-->
    <!--Carousel left-right buttons here!-->
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    `;

     myCarousel.innerHTML = carouselString;
}