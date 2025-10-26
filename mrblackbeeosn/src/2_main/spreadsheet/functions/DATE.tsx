import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function DATE(): React.JSX.Element {

  const postId = "DATE";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/function#function-terms"><mark className="highlight-tertiary-padding-4-8">Function</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is the DATE function?</h1>

      {/* This is the content of Spreadsheet Term. */}

      <p>The <strong>DATE</strong> Function in Spreadsheets: A Detailed Explanation</p>
      
      <p>The <strong>DATE</strong> function is a powerful tool in spreadsheet software like Microsoft Excel or Google Sheets that allows you to create a date based on specific year, month, and day values. It's particularly useful when you need to:</p>

        <ul className="list-square">

          <li><strong>Calculate future or past dates</strong>: You can use it to determine dates that are a certain number of days, weeks, or months away from a given date.</li>

          <li><strong>Create a series of dates</strong>: If you need a list of consecutive dates, the <strong>DATE</strong> function can generate them automatically.</li>

          <li><strong>Validate dates</strong>: You can use it to ensure that the dates entered into your spreadsheet are valid and consistent.</li>

        </ul>

      <h4 className="margin-y-50 text-center">Syntax</h4>
      
      <p>The basic syntax for the <strong>DATE</strong> function is:</p>

      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>DATE</strong>(year, month, day)</mark></p>

        <ul className="list-square">

          <li><strong>Year</strong>: The year you want to specify.</li>

          <li><strong>Month</strong>: The month number (1 for January, 2 for February, and so on).</li>

          <li><strong>Day</strong>: The day of the month.</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">Examples</h4>

      <p>To create a date for January 1, 2024:</p>

      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>DATE</strong>(2024, 1, 1)</mark></p>

      <p>To calculate the date 100 days from today:</p>

      <p className="margin-y-50 text-center"><mark  className="highlight-255-padding-4-8 text-border1">=<strong>DATE</strong>(YEAR(TODAY()), MONTH(TODAY()), DAY(TODAY()) + 100)</mark></p>
      
      <h4 className="margin-y-50 text-center">Additional Notes</h4>

        <ul className="list-square">

          <li>The <strong>DATE</strong> function returns a serial number representing the date. You can format this serial number to display the date in your desired format (e.g., "MM/DD/YYYY").</li>

          <li>If you input invalid values for year, month, or day, the <strong>DATE</strong> function will return an error.</li>

          <li>You can use the <strong>DATE</strong> function in conjunction with other functions to perform more complex date calculations. For example, you could use it with the EDATE function to calculate a date a certain number of months from a given date.</li>

        </ul>

      <p className="margin-top-20">By understanding and utilizing the <strong>DATE</strong> function, you can efficiently manage dates and perform various date-related calculations within your spreadsheets.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>
      
      <p>Imagine your giant checklist for toys has a special magic wand. This magic wand is called the <strong>DATE</strong> function! It can help you with your toys in a fun way.</p>

        <ul className="list-square">

          <li><strong>Making New Dates</strong>: The magic wand can create new dates, like the <strong>date</strong> for your birthday or the day you got your new toy car.</li>

          <li><strong>Counting Days</strong>: You can tell the magic wand to count days and make a new date. For example, you could say "Make a date 100 days from today" and the magic wand would tell you the <strong>date</strong>!</li>

          <li><strong>Making Lists of Dates</strong>: If you want a list of dates, like all the days you played with your favorite toy, the magic wand can make a list for you!</li>

          <li><strong>Checking if Dates Are Right</strong>: The magic wand can also check if a date you wrote is correct. It's like having a date checker!</li>

        </ul>

      <p className="margin-top-20">So, the <strong>DATE</strong> function is like a magic wand that helps you with dates on your giant checklist! It can make new dates, count days, make lists, and check if dates are right. It's a super helpful tool for keeping track of your stuff!</p>

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