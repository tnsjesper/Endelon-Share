import { Inter } from "next/font/google";
import style from "../../public/page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
var version = require("../../package.json").version;

export const metadata = {
  title: "Endelon Share",
  description: "Share Errors and Code Snippets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <code className={style.version}>{version}</code>
        <link rel="stylesheet" href="../../public/silicon_dark.min.css" />
        <footer>
          <p className={style.padding}>
            Made by{" "}
            <Link class="a" href="https://tnsjesper.xyz" target="_blank">
              tnsjesper
            </Link>{" "}
            for{" "}
            <Link class="a" href="https://endelon.link" target="_blank">
              Endelon
            </Link>
            .
            <br />
            <Link
              class={style.center}
              target="_blank"
              href="https://tnsjesper.xyz/impressum.php"
            >
              Imprint
            </Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
