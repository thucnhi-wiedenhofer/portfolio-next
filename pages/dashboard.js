import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/dashboard.module.css";

export default function Dashboard({ messages }) {
  const router = useRouter();

  async function deleteMessage(id) {
    await fetch(`/api/deleteMessage/${id}`, {
      method: "DELETE",
    });
    setTimeout(() => {
      router.push(
        {
          pathname: "/dashboard",
          query: { administred: "ok" },
        },
        "/dashboard"
      );
    }, 2000);
  }

  if (router.query.administred === "ok") {
    return (
      <section id="dashboard">
        <h2 className={styles.title}>Liste des messages</h2>
        <div className={styles.container}>
          
          {messages.map((item, id) => (
            <ul className={styles.listGroup} key={id}>
              <li className={styles.listItem}>
                <span>Id: {item.id}</span>
                <span>Date: {item.date}</span>
              </li>
              <li className={styles.listItem}>Nom: {item.name}</li>
              <li className={styles.listItem}>Email: {item.email}</li>
              <li className={styles.listItem}>
                <p>Message: {item.message}</p>
                <button
                  type="button"
                  className={styles.btnOutline}
                  onClick={() => deleteMessage(item.id)}
                >
                  Effacer
                </button>
              </li>
            </ul>
          ))}
        </div>
      </section>
    );
  }
}

