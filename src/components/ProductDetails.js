import React from "react";

const ProductDetails = (props) => {
  console.log("this", props);

  const handleSave = () => {
    props.history.replace("/");
  };
  return (
    <div>
      <h1>Product Details - {props.match.params.id}</h1>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProductDetails;
