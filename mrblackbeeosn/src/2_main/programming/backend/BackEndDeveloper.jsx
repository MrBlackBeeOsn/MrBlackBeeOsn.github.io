import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function BackEndDeveloper() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/back-end#back-end-terms"><mark className="highlight-tertiary-padding-4-8">Back-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">What is a Back-End Developer?</h2>

    {/* This is the content of Back-End Term. */}
    
    <p>A <strong>Back-End Developer</strong> builds and maintains the server-side logic and core functionality of websites and applications. They are responsible for the parts of a digital product that users don't see, which includes databases, servers, and the application's business logic. Think of them as the behind-the-scenes engineers who ensure everything works correctly and efficiently.</p>
  
    <p className="margin-top-20">Key Responsibilities</p>
    
      <ul className="list-square">

        <li><strong>Database Management</strong>: They design, create, and manage databases that store all the user information and other critical data. This ensures data is organized, secure, and easily accessible.</li>

        <li><strong>Server-Side Logic</strong>: <strong>Back-end developers</strong> write code that processes user requests, performs calculations, and interacts with the database. This logic handles the "how" of a website's functionality—for example, how an e-commerce site processes a payment or how a social media platform fetches a user's feed.</li>

        <li><strong>API Development</strong>: They build and maintain APIs (Application Programming Interfaces), which act as communication bridges between the front-end (what the user sees) and the back-end. APIs allow different parts of an application to talk to each other.</li>

        <li><strong>Security and Performance</strong>: A crucial part of their job is to ensure the website is secure from threats and that it operates at optimal speed. They implement security protocols and optimize the code to handle a large number of users without slowing down.</li>

      </ul> 

    <h4 className="margin-y-50 text-center">Technologies and Skills</h4>

    <p><strong>Back-end developers</strong> use various technologies, including programming languages like Python, Java, PHP, Ruby, and Node.js. They also work with different databases like MySQL, PostgreSQL, and MongoDB. Strong problem-solving skills, logical thinking, and a solid understanding of algorithms are essential for success in this role. They work closely with Front-End Developers to integrate the user interface with the server-side logic.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}
    
    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>A <strong>Back-End Developer</strong> is like the person who works behind the scenes at a restaurant.</p>
    
      <ul className="list-square">

        <li><strong>What they do</strong>: Imagine you order a pizza. You see the menu (the website's design) and you tell the waiter what you want (that's you clicking a button). The waiter takes your order to the kitchen.</li>

        <li><strong>The kitchen is the back-end</strong>! The people in the kitchen are the <strong>back-end developers</strong>. They make sure the ingredients are in the right place, the ovens are working, and the pizza gets made and sent back to you correctly.</li>

        <li><strong>They build the</strong> "<strong>engine</strong>" <strong>of a website</strong>. A website needs an engine to do things like remember your username, save your favorite videos, or make a game work. <strong>Back-end developers</strong> build and fix that engine.</li>

      </ul>
    
    <p className="margin-top-20">So, while a front-end developer makes the pretty menu you see, a <strong>back-end developer</strong> builds the kitchen and all the tools inside it to make sure your food is made perfectly.</p>

    <p className="margin-top-50 text-small">August 29, 2025 - by 💎Gem</p>

  </main>

  </>);
}