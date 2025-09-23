import html from "html-literal";
import ducklogo from "url:../docs/imgs/JustDUCKEE-logoBLK.png";
export default (state) => html`

<header>
  <div class="header-container">
  <img src="${ducklogo}" alt="logo" height="70px" width="70px"/>
    <h1>${state.header}</h1>
  </div>

  </header>`;