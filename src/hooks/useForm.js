import { useState } from "react";

const useForm = () => {
  const [errors, setError] = useState("");

  const validate = (value) => {
    let errors = {};
    if (!value.date) {
      errors.date = "Select a Date";
    }
    if (!value.brand) {
      errors.brand = "Select a Brand";
    }
    if (!value.model) {
      errors.model = "Select a Model";
    }
    if (!value.size) {
      errors.size = "Select a Size";
    }
    if (!value.imei) {
      errors.imei = "Enter an IMEI";
    }
    if (!value.priceBought) {
      errors.priceBought = "Enter buy price";
    }
    if (value.status === "Sold" && !value.priceSold) {
      errors.priceSold = "Enter sell price";
    }
    if (!value.status) {
      errors.status = "Select a Status";
    }
    return setError(errors);
  };

  return {
    validate: validate,
    errors: errors,
  };
};
export default useForm;
