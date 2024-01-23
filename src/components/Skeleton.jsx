import React from "react";

const Skeleton = () => (
  <>
    {[1, 2, 3, 4, 5].map((index) => (
      <ul className="m-5 space-y-3">
        <li
          key={index}
          className="w-full bg-gray-200 rounded-full h-7 dark:bg-gray-400"
        >
        </li>
      </ul>
    ))}
  </>
);

export default Skeleton;
