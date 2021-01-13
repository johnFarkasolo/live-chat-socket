import React, { useReducer, useEffect, useRef } from "react";
import Item from "./Item/Item";
import Title from "./Title/Title"

import { normalizeDialog } from "./helpers";
import data from "../../data";
import dialogReducer from '../../redux/reducer/dialog-reducer'

import "./Dialog.scss";

type DialogProps = {
    newMessage: any
}

const Dialog = ({ newMessage }: DialogProps) => {
    const dialogRef = useRef<HTMLInputElement>(null);
    const [state, dispatch] = useReducer(dialogReducer, {
        messages: data,
    });

    useEffect(() => {
        if (newMessage) {
            dispatch({
                type: "add-message",
                payload: newMessage,
            });

            setTimeout(() => {
                dispatch({
                    type: "update-status",
                    payload: {
                        id: newMessage.id,
                        status: "readed",
                    },
                });
            }, 1000);
        }
    }, [newMessage]);

    useEffect(() => {
        // @ts-ignore
        dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
    }, [state.messages.length]);

    const onRemove = (id: any) => {
        dispatch({
            type: "remove-message",
            payload: id,
        });
    };

    const normalizedDialog = normalizeDialog(state.messages);

    return (
        <div className="dialog">
            <div className="overflow" ref={dialogRef}>
                {normalizedDialog.map((item: any) =>
                    item.type === "message" ? (
                        <Item {...item} key={item.id} onRemove={onRemove} />
                    ) : (
                        <Title key={item.id} date={item.date} />
                    )
                )}
            </div>
        </div>
    );
};

export default Dialog;