import styles from "./contact.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

export default function Contact() {
    return (
        <div className={styles.contact}>
            <NavBar />
            <div className={styles.contactWrapper}>
                <div className={styles.fullPageContainer}>
                    <div className={styles.textContainer}>
                        <h1>Casa La Marina</h1>

                        <p>Avenida San Fulgencio 300</p>
                        <p>03194 San Fulgencio</p>
                        <p>Alicante, Spanien</p>

                        <p>+46 739 293 83 / casa@info.se</p>

                        <p>
                            Vid frågor, kontakta oss via telefon eller e-post.
                            Transfer från Alicante flygplats går att ordna.
                        </p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={"assets/galleri/23.JPG"} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
