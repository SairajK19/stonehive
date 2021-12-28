import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { superuserSidebarItems } from "../../../../../components/Sidebar/sidebarItems";
import { setSidebarItems } from "../../../../../redux/reducers/shReducers";
import Select from "react-select";
import styles from "./styles/SuperUserDashboard.module.scss";
import Popup from "../../../../../components/Popup/Popup";

export default function SuperUserDashboard() {
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { value: "1", label: "Phase 1" },
    { value: "2", label: "Phase 2" },
    { value: "3", label: "Phase 3" },
  ]);
  const [currentNav, setCurrentNav] = useState("Phases");
  const [popupOn, setPopup] = useState(false);
  const [currentForm, setCurrentForm] = useState("Add");
  useEffect(() => {
    dispatch(
      setSidebarItems({ active: "Dashboard", items: superuserSidebarItems })
    );
  }, []);

  const handlePopupToggle = (form) => {
    const popup = document.getElementById("popup");
    setPopup(!popupOn);
    setCurrentForm(form);

    if (!popupOn) {
      popup.style.opacity = "1";
      popup.style.visibility = "visible";
    } else {
      popup.style.opacity = "0";
      popup.style.visibility = "hidden";
    }
  };

  return (
    <div className={styles.container}>
      {/* <span className={styles.popup} id="popup">
        {currentForm === "Add" ? (
          <AddActivityForm handlePopupToggle={handlePopupToggle} />
        ) : (
          <EditActivityForm handlePopupToggle={handlePopupToggle} />
        )}
      </span> */}
      {currentForm === "Add" ? (
        <Popup
          Component={AddActivityForm}
          handlePopupToggle={handlePopupToggle}
        />
      ) : (
        <Popup
          Component={EditActivityForm}
          handlePopupToggle={handlePopupToggle}
        />
      )}
      {/* Project Overview */}
      <div className={styles.project_overview}>
        <h2>Project Overview</h2>
        <div className={styles.overviews}>
          <p>Work completiton: 69%</p>
          <p>Current Phase: Foundation</p>
          <p>Budget Remaining: ₹6 Lakhs</p>
        </div>
      </div>
      {/* Project Update */}
      <div className={styles.project_update}>
        <h2>Update Project</h2>
        <div className={styles.update_navigation}>
          {currentNav === "Phases" ? (
            <p
              style={{ backgroundColor: "#232323", color: "white" }}
              onClick={() => setCurrentNav("Phases")}
            >
              Phases
            </p>
          ) : (
            <p
              style={{ backgroundColor: "#F5F6FA", color: "black" }}
              onClick={() => setCurrentNav("Phases")}
            >
              Phases
            </p>
          )}
          {currentNav === "Info" ? (
            <p
              style={{ backgroundColor: "#232323", color: "white" }}
              onClick={() => setCurrentNav("Info")}
            >
              Info
            </p>
          ) : (
            <p
              style={{ backgroundColor: "#F5F6FA", color: "black" }}
              onClick={() => setCurrentNav("Info")}
            >
              Info
            </p>
          )}
        </div>
        <Select
          defaultValue={options[0]}
          // isMulti
          name="Categories"
          options={options}
          className={styles.basic_multi_select}
          classNamePrefix="select"
          //   onChange={publishHandleInputChange}
          // styles={customStyles}
        />
        {/* Update boxes and shit */}
        <div className={styles.details_update}>
          <div className={styles.activity_date_update}>
            <form>
              <div className={styles.input_block}>
                <label>Start Date</label>
                <div className={styles.input_field}>
                  <input type="date" />
                </div>
              </div>
              <div className={styles.input_block}>
                <label>End Date</label>
                <div className={styles.input_field}>
                  <input type="date" />
                </div>
              </div>
              <div className={styles.input_block}>
                <label>Allocated Budget</label>
                <div className={styles.input_field}>
                  <input type="text" placeholder="Enter amount" />
                </div>
              </div>
            </form>
            <div className={styles.update_buttons}>
              <button id={styles.save_changes}>Save Changes</button>
              <button
                id={styles.add_activity}
                onClick={() => handlePopupToggle("Add")}
              >
                Add Activity
              </button>
            </div>
          </div>
          <div className={styles.activity_table}>
            <table>
              <tr>
                <th>Sr no.</th>
                <th>Activity Name</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Allocated Budget</th>
                <th>Remaining Budget</th>
                <th>Budget Spent</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
              {[
                {
                  srNo: 1,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 2,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 3,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 4,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 5,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 6,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 7,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
                {
                  srNo: 8,
                  name: "Design",
                  sDate: "20 Aug 2021",
                  eDate: "21 Dec 2021",
                  allocatedBudget: "₹20,0000",
                  remainingBudget: "₹20,0000",
                  budgetSpent: "₹20,0000",
                  status: "Ongoing",
                },
              ].map((activity) => (
                <tr>
                  <td>{activity.srNo}</td>
                  <td>{activity.name}</td>
                  <td>{activity.sDate}</td>
                  <td>{activity.eDate}</td>
                  <td>{activity.allocatedBudget}</td>
                  <td>{activity.remainingBudget}</td>
                  <td>{activity.budgetSpent}</td>
                  <td>{activity.status}</td>
                  <td>
                    <div
                      id={styles.edit_btn}
                      onClick={() => handlePopupToggle("Edit")}
                    >
                      <Icon
                        icon="akar-icons:edit"
                        style={{ fontSize: "20px" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const AddActivityForm = ({ handlePopupToggle }) => {
  const [options, setOptions] = useState([
    { value: "Ongoing", label: "Ongoing" },
    { value: "Completed", label: "Completed" },
  ]);

  return (
    <div className={styles.form_container}>
      <div className={styles.title}>
        <h2>Add Activity</h2>
        <span className={styles.close} onClick={() => handlePopupToggle("Add")}>
          <Icon icon="ci:off-close" />
        </span>
      </div>
      <form>
        <div className={styles.form_input_block} id={styles.activity_name}>
          <label>Activity Name</label>
          <div className={styles.input}>
            <input type="text" placeholder="Design" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Start Date</label>
          <div className={styles.input}>
            <input type="date" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>End Date</label>
          <div className={styles.input}>
            <input type="date" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Budget Allocated</label>
          <div className={styles.input}>
            <input type="text" placeholder="20 Lakhs" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Remaining Budget</label>
          <div className={styles.input}>
            <input type="text" placeholder="20 Lakhs" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Status</label>
          <Select
            defaultValue={options[0]}
            // isMulti
            name="Categories"
            options={options}
            className={styles.basic_multi_select}
            classNamePrefix="select"
            //   onChange={publishHandleInputChange}
            // styles={customStyles}
          />
        </div>
      </form>
      <button>Add</button>
    </div>
  );
};

const EditActivityForm = ({ handlePopupToggle }) => {
  const [options, setOptions] = useState([
    { value: "Ongoing", label: "Ongoing" },
    { value: "Completed", label: "Completed" },
  ]);

  return (
    <div className={styles.form_container}>
      <div className={styles.title}>
        <h2>Edit Activity</h2>
        <span
          className={styles.close}
          onClick={() => handlePopupToggle("Edit")}
        >
          <Icon icon="ci:off-close" />
        </span>
      </div>
      <form>
        <div className={styles.form_input_block} id={styles.activity_name}>
          <label>Activity Name</label>
          <div className={styles.input}>
            <input type="text" placeholder="Design" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Start Date</label>
          <div className={styles.input}>
            <input type="date" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>End Date</label>
          <div className={styles.input}>
            <input type="date" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Budget Allocated</label>
          <div className={styles.input}>
            <input type="text" placeholder="20 Lakhs" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Remaining Budget</label>
          <div className={styles.input}>
            <input type="text" placeholder="20 Lakhs" />
          </div>
        </div>
        <div className={styles.form_input_block}>
          <label>Status</label>
          <Select
            defaultValue={options[0]}
            // isMulti
            name="Categories"
            options={options}
            className={styles.basic_multi_select}
            classNamePrefix="select"
            //   onChange={publishHandleInputChange}
            // styles={customStyles}
          />
        </div>
      </form>
      <button>Add</button>
    </div>
  );
};
