const Skeleton = () => (
  <>
    {[...Array(5)].map((rowIndex) => (
      <ul key={rowIndex} className="flex m-4 space-x-5">
        {[...Array(5)].map((colIndex) => (
          <li
            key={colIndex}
            className="flex-shrink-0 w-full bg-gray-200 rounded-full h-7 dark:bg-gray-400"
          ></li>
        ))}
      </ul>
    ))}
  </>
);

export default Skeleton;
