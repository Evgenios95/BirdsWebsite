const myFooter = document.querySelector(".footer");
const myNavBar = document.getElementById("myNavBar");

function displayNav() {
  const navStrign = `
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="startingpage.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="statistics.html">Statistics</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" id="firstName" type="text" placeholder="Your name here..." name="fname">
        <button class="btn" type="submit" onclick="whenLogsIn();">Login</button>
      </form>
    </div>
  </nav>`;

  myNavBar.innerHTML = navStrign;
}

function displayFooter() {
  const footString = `
    
    <div class="container">
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <div class="first">
          <h4>My Skills</h4>
          <p> Analytical Skills</p>
          <p> Problem-solving skills</p>
        </div>
      </div>

      <div class="col-md-4 col-xs-12">
        <div class="second">
          <h4> Navigate</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/evgenios-pampoukos-28293119a/">LinkedIn</a></li>
            <li><a href="https://github.com/Evgenios95">Projects</a></li>
          </ul>
        </div>
      </div>

      <div class="col-md-4 col-xs-12">
        <div class="third">
          <h4> Contact</h4>
          <ul>
            <li>Evgenios Pampoukos</li>
            <li><i class="far fa-envelope"></i> evgeniospam@gmail.com</li>
            <li><i class="fas fa-map-marker-alt"></i> CPH, DK</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    `;

  myFooter.innerHTML = footString;
}
