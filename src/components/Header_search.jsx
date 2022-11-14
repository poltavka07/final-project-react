import React from "react";
const HeaderSearch = () => {
  return (
    <div>
      <svg
        style={{
          marginBottom: "-5",
          marginRight: "10",
        }}
        //className="icon_search"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
      >
        <path
          stroke="#32313A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.5 14a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM18 18l-6-5"
        />
      </svg>
      <span className="headerNav__search">Search for...</span>
    </div>
  );
};
export default HeaderSearch;
