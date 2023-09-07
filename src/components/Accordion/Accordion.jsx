import * as React from "react";
import * as ReactDOM from "react-dom";
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
    title: "1 item",
    content: loremText,
    // icon: plusIcon
    // className: 'accordion-toggle'
    // expanded: true,
  },
  {
    title: "2 item",
    content: loremText,
    // className: 'accordion-toggle'
    // expanded: true,
  },
  {
    title: "3 item",
    content: loremText,
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
      <PanelBar>
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
      <hr />
      <PanelBar children={components} style={customPanelBarStyle} />
    </div>
  );
};

export default Accordion;