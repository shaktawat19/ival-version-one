import * as React from "react";
import * as ReactDOM from "react-dom";
import "./common.css";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import {
  FormDatePicker,
  FormNumericTextBox,
  FormInput,
  FormCheckbox,
  FormMaskedTextBox,
  FormTextArea,
} from "../../components/forminput/form-components";
import {
  termsValidator,
  emailValidator,
  nameValidator,
  phoneValidator,
  guestsValidator,
  nightsValidator,
  arrivalDateValidator,
} from "../../components/forminput/validator";

const Stage2 = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
  onSubmit={handleSubmit}
  render={(formRenderProps) => (
    <FormElement style={{ width: "100%" }}>
      <fieldset className={"k-form-fieldset"}>
        <h1 className="heading">Service charge & Ground rent</h1>
        <div className="field-container">
          <div className="input-wrapper">
            <Field
              id={"fullName"}
              name={"fullName"}
              label={"Full Name"}
              component={FormInput}
              validator={nameValidator}
              style={{ width: "100%" }}
            />
            <div className="overlay">40% greyed area</div>
          </div>
          <div className="input-wrapper">
            <Field
              id={"email"}
              name={"email"}
              label={"Email"}
              component={FormInput}
              validator={emailValidator}
              style={{ width: "100%" }}
            />
            <div className="overlay">40% greyed area</div>
          </div>
        </div>
      </fieldset>
    </FormElement>
  )}
/>

  );
};

export default Stage2;
