class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="container-fluid text-center">
         <a href="#myPage" title="To Top">
            <span class="glyphicon glyphicon-chevron-up"></span>
         </a>

         <!--
                <p>
                    Bootstrap Theme Made By
                    <a href="https://www.w3schools.com" title="Visit w3schools"
                        >www.w3schools.com</a
                    >
                </p>
          -->
     </footer>
        `;
  }
}

customElements.define("footer-component", Footer);
