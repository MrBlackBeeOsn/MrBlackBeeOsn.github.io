import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function SQL() {
  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/programming#back-end-terms"><mark className="highlight2">Back-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is SQL?</h2>

    {/* This is the content of Programming Term. */}

    <p><strong>SQL</strong> (Structured Query Language) is a special language programmers use to talk to databases. It's like having a secret code to ask the database for information or tell it to do things. Here's a breakdown without metaphors:</p>

    <h4 className="margin-y-50 text-center">Function:</h4>

    <p><strong>SQL</strong> allows programs to perform various tasks on databases, such as:</p>
    
      <ul className="list-square">

        <li><strong>Retrieving data</strong>: <strong>SQL</strong> can be used to select specific information from the database, like finding all users who live in a certain city.</li>

        <li><strong>Inserting data</strong>: <strong>SQL</strong> can be used to add new information to the database, like creating a new account for a user on a website.</li>

        <li><strong>Updating data</strong>: <strong>SQL</strong> can be used to modify existing information in the database, like changing a user's email address.</li>

        <li><strong>Deleting data</strong>: <strong>SQL</strong> can be used to remove information from the database, like deleting an old product listing from a shopping website.</li>

      </ul>
    
    <h4 className="margin-y-50 text-center">Structure of SQL statements:</h4>
    
    <p><strong>SQL</strong> statements are like instructions written in a specific format that the database understands. They typically include keywords like  SELECT ,  INSERT ,  UPDATE , and  DELETE , followed by details about what data to work with and how.</p>
    
    <h4 className="margin-y-50 text-center">Benefits of using SQL:</h4>
    
      <ul className="list-square">

        <li><strong>Standardized language</strong>: <strong>SQL</strong> is a widely used language, so programmers familiar with <strong>SQL</strong> can easily work with different databases.</li>

        <li><strong>Powerful and flexible</strong>: <strong>SQL</strong> allows for complex queries and data manipulation tasks.</li>

        <li><strong>Efficient</strong>: <strong>SQL</strong> can retrieve and update data efficiently, especially for large databases.</li>

      </ul>
     
    <h4 className="margin-y-50 text-center">How programs use <strong>SQL</strong>:</h4>
    
    <p>Programs don't directly use <strong>SQL</strong> statements within their code. Instead, they use libraries or frameworks that translate their requests into <strong>SQL</strong> and communicate with the database.</p>
    
    <p className="margin-top-20">In summary, <strong>SQL</strong> (Structured Query Language) is a powerful tool for programmers to interact with databases. It provides a standardized way to retrieve, insert, update, and delete data, making it essential for managing information stored in databases.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p>Imagine you have a giant room full of your favorite toys! But it's a mess - everything is mixed together, making it hard to find what you want.</p>

    <p><strong>SQL</strong> (pronounced "S-Q-L") is like a special way to talk to a giant toy box organizer. This organizer has drawers and shelves to keep everything tidy. Here's how it works:</p>
    
      <ul className="list-square">

        <li><strong>Drawers are like tables</strong>: The organizer has drawers for different types of toys, like cars, dolls, and stuffed animals. These drawers are like tables in a database, where information is stored in categories.</li>

        <li><strong>Labels are like columns</strong>: Each drawer has labels on the front to tell you what's inside. These labels are like columns in a database table. One column might hold the toy's name, another its color, and another where you got it from.</li>

        <li><strong>Secret code</strong> (<strong>SQL</strong>) <strong>is like asking for toys</strong>: You can't reach into the organizer all the time. Instead, you use a secret code to tell it what you want. This secret code is like <strong>SQL</strong>.</li>

      </ul>

    <p className="margin-top-20">Here are some things you can do with the secret code:</p>
    
      <ul className="list-square">

        <li><strong>Find a toy</strong>: You can use the code to ask the organizer to find a specific toy, like "Bring me the red car!" In <strong>SQL</strong>, this would be like asking the database to find all toys with the color "red" and the type "car".</li>

        <li><strong>Put away a new toy</strong>: You can use the code to tell the organizer to put away a new toy, like "Put away the blue robot!" In <strong>SQL</strong>, this would be like adding a new entry to the database table with details about the robot toy.</li>

        <li><strong>Change a toy's label</strong>: You can use the code to change a toy's label, like "Change the green doll's name to 'Luna'." In <strong>SQL</strong>, this would be like updating information in the database table, such as changing the name of a doll with a specific ID.</li>

      </ul>
    
    <p className="margin-top-20">By using this secret code (<strong>SQL</strong>), programs can easily talk to databases and keep all the information organized, just like the giant toy box organizer! This helps them find the information they need quickly, whether it's for a website, a game, or even a library app.</p>

    <p className="margin-top-50 text-small">April 25, 2024 - by 💎Gem</p>
    
  </main>

  </>);
}