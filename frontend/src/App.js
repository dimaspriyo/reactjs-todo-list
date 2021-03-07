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
import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 1000,
});

export default function App() {
  const today = new Date();
  const [value, onChange] = useState(new Date());
  const [toDo, setToDo] = useState([]);
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    timestamp: new Date().getTime(),
  });

  useEffect(() => {
    httpClient.get().then((res) => {
      var data = res.data;
      setToDo(data);
    });
  }, []);

  const onChangeFormInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const onDateChange = (e) => {
    const datetime = new Date(formInput.timestamp);
    const stringDateTime =
      e.format("DD-MM-YYYY") +
      " " +
      datetime.getHours() +
      ":" +
      datetime.getMinutes();

    const newDateTime = moment(stringDateTime, "DD-MM-YYYY HH:mm").format("x");

    setFormInput({
      ...formInput,
      timestamp: newDateTime,
    });
  };

  const onTimeChange = (e) => {
    const datetime = moment(formInput.timestamp, "x");

    const stringDateTime =
      datetime.format("DD-MM-YYYY") + " " + e.format("HH:mm");

    const newDateTime = moment(stringDateTime, "DD-MM-YYYY HH:mm").format("x");
    setFormInput({
      ...formInput,
      timestamp: newDateTime,
    });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    await httpClient.post("", formInput).then((res) => {
      Swal.fire("Success", "To Do Inserted", "success");
    });

    await httpClient.get().then((res) => {
      var data = res.data;
      setToDo(data);
    });
  };

  const onTriggerTimer = (id, title, message) => {
    $("#" + id).remove();
    Swal.fire(title, message, "info");
  };

  return (
    <div className="container m-auto h-screen">
      <div className="md:grid md:grid-cols-3 md:gap-6 ">
        <div className="mt-5 md:mt-0 md:col-span-2 flex items-center">
          <form action="#" method="POST" onSubmit={onSubmitForm}>
            <p class="text-2xl">ToDo Form</p>
            <div className="shadow">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="To Do"
                        onChange={onChangeFormInput}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <div className="mt-1">
                    <textarea
                      name="message"
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
                        initialValue={formInput.timestamp}
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
                        initialValue={formInput.timestamp}
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

            {toDo &&
              toDo.map((v, i) => {
                return (
                  <div
                    className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mt-5"
                    id={"todo" + i}
                  >
                    <div id="header" className="flex items-center mb-4">
                      <Countdown
                        date={v.timestamp}
                        onComplete={() =>
                          onTriggerTimer("todo" + i, v.title, v.message)
                        }
                      />

                      <div id="header-text" className="leading-5 ml-6 sm">
                        <h5 id="job" className="font-semibold text-blue-600">
                          {v.title}
                        </h5>
                      </div>
                    </div>
                    <div id="quote">
                      <q className="italic text-gray-600">{v.message}</q>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
