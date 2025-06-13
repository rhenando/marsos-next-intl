// app/[locale]/page.jsx
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation.js";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      <h1>{t("title")}</h1>
      <Link href='/about'>{t("about")}</Link>
    </main>
  );
}
