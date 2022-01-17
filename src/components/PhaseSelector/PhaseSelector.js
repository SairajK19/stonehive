import React, { useState, createContext, useContext } from "react";
import { Icon } from "@iconify/react";

import styles from "./phase_selector.module.scss";

const SelectedPhaseContext = createContext(null);
const usePhaseSelector = () => useContext(SelectedPhaseContext);
export default function PhaseSelector() {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const PhasesList = [
    {
      id: 1,
      title: "Concept Phase",
      icon: "icon-park-outline:concept-sharing",
    },
    {
      id: 2,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 3,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 4,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 5,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 6,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 7,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
    {
      id: 8,
      title: "Design Phase",
      icon: "clarity:design-line",
    },
  ];
  return (
    <div className={styles.container}>
    <SelectedPhaseContext.Provider value={selectedPhase}>
        <p id="popup_panel_titles">Phases</p>
        <div className={styles.grid_container}>
          {PhasesList.map((phase) => {
            return (
              <button
                className={
                  selectedPhase === phase.id
                    ? `${styles.phase_item} ${styles.phase_active} `
                    : `${styles.phase_item}`
                }
                onClick={() => setSelectedPhase(phase.id)}
              >
                <p id={styles.phase_title}>{phase.title}</p>
                <Icon icon={phase.icon} />
              </button>
            );
          })}
        </div>
      </SelectedPhaseContext.Provider>
    </div>
  );
}
export { SelectedPhaseContext };
