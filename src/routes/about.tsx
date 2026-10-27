import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Plug, Captions } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "حول التطبيق — ANIME UG" },
      {
        name: "description",
        content: "سياسة المحتوى والمصادر في ANIME UG: لا محتوى مُختلق ولا مواقع غير مرخّصة.",
      },
      { property: "og:title", content: "حول التطبيق — ANIME UG" },
      { property: "og:description", content: "سياسة المحتوى والمصادر في ANIME UG." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const sections = [
  {
    icon: ShieldCheck,
    title: "سياسة المحتوى",
    body: "لا يعرض ANIME UG أي عمل أو حلقة أو رابط بث لم يُتحقق منه. كل المحتوى الحالي تجريبي ومن مصادر مفتوحة الترخيص يمكن بثّها قانونًا: أفلام Blender Foundation المفتوحة (رخصة CC-BY) عبر النسخ الرسمية على archive.org، ومقاطع اختبار عامة من test-videos.co.uk. لا يتم استخدام أي موقع بث غير مرخّص ولا جمع محتوى منه.",
  },
  {
    icon: Plug,
    title: "إضافة أنمي حقيقي",
    body: "تُضاف الأعمال الحقيقية فقط من واجهة برمجية مرخّصة توفرها أنت (مزوّد بث رسمي أو قنوات تملك حق عرضها). كل عمل يُجلب من المصدر يحمل شارة «مرخّص» وقائمة جوداته وترجماته كما يوفرها المصدر نفسه — ولا تُختلق أي بيانات.",
  },
  {
    icon: Captions,
    title: "الترجمة العربية",
    body: "الترجمة التجريبية المرفقة حاليًا ملف للعرض فقط للتأكد من عمل المشغّل وتحكّم التوقيت. لا تُضاف ترجمات حقيقية إلا عند توفّرها من مصدر مرخّص، مع أدوات اختيار الترجمة وتعديل توقيتها (+/− 0.5 ثانية).",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pt-4 pb-8">
      <h1 className="font-display text-xl font-bold">حول ANIME UG</h1>
      <p className="mt-1.5 text-sm text-muted-foreground">
        منصة عربية لمشاهدة الأنمي بواجهة داكنة، مصمّمة للهواتف، مع مشغّل يدعم جودات متعددة
        (480p/720p/1080p حسب ما يوفره المصدر)، ومفضلة وسجل مشاهدة محفوظين على جهازك.
      </p>

      <div className="mt-4 space-y-3">
        {sections.map(({ icon: Icon, title, body }) => (
          <section key={title} className="rounded-2xl border border-border/70 bg-card p-4">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-accent">
              <Icon className="size-5" />
              {title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/85">{body}</p>
          </section>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        ملاحظة للمطوّر: خطوات تغليف التطبيق لنظام Android (APK) عبر Capacitor موضّحة في ملف README
        داخل المشروع.
      </p>
    </div>
  );
}
