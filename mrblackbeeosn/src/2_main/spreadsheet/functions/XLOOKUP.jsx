import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function XLOOKUP() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/function#function-terms"><mark className="highlight-tertiary-padding-4-8">Function</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is the XLOOKUP function?</h2>

    {/* This is the content of Spreadsheet Term. */}
    
    <p><strong>XLOOKUP</strong> is a versatile function in spreadsheets that allows you to search for a value in a range of cells and return a corresponding value from another range. It's a more powerful and flexible alternative to functions like VLOOKUP and HLOOKUP.</p>

    <p className="margin-top-20">Here's a breakdown of how it works:</p>
    
      <ul className="list-square">

        <li><strong>Specify the lookup value</strong>: This is the value you want to search for.</li>

        <li><strong>Define the lookup array</strong>: This is the range of cells where you'll search for the lookup value.</li>

        <li><strong>Define the return array</strong>: This is the range of cells where you'll find the corresponding value once the match is found.</li>

        <li><strong>Specify the match mode</strong>: This determines how the function should search for matches (exact, approximate, or wildcard).</li>

        <li><strong>Provide a default value</strong> (<strong>optional</strong>): If no match is found, you can specify a value to be returned.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Example:</h4>

    <p>Imagine you have a table with product names in column A and their prices in column B. To find the price of a product named "Laptop," you could use the <strong>XLOOKUP</strong> function:</p>

    <p className="margin-y-50 text-center"><mark  className="highlight-tertiary-padding-4-8">=<strong>XLOOKUP</strong>("Laptop", A2:A10, B2:B10)</mark></p>

    <p className="margin-bottom-50">This formula would search for "Laptop" in cells A2 to A10 and return the corresponding price from cells B2 to B10.</p>

    <p className="margin-top-20">Key advantages of <strong>XLOOKUP</strong> over VLOOKUP and HLOOKUP:</p>
    
      <ul className="list-square">

        <li><strong>Flexibility</strong>: <strong>XLOOKUP</strong> allows you to search in any direction (left-to-right or right-to-left), while VLOOKUP and HLOOKUP are limited to vertical or horizontal searches.</li>

        <li><strong>Exact or approximate matches</strong>: <strong>XLOOKUP</strong> can handle both exact and approximate matches.</li>

        <li><strong>Default values</strong>: You can specify a default value to be returned if no match is found.</li>

        <li><strong>Error handling</strong>: <strong>XLOOKUP</strong> provides more control over error handling.</li>

      </ul>

    <p className="margin-top-20">By understanding and using the <strong>XLOOKUP</strong> function, you can perform efficient and flexible searches in your spreadsheets, making your data analysis more powerful and efficient.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
    
    <p>Imagine your giant checklist for toys is on a tablet. You have a box for the name of each toy, a box for its color, and a box for how much it costs.</p>

    <h4 className="margin-y-50 text-center">Finding a Toy's Price:</h4>

    <p>The <strong>XLOOKUP</strong> function is like a super-smart search button! It can help you find the price of a toy if you know its name.</p>

    <h4 className="margin-y-50 text-center">Telling the Super-Smart Button:</h4>

    <p>You need to tell the super-smart button (<strong>XLOOKUP</strong>) four things:</p>

      <ol>

        <li><strong>The toy's name</strong>: This is the "lookup value" - what you're searching for.</li>

        <li><strong>The boxes with names and prices</strong>: This is the "lookup array" - where it will look for the name and find the price.</li>

        <li><strong>The box with the price</strong>: This is the "return array" - the box where it will show you the price.</li>

        <li><strong>How to Search</strong>: You can tell it to find an exact match for the toy's name or a close match.</li>

      </ol>

    <h4 className="margin-y-50 text-center">Magic!</h4>

    <p>When you tell the super-smart button these things, it searches for the toy's name in the boxes you told it to look in. If it finds the name, it shows you the price from the box you told it to look for!</p>

    <p className="margin-top-20">So, <strong>XLOOKUP</strong> is like a super-smart search button that helps you find information in your giant checklist! It's a helpful tool for finding things quickly and easily, and it can do even more magic tricks than the regular search buttons!</p>

    <div className="viewcounter">
        
      <div className="post-date no-margin">
        <span>August 18, 2024 · by 💎Gem ·</span>
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