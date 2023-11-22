"use client";

import React, { memo } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

import { getNextDay } from "@/hooks/getSpecificDay";
import { useCountdown } from "@/hooks/useCountDown";

import AppButton from "../App/AppButton/AppButton";

import Content from "./Content";
import ShowTime from "./ShowTime";

function Title({
  content,
  title,
  onPrev,
  onNext,
  isCountDown,
  buttonText,
  paddingY,
}) {
  const saturdayOfWeek = getNextDay("saturday") + 7 * 60 * 60;
  const [days, hours, minutes, seconds] = useCountdown(saturdayOfWeek);
  return (
    <div className="container max-h-[103px]">
      {" "}
      <Content title={title} />
      <div className=" flex flex-row justify-between mt-[20px] items-center">
        <div className="leading-[48px] tracking-[1.44px] font-inter font-semibold text-[20px] sm:text-[28px] md:text-[36px] ">
          {content}
        </div>
        {isCountDown && (
          <ShowTime
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        )}
        {onPrev && onNext ? (
          <div className="flex flex-row gap-2 max-w-[100px] ">
            <button
              className="max-w-[46px] h-auto justify-center flex p-[11px] rounded-full bg-Secondary-0"
              type="button"
              onClick={onPrev}
            >
              <ArrowLeft size={24} />
            </button>
            <button
              className="max-w-[46px] h-auto justify-center flex p-[11px] rounded-full bg-Secondary-0"
              type="button"
              onClick={onNext}
            >
              <ArrowRight size={24} />
            </button>
          </div>
        ) : (
          // <button
          //   type="button"
          //   className={`${bgButton} hover:bg-Neutral-600 w-[159px]   transform transition-all duration-300 flex flex-row justify-center bg-Secondary-2  h-[56px] text-white-0 items-center text-white font-poppins text-base `}
          // >
          //   {buttonText}
          // </button>
          <AppButton paddingY={paddingY} buttonText={buttonText} />
        )}
      </div>
    </div>
  );
}

export default memo(Title);

Title.propTypes = {
  onPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired, // onPrev can be a function or null
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.any]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  isCountDown: PropTypes.bool,
  paddingY: PropTypes.string.isRequired,
};

Title.defaultProps = {
  isCountDown: false,
};
