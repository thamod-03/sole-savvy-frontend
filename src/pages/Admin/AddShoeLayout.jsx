import React from "react";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppContent } from "../../context/AppContext";

const AddShoeLayout = () => {
  const categories = [
    "Unisex Shoes",
    "Men Sneakers",
    "Casual Shoes",
    "Women Footwear",
    "Sport Shoes",
    "Kids Collection",
  ];

  const sizes = ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5"];

  const { setShoes } = useContext(AppContent);

  const [images, setImages] = useState([""]);
  const [descriptions, setDescriptions] = useState([""]);
  const [variations, setVariations] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [offerPrice, setOfferPrice] = useState("");

  const handleImageChange = (index, file) => {
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
    if (index === images.length - 1) {
      setImages([...newImages, ""]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleDescriptionChange = (index, value) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = value;
    setDescriptions(newDescriptions);
    if (index === descriptions.length - 1 && value !== "") {
      setDescriptions([...newDescriptions, ""]);
    }
  };

  const handleRemoveDescription = (index) => {
    const newDescriptions = descriptions.filter((_, i) => i !== index);
    setDescriptions(newDescriptions);
  };

  const handleAddVariation = () => {
    setVariations([
      ...variations,
      {
        color: "",
        sizes: sizes.reduce((acc, size) => {
          acc[size] = false;
          return acc;
        }, {}),
      },
    ]);
  };

  const handleVariationColorChange = (index, value) => {
    const newVariations = [...variations];
    newVariations[index].color = value;
    setVariations(newVariations);
  };

  const handleSizeToggle = (variationIndex, size) => {
    const newVariations = [...variations];
    newVariations[variationIndex].sizes[size] =
      !newVariations[variationIndex].sizes[size];
    setVariations(newVariations);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newShoe = {
      _id: uuidv4(),
      name,
      category,
      price: Number(price),
      offerPrice: Number(offerPrice),
      image: images.filter(Boolean).map((img) => img.name),
      description: descriptions.filter((desc) => desc.trim() !== ""),
      variation: variations,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setShoes((prev) => [newShoe, ...prev]);

    setName("");
    setCategory("");
    setPrice("");
    setOfferPrice("");
    setImages([null]);
    setDescriptions([""]);
    setVariations([]);
  };

  return (
    <div>
      <h2 className="pb-4 text-lg font-medium text-gray-500">Add Shoe</h2>
      <div className="flex flex-col justify-between bg-white">
        <form className="mb-6  space-y-5 max-w-lg" onSubmit={handleSubmit}>
          {/* Product Images */}
          <div>
            <p className="text-base font-medium">Product Images</p>
            <div className="flex flex-wrap items-center gap-3 mt-2">
              {images.map((img, index) => (
                <div key={index} className="flex items-center gap-2">
                  <label htmlFor={`image${index}`}>
                    <input
                      accept="image/*"
                      type="file"
                      id={`image${index}`}
                      hidden
                      onChange={(e) =>
                        handleImageChange(index, e.target.files[0])
                      }
                    />
                    <img
                      className="max-w-24 cursor-pointer"
                      src={
                        img
                          ? URL.createObjectURL(img)
                          : "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/uploadArea.png"
                      }
                      alt="uploadArea"
                      width={100}
                      height={100}
                    />
                  </label>
                  {img && (
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className="flex flex-col gap-1 max-w-md">
            <label className="text-base font-medium" htmlFor="product-name">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              placeholder="Type here"
              className="outline-none py-2 px-3 rounded border border-gray-500/40"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Product Descriptions */}
          <div>
            <p className="text-base font-medium">Product Descriptions</p>
            <div className="flex flex-col gap-2 mt-2">
              {descriptions.map((desc, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={desc}
                    onChange={(e) =>
                      handleDescriptionChange(index, e.target.value)
                    }
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 flex-1"
                    placeholder="Type description here"
                  />
                  {desc && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDescription(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Category Selection */}
          <div className="w-full flex flex-col gap-1">
            <label className="text-base font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              className="outline-none py-2 px-3 rounded border border-gray-500/40"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Product Variations */}
          <div>
            <p className="text-base font-medium">Product Variations</p>
            {variations.map((variation, vIndex) => (
              <div key={vIndex} className="border p-4 mt-2 rounded">
                <div className="flex items-center gap-2">
                  <label className="text-base font-medium">Color:</label>
                  <input
                    type="text"
                    value={variation.color}
                    onChange={(e) =>
                      handleVariationColorChange(vIndex, e.target.value)
                    }
                    className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 flex-1"
                    placeholder="Enter color"
                    required
                  />
                </div>
                <div className="mt-2">
                  <p className="text-base font-medium">Sizes:</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {sizes.map((size) => (
                      <label key={size} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={variation.sizes[size]}
                          onChange={() => handleSizeToggle(vIndex, size)}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddVariation}
              className="mt-2 px-4 py-2 bg-[#ff6b00] cursor-pointer text-white rounded"
            >
              Add Variation
            </button>
          </div>

          {/* Product Price and Offer Price */}
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex-1 flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="product-price">
                Product Price
              </label>
              <input
                id="product-price"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-500/40"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-1 w-32">
              <label className="text-base font-medium" htmlFor="offer-price">
                Offer Price
              </label>
              <input
                id="offer-price"
                type="number"
                placeholder="0"
                className="outline-none py-2 px-3 rounded border border-gray-500/40"
                value={offerPrice}
                onChange={(e) => setOfferPrice(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-8 py-2.5 bg-[#ff6b00] hover:bg-[#E56000] cursor-pointer text-white font-medium rounded"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddShoeLayout;
