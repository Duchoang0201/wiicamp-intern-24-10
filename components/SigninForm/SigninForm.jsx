import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object().shape({
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

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-col">
      <div className="text-[36px] font-inter leading-8 font-semibold tracking-[1.44px] pb-6">
        Create an account
      </div>
      <div className="text-[16px] font-poppins leading-6 pb-12">
        Enter your details below
      </div>
      <div className="text-black-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative bg-black pb-10">
            <Controller
              name="userName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="default-userName"
                  className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
                  placeholder="Email or Phone Number"
                />
              )}
            />
            {errors.userName && (
              <p className="text-Red-500">{errors.userName.message}</p>
            )}
          </div>

          <div className="relative bg-black pb-10">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  id="default-password"
                  className="block bg-opacity-0 text-white border-Neutral-200 border-b-2 py-3 text-sm bg-gray-50 w-full focus:outline-none "
                  placeholder="Password"
                />
              )}
            />
            {errors.password && (
              <p className="text-Red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="w-full  rounded-md h-14 text-white-0 flex justify-between items-center mb-4">
            <button
              type="submit"
              className="px-12 py-2 bg-Secondary-2 text-sm rounded-sm"
            >
              Log in
            </button>
            <div className="text-Secondary-2"> Forget Passwword?</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
