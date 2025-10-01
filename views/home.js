import html from "html-literal";
export default (state) => html`
<main>
  <h2>Welcome!</h2>
  <p>
    Share your funniest, most awkward “Ducked Up” moments anonymously! Your secret is safe with us!
    <br>
    Hit the random duck generator if you want to feel better about yourself!
  </p>

<style>
  #confession {
    width: 400px;     
    height: 60px;
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    font-size: 20px;
  }
</style>
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
  <br>
  <br>
  <button id="submit"
    style= "background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  ">
    Submit a DuckUp
  </button>
</form>

  <br>
  <br>

  <!-- Duck Image -->
  <img style="height: 20rem;" id="duckImage" src="https://random-d.uk/api/randomimg" alt="imageOfDuck" />

  <br><br>

  <!-- <//Button to change image --> 
  <button id="newDuckBtn" style="
    background-color: black;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
  ">
    Duck Me Up!
  </button>
</main>
`;