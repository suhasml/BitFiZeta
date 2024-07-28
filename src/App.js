import React, { useState } from "react";
import "./app.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Components/Main/Main";
import Hills from "./Components/Hills/Hills";
import Beaches from "./Components/Beaches/Beaches";
import Hikes from "./Components/Hikes/Hikes";
import Chatbot from "./Components/Chatbot/Chatbot"; // Assuming ChatModal is the modal containing the chatbot
import Packages from "./Components/Packages/Packages";

const App = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const openChatModal = () => {
    //     setModalIsOpen(true);
    // };

    const closeChatModal = () => {
        setModalIsOpen(false);
    };

    return (
        <Router>
            <Routes>
                {/* Define your routes here */}
                <Route path="/" element={<Main />} />
                <Route path="/hills" element={<Hills />} />
                <Route path="/beaches" element={<Beaches />} />
                <Route path="/hikes" element={<Hikes />} />
                <Route path="/packages" element={<Packages />} />
            </Routes>

            <Chatbot isOpen={modalIsOpen} onRequestClose={closeChatModal} />
        </Router>
    );
};

export default App;
