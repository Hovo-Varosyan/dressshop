"use server";
import { cookies } from "next/headers";

function logined() {
  try {
    const cookie = cookies();
    return !!cookie.get("Y_V");
  } catch (err) {
    return false
  }

}
export { logined };
