const Next = () => {
  return (
    <svg
      style={{ marginLeft: "20px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="16"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1.016 8h24M18.016 15l7-7-7-7"
      />
    </svg>
  );
};

const Prev = () => {
  return (
    <svg
      style={{ marginLeft: "20px" }}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="16"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25 8H1M8 15 1 8l7-7"
      />
    </svg>
  );
};

const Trash = () => {
  return (
    <svg
      className="icnHovBag"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
    >
      <path
        stroke="currentColor"
        //stroke="#6E6D74"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.5 5h15M6.667 5V3.333a1.667 1.667 0 0 1 1.666-1.666h3.334a1.667 1.667 0 0 1 1.666 1.666V5m2.5 0v11.667a1.667 1.667 0 0 1-1.666 1.666H5.833a1.667 1.667 0 0 1-1.666-1.666V5h11.666Z"
      />
    </svg>
  );
};

const Dec = () => {
  return (
    <svg
      className="icnCart"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.343 1h11.314"
      />
    </svg>
  );
};
const Inc = () => {
  return (
    <svg
      className="icnCart"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
    >
      <path
        stroke="currentColor"
        // stroke="#86858B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7 1.343v11.314M1.343 7h11.314"
      />
    </svg>
  );
};
const Cross = () => {
  return (
    <svg
      className="icnCart"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="12"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 1 1 9M1 1l8 8"
      />
    </svg>
  );
};

export { Next, Prev, Trash, Dec, Inc, Cross };
