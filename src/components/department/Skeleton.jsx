import React from "react";

const Skeleton = () => (
  <div>
    {[...Array(5)].map((rowIndex) => (
      <div key={rowIndex} className="flex w-full m-4 space-x-9">
        {[...Array(4)].map((colIndex) => (
          <div
            key={colIndex}
            className="flex-shrink-0 w-full bg-gray-200 rounded-full h-7 dark:bg-gray-400"
          ></div>
        ))}
      </div>
    ))}
  </div>
);

export default Skeleton;
