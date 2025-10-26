import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function MicroLearning(): React.JSX.Element {

  const postId = "MicroLearning";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/learning#learning-terms"><mark className="highlight-tertiary-padding-4-8">Learning</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">What is component learning?</h1>

      {/* This is the content of Programming Term. */}
      
      <p><strong>Micro-learning</strong> is an approach to education and training that focuses on delivering content in <strong>small</strong>, <strong>highly focused bursts of information</strong>, typically lasting from a few seconds up to a maximum of 10–15 minutes. Its design is centered on addressing specific learning objectives and fitting into the busy schedules of modern learners.</p>

      <h4 className="margin-y-50 text-center">Core Characteristics</h4>

        <ul className="list-square">

          <li><strong>Duration</strong>: The content is brief and concise, often delivered in 1 to 5-minute segments. The short duration is the defining feature, aligning with the brain's capacity for focused attention.</li>

          <li><strong>Focus</strong>: Each <strong>micro-learning</strong> unit addresses <strong>only one</strong> distinct skill, concept, or learning objective. This narrow scope ensures clarity and prevents cognitive overload.</li>

          <li><strong>Modularity</strong>: The small units are self-contained and stand alone. They can be consumed independently, but they can also be combined and sequenced into longer, comprehensive learning paths.</li>

          <li><strong>Format Diversity</strong>: Content is delivered across various media, including short videos (the most common format), infographics, quizzes, interactive scenarios, brief texts, and flashcards.</li>

          <li><strong>Just-in-Time</strong> (<strong>JIT</strong>) <strong>Learning</strong>: <strong>Micro-learning</strong> is ideally suited for JIT application, meaning the information is accessed and consumed exactly at the moment it is needed (e.g., watching a 3-minute video on how to use a specific software feature just before attempting the task).</li>

        </ul>
      
      <p className="margin-top-20">Advantages and Applications</p>
      
      <h4 className="margin-y-50 text-center">Increased Retention:</h4>
      
      <p>By presenting information in smaller chunks followed by short periods of reflection or application, <strong>micro-learning</strong> aligns with principles of cognitive science, often leading to better information retention and recall than lengthy training sessions.</p>

      <h4 className="margin-y-50 text-center">Flexibility and Accessibility:</h4>
      
      <p>Learners can access content on mobile devices during short breaks, commutes, or in between tasks. This flexibility improves completion rates and allows learning to be seamlessly integrated into the workflow.</p>

      <h4 className="margin-y-50 text-center">Efficiency:</h4>
      
      <p>It saves both the learner's and the organization's time by eliminating unnecessary padding often found in longer modules.</p>

      <h4 className="margin-y-50 text-center">Workplace Training:</h4>
      
      <p>It is widely used in corporate environments for things like:</p>

        <ul className="list-square">

          <li>Onboarding and compliance refreshers.</li>

          <li>Software skill training and feature updates.</li>

          <li>Sales training on new product specifications.</li>

          <li>Performance support (JIT help).</li>

        </ul>

      <p className="margin-top-20">In summary, <strong>micro-learning</strong> is an intentional instructional design strategy that leverages brevity and modularity to make learning more efficient, accessible, and highly effective for mastering specific competencies.</p>

      {/* =============================
            🌾 Think simply!
      ============================= */}
      
      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">🌾 Think simply!</h3>

      <p><strong>Micro-learning</strong> is like eating a giant cake, but in tiny, yummy bites! 🍰</p>

        <ul className="list-square">

          <li><strong>The Cake is all the things you need to learn</strong>. Trying to eat the whole cake at once would make your tummy hurt!</li>

          <li><strong>The Tiny Bites are the micro-lessons</strong>. You learn one small thing at a time, like "What is the number 3?" or "How to tie one shoe knot."</li>

          <li><strong>It's fast</strong>"! Each bite only takes a minute or two, so you can learn something new while you wait for the bus or before you start playing!</li>

        </ul>

      <p className="margin-top-20">It makes learning feel easy and quick, so your brain doesn't get too tired! 🧠✨</p>

      <div className="viewcounter">
      
        <div className="post-date no-margin">
          <span> · by 💎Gem ·</span>
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