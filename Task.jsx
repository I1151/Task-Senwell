import React, { useState, useEffect } from 'react';

const Task = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData().then((response) => setData(response));
    }, []);

    const fetchData = async () => {
        const response = [
            { name: 'Pratik' },
            { name: 'Trupti' },
            { name: 'Sneha' },
            { name: 'Pratik' },
            { name: 'Sneha' },
            { name: 'Pratik' },
            { name: 'Sneha' },
            { name: 'Trupti' },
            { name: 'Pratik' },
            { name: 'Sneha' },
            { name: 'Trupti' },
            { name: 'Pratik' },
            { name: 'Trupti' },
        ];

        return response;
    };

    const showData = (count) => {
        if (0 < count && count < 10) {
            return { backgroundColor: 'red' };
        }
    };

    const nameCounts = {};
    data.forEach((item) => {
        const name = item.name;
        if (name in nameCounts) {
            nameCounts[name] += 1;
        } else {
            nameCounts[name] = 1;
        }
    });

    return (
        <table border='2px' style={{textAlign:'center'}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occurrences</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(nameCounts).map(([name, count]) => (
                    <tr key={name} style={showData(count)}>
                        <td>{name}</td>
                        <td>{count}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Task;
