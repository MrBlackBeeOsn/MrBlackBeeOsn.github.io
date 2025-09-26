import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Python() {
  return (<>

  <main className="image image2">

    <h4><HashLink smooth to="/programming#back-end-terms"><mark className="highlight-tertiary-padding-4-8">Back-End</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center" id="programming-terms">What is Python?</h2>

    {/* This is the content of Programming Term. */}

    <p><strong>Python</strong> is a high-level, interpreted programming language known for its clear syntax and readability. It's used for a wide range of applications, from web development and data science to machine learning and automation.</p>

    <p className="margin-top-20">Key Features</p>
    
      <ul className="list-square">

        <li><strong>Readability</strong>: <strong>Python</strong>'s syntax is designed to be easy to read and write, using clear, English-like keywords. This makes it a great language for beginners and for team collaboration.</li>

        <li><strong>Interpreted</strong>: Unlike compiled languages, <strong>Python</strong> code is executed directly by an interpreter, line by line. This makes the development process faster, as you don't need to compile the entire program before running it.</li>

        <li><strong>Dynamically Typed</strong>: You don't have to declare the data type of a variable. <strong>Python</strong> automatically determines the type at runtime, which simplifies coding.</li>

        <li><strong>Extensive Libraries</strong>: <strong>Python</strong> has a vast collection of standard and third-party libraries for nearly any task, such as NumPy for scientific computing, Pandas for data analysis, and Django for web development. This rich ecosystem saves developers a significant amount of time.</li>

        <li><strong>Versatility</strong>: <strong>Python</strong> is a multi-paradigm language, supporting procedural, object-oriented, and functional programming styles. This flexibility allows developers to choose the best approach for a given problem.</li>

      </ul>

    <p className="margin-top-20">Common Use Cases</p>
    
      <ul className="list-square">

        <li><strong>Web Development</strong>: Frameworks like Django and Flask are used to build powerful web applications.</li>

        <li><strong>Data Science and Machine Learning</strong>: Its simple syntax and powerful libraries make it a top choice for data analysis, visualization, and building machine learning models.</li>

        <li><strong>Automation</strong>: <strong>Python</strong> is widely used to automate repetitive tasks, such as scripting system administration or automating web interactions.</li>

        <li><strong>Game Development</strong>: Libraries like Pygame are used to create simple games and prototypes.</li>

        <li><strong>Scientific Computing</strong>: It's a popular choice in scientific and academic fields for its numerical and computational capabilities.</li>

      </ul>

    <p className="margin-top-20"><strong>Python</strong>'s simplicity and versatility have made it one of the most popular programming languages today. Its large and active community contributes to a continuous flow of new libraries and resources, making it a powerful tool for a diverse set of applications.</p>

    {/* =============================
          🌾 Think simply!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

    <p><strong>Python</strong> is a special secret language that helps you talk to computers. It's like a magic spell you can write to make the computer do cool things.</p>
    
      <ul className="list-square">

        <li>You can tell it to make a fun game.</li>

        <li>You can tell it to make a cartoon movie.</li>

        <li>You can even tell it to help you with your homework!</li>

      </ul>

    <p className="margin-top-20">It's an easy language to learn, like learning new words to tell your friend what to do. The computer listens to your <strong>Python</strong> words and does exactly what you tell it.</p>

    <p className="margin-top-50 text-small">September 14, 2025 - by 💎Gem</p>

  </main>

  </>);
}