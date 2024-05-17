import React from "react";

const ListItem = (props) => {
    const {
        id,
        title,
        description,
        isActive,
        onDelete,
        onLabelClick
    } = props
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start p-4">
            <div className="ms-2 me-auto">
                <h5 className="fw-bold mb-2">{id} - {title}</h5>
                {description}
                <p className="mt-3 mb-0">
                    <a
                    onClick={onDelete}
                    className="btn btn-danger btn-sm"
                    >
                        Delete
                    </a>
                </p>
            </div>
            <span
                onClick={() => onLabelClick(isActive ? "Active" : "Non-Active")}
                className={isActive ? "badge text-bg-success rounded-pill" : "badge text-bg-primary rounded-pill"}
            >
                {isActive ? "Active" : "Non-Active"}
            </span>
        </li>
    );
}

export default ListItem;