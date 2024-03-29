import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function Home({ msg }) {
    return <div>home msg: {msg}</div>;
}

const App = ({ props, basename }) => {
    // React.useEffect(() => {
    //     throw '123';
    // }, []);
    // basename 就是 /sub  => activeWhen配置
    return (
        <BrowserRouter basename={basename}>
            <div
                style={{
                    margin: '10px',
                    padding: '10px',
                    textAlign: 'center',
                    backgroundColor: 'cyan',
                }}
            >
                <h1>Sub App</h1>
                <nav
                    style={{
                        borderBottom: 'solid 1px',
                        paddingBottom: '1rem',
                    }}
                >
                    <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |
                    <Link to="/expenses">Expenses</Link>
                    <div onClick={() => window.Garfish.router.push({ path: '/sub/custom' })}>
                        <a href="" onClick={(e) => e.preventDefault()}>
                            使用window.Garfish.root.push
                        </a>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home msg={props.msg} />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />} />
                    <Route path="custom" element={<Custom />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

function Expenses() {
    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Expenses</h2>
        </main>
    );
}

function Invoices() {
    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Invoices</h2>
        </main>
    );
}

function Custom() {
    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Custom</h2>
        </main>
    );
}

export default App;
