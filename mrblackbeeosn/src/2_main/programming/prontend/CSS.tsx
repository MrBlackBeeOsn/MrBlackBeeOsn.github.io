import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function CSS(): React.JSX.Element {

  const postId = "CSS";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/front-end#pront-end-terms"><mark className="highlight-tertiary-padding-4-8">Pront-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is CSS?</h2>

    {/* This is the content of Pront-End Term. */}

    <p><strong>CSS</strong> (Cascading Style Sheets) is a style sheet language used to describe the presentation of a document written in <Link to="/front-end/what-is-html?">HTML</Link>. It controls the appearance of an HTML element by specifying the font, color, layout, and more. Think of it as the "makeup" for your web page. </p>

    <p className="margin-top-20">Key Features of <strong>CSS</strong>:</p>
    
      <ul className="list-square">

        <li><strong>Selectivity</strong>: <strong>CSS</strong> allows you to target specific HTML elements or groups of elements to apply styles.</li>

        <li><strong>Cascading</strong>: Styles are applied in a cascading order, meaning later styles can override earlier ones.</li>

        <li><strong>Inheritance</strong>: Child elements can inherit styles from their parent elements.</li>

        <li><strong>Specificity</strong>: The specificity of a rule determines how it takes precedence over other rules.</li>

        <li><strong>Units</strong>: <strong>CSS</strong> uses various units for measurements, such as pixels (px), percentages (%), and ems.</li>

      </ul>

    <p className="margin-top-20">Common <strong>CSS</strong> Properties</p>
    
      <ul className="list-square">

        <li><strong>Font properties</strong>:  font-family ,  font-size ,  font-weight ,  color , etc.</li>

        <li><strong>Text properties</strong>:  text-align ,  text-decoration ,  text-transform , etc.</li>

        <li><strong>Background properties</strong>:  background-color ,  background-image ,  background-repeat , etc.</li>

        <li><strong>Layout properties</strong>:  margin ,  padding ,  border ,  width ,  height ,  display , etc.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Example:</h4>

    <pre className="pre-border"><code>{`
    HTML

    <h1 style="color: blue; font-size: 36px;">

    Hello, World!
    
    </h1>
    `}</code></pre>

    <p className="margin-top-20">In this example, the h1 element is styled with blue text and a font size of 36 pixels.</p>

    <p>Applying <strong>CSS</strong>:</p>
    
      <ul className="list-square">

        <li><strong>Inline styles</strong>: Directly within the HTML element using the  style  attribute.</li>

        <li><strong>Embedded styles</strong>: Within the  <code className="text-border">&lt;head&gt;</code>  section of the HTML document using the  <code className="text-border">&lt;style&gt;</code>  tag.</li>

        <li><strong>External style sheets</strong>: In a separate <code className="text-border">.<strong>css</strong></code> file linked to the HTML document.</li>

      </ul>

    <p className="margin-top-20">By understanding and effectively using <strong>CSS</strong>, you can create visually appealing and well-structured web pages.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p><strong>CSS</strong> is like the magic paint for your website!</p>
    
    <p>Imagine you have a blank piece of paper (your website). You can use <strong>CSS</strong> to color it, add pictures, and make it look really cool! It's like using different colored markers to make your drawings look awesome.</p>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>April 15, 2024 · by 💎Gem ·</span>
      </div>

      <div className="eye-icon no-margin">
        <EyeIcon />
      </div>

      <div className="post-date no-margin">
        <ViewCounter postId={postId} />
      </div>

      <div className="like-button no-margin">
        <LikeButton postId={postId} />
      </div>

    </div>
    
  </main>

  </>);
}