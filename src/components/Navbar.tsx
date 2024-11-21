"use client";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
    return (
        <>
            <div className={styles["navbar-container"]}>
                <nav className={styles["navbar"]}>
                    <Link href="/" className={styles["heading"]}>
                        <h3 className={styles["title"]}>MINDSHIELD</h3>
                    </Link>

                    <div className={styles["links-container"]}>
                        <Link href="#" className={styles.link}>
                            Home
                        </Link>
                        <Link href="#" className={styles.link}>
                            SOS
                        </Link>
                        <Link href="#" className={styles.link}>
                            Journals
                        </Link>
                        <Link href="#" className={styles.link}>
                            LOGIN
                        </Link>
                    </div>
                </nav>
            </div>
            <div className={styles["fade-navbar-effect"]}></div>
            <div className={styles["empty-navbar"]}></div>
        </>
    );
}
