import { useState } from "react";
import Slides from "../components/aboutpage-components/Slides";

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { title: 'The idea', content: 'This webpage was created while thinking of how hard it is to keep track of all your medical documents and how much better it would be if you could just select a body part and find all of your documents for it in one place. This is also so much better for the environment with sustainability in mind.' },
    { title: 'The Add page (1)', content: 'The first part of the add page is the ability to select a body part and add a file or date related to the body part.' },
    { title: 'The Add page (2)', content: 'One of the things you can add are files. By clicking the add file button, you can add an image, file or even a link.' },
    { title: 'The Add page (3)', content: 'Another thing you can add is an event such as a doctor\'s appointment. It even lets you add a description, give it a name and add the date itself so that you can go back and see what happens. This also helps because if you\'re visiting a new doctor and they want to know more about your medical history, you can just open this website!' },
    { title: 'Home page features', content: 'On the homepage, you can select a body part, view all added dates or files related to it and even click on a file or date to view more info about it in a new window!' },
    { title: 'Our future goals', content: 'The goal for the future is to add some more great features such as having a page that displays the emergency number for your specific country, and adding a login/sign-up page.' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToStart = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="bg-fixed min-h-screen bg-[url('/assets/medbackground2.jpeg')] bg-cover bg-center overflow-auto bg-no-repeat">
      <div className="flex justify-center items-start mt-20 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <Slides title={slides[currentSlide].title} content={slides[currentSlide].content} />
          <div className="flex justify-between mt-4">
            {currentSlide > 0 && (
              <button
                onClick={previousSlide}
                className="bg-zinc-400 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Previous
              </button>
            )}
            {currentSlide < slides.length - 1 ? (
              <button
                onClick={nextSlide}
                className="bg-zinc-400 text-white py-2 px-4 rounded hover:bg-blue-600 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                onClick={goToStart}
                className="bg-zinc-400 text-white py-2 px-4 rounded hover:bg-blue-600 ml-auto"
              >
                Go Back to Start
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
