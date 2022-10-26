import { useEffect, useState } from "react";

import Table from "./components/Table/Table";

const URL = "http://apis.chromeye.com:9191/people";

function App() {
    const [peopleInfo, setPeopleInfo] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error("Something went wrong!");
                }
                const data = await res.json();
                const loadedData = [];

                data.forEach((el) => {
                    loadedData.push({
                        avatar: `http://apis.chromeye.com:9191${el.avatar.url}`,
                        // avatarId: el.avatar.id,
                        id: el.id,
                        firstName: el.firstName,
                        lastName: el.lastName,
                        email: el.email,
                        company: el.company.name,
                        department: el.company.department,
                        startDate: el.company.startDate,
                    });
                });
                setPeopleInfo(loadedData);
            } catch (err) {
                alert(err.message);
            }
        };

        getData();
    }, []);

    return (
        <div className="App">
            <Table list={peopleInfo}></Table>
        </div>
    );
}

export default App;
