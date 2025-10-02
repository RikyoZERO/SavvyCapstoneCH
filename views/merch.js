import html from "html-literal";
import duckImage2 from "url:../docs/imgs/Hailuo_Image_a-real-looking-black-duck-and-_419673362665472005-FRAME-1 1.png";
import pic1 from "url:../docs/imgs/Pic1.png"
import pic2 from "url:../docs/imgs/Pic2.png"
import pic3 from "url:../docs/imgs/Pic3.png"
import pic4 from "url:../docs/imgs/Pic4.png"
import pic5 from "url:../docs/imgs/Pic5.png"
import pic6 from "url:../docs/imgs/Pic6.png"
import pic7 from "url:../docs/imgs/Pic7.png"
import pic8 from "url:../docs/imgs/Pic8.png"

export default () => html`
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .grid-container img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
  </style>

  <main>
    <h2>Coming Soon!</h2>
    <p>#DailyDuckUP themed merch by Duckee!</p>
    
    <div class="grid-container">
      <img src="${pic1}" alt="Merch Item 1">
      <img src="${pic2}" alt="Merch Item 2">
      <img src="${pic3}" alt="Merch Item 3">
      <img src="${pic4}" alt="Merch Item 4">
      <img src="${pic5}" alt="Merch Item 5">
      <img src="${pic6}" alt="Merch Item 6">
      <img src="${pic7}" alt="Merch Item 7">
      <img src="${pic8}" alt="Merch Item 8">
    </div>
  </main>
`;