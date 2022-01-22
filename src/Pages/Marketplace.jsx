import "./Marketplace.css";

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
        <div className="cardprop">
          <p>Company name</p>
          <p>Description</p>
          <p>Products</p>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;
