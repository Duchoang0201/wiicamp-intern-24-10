import React from "react";
import PropTypes from "prop-types";

function ShowTime({ days, hours, minutes, seconds }) {
  return (
    <div className="leading-[30px]">
      {" "}
      <div className=" w-full  flex flex-row gap-2 md:flex md:flex-row  md:gap-[17px] text-center">
        <div className="flex flex-col justify-end">
          <div className="text-[8px] md:text-[12px] font-medium leading-[18px]">
            Days
          </div>
          <div className="font-inter text-[18px] md:text-[32px] font-bold leading-[30px]">
            {days.toString().padStart(2, "0")}
          </div>
        </div>
        <div>
          <div className="text-[15px] font-bold text-Button-2 mt-4">:</div>
        </div>
        <div>
          <div className="text-[8px] md:text-[12px] font-medium leading-[18px]">
            Hours
          </div>
          <div className="font-inter text-[18px] md:text-[32px] font-bold leading-[30px]">
            {hours.toString().padStart(2, "0")}
          </div>
        </div>
        <div>
          <div className="text-[15px] font-bold text-Button-2 mt-4">:</div>
        </div>
        <div>
          <div className="text-[8px] md:text-[12px] font-medium leading-[18px]">
            Minutes
          </div>
          <div className="font-inter text-[18px] md:text-[32px] font-bold leading-[30px]">
            {minutes.toString().padStart(2, "0")}
          </div>
        </div>
        <div>
          <div className="text-[15px] font-bold text-Button-2 mt-4">:</div>
        </div>
        <div>
          <div className="text-[8px] md:text-[12px] font-medium leading-[18px]">
            Seconds
          </div>
          <div className="font-inter text-[18px] md:text-[32px] font-bold leading-[30px]">
            {seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTime;

ShowTime.propTypes = {
  days: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};