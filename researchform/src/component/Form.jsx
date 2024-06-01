import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// import RedError from "./RedError";
// import RedError from './component/RedError';
const form = () => {
  //   const NewValidations = yup.object({
  //     email: yup.string().required("Email is must"),
  // });
  return (
    <div className="w-[90%] m-auto flex justify-start items-start">
      <Formik
        // validationSchema={NewValidations}
        initialValues={{
          email: "",
          name: "",
          unicol: "",
          department: "",
          gender: "",
          useOffice: "",
          proficiencyLevel: "",
          comfortable: "",
          dataAnalysis: "",
          useAccess: "",
          advanceFeature: "",
          formalTraining: "",
          msUseOnDevice: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form
          className="w-full m-auto text-start 
           gp-8 py-6 my-4 "
        >
          <div>
            <h1 className="text-[130%] font-bold text-center text-white">
              Examination Of Digital litracy
            </h1>
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg"
          >
            <label className="text-2px font-bold border-none text-white ">
              Enter Email{" "}
            </label>{" "}
            <br />
            <Field
              type="email"
              name="email"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {/* <RedError name="name"/> */}
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg "
          >
            <label className="text-2px font-bold border-none text-white ">
              Enter FullName{" "}
            </label>{" "}
            <br />
            <Field
              type="text"
              name="name"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
            />
          </div>

          <div
            className="w-[80%] m-auto bg text-start text-white
          gp-8 py-6 border-y-2 rounded-lg"
          >
            <label htmlFor="" className="font-bold">
              University/College
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Government Degree College for boys,Hayatabad"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Government Degree College for boys,Hayatabad
            </label>{" "}
            <br />
            <Field type="radio" name="unicol" value="CECOS"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; CECOS
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="University of peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; University of peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Shaheed Benazir Bhutto University"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Shaheed Benazir Bhutto University
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="City University Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; City University Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Covt.City College Gulbahar Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Covt.City College Gulbahar Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="City District Women's Degree College"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; City District Women's Degree College
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Abasyn University Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Abasyn University Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Sarhad University Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Sarhad University Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Institude of Management Sciences 'IMSciences'"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Institude of Management Sciences "IMSciences"
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="National University of Modern Languages 'NUML' Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; National University of Modern Languages "NUML" Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Iqra University Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Iqra University Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Govt Frontier College / University For Women Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Govt Frontier College / University For Women Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Islamia College University Peshawar"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Islamia College University Peshawar
            </label>
            <br />
            <Field type="radio" name="unicol" value="GDC Lower Chitral"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; GDC Lower Chitral
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="University Of Malakand"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; University Of Malakand
            </label>
            <br />
            <Field type="radio" name="unicol" value="KMU Mardan"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; KMU Mardan
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Hazara University Mansehra"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Hazara University Mansehra
            </label>
            <br />
            <Field type="radio" name="unicol" value="KMU Peshawar"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; KMU Peshawar
            </label>
            <br />
            <Field
              type="radio"
              name="unicol"
              value="Peshawar Medical College"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Peshawar Medical College
            </label>
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg"
          >
            <label className="text-2px font-bold border-none text-white ">
              Departement{" "}
            </label>{" "}
            <br />
            <Field
              type="text"
              name="department"
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm
               focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm font-bold"
            />
          </div>
          <div
            className="w-[80%] m-auto bg text-start text-white
          gp-8 py-6 border-y-2 rounded-lg"
          >
            <label htmlFor="" className="font-bold">
              Gender
            </label>{" "}
            <br />
            <Field type="radio" name="gender" value="Male"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Male
            </label>{" "}
            <br />
            <Field type="radio" name="gender" value="Female"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Female
            </label>{" "}
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Have you used Microsoft Office application before?
            </label>{" "}
            <br />
            <Field type="radio" name="useOffice" value="Yes"></Field>
            <label htmlFor="" className="text-4px text-green-400 font-bold">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="useOffice" value="No"></Field>
            <label htmlFor="" className="text-4px text-red-400 font-bold">
              &nbsp; No
            </label>{" "}
          </div>
          <div
            className="w-[80%] m-auto bg text-start text-white
          gp-8 py-6 border-y-2 rounded-lg"
          >
            <label htmlFor="" className="font-bold">
            What is your proficiency level in using Microsoft PowerPoint for
              creating presentations?
            </label>{" "}
            <br /><br/>
            <label htmlFor="" className="text-red-500 font-bold">
              Beginner
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="proficiencyLevel"
              value="beginner"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 1
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="proficiencyLevel"
              value="beginner2"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 2
            </label>
            <br />
            <Field
              type="radio"
              name="proficiencyLevel"
              value="midlevel"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 3
            </label>
            <br />
            <Field type="radio" name="proficiencyLevel" value="expert2"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 4
            </label>
            <br />
            <Field type="radio" name="proficiencyLevel" value="expert"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 5
            </label>
            <br />
            <label htmlFor="" className="text-green-500 font-bold">
              Expert
            </label>
          </div>
          
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
            On a scale of 1 to 5, how comfortable are you with using Microsoft
              Word for creating and editing documents?
            </label>{" "}
            <br /><br/>
            <label htmlFor="" className="text-red-500 font-bold">
            Not comfortable at all
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="comfortable"
              value="notComfortabe"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 1
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="comfortable"
              value="notComfortabe2"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 2
            </label>
            <br />
            <Field
              type="radio"
              name="comfortable"
              value="midlevel"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 3
            </label>
            <br />
            <Field type="radio" name="comfortable" value="comfortable2"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 4
            </label>
            <br />
            <Field type="radio" name="comfortable" value="comfortable"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; 5
            </label>
            <br />
            <label htmlFor="" className="text-green-500 font-bold">
            Extremely comfortable
            </label>
          </div>
          
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
            How often do you use Microsoft Excel for data analysis and
              calculations?
            </label>{" "}
            <br />
            
            <Field
              type="radio"
              name="dataAnalysis"
              value="daily"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="dataAnalysis"
              value="weekly"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Weekly
            </label>
            <br />
            <Field
              type="radio"
              name="dataAnalysis"
              value="monthly"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Monthly
            </label>
            <br />
            <Field type="radio" name="dataAnalysis" value="never"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Never
            </label>
            <br />
            
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Have you used Microsoft Access for database management or creating
              simple databases?
            </label>{" "}
            <br />
            <Field type="radio" name="useAccess" value="Yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="useAccess" value="No"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Do you know how to use the advanced features of Microsoft Office
              applications such as macros, pivot tables, or mail merge?
            </label>{" "}
            <br />
            <Field type="radio" name="advanceFeature" value="Yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="advanceFeature" value="No"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Do you know how to use the advanced features of Microsoft Office
              applications such as macros, pivot tables, or mail merge?
            </label>{" "}
            <br />
            <Field type="radio" name="formalTraining" value="Yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="formalTraining" value="No"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>
          
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
            What is your proficiency level in using Microsoft PowerPoint for
              creating presentations?
            </label>{" "}
            <br />
            
            <Field
              type="radio"
              name="msUseOnDevice"
              value="daily"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="msUseOnDevice"
              value="weekly"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Once a Week
            </label>
            <br />
            <Field
              type="radio"
              name="msUseOnDevice"
              value="Occasionally"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Occasionally 'few times a month'
            </label>
            <br />
            <Field type="radio" name="msUseOnDevice" value="never"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Never
            </label>
            <br />
            
          </div>
          <br />
          <br />
          <button type="submit" className="text-white bg-black">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default form;
