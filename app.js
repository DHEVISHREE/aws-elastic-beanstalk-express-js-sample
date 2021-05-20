const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Test 1
<html>
    <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Stanson Rubber</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsive.css">
        <style type="text/css">
        .menu ul li a {
    transition: all .3s ease;
        transition-delay: 0s;
    transition-delay: 0s;
    padding-bottom: 25px;
}

        .navbar .menu a {
    color: white;
    text-decoration: none;
    font-size: 30px;
}

            .navbar .menu a:hover { color: #6a8bff; }

.navbar .nav-layer {
    background-color: #000d1a;
}


.demo {
    background: #000d1a !important;
    color: #fff;
    height: 67px;
}

.navbar {
    position: relative;
    height: 60px;
    overflow: hidden;
}
                    
.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: #000d1a!important;
    box-shadow: 0px 0px 10px 0px #333;
}
        </style>

    </head>
    <body>
        <div class="demo" id="sticky-head">
    <div class="container-fluid">
        <div class="row">
            <div class="col-xl-10 col-lg-10 col-md-9 col-9 no-padding">
                <img src="images/logo-with-white-bg4.png" class="img-fluid">
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3 col-3">
                <div class="navbar">
                    <span class="text-bold" style="line-height: 55px;">MENU</span>
                    <nav class="menu">
                        <div class="nav-layer"></div>
                        <div class="logo-nav-layer"><img src="images/logo-white2.png" height="50px" class="img-fluid"></div>
                        <ul>
                            <li><a href="#link1">Activities</a>
							<ul class="sub-menu">
							<li id=link1>Our customer focus
							 </li>
							</ul>
							
							</li>
							<br>
                            <li><a href="#link2">The Groups</a>
							<li id=link>Our customer focus
							 </li>
							</li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Expertise</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </nav>
                    <a class="nav-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </div>
  <div class="video-container">
  <video autoplay="autoplay" muted="muted" loop="loop" id="video-bg" class="video-responsive" style="position: relative; z-index: -1;">
     <source src="video/stock-footage-automotive-engineer-working-on-electric-car-chassis-platform-using-tablet-computer-with-augmented.mp4" type="video/mp4">
    </video>
</div>

<div style="position: absolute;z-index: 1; top:50%; left: 50%; margin-left:-405px; margin-top: -120px; width: 810px; height:240px;">
    <div class="">
      <div class="">
<!--         <h1 class="display-3">Video Header</h1>
        <p class="lead mb-0">With HTML5 Video and Bootstrap 4</p> -->
        
      </div>
    </div>
  </div>


<div style="width: 100%; display: block;">
    <div style="text-align: center; width: 1300px; margin:0 auto;"><img src="images/home6.jpg" width="100%" alt=""></div>
</div>
<div style="width: 100%; display: block; background-color: #0026a9;">
    <div style="text-align: center; width: 1300px; margin:0 auto;"><img src="images/footer-blue.jpg" width="100%" alt=""></div>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<script src="js/custom.js"></script>
<script src="js/wow.js"></script>
<script>
new WOW().init();
</script>
    </body>
</html>
'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
