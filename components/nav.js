import html from "html-literal";
import navItem from "./navItem";

export default navItems => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${navItems.map(item => navItem(item))}
    </ul>
  </nav>
`;