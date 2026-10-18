import React from 'react';
import './book.css';

// Define the chapter structure for the metabolic reset book
const chapters = [
  {
    id: 1,
    title: 'Understanding Metabolic Health',
    content: [
      <p key="1">
        Metabolic health encompasses how well your body processes and utilizes energy from food.
        It involves complex interactions between your hormones, organs, and lifestyle factors that
        determine your risk for chronic diseases like type 2 diabetes, heart disease, and obesity.
      </p>
      <p key="2">
        When your metabolism is functioning optimally, your body efficiently converts food into
        energy, maintains stable blood sugar levels, and regulates fat storage. Poor metabolic
        health, on the other hand, can lead to insulin resistance, chronic inflammation, and
        increased disease risk.
      </p>
    ]
  },
  {
    id: 2,
    title: 'The Science Behind Metabolic Reset',
    content: [
      <p key="1">
        Recent research shows that metabolic dysfunction is often reversible through targeted
        lifestyle interventions. The 12-week protocol in this guide is based on peer-reviewed
        studies demonstrating significant improvements in insulin sensitivity, cholesterol levels,
        and body composition.
      </p>
      <p key="2">
        Key mechanisms addressed in this protocol include:
      </p>
      <ul key="3">
        <li>Reducing inflammation through anti-inflammatory foods</li>
        <li>Improving insulin sensitivity with strategic meal timing</li>
        <li>Enhancing mitochondrial function through specific exercise protocols</li>
        <li>Optimizing hormone balance with stress management techniques</li>
        <li>Supporting gut health, which plays a crucial role in metabolic regulation</li>
      </ul>
    ]
  },
  {
    id: 3,
    title: 'Nutrition Foundation: Building Metabolically Friendly Meals',
    content: [
      <p key="1">
        Nutrition forms the cornerstone of metabolic health. Rather than focusing on restrictive
        dieting, this protocol emphasizes nutrient-dense foods that support stable blood sugar,
        reduce inflammation, and promote satiety.
      </p>
      <p key="2">
        The nutritional approach combines elements from Mediterranean, low-glycemic, and
        anti-inflammatory diets, creating a sustainable eating pattern that can be maintained
        long-term.
      </p>
    ]
  },
  {
    id: 4,
    title: 'The 12-Week Metabolic Reset Protocol',
    content: [
      <p key="1">
        This comprehensive protocol is divided into three 4-week phases, each building upon the
        previous to create lasting metabolic transformation:
      </p>
      <ol key="2">
        <li>
          <strong>Weeks 1-4: Foundation Building</strong> - Establishing baseline habits,
          reducing inflammatory foods, and introducing gentle movement
        </li>
        <li>
          <strong>Weeks 5-8: Metabolic Optimization</strong> - Implementing strategic meal
          timing, increasing exercise intensity, and fine-tuning nutrition
        </li>
        <li>
          <strong>Weeks 9-12: Lifestyle Integration</strong> - Creating sustainable habits,
          optimizing sleep and stress management, and planning for long-term success
        </li>
      </ol>
    ]
  },
  {
    id: 5,
    title: 'Exercise Strategies for Metabolic Health',
    content: [
      <p key="1">
        Exercise is one of the most powerful tools for improving metabolic health. The right
        types of physical activity can increase insulin sensitivity, boost metabolism, and
        reduce visceral fat more effectively than diet alone.
      </p>
      <p key="2">
        This protocol incorporates three key exercise modalities:
      </p>
      <ul key="3">
        <li><strong>Resistance Training</strong>: Builds muscle mass, which increases resting metabolic rate</li>
        <li><strong>High-Intensity Interval Training (HIIT)</strong>: Improves insulin sensitivity and cardiovascular fitness</li>
        <li><strong>Movement Throughout the Day</strong>: Reduces sedentary time and improves glucose metabolism</li>
      </ul>
    ]
  },
  {
    id: 6,
    title: 'Sleep, Stress, and Metabolic Balance',
    content: [
      <p key="1">
        Sleep quality and stress levels have profound effects on metabolic health. Poor sleep
        and chronic stress disrupt hormones like cortisol, insulin, and leptin, leading to
        increased appetite, fat storage, and insulin resistance.
      </p>
      <p key="2">
        Addressing these factors is essential for successful metabolic reset:
      </p>
      <ul key="3">
        <li>Prioritizing 7-9 hours of quality sleep each night</li>
        <li>Implementing stress-reduction techniques like meditation and deep breathing</li>
        <li>Creating a consistent sleep-wake schedule to regulate circadian rhythms</li>
        <li>Using adaptive strategies to manage unavoidable stressors</li>
      </ul>
    ]
  },
  {
    id: 7,
    title: 'Tracking Progress and Adjusting Your Protocol',
    content: [
      <p key="1">
        Monitoring your progress helps you understand what's working and make informed
        adjustments to your protocol. Rather than focusing solely on weight, this approach
        emphasizes multiple markers of metabolic health.
      </p>
      <p key="2">
        Key metrics to track include:
      </p>
      <ul key="3">
        <li>Energy levels throughout the day</li>
        <li>Sleep quality and duration</li>
        <li>Hunger and cravings patterns</li>
        <li>Exercise performance and recovery</li>
        <li>How your clothes fit (often a better indicator than scale weight)</li>
        <li>Optional: waist circumference, blood pressure, and blood work (with doctor supervision)</li>
      </ul>
    ]
  },
  {
    id: 8,
    title: 'Long-Term Metabolic Maintenance',
    content: [
      <p key="1">
        The true measure of success is not just completing the 12-week protocol, but maintaining
        your metabolic improvements for life. This final phase focuses on creating a flexible,
        sustainable approach that works with your unique lifestyle and preferences.
      </p>
      <p key="2">
        Strategies for long-term success include:
      </p>
      <ul key="3">
        <li>Developing a personalized "maintenance mode" that allows for flexibility</li>
        <li>Creating systems that make healthy choices the easy choices</li>
        <li>Building a supportive environment and community</li>
        <li>Regularly reassessing and adjusting your approach as needed</li>
        <li>Celebrating non-scale victories and improvements in how you feel</li>
      </ul>
    ]
  }
];

const FullMetabolicResetBook_print: React.FC = () => {
  return (
    <div className="book-container">
      <div className="book-header">
        <h1>The Complete 12-Week Metabolic Reset Protocol</h1>
        <p className="subtitle">An Evidence-Based Guide to Improving Metabolic Health and Reducing Diabetes Risk</p>
      </div>

      <div className="book-content">
        {/* Table of Contents */}
        <section className="chapter">
          <h2>Table of Contents</h2>
          <ol>
            {chapters.map(chapter => (
              <li key={chapter.id}>
                <strong>Chapter {chapter.id}: {chapter.title}</strong>
              </li>
            ))}
          </ol>
        </section>

        {/* Chapters */}
        {chapters.map(chapter => (
          <section key={chapter.id} className="chapter">
            <h2>Chapter {chapter.id}: {chapter.title}</h2>
            {chapter.content}
          </section>
        ))}

        {/* Conclusion */}
        <section className="chapter">
          <h2>Conclusion</h2>
          <p>
            Embarking on a metabolic reset journey is one of the most powerful investments you
            can make in your long-term health and vitality. By addressing the root causes of
            metabolic dysfunction through nutrition, movement, sleep, and stress management,
            you're not just reducing your risk of diabetes—you're enhancing your energy,
            mood, cognitive function, and overall quality of life.
          </p>
          <p>
            Remember that metabolic health exists on a spectrum, and small, consistent
            improvements compound over time. Be patient with yourself, celebrate progress
            in all its forms, and know that each positive choice contributes to your
            metabolic resilience.
          </p>
          <p>
            You have the knowledge and tools to take control of your metabolic health.
            Now it's time to put them into practice and experience the transformation
            that awaits.
          </p>
        </section>
      </div>

      <div className="book-footer">
        <p>&copy; 2026 Thrive Health. All rights reserved.</p>
        <p>
          <em>This guide is for educational purposes only and is not intended to replace
          professional medical advice. Always consult with your healthcare provider before
          making significant changes to your diet, exercise, or lifestyle routine.</em>
        </p>
      </div>
    </div>
  );
};

export default FullMetabolicResetBook_print;