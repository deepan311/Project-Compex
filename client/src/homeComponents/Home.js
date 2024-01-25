import React from "react";

function Home() {
  return (
    <div className="grid grid-cols-12">
      {/* Left Bar */}
      <div className="col-span-3">Left Bar</div>
      {/* Main Page */}
      <div className="col-span-6">Main page</div>
      {/* Right Page */}
      <div className="col-span-3">right Bar</div>
    </div>
  );
}

export default Home;
