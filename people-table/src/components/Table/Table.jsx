import React, { useState } from "react";

import Search from "../Search/Search";
import Dropdown from "../Dropdown/Dropdown";

import "./Table.css";

const COL_NAMES = [
    "Avatar",
    "ID",
    "First Name",
    "Last Name",
    "Email",
    "Company",
    "Department",
    "Start Date",
];

const Table = ({ list, pageNum = 0 }) => {
    const [page, setPage] = useState(pageNum);
    const [selected, setSelected] = useState(3);
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

    //If no keyword is typed in input, to displat whole list
    const listToDisplay = filterList.length > 0 ? filterList : list;
    // If keyword is entered and no results are found, to display appropriate message
    const noMatchFound = filterList.length < 1 && word;
    // If all people have to be shown on one page
    const pageSize =
        typeof selected !== "number" ? listToDisplay.length : selected;

    const onBack = () => {
        setPage(page - 1 > -1 ? page - 1 : page);
    };

    const onNext = () => {
        setPage(page + 1 < listToDisplay.length / selected ? page + 1 : page);
    };

    return (
        <div className="table-container">
            <div className="search-container">
                <Search filterArrayByKeyword={filterArrayByKeyword} />
                <div className="table-container__rightSide">
                    <div className="pagination-container">
                        <label>Page {page + 1}</label>
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
            </div>
            {noMatchFound ? (
                <p>No matched people found</p>
            ) : (
                listToDisplay.length > 0 && (
                    <table cellSpacing="0" className="table">
                        <thead className="table__thead">
                            <tr>
                                {COL_NAMES.map((headerItem, index) => (
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
