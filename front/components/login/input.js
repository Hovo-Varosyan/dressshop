"use client"
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function InputComponent({
  change,
}) {
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  function validate(e) {
    const { name, value } = e.target;
    if (name === "email") {
      if (value.length >= 254 || (value.length <= 4 && value.trim().length != 0))
        return setError((prev) => ({
          ...prev,
          email: "*Min length 5 and max length 254",
        }));
      else
        setError((prev) => ({
          ...prev,
          email: false,
        }));
      change(e);
    }

    if (name === "password") {
      if (
        value.length >= 30 ||
        (value.length < 6 && value.trim().length != 0)
      ) {
        return setError((prev) => ({
          ...prev,
          password: "*Min length 6 and max length 30",
        }));
      } else if (
        value.trim().length != 0 &&
        !/^(?=.*[A-Z])[a-zA-Z0-9;\[\]{}=\-_+*\/?\s]*$/.test(value)
      ) {
        return setError((prev) => ({
          ...prev,
          password:
            "*Allow latin letters and 0-9 one letters big and all simbol ;, [ ], { }, =, -, _, +, *, /, ? ",
        }));
      } else {
        setError((prev) => ({
          ...prev,
          password: false,
        }));
        change(e);
      }
    }
  }
  return (
    <>
      {error.email && <p className="text-red-700 text-xs ">{error.email}</p>}

      <TextField
        error={Boolean(error.email)}
        type="email"
        required
        name="email"
        onChange={validate}
        className="w-full"
        label={error.email ? "Email error" : "Email"}
      />

      {error.password && <p className="text-red-700  text-xs">{error.password}</p>}
      <TextField
        required
        error={Boolean(error.password)}
        name="password"
        onChange={validate}
        type={showPass ? "text" : "password"}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        className="w-full"
        label={error.password ? "Password error" : "Password"}
      />
    </>
  );
}
