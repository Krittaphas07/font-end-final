import Link from "next/link";

export default function Home() {
    return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Sodaft</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="./">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/ser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Service
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">contact</a>
          </li>
        </ul>
        <form className="d-flex" role="Sign">
          <button className="btn btn-outline-success" type="submit">sign in</button>
          <Link href="/signup" className="btn btn-outline-success" type="submit">sign up</Link>
        </form>
      </div>
      </div>
  </nav>
  
  <div className="row">
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://blog.playstation.com/tachyon/2022/05/4cac05bf748db4d5adb2fdb08acc3ff6969f3a12.jpg?resize=1088%2C612&crop_strategy=smart" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.playstation.com/th-th/games/nba-2k/" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://www.playstation.com/th-th/games/the-first-descendant/" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  
  <br></br>
  <div className="row text-center">
    <div className="col-4 text-center">
    <div className="card" style={{width: '39rem'}}>
    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202204/0810/803Pm8uJoZ2Cl9fJPvTaXHqG.png" className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">DELUXE</h5>
      <p class="card-text">เกมรายเดือน
ผู้เล่นออนไลน์หลายคน<br></br>
ส่วนลดเฉพาะสมาชิกเท่านั้น<br></br>
เนื้อหาสุดพิเศษ<br></br>
ที่จัดเก็บระบบคลาวด์<br></br>
แชร์เพลย์<br></br>
แคตตาล็อกเกม<br></br>
Ubisoft+ Classics<br></br>
แคตตาล็อกเกมคลาสสิก<br></br>
ทดลองเล่นเกม<br></br>
</p>
    <a href="https://www.playstation.com/th-th/accessories/dualsense-wireless-controller/" class="btn btn-primary">เพิ่มเติม</a>
    </div>
    </div>
    </div>
  
    <div className="col-4 text-center">
    <div className="card" style={{width: '39rem'}}>
    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202204/0810/803Pm8uJoZ2Cl9fJPvTaXHqG.png" className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">EXTRA</h5>
      <p class="card-text">ผู้เล่นออนไลน์หลายคน<br></br>
ส่วนลดเฉพาะสมาชิกเท่านั้น<br></br>
เนื้อหาสุดพิเศษ<br></br>
ที่จัดเก็บระบบคลาวด์<br></br>
แชร์เพลย์<br></br>
แคตตาล็อกเกม<br></br>
Ubisoft+ Classics<br></br>
<br></br>
<br></br></p>
      <a href="https://www.playstation.com/th-th/accessories/access-controller/" class="btn btn-primary">เพิ่มเติม</a>
    </div>
    </div>
    </div>
  
    <div className="col-4 text-center">
    <div className="card" style={{width: '39rem'}}>
    <img src="https://image.api.playstation.com/vulcan/ap/rnd/202204/0810/803Pm8uJoZ2Cl9fJPvTaXHqG.png" className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">ESSENTIAL</h5>
      <p class="card-text">เกมรายเดือน
ผู้เล่นออนไลน์หลายคน<br></br>
ส่วนลดเฉพาะสมาชิกเท่านั้น<br></br>
เนื้อหาสุดพิเศษ<br></br>
ที่จัดเก็บระบบคลาวด์<br></br>
แชร์เพลย์<br></br><br></br>
<br></br>
<br></br>
<br></br></p>
      <a href="https://www.playstation.com/en-th/games/gran-turismo-7/" class="btn btn-primary">เพิ่มเติม</a>
    </div>
    </div>
    </div>
   
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Service</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p class="text-center text-body-secondary">© 2024 Sodaft Company, Inc</p>
    </footer>
  </div>
  
  </div>
  </>
  
  );
  }
  