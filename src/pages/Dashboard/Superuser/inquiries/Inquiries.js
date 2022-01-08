import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../../../../components/SearchBar/SearchBar";
import {
  superuserHomeSidebarItems,
  superuserHomeSidebarItemsMobile,
} from "../../../../components/Sidebar/sidebarItems";
import {
  setSidebarItems,
  setTopBarVisibility,
} from "../../../../redux/reducers/shReducers";
import styles from "./styles/inquiries.module.scss";
import questioner_img from "../../../../assets/images/questioner_img.png";

export default function Inquiries() {
  const dispatch = useDispatch();
  const [nInquiries, setNInquiries] = useState(69);
  const [isMobile, setIsMobile] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);

  useEffect(() => {
    // hide top bar
    dispatch(setTopBarVisibility({ visibility: false }));

    dispatch(
      setSidebarItems({ active: "Inquiries", items: superuserHomeSidebarItems })
    );

    if (window.innerWidth <= 810) {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
      setIsMobile(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 810) {
        dispatch(
          setSidebarItems({
            active: "Projects",
            items: superuserHomeSidebarItems,
          })
        );
        setIsMobile(false);
      }
    });

    window.matchMedia("(min-width: 900px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItems,
        })
      );
      setIsMobile(false);
    });

    window.matchMedia("(max-width: 810px)").addEventListener("change", () => {
      dispatch(
        setSidebarItems({
          active: "Projects",
          items: superuserHomeSidebarItemsMobile,
        })
      );
      setIsMobile(true);
    });
  }, []);

  const handleInquiryClick = () => {
    if (isMobile) {
      setShowInquiry(true);
    }
  };

  return isMobile && showInquiry ? (
    <div className={styles.container}>
      <Inquiry setShowInquiry={setShowInquiry} showInquiry={showInquiry} />
    </div>
  ) : (
    <div className={styles.container}>
      {/* Inquiries list */}
      <div className={styles.inquiries_list}>
        <h1>All Inquiries</h1>
        {/* Search Bar */}
        <SearchBar />
        {/* list */}
        {nInquiries === 0 ? (
          <div className={styles.no_inquiries}>
            <p>No Inquiries &#128542;</p>
          </div>
        ) : (
          <div className={styles.list}>
            {/* inquiry button */}
            {[
              {
                sender: "Sairaj Kapdi",
                read: false,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: false,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: true,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: false,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: true,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: true,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: true,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
              {
                sender: "Sairaj Kapdi",
                read: true,
                title: "Want to build a 3bhk house.",
                date: "11 Aug 2021",
              },
            ].map((item) => (
              <div
                className={styles.inquiry_button}
                onClick={handleInquiryClick}
              >
                <strong id={styles.name}>{item.sender}</strong>
                {!item.read ? (
                  <div id={styles.new_message_indicator}></div>
                ) : (
                  ""
                )}
                <p id={styles.title}>{item.title}</p>
                <p id={styles.date}>{item.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
        {!isMobile && !showInquiry ? <Inquiry /> : showInquiry ? <Inquiry /> : ""}
    </div>
  );
}

const Inquiry = ({ showInquiry, setShowInquiry }) => {
  const [nQuestionerImgs, setQuestionerImgs] = useState(69);
  return (
    <div className={styles.inquiry}>
      {/* Title and delete button */}
      <div className={styles.title}>
        <div
          className={styles.back_button}
          onClick={() => setShowInquiry(!showInquiry)}
          title="Back"
        >
          <Icon icon="akar-icons:arrow-back" />
        </div>
        <h2>Want to build a 3bhk house.</h2>
        <div className={styles.delete_button}>
          <Icon icon="carbon:delete" />
        </div>
      </div>
      <div className={styles.inquiry_scroll_container}>
        {/* Inquiry details */}
        <div className={styles.inquiry_details}>
          <div className={styles.sender_details}>
            {/* Senders name */}
            <strong>Sairaj Kapdi</strong>
            <p>saikapdi11@gmail.com</p>
            <p>+919764578865</p>
          </div>
          <div className={styles.datetime}>
            <p>11 Aug 2021 12:00 pm</p>
          </div>
        </div>
        {/* Inquiry content */}
        <div className={styles.inquiry_content}>
          <p id={styles.inquiry_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
            sapien, ut feugiat sed risus condimentum malesuada. Ut eu sagittis
            ut mauris diam, nec hac aliquam. Nibh vestibulum eget dignissim
            ultrices velit nunc etiam. Cursus sed congue lacus diam et elementum
            commodo, dictumst. Arcu justo, eget enim habitasse. Est quam
            fringilla amet in malesuada curabitur. Amet, tempus scelerisque sed
            interdum ut. Lacus
          </p>
          <div className={styles.questionaries_response}>
            <p>Questionaries response</p>
            {nQuestionerImgs === 0 ? (
              <p id={styles.no_photos}>No Photos</p>
            ) : (
              <div className={styles.questionaries_response_imgs}>
                <img src={questioner_img} />
                <img src={questioner_img} />
                <img src={questioner_img} />
              </div>
            )}
          </div>
          <div className={styles.package_name}>
            <p id={styles.title}>Budget Package selected</p>
            <p>Get Thrifty</p>
          </div>
          <div className={styles.buttons}>
            <button id={styles.setup_meeting}>Setup Meeting</button>
            <button id={styles.create_project}>Create Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};
