/* eslint-disable react/no-unescaped-entities */

import styles from "./../ContactForm/ContactForm.module.css";
import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FirebaseContext } from "./../../firebase";
import { toast } from "react-toastify";

export default function ContactForm() {
  //Use firebase to keep data in cloud and use hook useContext to
  const { firebase } = useContext(FirebaseContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  //function to add a contact in firestore database
  async function addContact(contact) {
    try {
      firebase.db.collection("contacts").add(contact);
    } catch (error) {
      console.error(error);
    }
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = new Date();
    const date = d.toLocaleDateString();
    const data = {
      name,
      email,
      message,
      date,
    };

    addContact(contact).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setChecked(false);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message envoyé");
        setTimeout(() => {
          router.push("/");
        }, 3000);
      }
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Nom
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            className={styles.input}
            name="name"
            id="name"
            required="required"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className={styles.input}
            name="email"
            id="email"
            required="required"
          />
        </div>
      </div>

      <div className={styles.textarea}>
        <label htmlFor="message" className={styles.label}>
          Votre message
        </label>
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className={styles.input}
          name="message"
          id="message"
          rows="3"
          required="required"
        ></textarea>
      </div>

      <div className={styles.rgpd}>
        <input
          className={styles.checkbox}
          type="checkbox"
          value={checked}
          id="rgpdCheckbox"
          onChange={(e) => {
            setChecked(e.target.value);
          }}
          required="required"
        />
        <label className={styles.label} htmlFor="rgpdCheckbox">
          J'autorise ce site à conserver mes données personnelles. <br />
        </label>
      </div>

      <button type="submit" className={styles.btnSlide}>
        <span>Envoyer</span>
      </button>
    </form>
  );
}
