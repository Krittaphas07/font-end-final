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
          <a className="nav-link active" aria-current="page" href="/">Home</a>
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
        <button className="btn btn-outline-success" type="submit">sign up</button>
      </form>
    </div>
    </div>
</nav>

<div className="row">
  <div id="carouselExampleFade" className="carousel slide carousel-fade">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://gmedia.playstation.com/is/image/SIEPDC/playstation-accessories-hero-banner-featured-desktop-01-en-id-01mar24?$1600px--t$" className="d-block w-100" alt="..." />
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
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/dualsense-sterling-steel-screenshot-01-en-29jan24?$1600px--t$" className="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">คอนโทรลเลอร์ไร้สาย DualSense – Deep Earth Collection</h5>
    <p class="card-text">คลือบโทนโลหะที่สดใหม่ให้กับการเล่นของคุณด้วยคอนโทรลเลอร์ไร้สาย DualSense – Deep Earth Collection*</p>
    <a href="https://www.playstation.com/th-th/accessories/dualsense-wireless-controller/" class="btn btn-primary">เพิ่มเติม</a>
  </div>
  </div>
  </div>

  <div className="col-4 text-center">
  <div className="card" style={{width: '39rem'}}>
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/access-controller-image-block-02-en-25jul23?$1600px--t$" className="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">อุปกรณ์ควบคุม Access™</h5>
    <p class="card-text">ชุดคอนโทรลเลอร์ PlayStation®5 ที่ปรับแต่งได้อย่างมากออกแบบเพื่อให้การเล่นเกมเข้าถึงได้มากขึ้น</p>
    <a href="https://www.playstation.com/th-th/accessories/access-controller/" class="btn btn-primary">เพิ่มเติม</a>
  </div>
  </div>
  </div>

  <div className="col-4 text-center">
  <div className="card" style={{width: '39rem'}}>
  <img src="https://gmedia.playstation.com/is/image/SIEPDC/ps-portal-remote-player-ui-product-strand-02-en-29aug23?$1600px--t$" className="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">อุปกรณ์เล่นระยะไกล PlayStation Portal™ สำหรับคอนโซล PS5®</h5>
    <p class="card-text">รอติดตามวันวางจำหน่ายอุปกรณ์เล่นระยะไกล PlayStation Portal™ ในประเทศของคุณต่อไป</p>
    <a href="https://www.playstation.com/th-th/accessories/playstation-portal-remote-player/" class="btn btn-primary">เพิ่มเติม</a>
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
