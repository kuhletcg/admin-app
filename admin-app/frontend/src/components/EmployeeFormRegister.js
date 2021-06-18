import React from "react";
import useForm from "./useForm";
import { validFormInfo } from "./validateFormInfo";

const EmployeeForm = () => {
  const { handleChange, formInfo, errors, handleSubmit } =
    useForm(validFormInfo);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
          value={formInfo.name}
          required
        />
        <input
          type="text"
          name="surname"
          onChange={handleChange}
          placeholder=" surname"
          value={formInfo.surname}
          required
        />
        <input
          type="text"
          name="idNumber"
          onChange={handleChange}
          placeholder="ID number"
          value={formInfo.idNumber}
          required
        />
        <input
          type="number"
          name="position"
          onChange={handleChange}
          placeholder="job position"
          value={formInfo.position}
          required
        />
        <input
          type="number"
          name="salary"
          onChange={handleChange}
          placeholder="employee salary"
          value={formInfo.salary}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
