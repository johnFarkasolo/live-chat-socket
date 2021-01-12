import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { IoIosTrash } from "react-icons/io";
import Icon from "../../Icon/Icon";

import './Item.scss'

type ItemProps = {
    isReverse: any,
    isRemovable: any,
    messages: any,
    avatar: string
}

const Item = ({ isReverse, isRemovable, messages, avatar }: ItemProps) => {
    return (
        <div
            className={classNames("item", {
                reverse: isReverse,
                removable: isRemovable,
            })}
        >
            <img src={avatar} className="avatar" alt="Avatar" />
            <div className="list">
                {messages.map((item: any) => (
                    <div className="list-item" key={item.id}>
                        <div className="text">{item.text}</div>
                        <div className="time">{dayjs(item.date).format("HH:mm")}</div>
                        <Icon
                            size={15}
                            className="message-status"
                            name={
                                item.status === "sended" ? "MessageSended" : "MessageReaded"
                            }
                        />
                        <IoIosTrash
                            data-id={item.id}
                            size={18}
                            className="remove-message"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Item;