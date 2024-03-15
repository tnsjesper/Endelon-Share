"use client";
import styles from "../../public/silicon_dark.min.css";
import style from "../../public/page.module.css";
const { v4: uuidv4 } = require("uuid");

const uuid = uuidv4();

export default function Home() {
  const sendinput = async () => {
    await fetch(`/api/done`, {
      method: "POST",
      body: JSON.stringify({
        input: document.getElementById("input").value,
        uuid: uuid,
      }),
    });
  };
  return (
    <main className={styles.main}>
      <h1 className={style.centerh1}>Data Share</h1>

      <form className={style.dataform}>
        <br />
        <textarea id="input" name="input" rows="20" cols="20"></textarea>
        <br />
        <button onClick={sendinput}>Submit</button>
      </form>
    </main>
  );
}
