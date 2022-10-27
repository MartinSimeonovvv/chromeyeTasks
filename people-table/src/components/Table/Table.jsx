import React, { useState } from "react";

import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";

import "./Table.css";

const colNames = [
    "Avatar",
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Company",
    "Department",
    "Start Date",
];

const Table = ({ list, pageNum = 0, pageSize = 3 }) => {
    const [page, setPage] = useState(pageNum);
    const [selected, setSelected] = useState("--3--");
    const [filterList, setFilterList] = useState([]);
    const [word, setWord] = useState(false);

    const filterArrayByKeyword = (keyword) => {
        const filteredList = list.filter(
            (val) =>
                val.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
                val.lastName.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilterList(filteredList);
        setWord(true);
    };

    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page);
    };

    const onNext = () => {
        setPage(page + 1 < list.length / pageSize ? page + 1 : page);
    };

    const listToDisplay = filterList.length > 0 ? filterList : list;
    const noMatchFound = filterList.length < 1 && word;

    return (
        <div className="table-container">
            <div className="search-container">
                <Search filterArrayByKeyword={filterArrayByKeyword} />
                <div className="pagination-container">
                    <label style={{ padding: "0 1em" }}>{page + 1}</label>
                    <button
                        className="btn"
                        onClick={onBack}
                        disabled={noMatchFound}
                    >
                        ←
                    </button>
                    <button
                        className="btn"
                        onClick={onNext}
                        disabled={noMatchFound}
                    >
                        →
                    </button>
                </div>
                <Dropdown selected={selected} setSelected={setSelected} />
            </div>
            {noMatchFound ? (
                <p>No matched people found</p>
            ) : (
                listToDisplay.length > 0 && (
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
                                listToDisplay.slice(
                                    pageSize * page,
                                    pageSize * page + pageSize
                                )
                            ).map((obj) => (
                                <tr key={obj.id}>
                                    {Object.values(obj).map((value, index) =>
                                        index === 0 ? (
                                            <td key={index}>
                                                <img
                                                    className="person-image"
                                                    src={value}
                                                    alt="person"
                                                />
                                            </td>
                                        ) : (
                                            <td key={index}>{value}</td>
                                        )
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            )}
        </div>
    );
};

export default Table;
