import React from "react";

const Skeleton = () => (
  <>
    {[...Array(3)].map((rowIndex) => (
      <div key={rowIndex} className="flex m-4 space-x-5">
        {[...Array(3)].map((colIndex) => (
          <div
            key={colIndex}
            className="flex-shrink-0 w-full bg-gray-200 rounded-full h-7 dark:bg-gray-400"
          ></div>
        ))}
      </div>
    ))}
  </>
);

export default Skeleton;
