import React from 'react';
import Nav from '../components/Nav';
function About() {
  return (
    <div 
      className="bg-[url('./assets/bg-image.jpg')] flex flex-col items-center justify-center min-h-screen w-full text-center bg-cover bg-center"

    >
      {/* Title Box */}
      <Nav/>
      <h1 className="my-28 text-3xl md:text-4xl font-bold mb-8 bg-white px-6 py-3 rounded-lg shadow-md text-red-800">
        About This Currency Converter
      </h1>

      {/* Content container */}
      <div className="bg-red-900 bg-opacity-80 p-8 rounded-lg border-4 border-black max-w-3xl text-white shadow-xl">
        
        <p className="text-lg mb-4">
          This currency converter is a simple, fast, and reliable tool designed to help you 
          calculate exchange rates between different currencies in real time. Whether you’re 
          traveling abroad, shopping online, or just curious about global currency values, 
          this app makes conversions effortless.
        </p>

        <p className="text-lg mb-4"> 
          The converter fetches the latest exchange rates directly from trusted sources. 
          You can select any currency pair, enter an amount, and instantly see the converted value.
        </p>

        <p className="text-lg mb-4">
          Key features include:
        </p>

        <ul className="list-disc list-inside text-left mb-6 text-lg">
          <li>Real-time exchange rates</li>
          <li>Easy currency selection with dropdown menus</li>
          <li>Quick swap button to interchange currencies</li>
          <li>Clean and responsive design for all devices</li>
        </ul>

        <p className="text-lg">
          This project was built with <span className="font-semibold">React</span> and 
          styled using <span className="font-semibold">Tailwind CSS</span>. It’s a lightweight 
          application focused on usability and accuracy, making currency conversion accessible 
          to everyone.
        </p>
      </div>
    </div>
  );
}

export default About;
