import Image from "next/image";
import styles from "../../public/silicon_dark.min.css";
import style from "../../public/page.module.css";
const { v4: uuidv4 } = require("uuid");


var uuid = uuidv4();

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={style.centerh1}>Data Share</h1>
     
      <form action='/share/{uuid}' method="post">
        <br />
        <textarea id="data" name="data" rows="20" cols="20"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
     
    </main>
  );
}
