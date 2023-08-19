import React from 'react';
import ReactSelect from 'react-select';
import './App.css';

function App() {
    const defaultValue = { label: 'All', value: null };
    return (
        <div className="App" style={ { margin: '3rem' } }>
            <ReactSelect<{ label: string, value: number | null }>
                options={
                    [
                        defaultValue,
                        { label: 'Two', value: 2 },
                        { label: 'Three', value: 3 },
                        { label: 'Four', value: 4 },
                    ]
                }
                defaultValue={ defaultValue }

            />
        </div>
    );
}

export default App;
