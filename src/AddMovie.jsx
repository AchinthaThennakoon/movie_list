import React, { useState } from "react";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setprice] = useState("");

  const updatename = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" name="name" value={name} onChange={updatename} />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
        {console.log(name)}
      </form>
    </div>
  );
}

export default AddMovie;
