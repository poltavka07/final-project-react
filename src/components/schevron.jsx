const ShevronDown = () => {
  return (
    <svg
      style={{
        padding: "0 0 2 6",
      }}
      className="icon_chevron"
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      fill="none"
    >
      <path
        stroke="#32313A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1.5 1.25 5 4.75l3.5-3.5"
      />
    </svg>
  );
};
export default ShevronDown;

// content: "";
// display: block;
// position: absolute;
// width: 12px;
// height: 12px;
// border-left: 2px solid #FFF;
// border-bottom: 2px solid #FFF;
// transform: rotate(-45deg) translate(10%, 110%);
// transition: inherit;
