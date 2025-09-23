import html from "html-literal";
import * as views from ".";
export default (state) => html`
<main>
    <h2>Welcome!</h2>
    <p>Share your funniest, most awkward “Ducked Up” text moments anonymously and read what others have posted!</p>
  <main>
  <form id="form" action="" method="POST">
    <label for="confession">Type Here:</label>
    <br /><br />
    <input
      type="text"
      name="confession"
      id="confession"
      placeholder="How'd You Duck Up?"
      required
    />
    <br /><br />
    <button type="submit">Submit a duckUp</button>
  </form>
</main>
`;