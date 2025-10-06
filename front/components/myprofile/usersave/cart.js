"use client";
import { useState, useEffect } from "react";
import { CircularProgress, Button, IconButton, MenuItem, Select, FormControl } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Empty from "../../ui/empty";
import api from "../../../middleware/api";
import CartButton from "../../product/item/cartButton";

export default function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/user/product/cart")
      .then((res) => {
        const flattened = [];
        (res.data.cart || []).forEach((item) => {
          if (item.variant?.length) {
            flattened.push({
              _id: item._id,
              title: item.title,
              variants: item.variant,
              selectedVariantIndex: 0,
              count: 1,
            });
          } else {
            flattened.push({
              ...item,
              selectedVariantIndex: null,
              count: 1,
            });
          }
        });
        setData(flattened);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  const handleCountChange = (id, delta) =>
    setData((prev) =>
      prev.map((item) => (item._id === id ? { ...item, count: Math.max(1, item.count + delta) } : item))
    );

  const handleVariantChange = (itemId, index) =>
    setData((prev) =>
      prev.map((item) =>
        item._id === itemId ? { ...item, selectedVariantIndex: index } : item
      )
    );

  const handleSizeChange = (itemId, size) =>
    setData((prev) =>
      prev.map((item) => {
        if (item._id === itemId) {
          if (item.variants?.length) {
            const updatedVariants = [...item.variants];
            updatedVariants[item.selectedVariantIndex] = {
              ...updatedVariants[item.selectedVariantIndex],
              selectedSize: size,
            };
            return { ...item, variants: updatedVariants };
          } else {
            return { ...item, selectedSize: size };
          }
        }
        return item;
      })
    );

  const totalSum = data.reduce((sum, item) => {
    let price = 0;
    if (item.variants?.length) {
      const variant = item.variants[item.selectedVariantIndex];
      price = variant.parentPrice?.total || variant.parentPrice?.value || variant.price?.total || variant.price?.value;
    } else {
      price = item.price?.total || item.price?.value;
    }
    return sum + price * item.count;
  }, 0);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 bg-black">
        <CircularProgress  />
      </div>
    );

  if (!data.length) return <Empty />;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-400"> Корзина</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          const variant = item.variants?.[item.selectedVariantIndex] || item;
          const sizes = variant.size || item.size || [];
          const photo = variant.file?.name || item.mainFile?.name;
          const priceData = variant.parentPrice || variant.price || item.price;

          return (
            <div
              key={item._id}
              className="bg-gray-900 rounded-2xl shadow-md flex flex-col overflow-hidden hover:scale-[1.02] transition-transform max-w-xs mx-auto"
            >
              {photo ? (
                <div className="w-full ratio-3/4" >
                  <img
                    src={`http://localhost:4000/productimg/${photo}`}
                    alt={item.title?.en}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[3/4] bg-gray-800 flex items-center justify-center text-gray-500">
                  Фото нет
                </div>
              )}

              <div className="flex flex-col justify-between flex-1 p-4">
                <h2 className="text-lg font-medium mb-2 line-clamp-2">{item.title.en}</h2>

                {item.variants?.length && (
                  <div className="flex gap-2 mb-2 overflow-x-auto">
                    {item.variants.map((v, idx) => (
                      <img
                        key={idx}
                        src={`http://localhost:4000/productimg/${v.file.name}`}
                        alt={v.title?.en}
                        className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${item.selectedVariantIndex === idx ? "border-green-400" : "border-gray-600"
                          }`}
                        onClick={() => handleVariantChange(item._id, idx)}
                      />
                    ))}
                  </div>
                )}

                {sizes?.length && (
                  <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <Select
                      value={variant.selectedSize || sizes[0]}
                      onChange={(e) => handleSizeChange(item._id, e.target.value)}
                      sx={{
                        backgroundColor: "#1f2937",
                        color: "white",
                        ".MuiSvgIcon-root": { color: "white" },
                        "& .Mui-selected": { backgroundColor: "#22c55e !important" },
                      }}
                    >
                      {sizes.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                {/* Цена */}
                <p className="text-lg mb-2">
                  {priceData?.promition > 0 ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">{priceData.value} ֏</span>
                      <span className="text-green-400 font-bold">{priceData.total} ֏</span>
                    </>
                  ) : (
                    <span>{priceData?.value} ֏</span>
                  )}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <IconButton
                      onClick={() => handleCountChange(item._id, -1)}
                      size="small"
                      sx={{ color: "white", border: "1px solid gray" }}
                    >
                      <Remove />
                    </IconButton>
                    <span className="text-lg">{item.count}</span>
                    <IconButton
                      onClick={() => handleCountChange(item._id, 1)}
                      size="small"
                      sx={{ color: "white", border: "1px solid gray" }}
                    >
                      <Add />
                    </IconButton>
                  </div>

                  <CartButton id={item._id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <p className="text-xl">
          Общая сумма: <span className="text-green-400 font-bold">{totalSum} ֏</span>
        </p>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#22c55e", color: "white", fontWeight: "bold", width: 250 }}
          onClick={() => alert("Оформление заказа")}
        >
          Заказать всё сразу
        </Button>
      </div>
    </div>
  );
}
