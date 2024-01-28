import React from "react";

export default function IsEmpty({ terms }) {
  return (
    <>
      <div className="container mx-auto mt-8 mb-28 text-center">
        <p className="text-lg text-gray-500 dark:text-gray-400">{terms}</p>
      </div>
    </>
  );
}
