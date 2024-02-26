// ParentComponent.jsx

import React, { useState } from 'react';
import BasicModalDialog from './Query';

export default function ParentComponent() {
    const [open, setOpen] = useState(false);
    const [queries, setQueries] = useState([]);

    const handleQuerySubmit = (queryData) => {
        setQueries([...queries, queryData]);
    };

    return (
        <div>
            <BasicModalDialog onSubmit={handleFormSubmit} />
        </div>
    );
}
