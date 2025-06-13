// app/[locale]/layout.js
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import routing from "../../i18n/routing.js";

export default async function LocaleLayout({ children, params }) {
  // 1) await params
  const { locale } = await params;

  // 2) validate locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 3) dynamically import your messages JSON
  const messagesModule = await import(`../../messages/${locale}.json`);
  const messages = messagesModule.default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
