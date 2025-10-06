"use server";
import "../globals.css";
import Providers from "./provider";
import UserDataFetching from "./userDataFetching";
import { cookies } from "next/headers";
import MainWrapper from "../../components/layoutwrapper/mainWrapper";

export default async function RootLayout({ children }) {
  return (
    <Providers isAuth={!!cookies().get("Y_V")}>
      <MainWrapper>
        <UserDataFetching />
        {children}
      </MainWrapper>
    </Providers>
  );
}
