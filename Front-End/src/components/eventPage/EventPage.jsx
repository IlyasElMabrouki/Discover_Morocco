import React from "react";

function EventPage() {
  const event_lmdina = {
    title: "Title",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ab consectetur ullam vero perferendis? Mollitia nesciunt incidunt nemo deserunt quaerat inventore corporis quibusdam enim nobis ut exercitationem veritatis doloremque hic voluptatem ipsum illum suscipit rem eligendi ducimus, vel dolores numquam assumenda. Dolore debitis perferendis quibusdam soluta veritatis magni ut impedit ratione dolorem accusamus sint nisi officia maiores, nam architecto. Ad excepturi voluptatibus magni eius incidunt ullam eaque aperiam cumque distinctio ratione ea quibusdam enim quae sunt veniam, et provident mollitia? Officiis officia dolor consectetur laborum porro aliquam voluptate, in iure inventore perspiciatis unde magni ut quas. Quos et sed nihil",
    StartDate: "start date",
    EndDate: "end date",
    location: "location",
    price: "price",
    availablePlaces: "available places",
    rate: "5",
  };

  const company = {
    name: "company name",
    image_company: "https://picsum.photos/200/300",
    industry: "industrie",
  };

  return (
    <section className="my-14 mx-10">
      <div className="grid grid-cols-12">
        <img
          className="object-cover shadow-xl w-full h-3/6 col-span-6 justify-self-center rounded-md"
          src="https://picsum.photos/200/300"
          alt="img"
        />

        {/* event description */}
        <div className="col-span-6 p-5 pl-10 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-extrabold">
            {event_lmdina.title}
          </h1>
          <p className="text-justify">
            <span className="font-bold">
              Description:
              <br />
            </span>
            {event_lmdina.description}
          </p>
          <div className="flex flex-row  gap-4">
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Start Date:</span>{" "}
                {event_lmdina.StartDate}
              </p>
              <p>
                <span className="font-bold">End Date:</span>{" "}
                {event_lmdina.EndDate}
              </p>
              <p>
                <span className="font-bold">Location:</span>{" "}
                {event_lmdina.location}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-bold">Price:</span> {event_lmdina.price}
              </p>
              <p>
                <span className="font-bold">Available Places:</span>{" "}
                {event_lmdina.availablePlaces}
              </p>
            </div>
          </div>
          {/* company and rate  */}
          <div className="flex flex-row items-center px-5 mt-5 justify-between">
            <div>
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={company.image_company} />
                </div>
              </div>
              <h1 className="text-base font-bold">{company.name}</h1>
              <p className="text-sm font-normal mt-1">{company.industry}</p>
            </div>
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-8">
            <textarea
              placeholder="leave a comment here..."
              className="textarea textarea-bordered textarea-lg w-full "
            />
            <button className="btn btn-active w-fit">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventPage;
