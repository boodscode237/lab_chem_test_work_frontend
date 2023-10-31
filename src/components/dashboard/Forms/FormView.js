import React, { useState } from "react";
import FormNanoparticles from "./FormNanoparticles";
import FormMaterial from "./FormMaterial";
import FormNova from "./FormNova";
import FormSenthesis from "./FormSenthesis";
import ArticleForm from "./ArticleForm";

const formComponents = [
    FormNanoparticles,
    FormMaterial,
    FormNova,
    FormSenthesis,
    ArticleForm,
];
const FormView = () => {

    const [activeForm, setActiveForm] = useState(0);

    const initialValues = {
        name: "",
        lastname: "",
        password: "",
        confirmPassword: "",
        username: "",
        city: "1",
        address: "",
        zip: "",
        terms: "",
    };
    const [formValues, setFormValues] = useState(initialValues);

    // const handlePrev = () => {
    //     setActiveForm((activeForm + formComponents.length - 1) % formComponents.length);
    // };

    // const handleNext = () => {
    //     setActiveForm((activeForm + 1) % formComponents.length);
    // };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({ ...formValues, [name]: type === "checkbox" ? checked : value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setTimeout(() => {
    //         console.log("Form values", formValues);
    //     }, 2000);
    // };
    const formList = ["FormNanoparticles", "FormMaterial", "FormNova", "FormSenthesis", "ArticleForm"];

    const formLength = formList.length;

    const [page, setPage] = useState(0);

    const handlePrev = () => {
        setPage(page === 0 ? formLength - 1 : page - 1);
    };
    const handleNext = () => {
        setPage(page === formLength - 1 ? 0 : page + 1);
    };

    const [values, setValues] = useState(initialValues);
    const handleForms = () => {
        switch (page) {
            case 0: {
                return (
                    <div>
                        <FormNanoparticles formValues={values} onChange={onChange}></FormNanoparticles>
                    </div>
                );
            }
            case 1: {
                return (
                    <FormMaterial
                        formValues={values}
                        onChange={onChange}
                    ></FormMaterial>
                );
            }
            case 2: {
                return <FormNova formValues={values} onChange={onChange}></FormNova>;
            }
            case 3: {
                return <FormSenthesis formValues={values} onChange={onChange}></FormSenthesis>;
            }
            case 4: {
                return <ArticleForm formValues={values} onChange={onChange}></ArticleForm>;
            }
            default:
                return null;
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await setTimeout(() => {
            console.log("form", values);
        }, 2000);
        return response;
    };

    const setForm = (e) => {
        const name = e.target.innerText;
        switch (name) {
            case "Nano-particles": {
                return setPage(0);
            }
            case "Material": {
                return setPage(1);
            }
            case "Nova": {
                return setPage(2);
            }
            case "Synthesis": {
                return setPage(3);
            }
            case "Article": {
                return setPage(4);
            }
            default:
                setPage(0);
        }
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({ ...values, [name]: type === "checkbox" ? checked : value });
    };

    return (
        <div className="grid gap-4 place-content-center items-center h-screen place-items-center ">
            <ul className="flex justify-between w-full">
                <li
                    onClick={setForm}
                    className={
                        page === 0 ? "bg-blue-300 w-2/6 rounded-lg  " : "bg: transparent"
                    }
                >
                    <div className="flex items-center ">
                        <span
                            className={
                                page === 0
                                    ? "ml-2 text-white font-medium"
                                    : "ml-2 text-blue-300 cursor-pointer"
                            }
                        >
              Nano-particles
            </span>
                    </div>
                </li>
                <li
                    onClick={setForm}
                    className={
                        page === 1 ? "bg-blue-300  w-2/6 rounded-lg" : "bg: transparent "
                    }
                >
                    <div className="flex items-center">
                        <span
                            className={
                                page === 1
                                    ? "ml-2 text-white font-medium"
                                    : "ml-2 text-blue-300 cursor-pointer"
                            }
                        >
              Material{" "}
            </span>
                    </div>
                </li>
                <li
                    onClick={setForm}
                    className={
                        page === 2 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
                    }
                >
                    <div className="flex items-center">
                        <span
                            className={
                                page === 2
                                    ? "ml-2 text-white font-medium"
                                    : "ml-2 text-blue-300 cursor-pointer"
                            }
                        >
              {" "}
                            Nova{" "}
            </span>
                    </div>
                </li>
                <li
                    onClick={setForm}
                    className={
                        page === 3 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
                    }
                >
                    <div className="flex items-center">
                        <span
                            className={
                                page === 3
                                    ? "ml-2 text-white font-medium"
                                    : "ml-2 text-blue-300 cursor-pointer"
                            }
                        >
              {" "}
                            Synthesis{" "}
            </span>
                    </div>
                </li>

                <li
                    onClick={setForm}
                    className={
                        page === 4 ? "bg-blue-300 w-2/6 rounded-lg" : "bg: transparent"
                    }
                >
                    <div className="flex items-center">
                        <span
                            className={
                                page === 4
                                    ? "ml-2 text-white font-medium"
                                    : "ml-2 text-blue-300 cursor-pointer"
                            }
                        >
              {" "}
                            Article{" "}
            </span>
                    </div>
                </li>
            </ul>
            <div className="flex-1">{handleForms()}</div>
            <div className="grid grid-cols-2 gap-4 place-content-center items-center">
                <button
                    onClick={handlePrev}
                    className="bg-blue-200  hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 disabled:bg-gray-400 "
                    disabled={page === 0}
                >
                    Prev
                </button>
                {page === 4 ? (
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Submit
                        </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="bg-blue-200 hover:bg-blue-300 rounded-md text-gray-800 font-bold py-2 px-4 "
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default FormView;