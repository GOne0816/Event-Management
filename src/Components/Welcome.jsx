import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-dvh bg-zinc-900 flex justify-center items-center">
      <nav>
          <h1 className="text-3xl text-white">Welcome to my website</h1>
        </nav>
        <div className="h-2/4 w-96 bg-white rounded-lg">
          <h1 className="flex justify-center p-4 text-lg font-bold">Welcome Page</h1>
      </div>
    </div>
  );
};

export default Welcome;
