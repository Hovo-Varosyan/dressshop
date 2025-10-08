"use client";
import { useState, useEffect } from "react";
import { CircularProgress, Button, IconButton, MenuItem, Select, FormControl } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Empty from "../../ui/empty";
import api from "../../../middleware/api";
import CartButton from "../../product/item/cartButton";
import userStore from "../../../store/userStore";

export default function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const deleteCartId = userStore(state => state.deleteCartId)
  useEffect(() => {
    if (!deleteCartId) return;
    setData(prev => prev.filter(item => item._id !== deleteCartId))
    userStore.getState().deleteCartReset()

  }, [deleteCartId])
  console.log(data)
  useEffect(() => {
    api.get("/user/product/cart")
      .then((res) => {
        setData(res.data.cart.map((item) => ({ ...item, selectSize: "", selectVariant: "", count: 1 })));
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);




  if (loading)
    return (
      <div className="flex justify-center items-center h-64 bg-black">
        <CircularProgress />
      </div>
    );

  if (!data.length) return <Empty />;

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-400"> Корзина</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => {
          const { mainFile, price, variant = null, count, size = null, title, _id, selectSize, selectVariant } = item

          return (
            <div
              key={_id}
              className="bg-gray-900 rounded-2xl shadow-md flex flex-col overflow-hidden hover:scale-[1.02] transition-transform max-w-xs mx-auto"
            >
              {mainFile && <div className="w-full ratio-3/4 cursor-pointer" onClick={() => window.open(`/product/${_id}`, "_blank")}>
                <img
                  src={`http://localhost:4000/productimg/${mainFile.name}`}
                  alt={item.title?.en}
                  className="w-full h-full object-cover"
                />
              </div>
              }

              <div className="flex flex-col justify-between flex-1 p-4">
                <h2 className="text-lg font-medium mb-2 line-clamp-2">{item.title.en}</h2>

                {variant && (
                  <div className="flex gap-2 mb-2 overflow-x-auto">
                    {variant.map((e) => (
                      <img
                        key={e._id}
                        src={`http://localhost:4000/productimg/${e.file.name}`}
                        alt={e.title?.en}
                        className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${selectVariant === e._id ? "border-green-600" : "border-gray-600"}
                          }`}
                        onClick={() => setData(prev => prev.map((item, i) => (i === index ? { ...item, selectVariant: e._id } : item)))}
                      />
                    ))}
                  </div>
                )}

                {size && (
                  <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                    <Select
                      value={selectSize}
                      onChange={(e) => setData(prev => prev.map((item, i) => (i === index ? { ...item, selectSize: e.target.value } : item)))}
                      sx={{
                        backgroundColor: "#1f2937",
                        color: "white",
                        ".MuiSvgIcon-root": { color: "white" },
                        "& .Mui-selected": { backgroundColor: "#22c55e !important" },
                      }}
                    >
                      <MenuItem value="" disabled>Size</MenuItem>
                      {size.map((s) => (
                        <MenuItem key={s} value={s}>
                          {s.toUpperCase()}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                {/* Цена */}
                <p className="text-lg mb-2">
                  {price?.promition > 0 ? (
                    <>
                      <span className="line-through text-gray-400 mr-2">{price.value} ֏</span>
                      <span className="line-through text-gray-400 mr-2">{price.promition} ֏</span>
                      <span className="text-green-400 font-bold">{price.total} ֏</span>
                    </>
                  ) : (
                    <span>{price.value} ֏</span>
                  )}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <IconButton
                      disabled={count <= 1}
                      onClick={() => setData(prev => prev.map((item, i) => (i === index ? { ...item, count: item.count > 1 ? --item.count : 1 } : item)))}
                      size="small"
                      sx={{ color: "white", border: "1px solid gray" }}
                    >
                      <Remove />
                    </IconButton>
                    <span className="text-lg">{count}</span>
                    <IconButton
                      onClick={() => setData(prev => prev.map((item, i) => (i === index ? { ...item, count: ++item.count } : item)))}
                      size="small"
                      sx={{ color: "white", border: "1px solid gray" }}
                    >
                      <Add />
                    </IconButton>
                  </div>

                  <CartButton id={_id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-gray-900 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-4 max-w-2xl mx-auto">
        <p className="text-xl">
          Общая сумма: <span className="text-green-400 font-bold">{data.reduce((total, item) => {
            const price = item.price.total * item.count
            return total + price
          }, 0)} ֏</span>
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
