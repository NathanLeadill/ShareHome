import useTranslation from "next-translate/useTranslation";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Translate: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.container}>
      <Head>
        <title>{t("metaTitle")}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t("title")}</h1>

        <p className={styles.description}>{t("description")}</p>

        <Link href="/" locale="en">
          <h2>Anglais</h2>
        </Link>
        <Link href="/" locale="fr">
          <h2>Français</h2>
        </Link>
      </main>
    </div>
  );
}

export default Translate