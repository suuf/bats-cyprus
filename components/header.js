class Header extends HTMLElement {
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
            <a class="navbar-brand" href="#myPage">Bats of Cyprus</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#contribute">CONTRIBUTE</a></li>
                <li><a href="#whatwedo">WHAT WE DO</a></li>
                <li><a href="#photos">PHOTOS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
            </div>
            </div>
    </nav>
      `;
  }
}

customElements.define("header-component", Header);
