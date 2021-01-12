import React from "react";
import Item from "./Item/Item";

import { normalizeDialog } from "./helpers";
import data from "../../data";

import "./Dialog.scss";

const Dialog = () => {
    const normalizedDialog = normalizeDialog(data);

    return (
        <div className="dialog">
            <div className="overflow">
                {normalizedDialog.map((item:any) => (
                    <Item {...item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default Dialog;