import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-dvh bg-zinc-900 flex flex-col items-center">
      <nav className="w-full p-4 px-16 bg-white flex justify-between items-center ">
          <h1 className="text-3xl">Tiwari BKL</h1>
          <div className="flex gap-8">
            <h1 className="cursor-pointer hover:text-red-500">Home</h1>
            <h1 className="cursor-pointer hover:text-red-500">About</h1>
            <h1 className="cursor-pointer hover:text-red-500">Event</h1>
            <h1 className="cursor-pointer hover:text-red-500">Contect</h1>
            <h1 className="cursor-pointer hover:text-red-500">LogIn</h1>
            <h1 className="cursor-pointer hover:text-red-500">SignUp</h1>
          </div>
        </nav>
        <div className="text-white flex flex-col justify-center items-center h-full w-11/12">
          <h1 className="flex justify-center p-4 text-6xl font-extrabold">Welcome To the Jungle</h1>
          <h1 className="flex justify-center p-4 text-lg font-bold">Tiwari ka Pakoda yeha milta hai.</h1>
          <p className="text-center px-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iure nihil, aspernatur eveniet laudantium cum a tenetur ea porro in distinctio sunt ipsum quae. Facilis recusandae harum doloribus provident? Facere placeat fuga, quae amet earum eligendi corporis perspiciatis, dignissimos autem unde, nostrum sit temporibus aut.</p>
      </div>
    </div>
  );
};

export default Welcome;
