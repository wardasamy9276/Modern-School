"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../context/LanguageContext";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Loader2,
  ShieldCheck,
} from "lucide-react";

import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

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

  // Firebase Error Messages (محدثة لتشمل أخطاء فايربيس الجديدة)
  const getFirebaseError = (errorCode: string) => {
    const errors: Record<string, string> = {
      "auth/invalid-email": "البريد الإلكتروني غير صحيح.",
      "auth/user-not-found": "لا يوجد حساب مسجل بهذا البريد الإلكتروني.",
      "auth/wrong-password": "كلمة المرور غير صحيحة.",
      "auth/invalid-credential": "بيانات الدخول غير صحيحة، يرجى التأكد من البريد أو إعادة تعيين كلمة المرور.",
      "auth/user-disabled": "هذا الحساب تم تعطيله.",
      "auth/too-many-requests": "محاولات كثيرة، حاولي مرة أخرى بعد قليل.",
      "auth/network-request-failed": "تعذر الاتصال بالإنترنت، تحققي من اتصالك.",
      "auth/operation-not-allowed": "تسجيل الدخول بالبريد الإلكتروني غير مفعل في فايربيس.",
    };

    // إذا كان الخطأ غير مضاف، سيظهر لنا كود الخطأ الحقيقي لنتمكن من معرفته فورا
    return errors[errorCode] || `خطأ من فايربيس (${errorCode || "unknown"})`;
  };

  // Login
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
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/dashboard");
      router.refresh();
    } catch (err: unknown) {
      console.error("Firebase Login Error:", err);
      
      const errorCode =
        typeof err === "object" && err !== null && "code" in err
          ? String(err.code)
          : "";

      setError(getFirebaseError(errorCode));
    } finally {
      setLoading(false);
    }
  };

  // Forgot Password
  const handleForgotPassword = async () => {
    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("من فضلك أدخل بريدك الإلكتروني أولاً.");
      return;
    }

    setResetLoading(true);

    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMessage("تم إرسال رابط استعادة كلمة المرور. يرجى مراجعة بريدك الإلكتروني.");
    } catch (err: unknown) {
      console.error("Firebase Reset Error:", err);
      
      const errorCode =
        typeof err === "object" && err !== null && "code" in err
          ? String(err.code)
          : "";
      setError(getFirebaseError(errorCode));
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <main
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-cyan-50 via-white to-slate-100"
    >
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#067492] flex items-center justify-center shadow-lg shadow-cyan-900/20">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.loginTitle || "تسجيل الدخول"}
          </h1>
          <p className="text-sm text-slate-500 mt-3 leading-7">
            {t.loginSubtitle || "مرحباً بك مجدداً، أدخل بياناتك للوصول إلى لوحة التحكم"}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-6 sm:p-8">
          {error && (
            <div role="alert" className="mb-5 rounded-xl bg-red-50 border border-red-100 text-red-600 px-4 py-3 text-sm text-center leading-6 break-words">
              {error}
            </div>
          )}

          {message && (
            <div role="status" className="mb-5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-3 text-sm text-center leading-6">
              {message}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="login-email" className="block text-sm font-bold text-slate-700 mb-2">
                {t.emailLabel || "البريد الإلكتروني"}
              </label>
              <div className="relative">
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                  disabled={loading}
                  className="w-full h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 ps-12 text-sm text-slate-800 outline-none transition-all focus:border-[#067492] focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:opacity-60"
                />
                <Mail className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-slate-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="login-password" className="text-sm font-bold text-slate-700">
                  {t.passwordLabel || "كلمة المرور"}
                </label>
                <button
                  type="button"
                  onClick={handleForgotPassword}
                  disabled={resetLoading || loading}
                  className="text-xs font-semibold text-[#067492] hover:text-[#055d75] hover:underline disabled:opacity-50"
                >
                  {resetLoading ? "جاري الإرسال..." : "نسيت كلمة المرور؟"}
                </button>
              </div>

              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="أدخل كلمة المرور"
                  autoComplete="current-password"
                  required
                  disabled={loading}
                  className="w-full h-13 rounded-xl border border-slate-200 bg-slate-50 px-4 ps-12 pe-12 text-sm text-slate-800 outline-none transition-all focus:border-[#067492] focus:bg-white focus:ring-4 focus:ring-cyan-100 disabled:opacity-60"
                />
                <Lock className="w-5 h-5 absolute top-1/2 -translate-y-1/2 start-4 text-slate-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 end-4 text-slate-500 hover:text-[#067492]"
                  aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-13 rounded-xl bg-[#067492] hover:bg-[#055d75] flex items-center justify-center gap-3 text-white font-bold shadow-lg shadow-cyan-900/15 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  جاري تسجيل الدخول...
                </>
              ) : (
                t.loginBtn || "تسجيل الدخول"
              )}
            </button>
          </form>

          <div className="mt-7 pt-5 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            {t.secureDataNotice || "جميع بياناتك محمية وآمنة"}
          </div>
        </div>
      </div>
    </main>
  );
}