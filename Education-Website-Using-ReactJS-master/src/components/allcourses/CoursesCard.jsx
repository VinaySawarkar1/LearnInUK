import React from 'react';

const whyStudyInUK = [
  {
    title: 'World-Class Education',
    description: 'Gain a renowned degree from globally respected universities like the University of Oxford, University of Cambridge, and Imperial College London, setting you apart in the job market with a qualification recognized worldwide.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfN9cWtXe_UGRQxYCxhtT0avtUoExZG_BE5rHGbRd6A&s',
  },
  {
    title: 'Diverse and Vibrant Culture',
    description: 'Immerse yourself in a rich tapestry of cultures and experiences, from the bustling cosmopolitan life of London to the historical charm of Edinburgh and the breathtaking landscapes of Scotland and Wales. Experience world-renowned museums, art galleries, and historical landmarks, broadening your horizons and fostering intercultural understanding.',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzzBPFIhbzZxwOyZ3yZjecTAaBZRwvkCcWlZyWm7WkWw&s',
  },
  {
    title: 'Enhanced Career Opportunities',
    description: "Develop valuable skills sought after by employers globally through rigorous academic programs and practical learning opportunities. Benefit from the UK's strong connections to major international companies and organizations, gaining access to a vast network of potential employers and internship placements.",
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9xZVMRO4JK1z1gvEAOS7hUZTVkbkNiUdl-9HxMcZkDA&s',
  },
  {
    title: 'Thriving Cities and Historic Sites',
    description: "Explore vibrant cities like London, Manchester, and Edinburgh, each offering their unique cultural experiences. Immerse yourself in the rich history of the UK, from ancient castles and Roman ruins to medieval cathedrals and Victorian landmarks, gaining a deeper understanding of the country's heritage.",
    icon: 'https://placeimg.com/640/480/nature',
  },
  {
    title: 'Supportive Learning Environment',
    description: "Benefit from personalized guidance from experienced professors and tutors, access to excellent facilities and resources, and a welcoming academic community that fosters student success. The UK education system emphasizes critical thinking, independent learning, and research skills, equipping you with the necessary tools to thrive in today's globalized world.",
    icon: 'https://placeimg.com/640/480/people',
  },
  {
    title: 'Pathway to a Global Future',
    description: 'Gain an international experience that opens doors to exciting career prospects worldwide. Studying in the UK allows you to develop a global mindset, enhance your communication and collaboration skills, and build a network of international connections, positioning yourself for success in a globalized job market.',
    icon: 'https://placeimg.com/640/480/world',
  },
];

const WhyStudyInUK = () => {
  return (
    <div className="why-study-uk-section1">
      <section className="uk-info1">
        <h2>The United Kingdom: A Destination for Excellence in Education</h2>
        <p>
          The UK boasts a rich academic tradition, home to some of the world's oldest and most prestigious universities, including Oxford, Cambridge, and Imperial College London. Studying in the UK offers a unique opportunity to gain a world-class education, immerse yourself in a diverse and vibrant culture, and equip yourself with the skills and knowledge to succeed in a globalized world.
        </p>
        <p>
          The UK education system is renowned for its rigorous academic standards, innovative teaching methods, and emphasis on research and critical thinking. Universities in the UK offer a broad range of undergraduate and postgraduate programs across various disciplines, allowing you to find the perfect program to match your academic aspirations.
        </p>
      </section>
      <section className="benefits-grid1">
        <h2>Benefits of Studying in the UK</h2>
        <div className="card-container1">
          {whyStudyInUK.map((benefit) => (
            <div className="benefit-card1" key={benefit.title}>
              <img src={benefit.icon} alt={benefit.title} />
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="uk-study-info1">
        <h2>More about Studying in the UK</h2>
       
          <p>
          Choosing to study in the UK opens doors to a multitude of benefits beyond the academic realm. You'll experience a rich cultural tapestry, from the vibrant nightlife of London to the traditional festivals and music scenes throughout the country. Explore diverse landscapes, from the rolling hills of the English countryside to the rugged beauty of the Scottish Highlands and the breathtaking coastlines of Wales.
        </p>
        <p>
          Studying in the UK also provides opportunities for personal growth and development. You'll gain valuable life skills through independent living, navigating a new environment, and adapting to a different culture. The UK education system fosters critical thinking, problem-solving, and communication skills, preparing you for success in your chosen career path.
        </p>
        <p>
          Additionally, the UK government offers various visa options to facilitate international student mobility. With the right visa, you may be able to work part-time during your studies and gain valuable work experience. After graduation, you may be eligible for post-study work visas, allowing you to stay in the UK and gain experience in your field.
        </p>
      </section>
    </div>
  );
}

export default WhyStudyInUK;