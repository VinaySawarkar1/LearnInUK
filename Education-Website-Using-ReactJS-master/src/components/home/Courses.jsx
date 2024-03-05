import React from 'react';
import './Courses.css'; // Import the CSS file

const popularCourses = [
  {
    title: 'Computer Science',
    description: 'Gain in-depth knowledge of software development principles, delve into cutting-edge technologies like artificial intelligence and data science, and prepare for rewarding careers in software engineering, data analysis, and machine learning.',
  },
  {
    title: 'Business and Management',
    description: 'Develop a strong foundation in business fundamentals like leadership, marketing, finance, and operations. Gain valuable skills in critical thinking, problem-solving, communication, and teamwork, preparing you for diverse career paths in various industries, from consulting and marketing to finance and entrepreneurship.',
  },
  {
    title: 'Engineering (Specializations Available: Mechanical, Electrical, Civil)',
    description: 'Pursue your passion for design, problem-solving, and innovation through a rigorous engineering program. Choose from specializations like mechanical, electrical, or civil engineering, and gain the expertise to design and build sustainable and efficient solutions for real-world challenges, from developing robots and electrical systems to constructing bridges and skyscrapers.',
  },
  {
    title: 'Law',
    description: 'Master the intricacies of the legal system, develop strong analytical and critical thinking skills, and gain the necessary foundation for a successful legal career. Explore diverse areas of law, such as corporate law, criminal law, and human rights law, and prepare to advocate for your clients in various legal settings.',
  },
  {
    title: 'Medicine',
    description: 'Embark on a challenging and rewarding journey to become a doctor. Master the science of human health and disease, hone your clinical skills through practical training, and develop the compassion and empathy essential for providing exceptional patient care. Pursue specializations like surgery, pediatrics, or cardiology, and contribute to advancements in healthcare.',
  },
  {
    title: 'Psychology',
    description: 'Explore the fascinating world of human behavior, cognition, and mental processes. Develop a comprehensive understanding of human development, social interactions, and psychological disorders. Prepare for diverse career paths in areas like clinical psychology, counseling, education, and research, helping individuals and communities navigate mental health challenges and live fulfilling lives.',
  },
  {
    title: 'Art and Design',
    description: 'Unleash your creativity and develop your artistic skills through various mediums like painting, sculpture, photography, and graphic design. Explore diverse artistic movements and techniques, hone your critical thinking and problem-solving abilities, and gain the skills to express yourself visually and communicate ideas through art.',
  },
  {
    title: 'Fashion',
    description: 'Immerse yourself in the dynamic world of fashion design, from conceptualizing and sketching designs to learning the intricacies of pattern making and garment construction. Develop your creative vision, technical skills, and understanding of the fashion industry, and pave the way for a career in fashion design, textiles, or fashion merchandising.',
  },
  {
    title: 'International Relations',
    description: 'Gain insights into global affairs, international politics, and the complex interactions between nations. Explore diverse areas like international security, diplomacy, and global development, and develop critical thinking, communication, and negotiation skills to prepare for careers in government, international organizations, or the non-profit sector.',
  },
  {
    title: 'Marketing',
    description: 'Dive into the dynamic world of marketing and understand the strategies and tactics used to promote products and services. Master essential skills in market research, consumer behavior analysis, and digital marketing, and learn how to create effective marketing campaigns that connect with target audiences and drive brand awareness.',
  },
  {
    title: 'Accounting and Finance',
    description: 'Develop a strong foundation in accounting principles, financial analysis, and investment strategies. Learn how to manage financial resources, analyze financial statements, and make informed financial decisions. Prepare for various careers in accounting, auditing, finance, and investment banking.',
  },
  {
    title: 'Journalism and Media',
    description: 'Explore the ever-evolving world of journalism and media communication. Hone your research, writing, and storytelling skills, and learn diverse mediums like print, broadcast, and online journalism. Develop a critical understanding of media ethics and responsible reporting, and prepare for careers in news reporting, content creation, or public relations.',
  },
];

const PopularCoursesUK = () => {
  return (
    <div className="popular-courses-section">
      <h2 className="uk-heading1">Popular Courses in UK Universities</h2>
      <div className="courses-container">
        {popularCourses.map((course, index) => (
          <div className="course-item" key={course.title}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            {index % 3 === 2 && <div className="row-divider"></div>} {/* Insert divider after every 3rd course */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCoursesUK;
