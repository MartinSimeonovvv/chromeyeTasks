import React, { useState } from "react";

import "./Table.css";

const colNames = [
    "id",
    "First Name",
    "Last Name",
    "Email",
    "Company",
    "Department",
    "Start Date",
];

const Table = ({ list, pageNum = 0, pageSize = 3, height = "auto" }) => {
    const [page, setPage] = useState(pageNum);

    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page);
    };

    const onNext = () => {
        setPage(page + 1 < list.length / pageSize ? page + 1 : page);
    };

    console.log(list);
    return (
        <div style={{ width: "50%", boxShadow: "3px 6px 3px #ccc" }}>
            <div className="pagination-container">
                <label style={{ padding: "0 1em" }}>{page + 1}</label>
                <button className="btn" onClick={onBack}>
                    ←
                </button>
                <button className="btn" onClick={onNext}>
                    →
                </button>
            </div>
            {list.length > 0 && (
                <table cellSpacing="0" className="table">
                    <thead className="table__thead">
                        <tr>
                            {colNames.map((headerItem, index) => (
                                <th key={index}>{headerItem}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(
                            list.slice(
                                pageSize * page,
                                pageSize * page + pageSize
                            )
                        ).map((obj) => (
                            <tr key={obj.id}>
                                {Object.values(obj).map(
                                    (value, index) => (
                                        // value.includes("uploads") ? (
                                        //     <img src={value} alt="img" />
                                        // ) : (
                                        <td key={index}>{value}</td>
                                    )
                                    // )
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
