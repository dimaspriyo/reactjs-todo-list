import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import DateTimePicker from "react-datetime-picker";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import "./App.css";
import moment from "moment";
import Countdown from "react-countdown";
import Swal from "sweetalert2";
import $ from "jquery";
import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 1000,
});

export default function App() {
  const today = new Date();
  const [value, onChange] = useState(new Date());
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    time: new Date().getTime(),
  });


  useEffect(()=>{

    httpClient.get().then(res => {
      console.log(res);
    })

  },[])


  const onChangeFormInput = (e) => {
    setFormInput({
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (e) => {
    const datetime = new Date(formInput.time);
    const stringDateTime =
      e.format("DD-MM-YYYY") +
      " " +
      datetime.getHours() +
      ":" +
      datetime.getMinutes();
    const newDateTime = new Date(stringDateTime).getTime();
    setFormInput({
      ...formInput,
      time: newDateTime,
    });
  };

  const onTimeChange = (e) => {
    const datetime = new Date(formInput.time);
    const stringDateTime = "03-02-2021 15:25";
    const newDateTime = new Date(stringDateTime).getTime();
    setFormInput({
      ...formInput,
      time: newDateTime,
    });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(formInput);
  };

  const onTriggerTimer = (id, title, message) => {
    $("#div1").remove();
    Swal.fire(title, message, "info");
  };

  return (
    <div className="container m-auto h-screen">
      <div className="md:grid md:grid-cols-3 md:gap-6 ">
        <div className="mt-5 md:mt-0 md:col-span-2 flex items-center">
          <form action="#" method="POST" onSubmit={onSubmitForm}>
            <div className="shadow">
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
                        viewMode="days"
                        timeFormat={false}
                        dateFormat="DD-MM-YYYY"
                        onChange={onDateChange}
                        initialValue={formInput.time}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Time
                    </label>
                    <div className="mt-1 mb-32">
                      <Datetime
                        viewMode="time"
                        dateFormat={false}
                        onChange={onTimeChange}
                        initialValue={formInput.time}
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
          <div className="container overflow-y-scroll h-screen">
            {/* Cards */}
            <div
              class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mt-5"
              id="div1"
            >
              <div id="header" class="flex items-center mb-4">
                <Countdown
                  date={Date.now() + 3000}
                  onComplete={()=> onTriggerTimer(
                    "div1",
                    "Titleeeee",
                    "Messageeeeee"
                  )}

                />

                <div id="header-text" class="leading-5 ml-6 sm">
                  <h4 id="name" class="text-xl font-semibold">
                    John Doe
                  </h4>
                  <h5 id="job" class="font-semibold text-blue-600">
                    Designer
                  </h5>
                </div>
              </div>
              <div id="quote">
                <q class="italic text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q>
              </div>
            </div>

            <div
              class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mt-5"
              id="div2"
            >
              <div id="header" class="flex items-center mb-4">
                <Countdown
                  date={Date.now() + 3000}
                />

                <div id="header-text" class="leading-5 ml-6 sm">
                  <h4 id="name" class="text-xl font-semibold">
                    222222222222
                  </h4>
                  <h5 id="job" class="font-semibold text-blue-600">
                    Designer
                  </h5>
                </div>
              </div>
              <div id="quote">
                <q class="italic text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
