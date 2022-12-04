import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../store/actions/countActions";

const ShoppingBagPage = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.count?.count);

  return (
    <>
      <div>
        <h1>Shopping bag</h1>
        <p>
          This page BAG
          <a href="/">Home</a>
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(countDicrement());
          }}
        >
          -
        </button>
        <span>{counter && counter}</span>
        <button
          onClick={() => {
            dispatch(countIncrement());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(countClear());
          }}
        >
          Clear
        </button>
      </div>
    </>
  );
};
export default ShoppingBagPage;
