"use client"
import { CircularProgress } from "@mui/material";
import api from "../../../middleware/api";
import Product from "../../product/product";
import { useState, useEffect } from "react";
import userStore from "../../../store/userStore";
import Empty from "../../ui/empty";

export default function Favorite() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteFavoriteId = userStore(state => state.deleteFavoriteId);

  useEffect(() => {
    setLoading(true);
    api.get("user/product/favorite")
      .then(res => setData(res.data.favorite))
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!deleteFavoriteId) return;
    setData(prevData => prevData.filter(item => item._id !== deleteFavoriteId));
  }, [deleteFavoriteId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64 bg-black">
        <CircularProgress style={{ color: "white" }} />
      </div>
    );
  }

  if (!data.length) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <Empty />
      </div>
    );
  }

  return (
    <>
      {
        <div className="product p-3">
          {data.map(e => <Product data={e} key={e._id} />)}
        </div>
      }
    </>
  );
}
