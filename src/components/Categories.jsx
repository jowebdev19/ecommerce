import React from "react";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Women's Collection",
      image:
        "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      link: "/collections/women",
    },
    {
      id: 2,
      name: "Men's Collection",
      image:
        "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      link: "/collections/men",
    },
    {
      id: 3,
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/collections/accessories",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl font-light tracking-wider text-gray-800 mb-2">
        Shop by Categories
      </h2>
      <div className="w-24 h-1 bg-amber-400"></div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[75%] pt-10">
          {categories.map((category) => (
            <a
              href={category.link}
              key={category.id}
              className="group block relative overflow-hidden h-96"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity group-hover:bg-black/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 py-4 px-8 text-center">
                  <h3 className="text-xl font-medium tracking-wider text-gray-800">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-amber-500 group-hover:text-amber-600 transition-colors">
                    Shop Now
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
    </div>
  );
}
