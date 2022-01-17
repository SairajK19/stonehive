/** Library imports **/
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import Select from "react-select";

/** Custom functions **/
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import {
  superuserHomeSidebarItems,
  superuserHomeSidebarItemsMobile,
} from "../../../../components/Sidebar/sidebarItems";
import { createProjectFormInputs, phases } from "../../../../helpers/constants";

/** Styles **/
import styles from "./styles/CreateProject.module.scss";

export default function CreateProject() {
  const [workerOptions, setworkerOptions] = useState([
    { value: null, label: "Select Option" },
    { value: "Sanket Marathe", label: "Sanket Marathe" },
    { value: "Rhutik Parab", label: "Rhutik Parab" },
    { value: "Sairaj Kapdi", label: "Sairaj Kapdi" },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTopBarVisibility(false));
  }, []);
  const [sliderAnimationP2, setsliderAnimationP2] = useState();
  const [sliderAnimationP1, setsliderAnimationP1] = useState();

  const handleNext = () => {
    setsliderAnimationP2("0%");
    setsliderAnimationP1("-100%");
  };

  const handlePrevious = () => {
    setsliderAnimationP2("100%");
    setsliderAnimationP1("0%");
  };

  useEffect(() => {
    // Hide top bar
    dispatch(setTopBarVisibility({ visibility: false }));

    // set sidebar navs.
    dispatch(
      setSidebarItems({ active: "Projects", items: superuserHomeSidebarItems })
    );

    window.matchMedia("(min-width: 900px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItems,
        })
      );
    });

    if (window.innerWidth <= 810) {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
    }

    window.matchMedia("(max-width: 810px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.create_project_form}>
        <div className={styles.form_part1} style={{ left: sliderAnimationP1 }}>
          {/* <button onClick={handleNext}>Next</button> */}
          {/* Title */}
          <h1>Create Project</h1>
          <form>
            {createProjectFormInputs.map((item) => (
              <div className={styles.form_input_block} id={styles[item.id]}>
                <label>{item.label}</label>
                <div className={styles.input_field}>
                  {item.country_code ? (
                    <div className={styles.input_label}>+91</div>
                  ) : (
                    ""
                  )}
                  <input type={item.type} placeholder={item.placeholder} />
                </div>
              </div>
            ))}

            {[
              {
                label: "Assign Project Manager",
                name: "project_manager",
                options: workerOptions,
              },
              {
                label: "Assign Contractor",
                name: "contractor",
                options: workerOptions,
              },
              {
                label: "Assign Architect",
                name: "architect",
                options: workerOptions,
              },
            ].map((item) => (
              <div className={styles.form_input_block} id={styles.dropdown}>
                <label>{item.label}</label>
                <div className={styles.input_field}>
                  <Select
                    defaultValue={[item.options[0]]}
                    name="Categories"
                    options={item.options}
                    className={styles.basic_multi_select}
                    classNamePrefix="select"
                    isSearchable={false}
                  />
                </div>
              </div>
            ))}

            <div className={styles.form_input_block} id={styles.total_budget}>
              <label>Total Budget</label>
              <div className={styles.input_field}>
                <input type="text" placeholder="20 Lakhs" />
              </div>
            </div>
          </form>
          <button onClick={handleNext}>Next</button>
        </div>
        <div
          className={styles.form_part2}
          id="next"
          style={{ left: sliderAnimationP2 }}
        >
          <div className={styles.title}>
            <Icon
              icon="akar-icons:arrow-back-thick"
              style={{ fontSize: "25px" }}
              id={styles.back_button}
              onClick={handlePrevious}
            />
            <h1>Phase Wise Details</h1>
          </div>
          <form>
            {phases.map((phase, key) => (
              <div className={styles.phase_block}>
                <h2 id={styles.phase_number}>Phase {key + 1}</h2>
                  {phase.map((item) => (
                      item.type === "text" ?
                          <div className={`${styles.form_input_block} ${styles.phase_budget}`} id={styles[item.id]}>
                              <label>{item.label}</label>
                              <div className={styles.input_field}>
                                  <input type={item.type} placeholder={item.placeholder} />
                              </div>
                          </div> : item.id === "project_eDate" ?
                              <div className={`${styles.form_input_block} ${styles.end_date}`} id={styles[item.id]}>
                                  <label>{item.label}</label>
                                  <div className={styles.input_field}>
                                      <input type={item.type} placeholder={item.placeholder} />
                                  </div>
                              </div> : 
                              <div className={styles.form_input_block} id={styles[item.id]}>
                                  <label>{item.label}</label>
                                  <div className={styles.input_field}>
                                      <input type={item.type} placeholder={item.placeholder} />
                                  </div>
                              </div>
                  ))}
              </div>
            ))}
          </form>
          <button onClick={handlePrevious}>Previous</button>
          <button>Create</button>
        </div>
      </div>
    </div>
  );
}
