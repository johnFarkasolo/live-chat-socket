import React from "react";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import "./Title.scss";

type TitleProps = {
    date: any
}

dayjs.extend(Calendar);

const Title = ({ date }: TitleProps) => (
    <div className="title">
        {dayjs(date).calendar('', {
            sameDay: "[Сегодня]",
            lastWeek: "DD MMMM",
            sameElse: "DD MMMM YYYY",
        })}
    </div>
);

export default Title;