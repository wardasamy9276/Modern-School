
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const { t, language } = useLanguage();
  const isRtl = language === "ar";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError(t.errorNameRequired || "من فضلك أدخل الاسم");
      return;
    }

    if (!phone.trim()) {
      setError(t.errorPhoneRequired || "من فضلك أدخل رقم التليفون");
      return;
    }

    if (!email.trim()) {
      setError(t.errorEmailRequired || "من فضلك أدخل البريد الإلكتروني");
      return;
    }

    if (password.length < 6) {
      setError(
        t.errorPasswordLength ||
          "كلمة المرور يجب أن تكون 6 أحرف على الأقل"
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        t.errorPasswordMatch || "كلمة المرور غير متطابقة"
      );
      return;
    }

    // الانتقال إلى لوحة التحكم
    router.push("/dashboard");
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
            {t.registerTitle || "إنشاء حساب جديد"}
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            {t.registerSubtitle ||
              "أنشئ حسابك للوصول إلى لوحة التحكم"}
          </p>
        </div>

        {/* نموذج التسجيل */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 border border-red-100 text-red-600 px-4 py-3 text-sm text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">

            {/* الاسم */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.fullNameLabel || "الاسم الكامل"}
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.fullNamePlaceholder || "اكتب اسمك بالكامل"}
                autoComplete="name"
                required
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
              />
            </div>

            {/* رقم الهاتف */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.phoneLabel || "رقم التليفون"}
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01xxxxxxxxx"
                autoComplete="tel"
                required
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
              />
            </div>

            {/* البريد الإلكتروني */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.emailLabel || "البريد الإلكتروني"}
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                autoComplete="email"
                required
                className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
              />
            </div>

            {/* كلمة المرور */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.passwordLabel || "كلمة المرور"}
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  autoComplete="new-password"
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 pe-12 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
                />

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

              <p className="text-xs text-slate-400 mt-2">
                يجب أن تحتوي كلمة المرور على 6 أحرف على الأقل.
              </p>
            </div>

            {/* تأكيد كلمة المرور */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t.confirmPasswordLabel || "تأكيد كلمة المرور"}
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="أعد كتابة كلمة المرور"
                  autoComplete="new-password"
                  required
                  className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 pe-12 text-sm outline-none focus:border-[#067492] focus:bg-white focus:ring-2 focus:ring-cyan-100 text-slate-800"
                />

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

            {/* إنشاء الحساب */}
            <button
              type="submit"
              className="w-full h-12 rounded-xl bg-[#067492] hover:bg-[#055d75] flex items-center justify-center text-white font-bold transition cursor-pointer"
            >
              {t.finishRegisterBtn || "إنشاء الحساب والدخول"}
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
