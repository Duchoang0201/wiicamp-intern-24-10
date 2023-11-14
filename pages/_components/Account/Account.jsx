"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import * as yup from "yup";

import AppButton from "@/components/AppButton/AppButton";

import AccountNavi from "./AccountNavi";
import Draw from "./Draw";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  userName: yup
    .string()
    .required("Email or Phone Number is required")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$|^(\+\d{1,3}[- ]?)?\d{10}$/,
      "Invalid Email or Phone Number",
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Account() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [open, setOpen] = useState(false);
  const onSubmit = (data) => console.log(data);

  return (
    <div className="relative">
      {" "}
      <div className="md:flex md:flex-row md:justify-between ">
        <div className="hidden md:flex">
          <AccountNavi />
        </div>
        <div className="max-w-[870px] max-h-[630px] h-full w-full shadow-md px-[80px] py-[40px]">
          <span className="text-Secondary-2 text-[20px] font-medium">
            Edit Your Profile
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col pt-[14px]"
          >
            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
              <div className="relative bg-black max-w-[330px] w-full mb-6 ">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <label htmlFor="firstName" className="block text-base  ">
                      <p className="text-base font-normal mb-2"> First Name</p>

                      <input
                        {...field}
                        type="text"
                        id="firstName"
                        className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                        placeholder="Rimel"
                      />
                    </label>
                  )}
                />
                {errors.firstName && (
                  <p className="text-error-600">{errors.firstName.message}</p>
                )}
              </div>
              <div className="relative bg-black max-w-[330px] w-full mb-6 ">
                <Controller
                  name="LastName"
                  control={control}
                  render={({ field }) => (
                    <label htmlFor="lastName" className="block text-base  ">
                      <p className="text-base font-normal mb-2"> Last Name</p>

                      <input
                        {...field}
                        type="text"
                        id="lastName"
                        className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full  rounded-sm "
                        placeholder="Rimel"
                      />
                    </label>
                  )}
                />
                {errors.lastName && (
                  <p className="text-error-600">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
              <div className="relative bg-black  max-w-[330px] w-full ">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <label htmlFor="email" className="block mb-2 ">
                      <p className="text-base font-normal mb-2">Email</p>

                      <input
                        {...field}
                        type="email"
                        id="email"
                        className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                        placeholder="rimel1111@gmail.com"
                      />
                    </label>
                  )}
                />
                {errors.email && (
                  <p className="text-error-600">{errors.email.message}</p>
                )}
              </div>
              <div className="relative bg-black  max-w-[330px] w-full ">
                <Controller
                  name="address"
                  control={control}
                  render={({ field }) => (
                    <label htmlFor="address" className="block mb-2 text-base  ">
                      <p className="text-base font-normal mb-2">Address</p>

                      <input
                        {...field}
                        type="text"
                        id="address"
                        className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                        placeholder="Kingston, 5236, United State"
                      />
                    </label>
                  )}
                />
                {errors.address && (
                  <p className="text-error-600">{errors.address.message}</p>
                )}
              </div>
            </div>
            <div className="flex flex-col mb-[40px]">
              <Controller
                name="currentPassword"
                control={control}
                render={({ field }) => (
                  <label htmlFor="currentPassword" className="gap-y-2 mb-4 ">
                    <p className="text-base font-normal mb-2">
                      Password Change
                    </p>

                    <input
                      {...field}
                      type="password"
                      id="currentPassword"
                      className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                      placeholder="**************"
                    />
                  </label>
                )}
              />
              {errors.currentPassword && (
                <p className="text-error-600">
                  {errors.currentPassword.message}
                </p>
              )}
              <Controller
                name="newPassword"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    id="newPassword"
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm  mb-4"
                    placeholder="**************"
                  />
                )}
              />
              {errors.newPassword && (
                <p className="text-error-600">{errors.newPassword.message}</p>
              )}
              <Controller
                name="confirmNewPassword"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="password"
                    id="confirmNewPassword"
                    className="block pt-2 focus:outline-none bg-Secondary-0 py-[13px] pl-4 w-full rounded-sm "
                    placeholder="**************"
                  />
                )}
              />
              {errors.confirmNewPassword && (
                <p className="text-error-600">
                  {errors.confirmNewPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-row justify-end ">
              <div className="flex flex-row gap-8">
                <button type="button">Cancel</button>
                <AppButton buttonText="Save Change" paddingY="16" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="visible md:hidden absolute left-[2px] top-[150px]  z-10">
        <Draw open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Account;

Account.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};
