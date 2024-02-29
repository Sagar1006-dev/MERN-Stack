// import React from "react";
// import PageContent from "../components/PageContent";

// const Home = () => {
//   return (
//     <>
//       <PageContent title="welcome!">
//         <p>Browse all our amazing events!</p>
//       </PageContent>
//     </>
//   );
// };

// export default Home;

import React from "react";
import PageContent from "../components/PageContent";
import Img from "../assets/Blog-header-1-11 (1).webp";

const Home = () => {
  return (
    <div className="hero">
      <img className="hero-image" src={Img} alt="Hero Image" />
      <div className="hero-overlay">
        <h1>Welcome to Our Events Page!</h1>
        <p>Browse all our amazing events!</p>
      </div>

      <PageContent title="Welcome!">
        <p>Browse all our amazing events!</p>
      </PageContent>

      <style jsx>{`
        .hero {
          position: relative;
          width: 100%;
          height: 90vh; /* Adjust height as needed */
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: -1; /* Ensure the image stays behind other content */
        }

        .hero-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: black; 
          z-index: 1; /* Ensure the content stays above the image */
        }

        .hero-overlay h1 {
          font-size: 4rem; /* Adjust font size as needed */
          margin-bottom: 20px;
        }

        .hero-overlay p {
          font-size: 2rem; /* Adjust font size as needed */
        }
      `}</style>
    </div>
  );
};

export default Home;

