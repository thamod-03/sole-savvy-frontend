import { createContext, useEffect, useState } from "react";
import { dummyShoes } from "../assets/assets";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState()
  const [shoes, setShoes] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null)
  const [showForm, setShowForm] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [isAdminLogged, setIsAdminLogged] = useState(false);

  function capitalize(str) {
    if (!str) {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  

  useEffect(() => {
    setShoes(dummyShoes);
  }, [dummyShoes]);


  const value = {
    isLogged,
    setIsLogged,
    shoes,
    setShoes,
    searchQuery,
    setSearchQuery,
    showForm,
    setShowForm,
    loggedUser,
    setLoggedUser,
    capitalize,
    showAddressForm,
    setShowAddressForm,
    isAdminLogged,
    setIsAdminLogged
  };

  return (
    <AppContent.Provider value={value}>{props.children}</AppContent.Provider>
  );
};
