import html from "html-literal";
export default (state) => html`
<main>
    <h2>Welcome!</h2>
    <p>Share your funniest, most awkward “Ducked Up” moments anonymously and read what others have posted!<br> Hit the random duck generator if you want to fel better about yourself!</p>
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
  <img src="${state.duckImage}" alt="imageOfDuck" height="70px" width="70px"/>
</main>
`;