import api from "../api";
import userStore from "../../store/userStore";

export function cartButton({ e,router, cart,isAuth, id, setLoading }) {
  e.preventDefault();
  e.stopPropagation();


  if (!isAuth) {
    router.push("/login");
    return;
  }

  setLoading(true);
  const request = cart
    ? api.delete(`/user/product/cart/${id}`)
    : api.post("/user/product/cart", { id });

  request
    .then((e) => {
      cart
        ? userStore.getState().cartRemove(id)
        : userStore.getState().cartAdd(id);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}
export function getCartList({ setData, setLoading }) {
  api
    .get("/user/product/cart")
    .then((res) => {
      setData(
        res.data.cart.map((item) => ({
          ...item,
          selectSize: "",
          selectVariant: "",
          count: 1,
        }))
      );
    })
    .catch(console.log)
    .finally(() => setLoading(false));
}
