import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const HistoryTimeline = () => {
  return (
    <div>
      <div className="mt-[-1rem] pb-12 text-center text-2xl  font-bold md:text-3xl xl:text-5xl">
        Our History
      </div>

      <VerticalTimeline lineColor="#000" className="mb-12">
        <VerticalTimelineElement
          contentStyle={{ background: "#e5e7eb" }}
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          iconStyle={{ background: "#f59e0b", color: "#fff" }}
          date="1617"
        >
          <h2>Beca para sa limpieza de sangre or purity of blood</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{ background: "#e5e7eb" }}
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          date="1994"
        >
          <h2>Ugnayan ng mga Tomasinong may Angking Kakayahan (UTAK)</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          contentStyle={{ background: "#e5e7eb" }}
          iconStyle={{ background: "#f59e0b", color: "#fff" }}
          date="1997"
        >
          <h2>UST Scholars Association</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          contentStyle={{ background: "#e5e7eb" }}
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          date="2003"
        >
          <h2>UST Escolares</h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          contentStyle={{ background: "#e5e7eb" }}
          iconStyle={{ background: "#f59e0b", color: "#fff" }}
          date="2004"
        >
          <h2>
            Rev. Fr. Pompeyo De Mesa, O.P. gave the name Becarios de Santo Tomas
          </h2>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentArrowStyle={{ borderRight: "10px solid  #e5e7eb" }}
          contentStyle={{ background: "#e5e7eb", color: "" }}
          iconStyle={{ background: "#3b82f6", color: "#fff" }}
          date="2019"
        >
          <h2>Silver Year of Becarios de Santo Tomas</h2>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default HistoryTimeline;
