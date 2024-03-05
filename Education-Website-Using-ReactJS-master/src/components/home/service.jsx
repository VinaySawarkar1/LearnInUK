import React from 'react';
import './service.css';

const servicesAndSupport = [
    {
        title: 'Admission Guidance',
        description: `Choosing the right university and understanding application procedures can be overwhelming. We offer guidance on selecting the best program for your goals, navigating application steps, and completing forms effectively.`,
        icon: 'https://www.collegedhundo.com/images/service/admission-guidance.jpg' // Replace with an appropriate admission icon
      },
      {
        title: 'Visa Application Guidance',
        description: `We provide comprehensive guidance on navigating the UK student visa application process, from helping you understand the requirements to completing the application form and assembling all the necessary documents. Our experts will ensure your application is submitted accurately and efficiently, increasing your chances of success.`,
        icon: 'https://www.britannicaoverseas.com/uploads/services/guidance-for-visa-application_1691494004.jpg'
      },
      {
        title: 'Pre-departure Information Sessions',
        description: `Join our informative sessions to learn about life and studying in the UK. We'll cover topics like cultural adjustment, the UK education system, budgeting tips, and essential pre-departure preparations. These sessions will help you feel confident and well-prepared for your exciting journey.`,
        icon: 'https://www.jamboreeindia.com/know-how/wp-content/uploads/2022/03/Study-abroad-pre-departure-checklist-768x384.png'
      },
      {
        title: 'Accommodation Assistance',
        description: `Finding suitable accommodation can be challenging, especially for international students unfamiliar with the local market. We offer personalized assistance to help you explore different housing options, including university halls of residence, private rentals, and homestay programs. We can also provide guidance on budgeting, contracts, and settling in to your new home.`,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRm1dYpqtHH4sQ3_UTkU3E2phXKZRaF1f_h3tY0XnKdA&s' // Replace with an appropriate accommodation icon
      },
    
      // **Arrival and Settling In**
      {
        title: 'Airport Pick-up and Welcome Services',
        description: `We offer a convenient airport pick-up service to ease your arrival in the UK. Upon arrival, you'll be met by a friendly representative who will assist you with your luggage and guide you to your accommodation or pre-booked transportation.`,
        icon: 'https://www.awaycabs.in/uploads/image/services/airport-pickup-drop-mangalore.jpg'
      },
      {
        title: 'Induction Programs',
        description: `Comprehensive introductions to the university campus, resources, student services, and academic programs will be provided through our induction programs. This will help you navigate your new environment and feel at ease.`,
        icon: 'https://assets.progressoft.com/blogs/induction-program-turning-graduates-into-affiliates.jpg' // Replace with an appropriate induction program icon
      },
      {
        title: 'English Language Support',
        description: `Language courses or workshops are available to help students improve their English proficiency if needed. This ensures you can effectively participate in academic and social life.`,
        icon: 'https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM='
      },
      {
        title: 'Immigration Advice and Support',
        description: `Guidance on registering with local authorities, navigating immigration policies, and managing visa-related matters will be provided to ensure a smooth transition and compliance with regulations.`,
        icon: 'https://media.istockphoto.com/id/626430096/photo/fermale-teacher-with-adult-students-in-community-college.jpg?s=612x612&w=0&k=20&c=oVMDrNwQirQiO7N7SVwCgKma_0DphskYaK-A99aoL7o=' // Replace with appropriate immigration icon
      },
    
      // **Ongoing Support**
      {
        title: 'Academic support',
        description: `Access to tutors, advisors, and learning support services will help you succeed in your studies. This includes academic guidance, subject-specific support, and resources to enhance your learning experience.`,
        icon: 'https://media.istockphoto.com/id/1176571518/vector/vector-of-a-teacher-hand-holding-a-book-bridging-the-gap-in-primary-education-for-children.jpg?s=612x612&w=0&k=20&c=aTY99DUTDz5EQApiOhxLN3sOn2_RiJTImRyr2oUjcKA=' // Replace with appropriate academic support icon
      },
   
];

const ServiceItem = ({ icon, title, description }) => {
    return (
      <div className="service-item">
        <div className="service-text">
          <h3 className='service-content'>{title}</h3>
          <p>{description}</p>
        </div>
        <img src={icon} alt={title} className="service-icon" />
      </div>
    );
  };

const ServicesAndSupport = () => {
  return (
    <section className="services-and-support">
      <p className='uk-heading1'>Main Services & Support for Students</p>
      
      <div className="services-list">
        {servicesAndSupport.map((service) => (
          <ServiceItem
            key={service.title} // Ideally use a unique ID here
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>



      <div className="free-services-section1">
      <p className="uk-heading1">Our Free Services for Students</p>
      <p className="services-description1">
      We are committed to providing comprehensive support for your international student journey, completely free of charge. This includes personalized admission guidance, expert visa application support, informative pre-departure sessions, airport pick-up services (at select universities), and on-campus induction programs. Additionally, we offer limited English language support and access to valuable online resources to ensure your academic success and a smooth transition to life in the UK.
      </p>
      <ul className="services-list list3">
        <li>Admission Guidance</li>
        <li>Visa Application Support</li>
        <li>Pre-departure Information Sessions</li>
        <li>Airport Pick-up (For select universities)</li>
        <li>On-Campus Induction Programs</li>
      </ul>
    </div>





    <div className="benefits-section">
      <p className="uk-heading1">Top Benefits of Studying in the UK</p>
      <div className="benefits-grid">
        <div className="benefit-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfN9cWtXe_UGRQxYCxhtT0avtUoExZG_BE5rHGbRd6A&s" alt="World-class education icon" />
          <h3>World-Class Education</h3>
          <p>Gain a renowned degree from globally respected universities, setting you apart in the job market.</p>
        </div>
        <div className="benefit-card">
          <img src="https://static1.bigstockphoto.com/5/6/1/large2/165362936.jpg" alt="Diverse and vibrant culture icon" />
          <h3>Diverse and Vibrant Culture</h3>
          <p>Immerse yourself in a rich tapestry of cultures and experiences, broadening your horizons.</p>
        </div>
        <div className="benefit-card">
          <img src="https://static.vecteezy.com/system/resources/previews/009/352/662/original/career-decision-illustration-concept-on-white-background-vector.jpg" alt="Enhanced career opportunities icon" />
          <h3>Enhanced Career Opportunities</h3>
          <p>Develop valuable skills and gain access to a global network of employers.</p>
        </div>
        <div className="benefit-card">
          <img src="https://www.telegraph.co.uk/content/dam/family/2022/06/24/smallcitieslead_trans_NvBQzQNjv4BqgCXocDQF5kP7s3jSjli3eCH0-jRUT4rHK8EgtaGoQwQ.jpg?imwidth=960" alt="Thriving cities and historic sites icon" />
          <h3>Thriving Cities and Historic Sites</h3>
          <p>Explore vibrant cities, stunning landscapes, and historical landmarks during your studies.</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ServicesAndSupport;
