import React, { useContext, useState } from "react";
import { AppContent } from "../../context/AppContext";

const ShoeListLayout = () => {
  const { shoes, setShoes } = useContext(AppContent);
  const [open, setOpen] = useState(null);

  const handleSizeStockToggle = (shoeId, color, size) => {
    setShoes((prevShoes) =>
      prevShoes.map((shoe) => {
        if (shoe._id !== shoeId) return shoe;

        const updatedVariation = shoe.variation.map((vary) => {
          if (vary.color !== color) return vary;

          const updatedSizes = {
            ...vary.sizes,
            [size]: !vary.sizes[size],
          };

          return { ...vary, sizes: updatedSizes };
        });

        return { ...shoe, variation: updatedVariation };
      })
    );
  };
  
  
  return (
    <div className="flex-1 flex flex-col justify-between scrollbar-hide overflow-y-scroll h-[95vh]">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium">All Shoes</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Shoe</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate hidden md:block">
                  Selling Price
                </th>
                <th className="px-4 py-3 font-semibold truncate">In Stock</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {shoes.map((shoe, index) => (
                <React.Fragment key={index}>
                  <tr
                    key={`${shoe._id}-main`}
                    className="border-t border-gray-500/20"
                  >
                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                      <div className="border border-gray-300 rounded p-2">
                        <img
                          src={`../../src/assets/${shoe.image[0]}`}
                          alt="Product"
                          className="w-16"
                        />
                      </div>
                      <span className="truncate max-sm:hidden w-full">
                        {shoe.name}
                      </span>
                    </td>
                    <td className="px-4 py-3">{shoe.category}</td>
                    <td className="px-4 py-3 max-sm:hidden">
                      ${shoe.offerPrice}
                    </td>
                    <td
                      className="px-4 py-3 cursor-pointer"
                      onClick={() => setOpen(index)}
                    >
                      {open === index ? "-" : "+"}
                    </td>
                  </tr>
                  {open === index && (
                    <tr
                      key={`${shoe._id}-expand`}
                      className="border-t border-gray-300 bg-gray-50"
                    >
                      <td colSpan={4} className="px-4 py-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="text-left text-gray-700">
                              <th className="px-4 py-2">Color</th>
                              <th className="px-4 py-2">Size</th>
                              <th className="px-4 py-2">Stock</th>
                            </tr>
                          </thead>
                          <tbody>
                            {shoe.variation.map((vary, i) =>
                              Object.entries(vary.sizes)
                                .sort(
                                  (a, b) => parseFloat(a[0]) - parseFloat(b[0])
                                )
                                .map(([size, stock], j) => (
                                  <tr
                                    key={`${i}-${size}`}
                                    className="border-t border-gray-200"
                                  >
                                    <td className="px-4 py-2">{vary.color}</td>
                                    <td className="px-4 py-2">{size}</td>
                                    <td className="px-4 py-2">
                                      <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                        <input
                                          type="checkbox"
                                          className="sr-only peer"
                                          checked={stock}
                                          onChange={() =>
                                            handleSizeStockToggle(
                                              shoe._id,
                                              vary.color,
                                              size
                                            )
                                          }
                                        />
                                        <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                                        <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                                      </label>
                                    </td>
                                  </tr>
                                ))
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShoeListLayout;
