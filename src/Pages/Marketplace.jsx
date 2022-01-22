import "./Marketplace.css";

const farmers_data = [
  {
    email: "farmer1@gmail.com",
    password: "farmer1",
    name: "farmer1",
    description: "we make corns and chicken",
    products: ["corns", "chicken"],
  },
  {
    email: "farmer2@gmail.com",
    password: "farmer2",
    name: "farmer2",
    description: "we make beans and beef",
    products: ["beans", "beef"],
  },
  {
    email: "farmer3@gmail.com",
    password: "farmer3",
    name: "farmer3",
    description: "we make wheat and lamb",
    products: ["wheat", "lamb"],
  },
];

const Marketplace = () => {
  return (
    <div>
      <h1>Marketplace</h1>
      <section className="nav-bar">
        <button className="btn-market">Farmers</button>
        <button className="btn-market">Manufacturers</button>
        <button className="btn-market">Restaurants</button>
      </section>
      <section>
        <ul className="ulmarket">
          {farmers_data.map((farmer) => (
            <div className="cardprop">
              <p>{farmer.email}</p>
              <p>{farmer.name}</p>
              <p>{farmer.description}</p>
              <p>
                <div>
                  {farmer.products.map((product) => (
                    <text>{product} </text>
                  ))}
                </div>
              </p>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Marketplace;
