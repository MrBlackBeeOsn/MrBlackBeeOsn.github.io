import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function Formula(): React.JSX.Element {

  const postId = "Formula";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/spreadsheet#spreadsheet-terms"><mark className="highlight-tertiary-padding-4-8">Spreadsheet</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is a formula in a spreadsheet?</h1>

      {/* This is the content of Spreadsheet Term. */}

      <p>A <strong>formula</strong> in a spreadsheet is like a special instruction you give to a cell, telling it exactly what to calculate or do. It's like a secret recipe for the cell to follow!</p>

      <p className="margin-top-20">Here's how it works:</p>
      
        <ul className="list-square">

          <li><strong>Cells Do Stuff</strong>: Cells in a spreadsheet can hold numbers, text, or even dates. But sometimes, you want a cell to do something special, like adding numbers together.</li>

          <li><strong>The Secret Recipe</strong>: A <strong>formula</strong> is like a secret recipe you write in the cell. It tells the cell what numbers to use (like ingredients) and what calculation to do (like mixing them). For example, the <strong>formula</strong> "=A1 + A2" tells the cell to add the values in cells A1 and A2.</li>

          <li><strong>The Magic Happens</strong>: Once you write the <strong>formula</strong>, the cell follows the instructions and shows the result. In our example, the cell would show the sum of the values in A1 and A2.</li>

          <li><strong>More Than Math</strong>: <strong>Formulas</strong> aren't just for math! You can use them for other things too, like finding the average of a group of numbers, or even looking up information from other parts of your spreadsheet.</li>

          <li><strong>Making Things Automatic</strong>: <strong>Formulas</strong> are super helpful because they make things automatic. Instead of typing in the sum every time you want to add numbers, you can write a <strong>formula</strong> once and the cell will always show the correct result, even if the numbers change!</li>

        </ul>

      <p className="margin-top-20">So, a <strong>formula</strong> in a spreadsheet is like a secret recipe that tells a cell what to do. It makes things automatic and saves you time, making your spreadsheet work like magic!</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌾 Think simply!</h2>

      <p>A <strong>formula</strong> in a spreadsheet is like a special whisper you tell a box on your giant checklist! Remember how your checklist has squares for your toys? In a spreadsheet, those squares are called cells.</p>
      
        <ul className="list-square">

          <li><strong>Cells Can Do More</strong>: Normally, you just write things in your checklist squares. But in a spreadsheet, you can whisper a secret message (<strong>formula</strong>) to a cell, telling it to do something special.</li>

          <li><strong>Whispering for Math</strong>: Imagine you have a square for your red cars and another for your blue cars. You can whisper a <strong>formula</strong> like "Red Cars + Blue Cars" to a new square. This tells the cell to add the number of red cars and blue cars together and show the total!</li>

          <li><strong>More Than Adding</strong>: Your whispers aren't just for adding! You can whisper other things too, like "Find the biggest toy" or "Count all the stuffed animals." The cell then follows your instructions and shows the answer!</li>

          <li><strong>Secret Code Words</strong>: When you whisper, you might use special code words like "SUM" for adding or "COUNT" for counting. These words help the cell understand what trick you want it to do.</li>

          <li><strong>Saving Time</strong>: Whispering <strong>formulas</strong> saves you time! Instead of counting your toys one by one, you can whisper "COUNT" and the cell does it for you in a flash!</li>

        </ul>

      <p className="margin-top-20">So, <strong>formulas</strong> in a spreadsheet are like secret whispers that tell cells to do cool tricks. They make your checklist super smart and help you keep track of things in a fun and easy way!</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>July 20, 2024 · by 💎Gem ·</span>
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