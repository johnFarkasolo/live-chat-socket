import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";
import { IoIosTrash } from "react-icons/io";
import Icon from "../../Icon/Icon";

import './Item.scss'

type ItemProps = {
    isReverse: string,
    isRemovable: string,
    messages: {
        text: string,
        status: string,
        id: number,
        date: number,
    }[],
    avatar: string,
    onRemove: any
}

const Item = ({ isReverse, isRemovable, messages, avatar, onRemove }: ItemProps) => {
    const onRemoveHandle = (event:any) => {
        const { id } = event.currentTarget.dataset;
        onRemove(+id);
    };
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
                            onClick={onRemoveHandle}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Item;