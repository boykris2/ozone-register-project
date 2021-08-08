import React, { useEffect } from "react";
import classes from "./EditRecord.module.css";
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
      label: "OnePlus",
      logo: "https://i.pinimg.com/originals/f1/37/c8/f137c8e169d6a1ac74198400eeb949e0.jpg",
    },
    {
      id: 3,
      label: "Google",
      logo: "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png",
    },
    {
      id: 4,
      label: "HTC",
      logo: "https://i.pinimg.com/originals/52/87/3d/52873dc6d1394861bd9014b6e8771432.jpg",
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
  oneplus: {
    oneplus_model_options: [
      {
        id: 0,
        label: "9 Pro",
      },
      {
        id: 1,
        label: "9R",
      },
      {
        id: 2,
        label: "Nord 10 5G",
      },
      {
        id: 3,
        label: "Nord N100",
      },
      {
        id: 4,
        label: "8T+ 5G",
      },
    ],
    label: "Select a Model",
  },
  google: {
    google_model_options: [
      {
        id: 0,
        label: "Pixel 5",
      },
      {
        id: 1,
        label: "Pixel 4 XL",
      },
      {
        id: 2,
        label: "Pixel 4",
      },
      {
        id: 3,
        label: "Pixel 4a 5G",
      },
      {
        id: 4,
        label: "Pixel 4a",
      },
    ],
    label: "Select a Model",
  },
  htc: {
    htc_model_options: [
      {
        id: 0,
        label: "Wildfire E3",
      },
      {
        id: 1,
        label: "Desire 21 Pro 5G",
      },
      {
        id: 2,
        label: "Desire 20+",
      },
      {
        id: 3,
        label: "Wildfire E2",
      },
      {
        id: 4,
        label: "Wildfire E1 lite",
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

const EditRecord = (props) => {
  const { validate, errors } = useForm();

  let selectedModel = [];
  if (props.brand === "Apple") {
    selectedModel = model.apple.apple_model_options;
  }
  if (props.brand === "Samsung") {
    selectedModel = model.samsung.samsung_model_options;
  }
  if (props.brand === "OnePlus") {
    selectedModel = model.oneplus.oneplus_model_options;
  }
  if (props.brand === "Google") {
    selectedModel = model.google.google_model_options;
  }
  if (props.brand === "HTC") {
    selectedModel = model.htc.htc_model_options;
  }

  console.log(props);

  const clearUpdateRecord = () => {
    props.setBrand("");
    props.setImei("");
    props.setModel("");
    props.setSize("");
    props.setPriceBought("");
    props.setPriceSold("");
    props.setStatus("");
    props.setDate("");
  };

  const submitHandler = (event) => {
    let combData = {
      brand: props.brand,
      model: props.model,
      size: props.size,
      imei: props.imei,
      priceBought: props.priceBought,
      priceSold: props.priceSold,
      status: props.status,
      date: props.date,
    };
    validate(combData);
    console.log(errors);
  };

  useEffect(() => {
    if (props.BDClick === false) {
      clearUpdateRecord();
    }
    if (Object.getOwnPropertyNames(errors).length === 0) {
      props.updateRecordHandler({
        brand: props.brand,
        model: props.model,
        size: props.size,
        imei: props.imei,
        priceBought: props.priceBought,
        priceSold: props.priceSold,
        status: props.status,
        date: props.date.toLocaleDateString(),
        date_raw: props.date.toISOString(),
      });

      props.close();
      clearUpdateRecord();
    } else {
      return null;
    }
  }, [errors]);

  return (
    <div>
      <div className={classes.Header}>Edit Item</div>

      {/* <br></br> */}
      <div className={classes.Text1}>1. Item Details</div>
      <div className={classes.horLine}></div>
      <div className={classes.Section1}>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="brand">
            Brand
          </label>
          <Dropdown
            value={props.brand}
            options={brand.brand_options}
            icon={brand.logo}
            label={brand.label}
            onChange={(v) => {
              props.setBrand(v);
              props.setModel("");
              props.setSize("");
            }}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: errors.brand ? "1px solid #dc3544" : "",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "224px" }}
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
            value={props.model}
            options={selectedModel}
            // icon={model.logo}
            label={model.apple.label}
            onChange={(v) => props.setModel(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: errors.model ? "1px solid #dc3544" : "",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
          />
          {errors.model && (
            <div className={classes.errorMessage}>{errors.model}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="size">
            Size
          </label>
          <Dropdown
            value={props.size}
            options={size.size_options}
            // icon={size.logo}
            label={size.label}
            onChange={(v) => props.setSize(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: errors.size ? "1px solid #dc3544" : "",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
          />
          {errors.size && (
            <div className={classes.errorMessage}>{errors.size}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="IMEI">
            IMEI
          </label>
          <input
            type="number"
            id="IMEI"
            className={classes.imeiInput}
            value={props.imei}
            style={{
              border: errors.imei ? "1px solid #dc3544" : "",
            }}
            onChange={(e) => {
              props.setImei(e.target.value);
            }}
          />
          {errors.imei && (
            <div className={classes.errorMessage}>{errors.imei}</div>
          )}
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
            type="number"
            id="priceBought"
            className={classes.imeiInput}
            style={{
              border: errors.priceBought ? "1px solid #dc3544" : "",
            }}
            value={props.priceBought}
            onChange={(e) => {
              props.setPriceBought(e.target.value);
            }}
          />
          {errors.priceBought && (
            <div className={classes.errorMessage}>{errors.priceBought}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="priceSold">
            Price Sold
          </label>
          <input
            className={classes.imeiInput}
            type="number"
            id="priceSold"
            style={{
              border: errors.priceSold ? "1px solid #dc3544" : "",
            }}
            value={props.priceSold}
            onChange={(e) => {
              props.setPriceSold(e.target.value);
            }}
          />
          {errors.priceSold && (
            <div className={classes.errorMessage}>{errors.priceSold}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="size">
            Status
          </label>
          <Dropdown
            value={props.status}
            options={status.status_options}
            // icon={size.logo}
            label={status.label}
            onChange={(v) => props.setStatus(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
            DDInput={{
              height: "32px",
              background: "#e7eaea",
              border: errors.status ? "1px solid #dc3544" : "",
              paddingLeft: "10px",
              width: "225px",
            }}
            DDOptions={{ width: "225px" }}
            DDItem={{ width: "214px" }}
          />
          {errors.status && (
            <div className={classes.errorMessage}>{errors.status}</div>
          )}
        </div>
        <div className={classes.DDInput}>
          <label className={classes.Text2} for="dateAdded">
            Date Added
          </label>
          <DatePicker
            className={classes.dateInput}
            selected={props.date}
            onChange={(date) => props.setDate(date)}
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
                  offset: [16, 5],
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
          {errors.date && (
            <div className={classes.errorMessage}>{errors.date}</div>
          )}
        </div>
      </div>
      <div className={classes.bottomButtons}>
        <div className={classes.cancelButton}>
          <button
            onClick={() => {
              props.deleteRecordHandler(props.id);
              props.close();
            }}
          >
            DELETE RECORD
          </button>
        </div>
        <div className={classes.editButton}>
          <button onClick={submitHandler}>EDIT RECORD</button>
        </div>
      </div>
    </div>
  );
};

export default EditRecord;
