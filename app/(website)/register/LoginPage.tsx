"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

// مسار استيراد Supabase (يمكنك تعديله حسب المسار الفعلي لديكِ)
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const { t: rawT, language } = useLanguage();
  const t = rawT as Record<string, string>;
  const isRtl = language === "ar";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);

  // دالة تسجيل الدخول
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError(t.errorEmailRequired || "من فضلك أدخل البريد الإلكتروني");
      return;
    }

    if (!password) {
      setError(t.errorPasswordRequired || "من فضلك أدخل كلمة المرور");
      return;
    }

    setLoading(true);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (loginError) {
        setError("بيانات الدخول غير صحيحة، يرجى التأكد من البريد وكلمة المرور.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      setError("حدث خطأ غير متوقع، يرجى المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  // دالة إرسال رابط استعادة كلمة المرور عند النسيان
  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("من فضلك أدخل بريدك الإلكتروني في الحقل بالأعلى أولاً لطلب استعادة كلمة المرور.");
      return;
    }

    setResetLoading(true);

    try {
      // إرسال رابط الاستعادة إلى البريد المدخل
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/login`, // يمكنك توجيهه لصفحة تحديث كلمة المرور إذا أردتِ
      });

      if (resetError) {
        setError("فشل إرسال بريد الاستعادة، تأكد من صحة البريد الإلكتروني.");
      } else {
        setMessage("تم إرسال رابط استعادة كلمة المرور إلى بريدك الإلكتروني بنجاح. يرجى تفقد صندوق الوارد.");
      }
    } catch (err) {
      setError("حدث خطأ أثناء محاولة إرسال رابط الاستعادة.");
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-gradient-to-br 
      from-cyan-50 via-white to-slate-100 flex 
      flex-col items-center justify-center px-4 py-10"
    >
      <div className="w-full max-w-md">

        {/* العنوان */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-extrabold text-slate-900">
            {t.loginTitle || "تسجيل الدخول"}
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            {t.loginSubtitle || "مرحباً بك مجدداً، أدخل بياناتك للوصول للوحة التحكم"}
          </p>
        </div>

        {/* نموذج تسجيل الدخول */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">

          {/* رسالة الخطأ */}
          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-100 text-red-600 px-4 py-3 text-sm text-center">
              {error}
            </div>
          )}

          {/* رسالة النجاح (عند إرسال رابط الاستعادة) */}
          {message && (
            <div className="mb-5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-3 text-sm text-center">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">

            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.emailLabel || "البريد الإلكتروني"}
              </label>

              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 ps-11 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
                />
                <Mail className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-slate-400" />
              </div>
            </div>

            {/* كلمة المرور */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700">
                  {t.passwordLabel || "كلمة المرور"}
                </label>
                
                {/* زر نسيت كلمة المرور */}
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={resetLoading}
                  className="text-xs font-medium text-[#067492] hover:underline cursor-pointer disabled:opacity-50"
                >
                  {resetLoading ? "جاري الإرسال..." : "نسيت كلمة المرور؟"}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  autoComplete="current-password"
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 pe-12 ps-11 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
                />
                <Lock className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-slate-400" />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-500 hover:text-[#067492]"
                  aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* زر تسجيل الدخول */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-[#067492] hover:bg-[#055d75] flex items-center justify-center text-white font-bold transition cursor-pointer disabled:opacity-50"
            >
              {loading ? "جاري تسجيل الدخول..." : (t.loginBtn || "تسجيل الدخول")}
            </button>

          </form>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          {t.secureDataNotice || "جميع بياناتك محمية وآمنة"}
        </p>

      </div>
    </main>
  );
}