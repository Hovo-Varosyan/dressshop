import api from "../api";

export function registrRequest({ e, data, router, setError, setLoading, politic }) {

  e.preventDefault();
  const { password, email, gender } = data;

  if (!password || !email || !gender || !politic) return setError(true);

  setLoading(true);

  api
    .post("/registration", { ...data, politic })
    .then((req) => router.replace("/myprofile"))
    .catch((err) => {
      if (err.response?.data?.error == "already exists") {
        setError("*Error email is already exists");
      } else if (err.respons?.data.error == "validation") {
        setError("*Error data validation error");
      } else {
        setError("Error try again later");
      }
    })
    .finally(() => setLoading(false));
}
export function loginRequest({ e, data, router,setError, setLoading }) {
  e.preventDefault();

  if (!data.email || !data.password) return setError(true);
  setLoading(true);
  api
    .post("/login", data)
    .then(() => router.replace("/myprofile"))
    .catch((err) => {
      if (err.reponse?.data?.status === false) {
        setError("*Error validate data");
      } else {
        setError("*Try again later");
      }
      console.log(err);
    })
    .finally(() => setLoading(false));
}
