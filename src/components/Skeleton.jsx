import React from "react";

const Skeleton = () => (
  <>
    <div className="container mx-auto mt-8 animate-pulse max-w-7xl">
      <ul className="mt-5 space-y-3">
        {[1, 2, 3, 4, 5].map((index) => (
          <li
            key={index}
            className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-400"
          ></li>
        ))}
      </ul>
    </div>
  </>
);

export default Skeleton;
