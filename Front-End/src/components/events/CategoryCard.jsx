import React from "react";

function CategoryCard(props) {
  const { title, category_img } = props;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          // src={category_img}
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline text-white">See more</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
