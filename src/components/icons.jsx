const Next = () => {
  return (
    <svg
      style={{ marginLeft: "20px" }}
      // className="glider-next"
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
        stroke="#B5B5BC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M25 8H1M8 15 1 8l7-7"
      />
    </svg>
  );
};

export { Next, Prev };
