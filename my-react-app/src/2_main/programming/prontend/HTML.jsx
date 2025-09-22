import { Link } from "react-router-dom";

export default function HTML() {
  return (<>

  <main className="image image2">
    
    <h4><a href="#programming#pront-end-terms"><mark className="highlight2">Pront-End</mark></a></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is HTML?</h2>

    {/* This is the content of Pront-End Term. */}

    <p><strong>HTML</strong> (HyperText Markup Language) is the standard markup language for creating web pages. It's like the blueprint or skeleton of a website, defining its structure and content.</p>
  
    <p className="margin-top-20">How <strong>HTML</strong> Works</p>
    
      <ul className="list-square">

        <li><strong>Elements</strong>: <strong>HTML</strong> is composed of elements, which are enclosed in tags. These tags tell the web browser how to interpret and display the content.</li>

        <li><strong>Tags</strong>: Tags are keywords surrounded by angle brackets, like <code className="text-border">&lt;p&gt;</code> , <code className="text-border">&lt;h1&gt;</code>, and <code className="text-border">&lt;img&gt;</code>.</li>

        <li><strong>Content</strong>: The content of a webpage, such as text, images, and links, is placed within these elements.</li>

      </ul>

    <p className="margin-top-20">Basic Structure of an <strong>HTML</strong> Document</p>

    <p><strong>HTML</strong></p>

    <pre className="pre-border"><code>
      &lt;!DOCTYPE html&gt;
      &lt;html&gt;
      &lt;head&gt;
        &lt;title&gt;My Web Page&lt;/title&gt;
      &lt;/head&gt;
      &lt;body&gt;
        &lt;h1&gt;Welcome to my webpage!&lt;/h1&gt;
        &lt;p&gt;This is a paragraph of text.&lt;/p&gt;
      &lt;/body&gt;
      &lt;/html&gt;

      </code></pre>

    <p className="margin-top-20">Use code with caution.</p>
    
      <ul className="list-square">

        <li><code>&lt;!<strong>DOCTYPE html</strong>&gt;</code>: Declares the document type.</li>

        <li><code>&lt;<strong>html</strong>&gt;&lt;/<strong>html</strong>&gt;</code>: The root element of an HTML page.</li>

        <li><code>&lt;<strong>head</strong>&gt;&lt;/<strong>head</strong>&gt;</code>: Contains metadata about the page, like the title.</li>

        <li><code>&lt;<strong>body</strong>&gt;&lt;/<strong>body</strong>&gt;</code>: Contains the visible content of the page.</li>

      </ul>

    <p className="margin-top-20">Common <strong>HTML</strong> Elements</p>
    
      <ul className="list-square">

        <li><strong>Heading elements</strong>:  <code className="text-border">&lt;h1&gt;</code> ,  <code className="text-border">&lt;h2&gt;</code> ,  <code className="text-border">&lt;h3&gt;</code> , etc.</li>

        <li><strong>Paragraph element</strong>:  <code className="text-border">&lt;p&gt;</code></li>

        <li><strong>Image element</strong>:  <code className="text-border">&lt;img&gt;</code></li>

        <li><strong>Link element</strong>:  <code className="text-border">&lt;a&gt;</code></li>

        <li><strong>List elements</strong>:  <code className="text-border">&lt;ul&gt;</code>  (unordered list), <code className="text-border">&lt;ol&gt;</code> (ordered list)</li>

        <li><strong>Div element</strong>:  <code className="text-border">&lt;div&gt;</code>  (generic container)</li>

      </ul>

    <p className="margin-top-20">In essence, <strong>HTML</strong> provides the framework for web pages, defining their structure and content. It works in conjunction with <a href="css.html">CSS</a> (for styling) and <a href="javascript.html">JavaScript</a> (for interactivity) to create dynamic and visually appealing websites.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
    
    <p><strong>HTML</strong> is like a magic book that tells your computer what to draw on the screen!</p>
    
    <p>Imagine you have a blank piece of paper and you want to draw a picture of a castle. You need to tell your friend where to put the blocks, the doors, and the windows. <strong>HTML</strong> is like a special language you can use to tell your computer what to draw on the screen.</p>

    <p>It has special words called tags that tell the computer to draw different things, like big letters for the title, lines for the walls, and even pictures of windows!</p>

    <p className="margin-top-50 text-small">April 15, 2024 - by 💎Gem</p>
    
  </main>

  </>);
}