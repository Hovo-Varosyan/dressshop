import api from "../api";
import userStore from "../../store/userStore";

export default function favoriteRequest({ e, isAuth, router,favorite, id, setLoading }) {
  e.preventDefault();
  e.stopPropagation();


  if (!isAuth) {
    router.push("/login");
    return;
  }

  setLoading(true);
  const request = favorite
    ? api.delete(`/user/product/favorite/${id}`)
    : api.post("/user/product/favorite", { id });
  request
    .then((e) => {
      favorite
        ? userStore.getState().removeFavorite(id)
        : userStore.getState().addFavorite(id);
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}
export function getFavoriteList({ setData, setLoading }) {
  api
    .get("user/product/favorite")
    .then((res) => setData(res.data.favorite))
    .catch(console.log)
    .finally(() => setLoading(false));
}
