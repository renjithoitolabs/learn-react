import React from "react";

const ListWrap = (props) => {
    const {
        children,
        onHandleFilter,
        labelValue
    } = props;
    const onlyChild = React.Children.only(children);
    const childCount = React.Children.count(onlyChild.props.children);
    return (
        <div>
            <div className="d-inline-block">
                <select
                    value={labelValue}
                    onChange={onHandleFilter}
                    className="form-select"
                >
                    <option>All</option>
                    <option>Active</option>
                    <option>Non-Active</option>
                </select>
            </div>
            <div className="my-4">{children}</div>
            <h5>Total {childCount} Items</h5>
        </div>
    );
}

export default ListWrap;