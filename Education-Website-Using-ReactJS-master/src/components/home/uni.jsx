import React from 'react';
import "./uni.css"
import { Link } from 'react-router-dom';


function YourComponent() {
  const handleButtonClick = () => {
    // Optional: Perform any actions before navigation here
  };
}


const universities = [
  // Replace with your actual university data
  {
    id: 1,
    image: 'https://www.studentgoodguide.com/wp-content/uploads/2022/09/oxford-university-uk-1-750x458.jpg',
    name: 'University of Oxford',
    location: 'Oxford, England',
    description: 'One of the world\'s oldest universities, known for its prestigious academic reputation and historic colleges.',
  },
  {
    id: 2,
    image: 'https://images.shiksha.com/mediadata/images/articles/1679509597phpeq2zw8.jpeg',
    name: 'University of Cambridge',
    location: 'Cambridge, England',
    description: 'Another prestigious university, renowned for its research and scholarship in various fields.',
  },
  {
    id: 3,
    image: 'https://study-eu.s3.eu-west-1.amazonaws.com/uploads/image/path/132/wide_fullhd_webp_ucl-university-college-london.webp',
    name: 'University College London (UCL)',
    location: 'London, England',
    description: 'A leading university in London, offering a diverse range of undergraduate and postgraduate programs.',
  },
  {
    id: 4,
    image: 'https://pxl-imperialacuk.terminalfour.net/fit-in/453x290/prod01/channel_2/media/migration/media/sign_news_releases--tojpeg_1584977567570_x4.jpg',
    name: 'Imperial College London',
    location: 'London, England',
    description: 'A world-renowned center for science, engineering, medicine, and business education.',
  },
  {
    id: 5,
    image: 'https://www.ed.ac.uk/sites/default/files/styles/landscape_breakpoints_theme_uoe_tv_1x/public/thumbnails/image/cam_about-us-1_old_college_0.jpg?itok=A1sM0Jva',
    name: 'University of Edinburgh',
    location: 'Edinburgh, Scotland',
    description: 'One of the oldest universities in Scotland, known for its strong research and teaching across various disciplines.',
  },
  {
    id: 6,
    image: 'https://cdn-indgn.nitrocdn.com/rBRXgvHgrIwinogeUpjfVJYRFXltIygq/assets/images/optimized/rev-1d89ab2/eugateway.in/wp-content/uploads/2022/08/f100.jpg',
    name: 'University of Manchester',
    location: 'Manchester, England',
    description: 'A research-intensive university with a focus on innovation and social responsibility.',
  },
  
];

const UniversityCard = ({ image, name, location, description }) => {
  

  
  return (
 
    <div className="university-card1">
      <img src={image} alt={name} className="card-image1" />
      <div className="card-content1">
        <h3>{name}</h3>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
   
  );
};

const UniversityGrid = () => {
  return (
    <div className="container1">
    <h2 className='uk-heading1'>Top Universities in UK</h2>
    <div className="grid-container1">
      {universities.map((university) => (
        <UniversityCard
          key={university.id}
          image={university.image}
          name={university.name}
          location={university.location}
          description={university.description}
        />
      ))}
    </div>
    <button >Explore All Universities</button>
  </div>
  );
};

export default UniversityGrid;
