const Slides = ({ title, content }) => {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    );
  };
  
  export default Slides;