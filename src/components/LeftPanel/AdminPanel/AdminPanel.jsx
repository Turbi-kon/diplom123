import React, { useState } from "react";
import "./AdminPanel.css";
import AddUser from "./AddUser";
import CreateNotification from "./CreateNotification";
import ChannelManager from "./ChannelManager";

function AdminPanel({ onClose }) {
  const [action, setAction] = useState(null);

  const renderForm = () => {
    switch (action) {
      case "add":
        return <AddUser onBack={() => setAction(null)} />;
      case "notify":
        return <CreateNotification onBack={() => setAction(null)} />;
      case "channels":
        return <ChannelManager onBack={() => setAction(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-panel">
      {!action ? (
        <>
          <h2>Панель администратора</h2>
          <button onClick={() => setAction("add")}>Управление пользователями</button>
          <button onClick={() => setAction("notify")}>Создать уведомление</button>
          <button onClick={() => setAction("channels")}>Управление каналами</button>
          <button onClick={onClose}>Закрыть</button>
        </>
      ) : (
        renderForm()
      )}
    </div>
  );
}

export default AdminPanel;
