import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Front_End_Developer() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is a Front-End Developer?</h2>

    {/* This is the content of Pront-End Term. */}
    
    <p>A <strong>Front-End Developer</strong> is like the artist and architect of a website's visible side, the part you see and interact with directly. They're responsible for making the website look good, function smoothly, and provide a fun and engaging experience for users.</p>

    <p className="margin-top-20">Here's a breakdown of what <strong>Front-End Developers</strong> typically do:</p>
    
      <ul className="list-square">

        <li><strong>Building the Website's Structure</strong>: Imagine the walls and rooms of a house. <strong>Front-End Developers</strong> use a special code called HTML to create the basic building blocks of a webpage, like headings, paragraphs, images, and videos. Think of HTML like the bricks and wood that form the foundation of the website.</li>

        <li><strong>Adding Style and Design</strong>: Just like an interior decorator, <strong>Front-End Developers</strong> use another code called CSS to style the website. They control things like the fonts, colors, layouts, and animations, making the website visually appealing and user-friendly. CSS is like the paint, wallpaper, and furniture that bring the website to life.</li>

        <li><strong>Making it Interactive</strong>: Websites aren't just static pictures! <strong>Front-End Developers</strong> use JavaScript (JS) to add interactivity. This allows them to create features like clickable buttons, forms, and even games that you can play right on the webpage. Think of JavaScript like the electrical wiring that allows light switches, doorbell buttons, and other interactive elements to work in your website house.</li>

      </ul>

    <p className="margin-top-20">Working with Back-End Developers:</p>
    
      <ul className="list-square">

        <li>While <strong>Front-End Developers</strong> focus on the user-facing side, there's also Back-End Development which deals with the behind-the-scenes functionality of a website. Think of Back-End Developers like the plumbers and electricians who make sure everything works properly behind the walls. They handle things like storing website data and ensuring everything runs smoothly.</li>

        <li>Front-End and Back-End Developers work together to create a complete website. The <strong>Front-End Developer</strong> makes the website look great and function well for users, while the Back-End Developer ensures everything works properly in the background.</li>

      </ul>

    <h4 className="margin-y-50 text-center">In Summary:</h4>

    <p className="text-indent-whole">Front-End Development is a creative and technical field that plays a crucial role in building user-friendly and visually appealing websites. By using HTML, CSS, and JavaScript, <strong>Front-End Developers</strong> bring websites to life, making them interactive and enjoyable for users to explore.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>Imagine you're building the coolest treehouse ever! A <strong>Front-End Developer</strong> is like your super friend who helps make it look awesome and super fun to play in.</p>
    
      <ul className="list-square">

        <li><strong>Building the Walls</strong>: First, you need walls for your treehouse. <strong>Front-End Developers</strong> use a special code called HTML, like building blocks, to create the main parts of the website, like walls (sections for text and pictures) and doors (links to other pages).</li>

        <li><strong>Decorating the Inside</strong>: Next, you might grab colorful sheets and streamers to decorate the inside of your treehouse. <strong>Front-End Developers</strong> use another code called CSS to add all the fun styling to the website, like choosing bright colors, cool fonts, and making sure everything is sized just right. They are like the interior decorators of the website!</li>

        <li><strong>Making it Fun</strong>!: For the best treehouses, you might add ladders, slides, or even a secret trapdoor! <strong>Front-End Developers</strong> use a third code called JavaScript to make the website interactive. They can add buttons that do things, make pictures move, or even create fun games to play right on the website!</li>

      </ul>

    <p className="margin-top-20">So, while there might be other things happening behind the scenes to make your treehouse strong (like hammering nails to connect the wood), Front-End Development is all about the fun, colorful parts that make your website treehouse a cool place to hang out and explore!</p>

    <p className="margin-top-50 text-small">April 23, 2024 - by 💎Gem</p>
    
  </main>

  </>);
}