import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function VLOOKUP(): React.JSX.Element {

  const postId = "VLOOKUP";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/function#function-terms"><mark className="highlight-tertiary-padding-4-8">Function</mark></HashLink></h4>
      
      <h2 className="margin-y-50 text-center">What is the VLOOKUP function?</h2>

      {/* This is the content of Spreadsheet Term. */}

      <p>The <strong>VLOOKUP</strong> function in a spreadsheet is a powerful tool that allows you to search for a specific value in a table or range of cells and return a corresponding value from a different column. It's particularly useful when you have a large dataset and need to quickly find information based on a specific criterion.</p>

      <h4 className="margin-y-50 text-center">Syntax</h4>
      
      <p>The basic syntax for the <strong>VLOOKUP</strong> function is:</p>
        
      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>VLOOKUP</strong>(lookup_value, table_array, col_index_num, [range_lookup])</mark></p>

        <ul className="list-square">

          <li><strong>lookup_value</strong>: The value you want to search for.</li>

          <li><strong>table_array</strong>: The range of cells containing the data you want to search.</li>

          <li><strong>col_index_num</strong>: The column number within the table_array from which you want to return the value.</li>

          <li><strong>range_lookup</strong>: An optional argument that specifies whether to find an exact match or an approximate match. If TRUE or omitted, an approximate match is found. If FALSE, an exact match is required.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Example</h4>
      
      <p>Imagine you have a table of employee information with columns for Employee ID, Name, Department, and Salary. To find the salary of an employee with a specific ID, you could use the <strong>VLOOKUP</strong> function:</p>

      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>VLOOKUP</strong>(A2, B2:E10, 4, FALSE)</mark></p>

      <p>In this example:</p>

        <ul className="list-square">

          <li>A2  contains the employee ID you want to search for.</li>

          <li>B2:E10  is the range of cells containing the employee data.</li>

          <li>4  specifies that you want to return the value from the fourth column (Salary).</li>

          <li>FALSE  indicates that you require an exact match for the employee ID.</li>

        </ul>

      <p className="margin-top-20">The <strong>VLOOKUP</strong> function will search for the employee ID in column B, and if it finds a match, it will return the corresponding salary from column E.</p>

      <h4 className="margin-y-50 text-center">Additional Notes</h4>

        <ul className="list-square">

          <li>The table_array must be sorted in ascending order by the column containing the lookup_value for approximate matches to work correctly.</li>

          <li>If an exact match is not found, the <strong>VLOOKUP</strong> function will return the next closest value that is less than the lookup_value.</li>

          <li>You can use the INDEX and MATCH functions together to achieve similar results to <strong>VLOOKUP</strong>, especially when you need to return a value from a column that is not the last column in the table_array.</li>

        </ul>

      <p className="margin-top-20">By understanding and utilizing the <strong>VLOOKUP</strong> function, you can efficiently search for and retrieve data from large datasets within your spreadsheets.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

      <p>Imagine your giant checklist for toys is on a tablet. You have a box for the name of each toy, a box for its color, and a box for how much it costs.</p>

      <h4 className="margin-y-50 text-center">Finding a Toy's Price:</h4>
      
      <p>The <strong>VLOOKUP</strong> function is like a magic search button! You can use it to find the price of a toy if you know its name.</p>
      
      <h4 className="margin-y-50 text-center">Telling the Magic Button:</h4>
      
      <p>You need to tell the magic button (<strong>VLOOKUP</strong>) three things:</p>

        <ul className="list-square">

          <li><strong>The toy's name</strong>: This is the "lookup value" - what you're searching for.</li>

          <li><strong>The boxes with names and prices</strong>: This is the "table array" - where it will look for the name and find the price.</li>

          <li><strong>The box with the price</strong>: This is the "col_index_num" - the column where the price is written.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Magic!</h4>
      
      <p>When you tell the magic button these things, it searches for the toy's name in the boxes you told it to look in. If it finds the name, it shows you the price from the box you told it to look for!</p>

      <p className="margin-top-20">So, <strong>VLOOKUP</strong> is like a magic search button that helps you find information in your giant checklist! It's a helpful tool for finding things quickly and easily.</p>

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

    </article>

  </main>

  </>);
}