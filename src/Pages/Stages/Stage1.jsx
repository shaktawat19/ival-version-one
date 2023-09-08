import * as React from "react";
import * as ReactDOM from "react-dom";
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
import "./common.css";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { DatePicker } from "@progress/kendo-react-dateinputs";

// Define the data for your dropdown options
const lastNameOptions = ["Option 1", "Option 2", "Option 3"];

// date picker options
const datepickerOptions = {
  format: "dd/MM/yyyy", // Customize the date format as needed
};

const Stage1 = () => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
        <FormElement
          style={{
            width: "100%",
          }}
        >
          <fieldset className={"k-form-fieldset"}>
            <h1 className="heading">Scheme Details</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Field
                id={"Land Ownership Status"}
                name={"Land Ownership Status"}
                label={"Land Ownership Status"}
                component={FormInput}
                // validator={nameValidator}
                style={{ width: "30rem", lineHeight: 2 }}
              />
              <Field
                id={"Land Election VAT"}
                name={"Land Election VAT"}
                label={"Land Election VAT"}
                component={FormInput}
                // validator={nameValidator}
                style={{ width: "30rem", lineHeight: 2 }}
              />
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"email"}
                component={FormInput}
                // validator={emailValidator}
                style={{ width: "30rem", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
              }}
            >
              <label className="">Last name</label>
              <DropDownList
                name="lastName"
                data={lastNameOptions}
                defaultValue={lastNameOptions[0]} // Set the default selected value
                className="custom-dropdown"
                style={{ width: "30rem", lineHeight: 2 }}
              />
            </div>
            <h1 className="heading">Land Ownership</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <label className="">Last name</label>
                <DropDownList
                  name="lastName"
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "30rem", lineHeight: 2 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                }}
              >
                <label className="">Last name</label>
                <DropDownList
                  name="lastName"
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "30rem", lineHeight: 2 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2rem",
                  width: "30rem",
                }}
              >
                <label className="">Date of Birth</label>
                <DatePicker
                  name="dob"
                  {...datepickerOptions}
                  defaultValue={new Date()} // Set the default selected date
                  className="custom-datepicker" // Add a custom class to the DatePicker
                  style={{ width: "30rem", lineHeight: 2 }}
                />
              </div>
            </div>

            <h1 className="heading">Planning Position</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "1.5rem",
                }}
              >
                <label className="">Last name</label>
                <DropDownList
                  name="lastName"
                  data={lastNameOptions}
                  defaultValue={lastNameOptions[0]} // Set the default selected value
                  className="custom-dropdown"
                  style={{ width: "30rem", lineHeight: 2 }}
                />
              </div>

              <Field
                id={"phoneNumber"}
                name={"phoneNumber"}
                label={"Phone Number"}
                mask={"(999) 000-00-00-00"}
                component={FormMaskedTextBox}
                validator={phoneValidator}
                style={{ width: "30rem", lineHeight: 2 }}
              />
              <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"email"}
                component={FormInput}
                validator={emailValidator}
                style={{ width: "30rem", lineHeight: 2 }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                width: "30rem",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "30rem", lineHeight: 2 }}
              />
            </div>


            <h1 className="heading">Programme</h1>
            <div
              className=""
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                width: "20rem",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "20rem", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                width: "20rem",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "20rem", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                width: "20rem",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "20rem", lineHeight: 2 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2rem",
                width: "20rem",
              }}
            >
              <label className="">Date of Birth</label>
              <DatePicker
                name="dob"
                {...datepickerOptions}
                defaultValue={new Date()} // Set the default selected date
                className="custom-datepicker" // Add a custom class to the DatePicker
                style={{ width: "20rem", lineHeight: 2 }}
              />
            </div>
        
            </div>

            <Field
                id={"email"}
                name={"email"}
                label={"Email"}
                type={"email"}
                component={FormInput}
                validator={emailValidator}
                style={{ width: "20rem", lineHeight: 2 }}
              />
            <span className={"k-form-separator"} />
            <Field
              id={"terms"}
              name={"terms"}
              label={"I agree with terms and conditions"}
              component={FormCheckbox}
              validator={termsValidator}
            />
            <div className="k-form-buttons">
              <Button
                themeColor={"primary"}
                type={"submit"}
                disabled={!formRenderProps.allowSubmit}
              >
                Send Reservation Request
              </Button>
              <Button onClick={formRenderProps.onFormReset}>Clear</Button>
            </div>
          </fieldset>
        </FormElement>
      )}
    />
  );
};

export default Stage1;
