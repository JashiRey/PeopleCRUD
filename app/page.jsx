import './globals.css';
import React from 'react';
export default function Page() {


  return (
    <div className="flex flex-col gap-4 pt-8 items-center justify-center h-screen bg-gray-900"
    style={{
      backgroundImage: "url(/images/background.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <div className="flex gap-4">
        <h1 className="text-4xl font-bold text-white">CRUD of people</h1>
      </div>
      <div className="flex gap-4">
        <h2 className="text-2xl font-bold text-white">Create, Read, Update and Delete</h2>
      </div>
      <div className="flex gap-4">
        <p className="text-lg font-bold text-white">by <a href="https://github.com/Jasielongas777" target="_blank" rel="noopener noreferrer">Jasiel Corral</a></p>
      </div>

      <div className="flex gap-4">
        <a href="/people" className="btn btn-primary glass text-white font-bold py-2 px-4 rounded">
          Go to CRUD
        </a>
      </div>
    </div>
  );
}
