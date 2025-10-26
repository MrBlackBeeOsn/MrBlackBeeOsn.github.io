import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function ProjectBasedLearning(): React.JSX.Element {

  const postId = "ProjectBasedLearning";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/learning#learning-terms"><mark className="highlight-tertiary-padding-4-8">Learning</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is project-based learning?</h1>

      {/* This is the content of Programming Term. */}
      
      <p><strong>Project-based learning</strong> (<strong>PBL</strong>) is a dynamic and comprehensive instructional approach where <strong>students gain knowledge and skills by working for an extended period to investigate and respond to an authentic</strong>, <strong>engaging</strong>, and <strong>complex question</strong>, <strong>problem</strong>, or <strong>challenge</strong>.</p>

      <h4 className="margin-y-50 text-center">Core Characteristics of PBL</h4>
      
      <p><strong>PBL</strong> differs significantly from traditional instruction, which often involves passive reception of facts. Its defining features include:</p>

        <ul className="list-square">

          <li><strong>Centrality</strong>: The project is the central instructional method, not a supplement or an end-of-unit activity. It is the vehicle for teaching the core curriculum content and skills.</li>

          <li><strong>Driving Question</strong>/<strong>Challenge</strong>: Learning is initiated and sustained by a meaningful, open-ended question or problem that requires students to apply knowledge from multiple subjects. This challenge should be <strong>authentic</strong>, meaning it relates to real-world issues, contexts, or audiences.</li>

          <li><strong>Extended Inquiry</strong>: Students engage in a rigorous, extended process of research, questioning, and resource management. They do not merely follow a fixed set of instructions; they take ownership of the investigation process.</li>

          <li><strong>Student Voice and Choice</strong>: Students have a degree of influence over the project's direction, the resources used, and the final product. This fosters engagement and a sense of ownership.</li>

          <li><strong>21st Century Skills</strong>: The methodology inherently builds crucial skills like <strong>collaboration</strong>, <strong>critical thinking</strong>, <strong>communication</strong>, and <strong>self-management</strong>.</li>

          <li><strong>Public Product</strong>: The learning culminates in a product or presentation shared with a genuine audience beyond the classroom. This public accountability motivates students to produce high-quality work and practice professional communication.</li>

        </ul>
      
      <h4 className="margin-y-50 text-center">The Process</h4>

      <p>A typical <strong>PBL</strong> cycle involves several stages:</p>

        <ol>

          <li><strong>Launch</strong>: Introducing the driving question/challenge and establishing the context.</li>

          <li><strong>Sustained Inquiry</strong>: Students research, gather information, and develop solutions. This phase includes various learning activities, workshops, and teacher-led instruction necessary for the project.</li>

          <li><strong>Critique and Revision</strong>: Students receive feedback (from peers, teachers, or outside experts) on their work-in-progress and use that critique to iterate and improve their products.</li>

          <li><strong>Presentation</strong>/<strong>Exhibition</strong>: Students formally present their product and findings to the intended audience.</li>

          <li><strong>Reflection</strong>: Students reflect on their learning journey, the content knowledge gained, the skills used, and how they would approach similar problems in the future.</li>

        </ol>

      <p className="margin-top-20"><strong>PBL</strong> provides a deep, interdisciplinary, and engaging way for students to learn content by actively applying it to solve meaningful problems.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h2 className="margin-bottom-50 text-center">🌾 Think simply!</h2>

      <p><strong>Project-based learning</strong> is like a big, fun adventure where you learn by <strong>doing</strong> something important! 🗺️</p>

        <ul className="list-square">

          <li>Instead of just reading a book about building a toy car, your teacher says, "Let's actually <strong>build a real toy car</strong> that can race!"</li>

          <li>You don't just sit and listen; you <strong>ask questions</strong>, <strong>try things</strong>, and <strong>work with your friends</strong>.</li>

          <li>You learn everything you need - like how wheels turn, why a car needs to be light, and how to measure things - <strong>while you are building the car</strong>.</li>

          <li>The best part is that when you finish, you have a cool, real thing to <strong>show everyone</strong>!</li>

        </ul>

      <p className="margin-top-20">So, it's learning by making, not just by listening! 🚗💨</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span>October 19, 2025 · by 💎Gem ·</span>
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