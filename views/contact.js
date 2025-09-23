import html from "html-literal";
import * as views from ".";
export default () => html`
    <main>
  <h2>Drop Us a Line!</h2>
  <form action="" method="POST">
    <label for="name">Your Name:</label><br />
    <input type="text" id="name" name="name" placeholder="Enter your name" required />
    <br /><br />

    <label for="email">Your Email:</label><br />
    <input type="email" id="email" name="email" placeholder="Enter your email" required />
    <br /><br />

    <label for="message">Your Message:</label><br />
    <textarea id="message" name="message" rows="5" cols="40" placeholder="Type your message here..." required></textarea>
    <br /><br />

    <button type="submit">Send Message</button>
  </form>
</main>
  </main>
  `;