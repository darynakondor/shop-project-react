import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = <h1>Hello world</h1>

function App() {
    return (
        <div>
            {h1}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptate possimus amet animi quia non.</p>
        </div>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
