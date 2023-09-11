import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/admin.module.css";

export default function Admin() {
  const [admin, setAdmin] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(admin);
    if (admin === process.env.PASSWORD) {
      console.log("ok");
      setTimeout(() => {
        router.push(
          {
            pathname: "/dashboard",
            query: { administred: "ok" },
          },
          "/dashboard"
        );
      }, 1000);
    }
  };

  return (
    <section id="admin">
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.title}>Connexion Administrateur</h2>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Mot de passe
            </label>
            <input
              onChange={(e) => {
                setAdmin(e.target.value);
              }}
              type="password"
              className={styles.input}
              name="password"
              required="required"
            />
          </div>
          <button type="submit" className={styles.btnOutline}>
            Se Connecter
          </button>
        </form>
      </div>
    </section>
  );
}
