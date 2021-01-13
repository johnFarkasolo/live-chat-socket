import React, { useState } from "react";

import './Sender.scss'

type SenderProps = {
    onAddMessage: any
}

const Sender = ({ onAddMessage }: SenderProps) => {
    const [value, setValue] = useState("");

    const onChange = (event:any) => setValue(event.target.value);
    const onSubmit = (event: any) => {
        event.preventDefault();

        onAddMessage({
            id: Date.now(),
            avatar:
                "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
            message: value,
            date: new Date().toISOString(),
            is: "my",
            status: "sended",
        });
        setValue("");
    };

    return (
        <form className="sender" onSubmit={onSubmit}>
            <input
                placeholder="Введите сообщение"
                value={value}
                onChange={onChange}
                required
            />
            <button>Отправить</button>
        </form>
    );
};

export default Sender;