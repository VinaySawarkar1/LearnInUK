import React from "react"
import Back from "../common/back/Back"
import PriceCard from "./PriceCard"
import "./price.css"
import Faq from "./Faq"

const Pricing = () => {
  return (
    <>
      <Back title='Moving to the UK' />
      <div className="moving-to-uk-page">
        {/* Hero section */}
      

        {/* About the UK section */}
        <section className="about-uk" id="sec">
          <h2 className="section-title">About the UK</h2>
          <p>
            The United Kingdom is a sovereign state comprising England, Scotland, Wales, and Northern Ireland. Each nation boasts distinct cultures, traditions, and landscapes. Understanding these distinctions can enhance your understanding and appreciation of the UK.
          </p>
          <div className="uk-information-cards">
            <div className="uk-information-card">
              <h3>Government and Politics</h3>
              <p>
                The UK is a parliamentary democracy with a constitutional monarchy. Queen Elizabeth II is the Head of State, while the Prime Minister heads the government. Understanding the political system can help you navigate various bureaucratic processes.
              </p>
            </div>
            <div className="uk-information-card">
              <h3>Economy and Employment</h3>
              <p>
                The UK boasts a diverse and developed economy, ranking among the world's largest. Major industries include finance, technology, and professional services. Exploring employment opportunities beforehand can aid your job search after arrival.
              </p>
            </div>
            <div className="uk-information-card">
              <h3>Culture and Society</h3>
              <p>
                The UK is a multicultural society with diverse customs and traditions. Understanding cultural nuances will enhance your integration and build positive relationships with your new community.
              </p>
            </div>
          </div>
        </section>

        {/* Visa and Immigration section */}
        <section className="visa-immigration" id="sec">
          <h2 className="section-title">Visa and Immigration</h2>
          <p>
            Securing the appropriate visa is crucial for legally residing and working in the UK. Researching visa requirements and application procedures well in advance is essential. Here's an overview of common visa types:
          </p>
          <ul className="visa-list">
            <li>
              <strong>Tier 2 (General) Visa:</strong> For skilled workers with job offers from UK sponsors.
            </li>
            <li>
              <strong>Tier 4 (Student) Visa:</strong> For international students pursuing full-time studies at a UK university.
            </li>
            <li>
              <strong>Start-Up Visa:</strong> For entrepreneurs seeking to establish innovative businesses in the UK.
            </li>
            {/* Add more visa types as needed */}
          </ul>
          <p>
            Consult the official UK government website for specific details and eligibility criteria for different visa types and contact an immigration lawyer for personalized guidance.
          </p>
        </section>

        {/* Life in the UK section */}
        {/* ... Add more sections and content ... */}

        {/* ... Consider adding sections on: ... */}

        
        {/* ... Continued from previous code ... */}

        {/* Finding a place to live section */}
        <section className="finding-accommodation" id="sec" >
          <h2 className="section-title">Finding a Place to Live</h2>
          <p>
            Securing a comfortable and appropriate place to live is a crucial step in your relocation journey. Here's an overview of different housing options in the UK:
          </p>
          <ul className="accommodation-list">
            <li>Flats or apartments: Common in urban areas, offering varied configurations and amenities.</li>
            <li>Houses: Available in suburban and rural areas, ranging in size and price.</li>
            <li>Student accommodation: Purpose-built dormitories or shared houses catering to students.</li>
            <li>Homestays: Living with a local family, providing cultural immersion and potential language learning opportunities.</li>
          </ul>
          <p>
            Factors like budget, location preferences, and lifestyle needs should guide your search. Online resources, estate agents (real estate agents), and local community groups can help you find suitable options.
          </p>
          <img src="./images/uk-accommodation.jpg" alt="UK accommodation options" className="accommodation-image" />
          <p>
            Be mindful of rental costs, which can vary significantly depending on location, property type, and available amenities. Research average rental prices beforehand to set realistic expectations.
          </p>
        </section>

        {/* Cost of living section */}
        <section className="cost-of-living" id="sec">
          <h2 className="section-title">Cost of Living</h2>
          <p>
            Understanding the cost of living in the UK is crucial for budgeting and financial planning. Here's a breakdown of some key expenses:
          </p>
          <ul className="cost-list">
            <li>Accommodation: Typically the largest expense, varying significantly based on location and property type.</li>
            <li>Food: Groceries and dining out can vary depending on your preferences and habits.</li>
            <li>Transportation: Public transport costs can add up, so consider travel options and potential discounts.</li>
            <li>Utilities: Include electricity, gas, water, and internet, with prices varying based on usage and location.</li>
            <li>Other expenses: Clothing, entertainment, healthcare, and personal care costs should also be factored in.</li>
          </ul>
          <p>
            Utilize online cost of living calculators and consider your lifestyle to estimate your monthly living expenses in the UK. Building a realistic budget will help you manage your finances effectively.
          </p>
        </section>

        {/* ... Add more sections as specified in the previous response ... */}

        {/* Additional tips and resources section */}
        <section className="additional-resources" id="sec">
          <h2 className="section-title">Additional Tips and Resources</h2>
          <p>
            Moving to a new country can be overwhelming, but with proper planning and resourcefulness, the transition can be smooth and enriching. Here are some additional tips and resources to assist you:
          </p>
          <ul className="resources-list">
            <li>
              <a href="https://www.gov.uk/uk-border-control" target="_blank" rel="noreferrer noopener">
                UK Visas and Immigration: Official website
              </a>
            </li>
            <li>
              <a href="https://www.nhs.uk/" target="_blank" rel="noreferrer noopener">
                National Health Service (NHS) website
              </a>
            </li>
            <li>
              <a href="https://www.gov.uk/find-a-school" target="_blank" rel="noreferrer noopener">
                Find a school in the UK: Government website
              </a>
            </li>
            <li>
              <a href="https://www.moneysavingexpert.com/" target="_blank" rel="noreferrer noopener">
                Money Saving Expert: Financial advice website
              </a>
            </li>
            <li>
              <a href="https://www.meetup.com/uk/" target="_blank" rel="noreferrer noopener">
                Meetup: Find local communities and events
              </a>
            </li>
            {/* Add more resources as needed */}
          </ul>
          <p>
            Connecting with other individuals who have relocated to the UK can also be invaluable. Online forums, social media groups, and expat communities often provide</p>
            {/* ... Continued from previous code ... */}

            <p>
              valuable support, advice, and a sense of community. Embrace the opportunity to learn and grow through cultural exchange and interactions with your new surroundings. Remember, the UK offers a diverse landscape, rich history, and vibrant culture. Immerse yourself in local events, explore hidden gems, and create lasting memories in your new home.
            </p>
        </section>

        {/* Conclusion section */}
        <section className="conclusion" id="sec">
          <h2 className="section-title">Conclusion</h2>
          <p>
            Moving to the UK can be an exciting and enriching experience. By diligently preparing, researching, and embracing the journey, you can smoothly navigate the transition and thrive in your new surroundings. Utilize the information and resources provided as a starting point, and remember that continuous learning, open-mindedness, and a positive attitude will pave the way for a successful and fulfilling journey in the UK.
          </p>
        </section>
      </div>

      <Faq />
    </>

  )
}

export default Pricing
