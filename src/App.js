import logo from "./logo.svg";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./App.css";
import moment from "moment";

export default function App() {
  const [value, onChange] = useState(new Date());
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    time: null,
  });

  const onChangeFormInput = (e) => {
    setFormInput({
      [e.target.name]: e.target.value,
    });
  };
  console.log(formInput);
  return (
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-3 md:gap-6 flex items-center">
        <div className="mt-5 md:mt-0 md:col-span-2 h-6">
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Task Name
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="task_name"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="To Do"
                        onChange={onChangeFormInput}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="about"
                      rows="3"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="....."
                      onChange={onChangeFormInput}
                    ></textarea>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className="mt-1 mb-32">
                      <Datetime
                        id="datepicker"
                        viewMode="days"
                        timeFormat={false}
                        dateFormat="DD-MM-YYYY"
                        onChange={(e) => console.log(e.format("DD-MM-YYYY"))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className="mt-1 mb-32">
                      <Datetime
                        id="datepicker"
                        viewMode="time"
                        dateFormat={false}
                        // dateFormat="DD-MM-YYYY"
                        onChange={(e) => console.log(e.format("HH:MM"))}
                      />
                    </div>
                  </div>
                  <div className="px-4 py-3 text-right sm:px-6 pt-5">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-12 flex items-center"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="md:col-span-1 ">
          Table Right Here
        </div>
      </div>
    </div>
  );
}
