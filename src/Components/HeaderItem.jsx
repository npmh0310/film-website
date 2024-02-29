import React from "react";

function HeaderItem({ name, Icon }) {
    return <div className="flex  items-center gap-3 text-[16px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-4 mt-2">
        <Icon />
        <h2 className="">{name}</h2>
    </div>;
}

export default HeaderItem;
