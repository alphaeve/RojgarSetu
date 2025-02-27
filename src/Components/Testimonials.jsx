import React from "react";

const testimonials = [
  { name: "Amit", message: "Got my first job through Rojgar Setu. Amazing platform!" },
  { name: "Priya", message: "Easy to use and helped me get my dream job." },
];

const Testimonials = () => {
  return (
    <section className="py-5 px-10">
      <h2 className="text-2xl font-bold mb-3">Success Stories</h2>
      <div>
        {testimonials.map((testi, index) => (
          <div key={index} className="border p-4 rounded shadow my-2">
            <p>"{testi.message}"</p>
            <p className="font-bold mt-2">- {testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
