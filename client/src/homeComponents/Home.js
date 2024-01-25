import React from "react";

function Home() {
  return (
    <div className="grid grid-cols-12">
      {/* Left Bar */}
      <div className="hidden md:block md:col-span-4 lg:col-span-3 bg-red-400">Left Bar</div>
      {/* Main Page */}
      <div className="col-span-12 md:col-span-8 lg:col-span-6 bg-gray-200">Main page</div>
      {/* Right Page */}
      <div className="hidden lg:block md:col-span-4 lg:col-span-3 bg-green-300">right Bar</div>
    </div>
  );
}

export default Home;
