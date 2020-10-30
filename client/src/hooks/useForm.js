// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (initialValue) => {
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [values, setValues] = useState(initialValue);

	const handleChanges = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setValues(initialValue);
		setShowSuccessMessage(true);
	}

	return [showSuccessMessage, values, handleChanges, handleFormSubmit];
};

export default useForm;