import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HLOOKUP(): React.JSX.Element {

  const postId = "HLOOKUP";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/function#function-terms"><mark className="highlight-tertiary-padding-4-8">Function</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is the HLOOKUP function?</h1>

      {/* This is the content of Spreadsheet Term. */}

      <p><strong>HLOOKUP</strong> is a powerful function in spreadsheets that allows you to search for a value in the top row of a table and return a corresponding value from a specified row. It's like having a magnifying glass that can scan across the top of your checklist and find the information you need.</p>
      
      <p className="margin-top-20">Here's how it works:</p>

        <ul className="list-square">

          <li><strong>Specify the value you want to find</strong>: This is the value you're looking for in the top row of your table.</li>

          <li><strong>Define the table range</strong>: This is the area of your spreadsheet where the data is located.</li>

          <li><strong>Specify the row number</strong>: This is the row number from which you want to retrieve the corresponding value.</li>

        </ul>

      <h3 className="margin-y-50 text-center">For example:</h3>
      
      <p>Imagine you have a table of employee information with their names in the first row and their salaries in the second row. If you want to find the salary of an employee named "John," you could use the <strong>HLOOKUP</strong> function:</p>

      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>HLOOKUP</strong>("John", A1:B5, 2, FALSE)</mark></p>

      <p>This formula would search for "John" in the first row (A1:B1) of the table, and if found, it would return the corresponding value from the second row (B2). The FALSE argument specifies that you want an exact match for "John."</p>

      <h3 className="margin-y-50 text-center">Key points to remember:</h3>

        <ul className="list-square">

          <li><strong>Horizontal lookup</strong>: <strong>HLOOKUP</strong> is designed for horizontal searches, meaning it looks for values in the first row of a table.</li>

          <li><strong>Exact or approximate match</strong>: You can choose whether to find an exact match or an approximate match using the  range_lookup  argument.</li>

          <li><strong>Error handling</strong>: If the lookup value is not found, the <strong>HLOOKUP</strong> function will return an error.</li>

        </ul>
      
      <p className="margin-top-20">By understanding and using the <strong>HLOOKUP</strong> function, you can efficiently search for and retrieve data from your spreadsheets, making your work more efficient and accurate.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌾 Think simply!</h2>
      
      <p>Imagine your giant checklist for toys is on a tablet. You have a box for the name of each toy, a box for its color, and a box for how much it costs.</p>

      <h3 className="margin-y-50 text-center">Finding a Toy's Price:</h3>
      
      <p>The <strong>HLOOKUP</strong> function is like a magic search button! You can use it to find the price of a toy if you know its name.</p>

      <h3 className="margin-y-50 text-center">Telling the Magic Button:</h3>
      
      <p>You need to tell the magic button (<strong>HLOOKUP</strong>) three things:</p>

        <ul className="list-square">

          <li><strong>The toy's name</strong>: This is the "lookup value" - what you're searching for.</li>

          <li><strong>The boxes with names and prices</strong>: This is the "table array" - where it will look for the name and find the price.</li>

          <li><strong>The box with the price</strong>: This is the "col_index_num" - the column where the price is written.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Magic!</h3>
      
      <p>When you tell the magic button these things, it searches for the toy's name in the boxes you told it to look in. If it finds the name, it shows you the price from the box you told it to look for!</p>

      <p className="margin-top-20">So, <strong>HLOOKUP</strong> is like a magic search button that helps you find information in your giant checklist! It's a helpful tool for finding things quickly and easily.</p>

      <div className="viewcounter">
          
        <div className="post-date no-margin">
          <span>August 18, 2024

  · by 💎Gem ·</span>
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

    </article>
    
  </main>

  </>);
}