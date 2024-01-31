// import React from "react";

// const TabButton = ({ title, onSelect }) => {

//   return (
//     <li>
//       <button onClick={onSelect}>{title}</button>
//     </li>
//   );
// };

// export default TabButton;

import React from "react";

const TabButton = ({ title, isSelected, ...props }) => {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        {...props}
        aria-label={`Select ${title}`}
      >
        {title}
      </button>
    </li>
  );
};

export default TabButton;
