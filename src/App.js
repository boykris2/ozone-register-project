import classes from "./App.module.css";
import React, { useState, useEffect } from "react";
import NairaSVG from "./components/icons/NairaSVG";
import PrintSVG from "./components/icons/PrintSVG";
import AddSVG from "./components/icons/AddSVG";
import PhoneSVG from "./components/icons/PhoneSVG";
import SearchSVG from "./components/icons/SearchSVG";
import DateSVG from "./components/icons/DateSVG";
import FilterSVG from "./components/icons/FilterSVG";
import PriceSVG from "./components/icons/PriceSVG";
import AllSVG from "./components/icons/AllSVG";
import InStockSVG from "./components/icons/InStockSVG";
import SoldSVG from "./components/icons/SoldSVG";
import CancelSVG from "./components/icons/CancelSVG";
import DropdownSVG from "./components/icons/DropdownSVG";
import GreatThanSVG from "./components/icons/GreatThanSVG";
import HeaderFilterSVG from "./components/icons/HeaderFilterSVG";

import Dropdown from "./components/Dropdown/Dropdown";
import Modal from "./components/UI/Modal/Modal";
import AddRecord from "./components/Records/AddRecord";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  label: "Brand",
  logo: <PhoneSVG className={classes.PhoneSVG} />,
};

const App = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCancel, setShowCancel] = useState(true);
  const [records, setRecords] = useState([]);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const addRecordHandler = (record) => {
    fetch(
      "https://ozone-tech-register-default-rtdb.firebaseio.com/records.json",
      {
        method: "POST",
        body: JSON.stringify(record),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) =>
      response.json().then((resData) => {
        setRecords((prevRecords) => [
          ...prevRecords,
          { id: resData.name, ...record },
        ]);
      })
    );
  };

  const deleteRecordHandler = (id) => {
    fetch(
      `https://ozone-tech-register-default-rtdb.firebaseio.com/records/${id}.json`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      setRecords((prevRecords) => prevRecords.filter((rd) => rd.id !== id));
    });
  };

  useEffect(() => {
    fetch(
      "https://ozone-tech-register-default-rtdb.firebaseio.com/records.json"
    )
      .then((response) => response.json())
      .then((resData) => {
        const loadedRecords = [];
        for (const key in resData) {
          loadedRecords.push({
            id: key,
            date: resData[key].date,
            brand: resData[key].brand,
            imei: resData[key].imei,
            model: resData[key].model,
            size: resData[key].size,
            priceBought: resData[key].priceBought,
            status: resData[key].status,
            priceSold: resData[key].priceSold,
          });
        }
        setRecords(loadedRecords);
      });
  }, []);

  return (
    <div className={classes.App}>
      <Modal show={showModal} close={() => setShowModal(!showModal)}>
        <AddRecord
          addRecordHandler={addRecordHandler}
          close={() => {
            setShowModal(!showModal);
          }}
        />
      </Modal>
      <div className={classes.Sidebar}></div>
      <div className={classes.Header}>
        <div className={classes.Header1}>
          <div className={classes.Header1Left}>
            Records
            <NairaSVG className={classes.NairaSVG} />
          </div>
          <div className={classes.Header1Right}>
            <button className={classes.PrintButton}>
              <PrintSVG className={classes.PrintSVG} />
              PRINT
            </button>

            <button
              className={classes.AddButton}
              onClick={() => setShowModal(true)}
            >
              <AddSVG className={classes.AddSVG} />
              ADD RECORD
            </button>
          </div>
        </div>
        <div className={classes.horLine}></div>
        <div className={classes.Header2}>
          <div className={classes.SearchInput}>
            <SearchSVG className={classes.SearchSVG} />
            <input placeholder="Search" />
          </div>
          <div className={classes.verLine}></div>
          <div className={classes.DateInput}>
            <DateSVG className={classes.DateSVG} />
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              className={classes.DatePicker}
              selectsRange
              placeholderText="Date Range"
              showPopperArrow={false}
              popperClassName="some-custom-class"
              popperPlacement="top-end"
              popperModifiers={[
                {
                  name: "offset",
                  options: {
                    offset: [20, 10],
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
            <DropdownSVG className={classes.DropdownSVG} />
          </div>

          <Dropdown
            value={selectedBrand}
            options={brand.brand_options}
            icon={brand.logo}
            label={brand.label}
            onChange={(v) => setSelectedBrand(v)}
            DDSvg={{ width: "5%", height: "25%", marginRight: "3%" }}
          />
          <div className={classes.PriceInput}>
            <PriceSVG className={classes.PriceSVG} />
            <span>Price</span>
            <DropdownSVG className={classes.DropdownSVG} />
          </div>
          <div className={classes.verLine}></div>
          <div className={classes.FilterInput}>
            <FilterSVG className={classes.FilterSVG} />
            <span>More Filters</span>
            <DropdownSVG className={classes.DropdownSVG} />
          </div>
        </div>
        <div className={classes.horLine}></div>
        <div className={classes.Header3}>
          <div className={classes.Header3_1}>
            <AllSVG className={classes.AllSVG} />
            <span className={classes.Header3_Item}>ALL</span>
            <span className={classes.Header3_Counter}>50</span>
          </div>
          <div className={classes.Header3_2}>
            <InStockSVG className={classes.InStockSVG} />
            <span className={classes.Header3_Item}>STOCK</span>
            <span className={classes.Header3_Counter}>25</span>
          </div>
          <div className={classes.Header3_3}>
            <SoldSVG className={classes.SoldSVG} />
            <span className={classes.Header3_Item}>SOLD</span>
            <span className={classes.Header3_Counter}>25</span>
          </div>
        </div>{" "}
        <div className={classes.Header4}>
          <div className={classes.Header4_Text1}>
            Showing 8 - 20 of 99 results
          </div>
          <div className={classes.Header4_Text2}>Result per page:</div>
        </div>
        <div className={classes.Footer}>
          <GreatThanSVG className={classes.GreatThanSVG} />
          <span className={classes.Text1}>PREVIOUS</span>
          <div className={classes.verLine2}></div>
          <div>
            <span className={classes.Text2}>2</span>
            <span className={classes.Text3}>out of</span>
            <span className={classes.Text4}>7</span>
          </div>
          <div className={classes.verLine2}></div>
          <span className={classes.Text1}>NEXT</span>
          <GreatThanSVG className={classes.LessThanSVG} />
        </div>
        <div className={classes.Header5}>
          <table>
            <tr>
              <th>
                <div></div>
              </th>
              <th>
                <div
                  onClick={setShowCancel(true)}
                  className={classes.Header5_Item}
                >
                  S/N
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  ADDED
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  IMEI
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  BRAND
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  MODEL
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  SIZE
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  PRICE BOUGHT
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  STATUS
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
              <th>
                <div className={classes.Header5_Item}>
                  PRICE SOLD
                  <HeaderFilterSVG className={classes.HeaderFilterSVG} />
                </div>
              </th>
            </tr>

            {records.map((rd, index) => (
              <tr>
                <td>
                  {showCancel && (
                    <div key={rd.id} onClick={() => deleteRecordHandler(rd.id)}>
                      <CancelSVG className={classes.CancelSVG} />
                    </div>
                  )}
                </td>
                <td>{"A0" + (index + 1)}</td>
                <td>{rd.date}</td>
                <td>{rd.imei}</td>
                <td>{rd.brand}</td>
                <td>{rd.model}</td>
                <td>{rd.size}</td>
                <td>{rd.priceBought}</td>
                <td>{rd.status}</td>
                <td>{rd.priceSold}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
