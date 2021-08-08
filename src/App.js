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
import classNames from "classnames";

import Dropdown from "./components/Dropdown/Dropdown";
import Modal from "./components/UI/Modal/Modal";
import AddRecord from "./components/Records/AddRecord";
import EditRecord from "./components/Records/EditRecord";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = {
  brand: {
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
  },
  page: {
    perpage_options: [
      {
        id: 0,
        label: 8,
      },
      {
        id: 1,
        label: 9,
      },
      {
        id: 2,
        label: 10,
      },
      {
        id: 3,
        label: 11,
      },
      {
        id: 4,
        label: 12,
      },
      {
        id: 5,
        label: 13,
      },
      {
        id: 6,
        label: 14,
      },
      {
        id: 7,
        label: 15,
      },
    ],
  },
};

const App = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [addRecModal, setAddRecModal] = useState(false);
  const [editRecModal, setEditRecModal] = useState(false);
  const [records, setRecords] = useState([]);

  const [upId, setUpId] = useState("");
  const [upBrand, setUpBrand] = useState("");
  const [upModel, setUpModel] = useState("");
  const [upSize, setUpSize] = useState("");
  const [upImei, setUpImei] = useState("");
  const [upPriceBought, setUpPriceBought] = useState("");
  const [upPriceSold, setUpPriceSold] = useState("");
  const [upStatus, setUpStatus] = useState();
  const [upStartDate, setUpStartDate] = useState(null);
  const [updateState, setUpdateState] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

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
        console.log(resData);
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
  const updateRecordHandler = (data) => {
    fetch(
      `https://ozone-tech-register-default-rtdb.firebaseio.com/records/${upId}.json`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => {
      setUpdateState(!updateState);
    });
  };

  const selectUser = (index) => {
    let item = records[index];
    setUpId(item.id);
    setUpBrand(item.brand);
    setUpImei(item.imei);
    setUpModel(item.model);
    setUpPriceBought(item.priceBought);
    setUpPriceSold(item.priceSold);
    setUpSize(item.size);
    setUpStatus(item.status);
    setUpStartDate(new Date(item.date_raw));
    console.log(item);
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
            date_raw: resData[key].date_raw,
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
        console.log(loadedRecords);
      });
  }, [updateState]);

  //get current records(pagination)
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = records.slice(indexOfFirstRecord, indexOfLastRecord);
  const noOfPages = records.length / recordsPerPage;

  //to find how many records on last page
  const valA = Math.floor(records.length / recordsPerPage);
  const valAA = valA * recordsPerPage;
  const valB = records.length - valAA;

  let noOnPage = null;
  if (currentPage <= noOfPages) {
    noOnPage = recordsPerPage;
  }
  if (currentPage > noOfPages) {
    noOnPage = valB;
  }

  console.log(valA, valB, valAA, noOnPage);

  const paginate = (data) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(records.length / recordsPerPage); i++) {
      pageNumbers.push(i);

      const lastPage = pageNumbers[pageNumbers.length - 1];
      let curPage = currentPage;
      if (curPage + data >= lastPage) {
        curPage = lastPage;
      }
      if (curPage + data < lastPage) {
        curPage = curPage + data;
      }
      if (curPage + data <= 0) {
        curPage = 1;
      }
      setCurrentPage(curPage);

      console.log(pageNumbers, lastPage);
    }

    return <div></div>;
  };

  //to find records per page

  return (
    <div className={classes.App}>
      <Modal show={addRecModal} close={() => setAddRecModal(!addRecModal)}>
        <AddRecord
          addRecordHandler={addRecordHandler}
          close={() => {
            setAddRecModal(!addRecModal);
          }}
          BDClick={addRecModal}
        />
      </Modal>
      <Modal show={editRecModal} close={() => setEditRecModal(!editRecModal)}>
        <EditRecord
          addRecordHandler={addRecordHandler}
          deleteRecordHandler={deleteRecordHandler}
          close={() => {
            setEditRecModal(!editRecModal);
          }}
          updateRecordHandler={updateRecordHandler}
          id={upId}
          brand={upBrand}
          imei={upImei}
          size={upSize}
          date={upStartDate}
          priceSold={upPriceSold}
          priceBought={upPriceBought}
          model={upModel}
          status={upStatus}
          setBrand={setUpBrand}
          setImei={setUpImei}
          setSize={setUpSize}
          setDate={setUpStartDate}
          setPriceSold={setUpPriceSold}
          setPriceBought={setUpPriceBought}
          setModel={setUpModel}
          setStatus={setUpStatus}
          BDClick={editRecModal}
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
              onClick={() => setAddRecModal(true)}
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
            options={options.brand.brand_options}
            icon={options.brand.logo}
            label={options.brand.label}
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
        <div className={classes.horLine2}></div>
        <div className={classes.Header3}>
          <div className={classes.Header3_1}>
            <AllSVG className={classes.AllSVG} />
            <span className={classes.Header3_Item}>ALL</span>
            <span className={classes.Header3_Counter}>{records.length}</span>
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
            Showing {indexOfFirstRecord + 1} -{" "}
            {/* {valA < 1 && recordsPerPage > valB
              ? indexOfFirstRecord + valB
              : indexOfLastRecord}{" "} */}
            {indexOfFirstRecord + noOnPage} of {records.length} results
          </div>
          <div className={classes.Header4_Text2}>
            Result per page:
            <Dropdown
              value={recordsPerPage}
              options={options.page.perpage_options}
              icon={options.page.logo}
              label={options.page.label}
              onChange={(v) => setRecordsPerPage(v)}
              DDSvg={{ width: "25%", height: "50%", marginRight: "11%" }}
              DDInput={{
                height: "25px",
                paddingLeft: "10px",
                marginLeft: "13px",
                width: "60px",
              }}
              DDOptions={{ width: "60px", marginLeft: "13px" }}
              DDItem={{ width: "49px" }}
            />
          </div>
        </div>
        <div
          className={classNames(
            classes.Header5,
            noOnPage > 10 && classes.Header5_mod
          )}
        >
          <table>
            <thead>
              <tr>
                <th>
                  <div></div>
                </th>
                <th>
                  <div className={classes.Header5_Item}>
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
            </thead>

            {currentRecords.map((rd, index) => (
              <tbody key={rd.id}>
                <tr>
                  <td></td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {"A0" + (index + 1)}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.date}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.imei}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.brand}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.model}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.size}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.priceBought}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.status}
                  </td>
                  <td
                    onClick={() => {
                      setEditRecModal(true);
                      selectUser(index);
                    }}
                  >
                    {rd.priceSold}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={classes.Footer}>
          <div className={classes.PageNav} onClick={() => paginate(-1)}>
            <GreatThanSVG className={classes.GreatThanSVG} />
            <span className={classes.Text1}>PREVIOUS</span>
          </div>

          <div className={classes.verLine2}></div>
          {/* <Paginate
            recordsPerPage={recordsPerPage}
            totalRecords={records.length}
          /> */}
          <div>
            <span className={classes.Text2}>{currentPage}</span>
            <span className={classes.Text3}>out of</span>
            <span className={classes.Text4}>{Math.ceil(noOfPages)}</span>
          </div>
          <div className={classes.verLine2}></div>
          <div className={classes.PageNav} onClick={() => paginate(+1)}>
            <span className={classes.Text1}>NEXT</span>
            <GreatThanSVG className={classes.LessThanSVG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
