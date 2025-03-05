"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import userStore from "../../store/userStore";
import api from "../../middleware/api";
import { useAuth } from "./provider";

export default function UserDataFetching() {
    const isAuth=useAuth();
    const { setUserData } = userStore();
    const { data } = useQuery({
        queryKey: ["userProfile"],
        queryFn: () => api.get("/user").then((res) => res.data),
        staleTime: 50 * 60 * 1000,
        enabled: isAuth
    });
    useEffect(() => {
        if (data) {
            setUserData(data);
        }

    }, [data])
    return null;
}


