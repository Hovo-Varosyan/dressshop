"use client";
import { useState, useEffect, useMemo } from "react";
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  TextField, Button
} from "@mui/material";
import Credit from "./credit";
import userStore from "../../store/userStore";
import { buyProducts } from "../../middleware/request/order";
import Submit from "../ui/submit";

export default function OrderFormModal({ open, onClose, products }) {
  const { userData, paymentMethods } = userStore().profileData ?? {};

  const defaultForm = useMemo(() => ({
    name: userData?.name || "",
    lastName: userData?.lastName || "",
    products,
    address: userData?.address
      ? `${userData.address.country} ${userData.address.state} ${userData.address.city} ${userData.address.street} ${userData.address.home}`
      : "",
    city: userData?.city || "",
    zipCode: userData?.zipCode || "",
    cardName: userData?.name ? `${userData.name} ${userData.lastName}`.trim() : "",
    cardNumber: paymentMethods?.cardNumber || "",
    cardExp: paymentMethods?.expiryDate || "",
    cardCVV: paymentMethods?.cardCVV || "",
  }), [userData, paymentMethods, products]);

  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => setForm(defaultForm), [defaultForm]);
  useEffect(() => {
    !open && (setIsFlipped(false), setForm(defaultForm))
  }, [open]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  const fields = [
    { label: "Имя", name: "name", onChange: handleChange, required: true },
    { label: "Фамилия", name: "lastName", onChange: handleChange, required: true },
    { label: "Адрес", name: "address", onChange: handleChange, required: true },
    { label: "Почтовый индекс", onChange: handleChange, name: "zipCode" },
  ];
  console.log(form)
  const cardFields = [
    { label: "Имя на карте", name: "cardName", upper: true, required: true },
    { label: "Номер карты", name: "cardNumber", onChange: handleChange, ph: "1234 5678 9012 3456", onFocus: () => setIsFlipped(false), required: true },
    { label: "Срок действия (MM/YY)", name: "cardExp", onChange: handleChange, half: true, onFocus: () => setIsFlipped(false), required: true },
    { label: "CVV", name: "cardCVV", onChange: handleChange, half: true, onFocus: () => setIsFlipped(true), onBlur: () => setIsFlipped(false), required: true },
  ];

  const renderField = ({ label, name, ph, upper, half, ...props }) => (
    <TextField
      key={name}
      label={label}
      name={name}
      value={form[name]}
      fullWidth
      placeholder={ph}
      required={props.required}
      InputProps={{ style: { color: "white", textTransform: upper ? "uppercase" : "none" } }}
      InputLabelProps={{ style: { color: "gray" } }}
      {...props}
    />
  );

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
      <DialogTitle className="!bg-gray-900 !text-white text-center">
        <div className="text-green-400 text-xl font-semibold">Оформление заказа</div>
      </DialogTitle>

      <DialogContent className="!bg-gray-900 !text-white">
        <form className="flex flex-col lg:flex-row gap-6" onSubmit={(e) => buyProducts({ e, data: form, setLoading })}>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {fields.map(renderField)}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {cardFields.slice(0, 2).map(renderField)}
              <div className="grid grid-cols-2 gap-3">
                {cardFields.slice(2).map(renderField)}
              </div>
            </div>
          </div>

          <Credit isFlipped={isFlipped} form={form} />
        </form>
      </DialogContent>

      <DialogActions className="!bg-gray-900 justify-center py-4">
        <div className="w-full max-w-2xl flex justify-between items-center px-2 gap-4">
          <div>
            <div className="text-sm text-gray-300">Итого к оплате</div>
            <div className="text-2xl text-green-400 font-bold">{products?.total} ֏</div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={onClose}
              sx={{ color: "white", border: "1px solid gray", px: 3, py: 1.1, fontSize: 15 }}
            >
              Отмена
            </Button>
            <Submit loading={loading} value={"Buy"} />

          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
