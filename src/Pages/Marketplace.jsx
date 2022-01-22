import "./Marketplace.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

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

const manufacturers_data = [
  {
    email: "manu1@gmail.com",
    password: "manu1",
    name: "manu1",
    description: "we make nuggets and fishballs",
    manu_goods: ["nuggets", "fishballs"],
    ingredients: ["chicken", "fish"],
  },
  {
    email: "manu2@gmail.com",
    password: "manu2",
    name: "manu2",
    description: "we make spam and bread",
    manu_goods: ["spam", "bread"],
    ingredients: ["pork", "wheat"],
  },
  {
    email: "manu3@gmail.com",
    password: "manu3",
    name: "manu3",
    description: "we make sausages and tofu",
    manu_goods: ["sausages", "tofu"],
    ingredients: ["beef", "soya"],
  },
];

const restaurants_data = [
  {
    email: "rest1@gmail.com",
    password: "rest1",
    name: "rest1",
    description: "we cook nuggets and fries",
    ingredients: ["nuggets", "potatoes"],
  },
  {
    email: "rest2@gmail.com",
    password: "rest2",
    name: "rest2",
    description: "we cook spam fried rice",
    ingredients: ["spam", "rice"],
  },
  {
    email: "rest3@gmail.com",
    password: "rest3",
    name: "rest3",
    description: "we cook steamed tofu and sausage pizza",
    ingredients: ["tofu", "sausage"],
  },
];

const Marketplace = () => {
  const navigate = useNavigate();
  const usersCollectionRef = collection(db, "farmer");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      await getDocs(usersCollectionRef).then((data) => {
        setUsers(data.docs.map((doc) => ({ ...doc.data() })));
        console.log(users);
      });
    };

    getUsers();
  }, []);

  const [farmerB, setFarmerB] = useState(true);
  const [manuB, setManuB] = useState(false);
  const [restB, setRestB] = useState(false);

  const setFarmerBHandler = () => {
    setFarmerB(true);
    setManuB(false);
    setRestB(false);
  };

  const setManuBHandler = () => {
    setFarmerB(false);
    setManuB(true);
    setRestB(true);
  };

  const setRestBHandler = () => {
    setFarmerB(false);
    setManuB(false);
    setRestB(true);
  };

  return (
    <div>
      <h1>Marketplace</h1>
      <section className="nav-bar">
        <button className="btn-market" onClick={setFarmerBHandler}>
          Farmers
        </button>
        <button className="btn-market" onClick={setManuBHandler}>
          Manufacturers
        </button>
        <button className="btn-market" onClick={setRestBHandler}>
          Restaurants
        </button>
      </section>
      <section>
        <ul className="ulmarket">
          {farmerB ? (
            users.map((farmer) => (
              <div className="cardprop">
                <p>Email: {farmer.email}</p>
                <p>Name: {farmer.name}</p>
                <p>Description: {farmer.description}</p>
                <p>
                  Products:
                  {farmer.products.map((product) => (
                    <text>{product} </text>
                  ))}
                </p>
              </div>
            ))
          ) : (
            <div></div>
          )}

          {manuB ? (
            manufacturers_data.map((manu) => (
              <div className="cardprop">
                <p>Email: {manu.email}</p>
                <p>Name: {manu.name}</p>
                <p>Description: {manu.description}</p>
                <p>
                  Manufactured goods:
                  {manu.manu_goods.map((manu_good) => (
                    <text>{manu_good} </text>
                  ))}
                </p>
                <p>
                  Products:
                  {manu.ingredients.map((ingredient) => (
                    <text>{ingredient} </text>
                  ))}
                </p>
              </div>
            ))
          ) : (
            <div></div>
          )}

          {restB ? (
            restaurants_data.map((restaurant) => (
              <div className="cardprop">
                <p>Email: {restaurant.email}</p>
                <p>Name: {restaurant.name}</p>
                <p>Description: {restaurant.description}</p>
                <p>
                  Ingredients:
                  {restaurant.ingredients.map((ingredient) => (
                    <text>{ingredient} </text>
                  ))}
                </p>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Marketplace;
