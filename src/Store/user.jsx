// NO GOD PLS NO

import { createContext, useState } from "react";

//initialize
const UserProfile = createContext({
  name: "",
  password: "",
  description: "",
  products: [],
  addProduct: (product) => {},
  changeName: (name) => {},
  changePassword: (password) => {},
  changeDesc: (description) => {},
});

export const UserProfileProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [description, setDescription] = useState();

  const addProductsHandler = (product) => {
    const products = UserProfile.products;
    setProducts([...products, product]);
  };

  const updateName = (name) => {
    setName(name);
  };

  const updatePassword = (password) => {
    setPassword(password);
  };

  const updateDescription = (description) => {
    setDescription(description);
  };

  const context = {
    name: name,
    password: password,
    description: description,
    products: products,
    addProducts: addProductsHandler,
    changeName: updateName,
    changePassword: updatePassword,
    changeDesc: updateDescription,
  };

  return (
    <UserProfile.Provider value={context}>
      {props.children}
    </UserProfile.Provider>
  );
};

export default UserProfile;
