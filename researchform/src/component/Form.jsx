// import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
// import RedError from "./RedError";
// import RedError from './component/RedError';

const Form1 = () => {
  //   const NewValidations = yup.object({
  //     email: yup.string().required("Email is must"),
  // });
  //   const [selectedOption, setSelectedOption] = useState('');
  // const handleOptionChange = (event) => {
  //   setSelectedOption(event.target.value);
  //   console.log(event);
  //   console.log(target);
  //   // console.log(value);

  // }
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
          chellenges: "",
          digitalLiteracySkills: "",
          WorkshopsImproveSkills: "",
          comfortWithBasicFormatting: "",
          createDatabase: "",
          digitalToolIncludingMsOffice: "",
          exploredAdvancedFeatures: "",
          MSOfficePositiveImpacted: "",
          seekOutOnlineResources: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form
          className="w-full m-auto text-start 
           gp-8 py-6 my-4 "
        >
          {/* Dive==1 */}
          <div>
            <h1 className="text-[130%] font-bold text-center text-white">
              Examination Of Digital litracy
            </h1>
          </div>

          {/* Dive==2 */}
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

          {/* Dive==3 */}
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

          {/* Dive==4 */}
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
              // checked={selectedOption === 'value'}
              // onChange={handleOptionChange}
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

          {/* Dive==5 */}
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

          {/* Dive==6 */}
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

          {/* Dive==7 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Have you used Microsoft Office application before?
            </label>{" "}
            <br />
            <Field type="radio" name="useOffice" value="Yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="useOffice" value="No"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>

          {/* Dive==8 */}
          <div
            className="w-[80%] m-auto bg text-start text-white
          gp-8 py-6 border-y-2 rounded-lg"
          >
            <label htmlFor="" className="font-bold">
              What is your proficiency level in using Microsoft PowerPoint for
              creating presentations?
            </label>{" "}
            <br />
            <br />
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

          {/* Dive==9 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              On a scale of 1 to 5, how comfortable are you with using Microsoft
              Word for creating and editing documents?
            </label>{" "}
            <br />
            <br />
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
            <Field type="radio" name="comfortable" value="midlevel"></Field>
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

          {/* Dive==10 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              How often do you use Microsoft Excel for data analysis and
              calculations?
            </label>{" "}
            <br />
            <Field type="radio" name="dataAnalysis" value="daily"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field type="radio" name="dataAnalysis" value="weekly"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Weekly
            </label>
            <br />
            <Field type="radio" name="dataAnalysis" value="monthly"></Field>
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

          {/* Dive==11 */}
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

          {/* Dive==12*/}
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

          {/* Dive==13 */}
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

          {/* Dive==14 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              What is your proficiency level in using Microsoft PowerPoint for
              creating presentations?
            </label>{" "}
            <br />
            <Field type="radio" name="msUseOnDevice" value="daily"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field type="radio" name="msUseOnDevice" value="weekly"></Field>
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

          {/* Dive==15 */}
          <div
            className="w-[80%] m-auto bg text-start text-white
          gp-8 py-6 border-y-2 rounded-lg"
          >
            <label htmlFor="" className="font-bold">
              Are you aware of alternative software or platforms that serve
              similar purposes as Microsoft Office applications?
            </label>{" "}
            <br />
            <Field type="radio" name="awarSoftware" value="yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="awarSoftware" value="no"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>

          {/* Dive==16 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              What challenges do you face when using Microsoft Office
              applications, if any?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="chellenges"
              value="dificultLearning"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Difficulty learning new features/tools
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="chellenges"
              value="Compatibilityissues"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Compatibility issues with other software
            </label>
            <br />
            <Field
              type="radio"
              name="chellenges"
              value="PerformanceIssue"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Performance/speed issues
            </label>
            <br />
            <Field
              type="radio"
              name="chellenges"
              value="UserInterfaceChellenges"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; User interface/navigation challenges
            </label>
            <br />
            <Field
              type="radio"
              name="chellenges"
              value="LackOfAdvanceSkills"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Lack of advanced skills/training
            </label>
            <br />
          </div>

          {/* Dive==17 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              How important do you think digital literacy skills, including
              proficiency in Microsoft Office, are for academic and professional
              success?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="digitalLiteracySkills"
              value="ExtremelyImportant"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Extremely important
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="digitalLiteracySkills"
              value="VeryImportant"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Very important
            </label>
            <br />
            <Field
              type="radio"
              name="digitalLiteracySkills"
              value="SlightlyImportant"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Slightly important
            </label>
            <br />
            <Field
              type="radio"
              name="digitalLiteracySkills"
              value="NotImportant"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Not important
            </label>
            <br />
          </div>

          {/* Dive==18 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Would you be interested in attending workshops or training
              sessions to improve your skills in using Microsoft Office
              applications?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="WorkshopsImproveSkills"
              value="yes"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="WorkshopsImproveSkills"
              value="no"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>

          {/* Dive==19 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Are you comfortable with basic formatting tasks in Microsoft Word
              (e.g., bold, italics, alignment)?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="comfortWithBasicFormatting"
              value="yes"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="comfortWithBasicFormatting"
              value="no"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>

          {/* Dive==20 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Have you used Microsoft Access to create a basic database or
              manage information?
            </label>{" "}
            <br />
            <Field type="radio" name="createDatabase" value="yes"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field type="radio" name="createDatabase" value="no"></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>

          {/* Dive==21 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              How often do you leverage digital tools, including Microsoft
              Office, to conduct research or academic projects?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="digitalToolIncludingMsOffice"
              value="daily"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="digitalToolIncludingMsOffice"
              value="weekly"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Weekly
            </label>
            <br />
            <Field
              type="radio"
              name="digitalToolIncludingMsOffice"
              value="Occasionally"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Occasionally 'few times a month'
            </label>
            <br />
            <Field
              type="radio"
              name="digitalToolIncludingMsOffice"
              value="never"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Never
            </label>
            <br />
          </div>

          {/* Dive==22 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Have you explored advanced features within Microsoft Office
              applications, such as data visualization tools in Excel or
              multimedia integration in PowerPoint, to enhance your research
              presentations?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="exploredAdvancedFeatures"
              value="YesIFrequentlyUse"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes, I frequently use advanced features in Microsoft Office
              applications.
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="exploredAdvancedFeatures"
              value="YesIhaveUsed"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes, I have used some advanced features occasionally.
            </label>
            <br />
            <Field
              type="radio"
              name="exploredAdvancedFeatures"
              value="NoIhaveUsed"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No, I have not explored advanced features in Microsoft
              Office applications.
            </label>
            <br />
          </div>

          {/* Dive==23 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              In your experience, how has proficiency in Microsoft Office
              positively impacted your ability to collaborate with peers on
              digital platforms like Teams or OneDrive for group projects?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="MSOfficePositiveImpacted"
              value="daily"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Daily
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="MSOfficePositiveImpacted"
              value="weekly"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Weekly
            </label>
            <br />
            <Field
              type="radio"
              name="MSOfficePositiveImpacted"
              value="Occasionally"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Occasionally 'few times a month'
            </label>
            <br />
            <Field
              type="radio"
              name="MSOfficePositiveImpacted"
              value="never"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Never
            </label>
            <br />
          </div>

          {/* Dive==24 */}
          <div
            className="w-[80%] m-auto text-start 
           gp-8 py-6 my-4 border-y-2 rounded-lg text-white"
          >
            <label htmlFor="" className="font-bold">
              Do you actively seek out online resources or tutorials to expand
              your digital skills related to Microsoft Office and other
              technology tools used for academic purposes?
            </label>{" "}
            <br />
            <Field
              type="radio"
              name=" seekOutOnlineResources"
              value="yes"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; Yes
            </label>{" "}
            <br />
            <Field
              type="radio"
              name="seekOutOnlineResources"
              value="no"
            ></Field>
            <label htmlFor="" className="text-4px">
              &nbsp; No
            </label>{" "}
          </div>
          <br />
          <br />
          <div
            className="flex items-center justify-center"
          >
            <button
              type="submit"
              className="bg-orange-400 px-8 py-3 rounded-full 
    text-[17px] font-semibold hover:bg-black hover:text-white "
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Form1;
