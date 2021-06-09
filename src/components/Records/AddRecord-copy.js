import React, { useState, useEffect } from "react";
import classes from "./AddRecord.module.css";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useForm from "../../hooks/useForm";

const brand = {
  brand_options: [
    {
      id: 0,
      label: "Apple",
      logo: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-apple-512.png",
    },
    {
      id: 1,
      label: "Samsung",
      logo: "https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/samsung-512.png",
    },
    {
      id: 2,
      label: "Microsoft",
      logo: "https://cdn3.iconfinder.com/data/icons/picons-social/57/32-windows8-512.png",
    },
    {
      id: 3,
      label: "Google",
      logo: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
    },
    {
      id: 4,
      label: "HTC",
      logo: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
    },
  ],
  label: "Select a Brand",
};

const model = {
  apple: {
    apple_model_options: [
      {
        id: 0,
        label: "iPhone 12 Pro Max",
      },
      {
        id: 1,
        label: "iPhone 12 Pro",
      },
      {
        id: 2,
        label: "iPhone 12",
      },
      {
        id: 3,
        label: "iPhone 11 Pro Max",
      },
      {
        id: 4,
        label: "iPhone 11 Pro",
      },
      {
        id: 5,
        label: "iPhone 11",
      },
      {
        id: 6,
        label: "iPhone XS Max",
      },
      {
        id: 7,
        label: "iPhone XS",
      },
      {
        id: 8,
        label: "iPhone XR",
      },
      {
        id: 9,
        label: "iPhone X",
      },
      {
        id: 10,
        label: "iPhone 8 Plus",
      },
      {
        id: 11,
        label: "iPhone 8",
      },
    ],
    label: "Select a Model",
  },
  samsung: {
    samsung_model_options: [
      {
        id: 0,
        label: "Galaxy S21 Ultra",
      },
      {
        id: 1,
        label: "Galaxy S21",
      },
      {
        id: 2,
        label: "Galaxy Note 20 Ultra",
      },
      {
        id: 3,
        label: "Galaxy Note 20",
      },
      {
        id: 4,
        label: "Galaxy S21 Plus",
      },
    ],
    label: "Select a Model",
  },
};

const size = {
  size_options: [
    {
      id: 0,
      label: "32GB",
    },
    {
      id: 1,
      label: "64GB",
    },
    {
      id: 2,
      label: "128GB",
    },
    {
      id: 3,
      label: "256GB",
    },
    {
      id: 4,
      label: "512GB",
    },
  ],
  label: "Select a Size",
};
const status = {
  status_options: [
    {
      id: 0,
      label: "In Stock",
    },
    {
      id: 1,
      label: "Transit",
    },
    {
      id: 2,
      label: "Sold",
    },
  ],
  label: "Select item status",
};

const AddRecord = (props) => {
  const { validate, errors } = useForm();
  const [brandInput, setBrandInput] = useState("");
  const [modelInput, setModelInput] = useState("");
  const [sizeInput, setSizeInput] = useState("");
  const [imeiInput, setImeiInput] = useState("");
  const [priceBoughtInput, setPriceBoughtInput] = useState("");
  const [priceSoldInput, setPriceSoldInput] = useState("");
  const [statusInput, setStatusInput] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [submit, setSubmit] = useState(false);

  let selectedModel = [];
  if (brandInput === "Apple") {
    selectedModel = model.apple.apple_model_options;
  }
  if (brandInput === "Samsung") {
    selectedModel = model.samsung.samsung_model_options;
  }
  // if (!brandInput) {
  //   setDisabled(true);
  // }
  // if (!modelInput) {
  //   setDisabled(true);
  // }

  const submitHandler = (event) => {
    let combData = {
      brand: brandInput,
      model: modelInput,
      size: sizeInput,
      imei: imeiInput,
      priceBought: priceBoughtInput,
      priceSold: priceSoldInput,
      status: statusInput,
      date: startDate,
    };
    validate(combData);
    console.log(errors);
  };

  useEffect(() => {
    if (Object.getOwnPropertyNames(errors).length === 0) {
      props.addRecordHandler({
        brand: brandInput,
        model: modelInput,
        size: sizeInput,
        imei: imeiInput,
        priceBought: priceBoughtInput,
        priceSold: priceSoldInput,
        status: statusInput,
        date: startDate.toLocaleDateString(),
      });

      props.close();
      clearAddRecord();
    } else {
      return null;
    }
  }, [errors]);

  const clearAddRecord = () => {
    setBrandInput("");
    setImeiInput("");
    setModelInput("");
    setSizeInput("");
    setPriceBoughtInput("");
    setPriceSoldInput("");
    setStatusInput("");
    setStartDate("");
  };

  return (
    <div>
      <div className={classes.Header}>Add New Item</div>

      {/* <br></br> */}
      <div className={classes.Text1}>1. Item Details</div>
      <div className={classes.horLine}></div>
      <div className={classes.Section1}>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="brand">
            Brand
          </label>
          <Dropdown
            value={brandInput}
            options={brand.brand_options}
            icon={brand.logo}
            label={brand.label}
            onChange={(v) => {
              setBrandInput(v);
              setModelInput("");
            }}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: "none",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "224px" }}
            disabled={false}
          />
          {errors.brand && (
            <div className={classes.errorMessage}>{errors.brand}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="model">
            Model
          </label>
          <Dropdown
            value={modelInput}
            options={selectedModel}
            // icon={model.logo}
            label={model.apple.label}
            onChange={(v) => setModelInput(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: "none",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
            disabled={disabled}
          />
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="size">
            Size
          </label>
          <Dropdown
            value={sizeInput}
            options={size.size_options}
            // icon={size.logo}
            label={size.label}
            onChange={(v) => setSizeInput(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: "none",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
            disabled={disabled}
          />
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="IMEI">
            IMEI
          </label>
          <input
            id="IMEI"
            className={classes.imeiInput}
            value={imeiInput}
            placeholder={"IMEI"}
            onChange={(e) => {
              setImeiInput(e.target.value);
            }}
          />
        </div>
      </div>
      <div className={classes.Text1}>2. Price Details</div>
      <div className={classes.horLine}></div>
      <div className={classes.Section1}>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="pricebought">
            Price Bought
          </label>
          <input
            className={classes.imeiInput}
            value={priceBoughtInput}
            placeholder={"Input buy price of Item"}
            onChange={(e) => {
              setPriceBoughtInput(e.target.value);
            }}
          />
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="model">
            Price Sold
          </label>
          <input
            className={classes.imeiInput}
            value={priceSoldInput}
            placeholder={"Input sold price of Item"}
            onChange={(e) => {
              setPriceSoldInput(e.target.value);
            }}
          />
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="size">
            Status
          </label>
          <Dropdown
            value={statusInput}
            options={status.status_options}
            // icon={size.logo}
            label={status.label}
            onChange={(v) => setStatusInput(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: "none",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
            disabled={false}
          />
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="dateAdded">
            Date Added
          </label>
          <DatePicker
            className={classes.dateInput}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            todayButton="Today"
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            placeholderText="Click to select a date"
            popperClassName="some-custom-class"
            popperPlacement="top-end"
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [28, 10],
                },
              },
              {
                name: "preventOverflow",
                options: {
                  rootBoundary: "viewport",
                  tether: false,
                  altAxis: true,
                },
              },
            ]}
          />
        </div>
      </div>
      <div className={classes.addButton}>
        <button onClick={submitHandler}>ADD RECORD</button>
      </div>
    </div>
  );
};

export default AddRecord;
