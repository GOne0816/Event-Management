import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-dvh bg-zinc-900 flex flex-col items-center">
      <nav className="w-full p-4 bg-white">
          <h1 className="text-3xl">Tiwari BKL</h1>
        </nav>
        <div className="h-2/4 w-96 bg-white rounded-lg flex justify-center items-center">
          <h1 className="flex justify-center p-4 text-lg font-bold">Welcome Page</h1>
      </div>
    </div>
  );
};

export default Welcome;
