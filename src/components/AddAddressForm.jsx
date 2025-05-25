import React, { useContext, useState } from "react";
import { AppContent } from "../context/AppContext";

const AddAddressForm = () => {
  const { loggedUser, setShowAddressForm } = useContext(AppContent);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [pNumber, setPNumber] = useState("");
  const addresses = loggedUser.addresses;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAddress = {
      firstName: fName,
      lastName: lName,
      street,
      city,
      district,
      province,
      country,
      phoneNumber: pNumber,
    };

    addresses.push(newAddress);
    setShowAddressForm(false);
  };

  return (
    <div className="px-4 py-2">
      <p className="font-outfit text-xl text-center mb-4 font-semibold text-gray-500">
        Address Form
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="sm:w-1/2 mt-2 w-full">
            <p>First Name</p>
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
          </div>
          <div className="sm:w-1/2 mt-2 w-full">
            <p>Last Name</p>
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              value={lName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <p>Street Name or Number</p>
          <input
            type="text"
            placeholder="Type here..."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="w-full mt-2">
          <p>City</p>
          <input
            type="text"
            placeholder="Type here..."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="sm:w-1/2 mt-2 w-full">
            <p>District</p>
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <div className="sm:w-1/2 mt-2 w-full">
            <p>Province</p>
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col sm:flex-row">
          <div className="sm:w-1/2 mt-2 w-full">
            <p>Country</p>
            <input
              type="text"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>

          <div className="sm:w-1/2 mt-2 w-full">
            <p>Phone Number</p>
            <input
              type="number"
              placeholder="Type here..."
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-[#ff6b00]"
              required
              maxLength="10"
              value={pNumber}
              onChange={(e) => setPNumber(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-[#ff6b00] mt-4 text-white font-semibold cursor-pointer hover:bg-[#E56000]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAddressForm;
