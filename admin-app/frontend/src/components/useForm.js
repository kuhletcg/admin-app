import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployee } from "../redux/actions/employee";

const useForm = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    idNumber: "",
    position: "",
    salary: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(formInfo));
  };

  useEffect(() => {
    if (Object.keys(error).length === 0) {
      dispatch(addEmployee(formInfo));
    }
  }, [error]);
  return { formInfo, errors, handleChange, handleSubmit };
};

export default useForm;
