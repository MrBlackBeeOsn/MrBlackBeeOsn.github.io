import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function Spreadsheet(): React.JSX.Element {

  const postId = "Spreadsheet";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/spreadsheet#spreadsheet-terms"><mark className="highlight-tertiary-padding-4-8">Spreadsheet</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is a spreadsheet?</h2>

    {/* This is the content of Spreadsheet Term. */}
    
    <p>A <strong>spreadsheet</strong> is a digital tool for organizing and working with information. It's like a giant table with squares you can fill in.</p>

    <p className="margin-top-20">Here's a breakdown:</p>
    
      <ul className="list-square">

        <li><strong>Squares</strong> = <strong>Cells</strong>: Each little box in the <strong>spreadsheet</strong> is called a cell. You can put text, numbers, or even dates in these cells.</li>

        <li><strong>Rows</strong> & <strong>Columns</strong>: The <strong>spreadsheet</strong> has rows (going across) and columns (going down). This helps you find things easily, like on a checkerboard. Each cell is named by its row number and column letter (like A1 or C4).</li>

        <li><strong>Worksheets</strong>: Think of a <strong>spreadsheet</strong> like a notebook with multiple pages. Each page is called a worksheet, and you can have different worksheets to organize different things.</li>

        <li><strong>Number Crunching</strong>: <strong>Spreadsheets</strong> are great for calculations! You can write special instructions called formulas to automatically add, subtract, multiply, or do other math with the numbers in your cells.</li>

        <li><strong>More Than Numbers</strong>: <strong>Spreadsheets</strong> aren't just for numbers! You can also use them to make lists, track things like schedules or allowances, or even create charts to see your data visually.</li>

      </ul>

    <p className="margin-top-20"><strong>Spreadsheets</strong> are like digital organizers that can help you with all sorts of tasks!</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
    
    <p>A <strong>spreadsheet</strong> is like a giant checklist at school, but way cooler! Remember how your teacher has those big sheets with squares to mark stuff off? A <strong>spreadsheet</strong> is like that, but on a computer.</p>
    
      <ul className="list-square">

        <li><strong>Boxes</strong> = <strong>Cells</strong>: Each square on the checklist is like a box in a <strong>spreadsheet</strong>, called a cell. You can write things in these cells, like your toys, your favorite foods, or even how many stickers you have!</li>

        <li><strong>Lines Make it Easy</strong>: The checklist has lines going across and down, right? Those are like rows and columns in a <strong>spreadsheet</strong>. They help you find your stuff quickly, just like finding your name on the attendance sheet.</li>

        <li><strong>Sheets for Different Things</strong>: Maybe you have different checklists for schoolwork and chores. A <strong>spreadsheet</strong> can have different pages too, called worksheets. You can use one for your toys and another for your yummy snacks!</li>

        <li><strong>Magic Math</strong>: Sometimes you need to add stickers on your checklist. In a <strong>spreadsheet</strong>, you can use special words called formulas to do math for you, like adding all your toys together!</li>

        <li><strong>Fun Colors and Pictures</strong>: Your teacher might use colored pens on the checklist. <strong>Spreadsheets</strong> let you change the colors and even add little pictures to your cells, making it extra fun!</li>

      </ul>

    <p className="margin-top-20"><strong>Spreadsheets</strong> are like fancy checklists that help you keep track of all your stuff and even do cool tricks with numbers. It's like having a super-powered organizer at your fingertips!</p>

    <div className="viewcounter">
    
      <div className="post-date no-margin">
        <span>July 19, 2024 · by 💎Gem ·</span>
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