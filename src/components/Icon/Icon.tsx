import React from "react";
// @ts-ignore
import classNames from "classnames";
import * as icons from "../../icons/icons";

type IconProps = {
    size: any,
    name: any,
    className: string,
}

const Icon = ({ size = 20, name, className = "" }: IconProps) => {
    const [width, height] = size instanceof Array ? size : [size, size];
    // @ts-ignore
    const [icon, viewBox] = icons[name];

    return (
        <svg
            className={classNames("icon", className)}
            width={width}
            height={height}
            dangerouslySetInnerHTML={{ __html: icon }}
            viewBox={viewBox}
        />
    );
};

export default Icon;