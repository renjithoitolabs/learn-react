import React from "react";
import List from "../components/list/List";
import Counter from "../components/counter/Counter";
import RegFormOld from "../components/forms/RegFormOld";
import RegFormNew from "../components/forms/RegFormNew";

const Main = () => {
    return (
        <main>
            <div className="row gx-5">
                <div className="col-lg-4 my-4">
                    {/* <RegFormOld /> */}
                    <RegFormNew />
                </div>
                <div className="col-lg-8 my-4">
                    <Counter />
                    <List />
                </div>
            </div>
        </main>
    );
}

export default Main;