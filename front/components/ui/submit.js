import { Button } from "@mui/material";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";

export default function Submit({ loading, value, func=null }) {
  return (
    <Button
      type="submit"
      name={value}
      className="!bg-green-700 !text-white w-full disabled:!bg-gray-900"
      endIcon={loading && <AutorenewRoundedIcon className="loading-icon" />}
      disabled={loading}
      onClick={func}
    >
      {value}
    </Button>
  );
}
