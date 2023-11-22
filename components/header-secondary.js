class HeaderSecondary extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
            <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
            >
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="./index.html">
            <div> 
            <img class="logo" src="./assets/bats_cyprus_2.svg" alt="bats cyprus logo" height="20px">
            Bats of Cyprus
            </div>            
            </a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="./index.html#about">ABOUT</a></li>
                <li><a href="./index.html#contribute">CONTRIBUTE</a></li>
                <li><a href="./index.html#whatwedo">WHAT WE DO</a></li>
                <li><a href="./index.html#photos">PHOTOS</a></li>
                <li><a href="./index.html#contact">CONTACT</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" 
                    aria-haspopup="true" aria-expanded="false">MORE <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="./index.html#find">FIND OUT MORE</a></li>
                        <li><a href="./news.html">NEWS</a></li>
                        <li><a href="./calendar.html">CALENDAR</a></li>
                    </ul>
                </li>
            </ul>
            </div>
            </div>
    </nav>
      `;
  }
}

customElements.define("header-secondary-component", HeaderSecondary);
