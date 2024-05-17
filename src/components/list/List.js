import React, { useState } from "react";
import ListItem from "./ListItem";
import ListWrap from "./ListWrap";
import './listStyle.scss';

const list = [
    {
        id: 1,
        title: "January",
        description: "The new year has been started. So lets rock!",
        isActive: true
    },
    {
        id: 2,
        title: "February",
        description: "The new year has been started. So lets rock!",
        isActive: false
    },
    {
        id: 3,
        title: "March",
        description: "The new year has been started. So lets rock!",
        isActive: true
    }
];

const List = () => {
    const [listing, setListing] = useState({
        data: list
    });

    const [labelValue, setLabelValue] = useState("All");

    const handleFilter = (e) => {

        const labelValue = e.target.value;


        const newList = list.filter((item) => {
            if (labelValue === "All") {
                return true;
            }
            if (labelValue === "Active") {
                return item.isActive === true;
            }
            if (labelValue === "Non-Active") {
                return item.isActive === false;
            }
            return false;
        });

        setListing({
            data: newList,

        })

        setLabelValue(e.target.value);

    }

    const onLabelClick = (el) => {

        const newList2 = list.filter((item) => {
            if (el === "All") {
                return true;
            }
            if (el === "Active") {
                return item.isActive === true;
            }
            if (el === "Non-Active") {
                return item.isActive === false;
            }
            return false;
        });

        setListing({
            data: newList2
        })

        setLabelValue(el);
    }

    const handleDelete = (item) => {
        const newList3 = listing.data.filter((el) => {
            return item.id !== el.id
        });
        setListing({
            data: newList3
        })
    }

    return (
        <ListWrap
            onHandleFilter={handleFilter}
            labelValue={labelValue}
        >
            <ol className="list-group list-group-numbered">
                {listing.data.map((item) => {
                    return <ListItem
                        key={item.title}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        isActive={item.isActive}
                        onLabelClick={onLabelClick}
                        onDelete={() => handleDelete(item)}
                    />
                })}
            </ol>
        </ListWrap>
    );
}

export default List;