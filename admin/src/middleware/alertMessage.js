import { v4 as uuidv4 } from "uuid"
import { alertList } from "../pages/store";

export default function alertMessage(kind, data) {
    try {
        if (kind === "error") console.error(data);
        alertList.update((prev) => {
            prev.push({
                id: uuidv4(),
                kind,
                subtitle: kind == "error" ?
                    data?.response?.data?.message ||
                    data?.response?.data?.error ||
                    data?.message ||
                    JSON.stringify(data?.response?.data) ||
                    data : data?.data?.message || data?.message || data?.data || data
            });
            return prev;
        });
    } catch (err) {
        console.error("alertMessage function error", new Error(err))
    }


};