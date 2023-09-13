import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import {
  PanelBar,
  PanelBarItem,
  PanelBarUtils,
} from "@progress/kendo-react-layout";
import { plusIcon, minusIcon } from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-react-common";

import "./styles.css";

const loremText =
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

const items = [
  {
    title: "HOW MUCH DOES THIS SOFTWARE COST TO USE ?",
    content: "iVal is completely free to use. When you agree a deal with a partner, we receive a fee and/or commission from them." ,
    // icon: plusIcon
    // className: 'accordion-toggle'
    // expanded: true,
  },
  {
    title: "HOW ACCURATE ARE THE VALUATIONS?",
    content: "The desktop valuation provided is purely indicative. Our algorithm analyses all of the parameters used by our partners to derive a desktop value guide. It's the users responsibility to ensure that the information provided is accurate and complete. If it isn't, the valuation guide may not be valid or accurate and it may be subject to change",
    // className: 'accordion-toggle'
    // expanded: true,
  },
  {
    title: "CAN I INTEGRATE THIS INTO OUR INTERNAL SYSTEMS?",
    content: "Yes. The software has been developed to allow any user to integrate and/or download the data into their internal systems via API. Please contact the technical team if you wish to discuss a more bespoke approach.",
    // className:""
    // expanded: true,
  },
  {
    title: "WHO CAN USE THIS SOFTWARE?",
    content: "This software is available to any Land owner, Land promoter, Developer, Contractor or House Builder. All users are subject to checks and authorisation by the company.",
    // className:""
    // expanded: true,
  },
  {
    title: "WHO CAN USE THIS SOFTWARE?",
    content: "Use of the Site is subject to all of the Terms set out in the pdf below - if you do not agree to the terms, please stop using the Site immediately. It's also your sole responsibility to ensure that our offering matches your requirements. If you use our Site, you will also be subject to the partner's terms and policies (which will be different from ours) and you should read those carefully. We may amend these terms and conditions at any time and without notice by changing this page, so you should check these Terms of Use each time you use the Site. Link to T&C’s - PDF ",
    // className:""
    // expanded: true,
  },
];

// svg plus
export const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ color: "red" }}
  >
    <path
      fillRule="evenodd"
      d="M8 2a.5.5 0 0 1 .5.5v5.793l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 8.293V2.5a.5.5 0 0 1 .5-.5z"
    />
  </svg>
);

const Accordion = () => {
  let components = PanelBarUtils.mapItemsToComponents(items);
  const customPanelBarStyle = {};

  return (
    <div className="panelbar-wrapper">
      <h1>Frequently Asked Questions</h1>
      {/* <PanelBar>
        <PanelBarItem
          icon={PlusIcon}
          iconClass="panel-bar-icon"
          title="First"
          className="panelBar-Item"
        >
          <PanelBarItem title={loremText} />
          <SvgIcon icon={plusIcon} size="medium" />
        </PanelBarItem>
        <PanelBarItem
          title="Second"
          expandIcon={plusIcon}
          collapseIcon={minusIcon}
        >
          <PanelBarItem
            title={loremText}
            expandIcon={plusIcon}
            collapseIcon={minusIcon}
          />
        </PanelBarItem>
        <PanelBarItem title="Third" className="">
          <PanelBarItem title={loremText} className="" />
        </PanelBarItem>
      </PanelBar>
      <hr /> */}
      <PanelBar children={components} style={customPanelBarStyle} />
    </div>
  );
};

export default Accordion;