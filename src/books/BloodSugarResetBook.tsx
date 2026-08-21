import React from 'react';
import './book.css';

const BloodSugarResetBook: React.FC = () => {
  return (
    <div className="book-container">
      <div className="book-header">
        <h1>The Blood Sugar Reset Book</h1>
        <p className="subtitle">A Complete 7-Day Guide to Stabilizing Blood Sugar and Reversing Prediabetes</p>
      </div>

      <div className="book-content">
        <section className="chapter">
          <h2>Table of Contents</h2>
          <ul>
            <li>Chapter 1: Understanding Blood Sugar</li>
            <li>Chapter 2: The 7-Day Reset Protocol</li>
            <li>Chapter 3: Nutrition Guidelines</li>
            <li>Chapter 4: Exercise Plan</li>
            <li>Chapter 5: Sleep & Stress Management</li>
            <li>Chapter 6: Tracking Progress</li>
            <li>Chapter 7: Long-Term Success Strategies</li>
          </ul>
        </section>

        <section className="chapter">
          <h2>Introduction</h2>
          <p>
            Welcome to the Blood Sugar Reset Book. This comprehensive guide will walk you through 
            a 7-day protocol designed to reset your blood sugar levels and start your journey 
            towards reversing prediabetes.
          </p>
        </section>

        {/* Add more chapters as needed */}
      </div>

      <div className="book-footer">
        <p>&copy; 2026 Thrive Health. All rights reserved.</p>
      </div>
    </div>
  );
};

export default BloodSugarResetBook;