import { useState } from 'react';


const Tags = ({cards}) => {
  const [tags] = useState([
    { id: 1, name: 'Tag 1' },
    { id: 2, name: 'Tag 2' },
    { id: 3, name: 'Tag 3' },
    { id: 4, name: 'Tag 4' },
    { id: 5, name: 'Tag 5' },
    { id: 6, name: 'Tag 6' },
    { id: 7, name: 'Tag 7' },
    { id: 8, name: 'Tag 8' },
    { id: 9, name: 'Tag 9' },
    { id: 10, name: 'Tag 10' },
  ]);

  const [visibleTags, setVisibleTags] = useState(6);
  const [start, setStart] = useState(0);

  const handleNext = () => {
    if (start + visibleTags < tags.length) {
      setStart(start + visibleTags);
    }
  };

  const handlePrev = () => {
    if (start - visibleTags >= 0) {
      setStart(start - visibleTags);
    } else {
      setStart(0);
    }
  };

  return (
    <div className="flex items-center justify-start py-2">
      <button
        className="text-gray-500 hover:text-gray-900 transition duration-300"
        onClick={handlePrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className="flex items-center justify-start flex-1 border-r-2 overflow-auto ">
        {cards.slice(start, start + visibleTags).map((tag) => (
          <span
            key={tag.id}
            className="bg-gray-200 text-gray-600 py-1 px-2 rounded-full mx-2"
          >
            {tag.card}
          </span>
        ))}
      </div>
      <button
        className="text-gray-500 hover:text-gray-900 transition duration-300 "
        onClick={handleNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Tags;