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
            <Link href="https://tnsjesper.xyz" target="_blank">
              tnsjesper
            </Link>{" "}
            for{" "}
            <Link href="https://endelon.link" target="_blank">
              Endelon
            </Link>
            .{" "}
          </p>
          <Link target="_blank" href="https://tnsjesper.xyz/impressum.php">
            <img
              className={style.leagel}
              src="https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/badge/default/24px.svg"
              height={50}
              width={50}
            ></img>
          </Link>
          <Link target="_blank" href="https://github.com/tnsjesper/Endelon-Share">
            <img
              className={style.github}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              width={50}
              height={50}
            />
          </Link>
        </footer>
      </body>
    </html>
  );
}
