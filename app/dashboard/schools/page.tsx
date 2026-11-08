// "use client";

// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useLanguage } from "../../context/LanguageContext";

// interface School {
//   id: number;

//   name: string;
//   name_ar: string | null;
//   name_en: string | null;
//   name_it: string | null;

//   email: string | null;
//   phone: string | null;

//   address: string | null;
//   address_ar: string | null;
//   address_en: string | null;
//   address_it: string | null;

//   image: string | null;
// }

// interface SchoolDraft {
//   tempId: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   image: File | null;
//   imagePreview: string | null;
//   saving: boolean;
// }

// export default function SchoolsPage() {
//   const { language } = useLanguage();

//   const currentLanguage = String(language);

//   const isArabic = currentLanguage === "ar";
//   const isItalian = currentLanguage === "it";

//   const API_URL = "http://localhost:8000/api";
//   const STORAGE_URL = "http://localhost:8000/storage";

//   // =========================
//   // Translation
//   // =========================

//   const t = {
//     loading: isArabic
//       ? "جاري التحميل..."
//       : isItalian
//         ? "Caricamento..."
//         : "Loading...",

//     schools: isArabic ? "المدارس" : isItalian ? "Scuole" : "Schools",

//     manageSchools: isArabic
//       ? "إدارة المدارس"
//       : isItalian
//         ? "Gestione delle scuole"
//         : "Manage schools",

//     addSchool: isArabic
//       ? "إضافة مدرسة"
//       : isItalian
//         ? "Aggiungi scuola"
//         : "Add School",

//     restoreSchool: isArabic
//       ? "استعادة المدرسة"
//       : isItalian
//         ? "Ripristina scuola"
//         : "Restore School",

//     schoolImage: isArabic
//       ? "صورة المدرسة"
//       : isItalian
//         ? "Immagine della scuola"
//         : "School Image",

//     addSchoolImage: isArabic
//       ? "إضافة صورة المدرسة"
//       : isItalian
//         ? "Aggiungi immagine della scuola"
//         : "Add School Image",

//     changeImage: isArabic
//       ? "تغيير الصورة"
//       : isItalian
//         ? "Cambia immagine"
//         : "Change Image",

//     schoolName: isArabic
//       ? "اسم المدرسة"
//       : isItalian
//         ? "Nome della scuola"
//         : "School Name",

//     email: isArabic ? "البريد الإلكتروني" : "Email",

//     phone: isArabic ? "الهاتف" : isItalian ? "Telefono" : "Phone",

//     address: isArabic ? "العنوان" : isItalian ? "Indirizzo" : "Address",

//     save: isArabic ? "حفظ" : isItalian ? "Salva" : "Save",

//     saving: isArabic
//       ? "جاري الحفظ..."
//       : isItalian
//         ? "Salvataggio..."
//         : "Saving...",

//     cancel: isArabic ? "إلغاء" : isItalian ? "Annulla" : "Cancel",

//     edit: isArabic ? "تعديل" : isItalian ? "Modifica" : "Edit",

//     hideSchool: isArabic
//       ? "إخفاء المدرسة"
//       : isItalian
//         ? "Nascondi scuola"
//         : "Hide School",

//     noSchools: isArabic
//       ? "لا توجد مدارس"
//       : isItalian
//         ? "Nessuna scuola trovata"
//         : "No Schools Found",

//     addFirstSchool: isArabic
//       ? "اضغط على إضافة مدرسة لإضافة أول مدرسة."
//       : isItalian
//         ? "Fai clic su Aggiungi scuola per aggiungere la prima scuola."
//         : "Click Add School to add your first school.",

//     schoolRequired: isArabic
//       ? "اسم المدرسة مطلوب"
//       : isItalian
//         ? "Il nome della scuola è obbligatorio"
//         : "School name is required",

//     addSuccess: isArabic
//       ? "تمت إضافة المدرسة بنجاح"
//       : isItalian
//         ? "Scuola aggiunta con successo"
//         : "School added successfully",

//     editSuccess: isArabic
//       ? "تم تعديل المدرسة بنجاح"
//       : isItalian
//         ? "Scuola modificata con successo"
//         : "School updated successfully",

//     fetchError: isArabic
//       ? "حدث خطأ أثناء تحميل المدارس"
//       : isItalian
//         ? "Si è verificato un errore durante il caricamento delle scuole"
//         : "Failed to fetch schools",

//     addError: isArabic
//       ? "حدث خطأ أثناء إضافة المدرسة"
//       : isItalian
//         ? "Si è verificato un errore أثناء إضافة المدرسة"
//         : "An error occurred while adding the school",

//     editError: isArabic
//       ? "حدث خطأ أثناء تعديل المدرسة"
//       : isItalian
//         ? "Si è verificato un errore durante la modifica della scuola"
//         : "An error occurred while editing the school",

//     id: isArabic ? "رقم" : "ID",

//     preview: isArabic ? "معاينة" : isItalian ? "Anteprima" : "Preview",
//   };

//   const direction = isArabic ? "rtl" : "ltr";

//   // =========================
//   // Translation Helpers
//   // =========================

//   const getSchoolName = (school: School) => {
//     if (isArabic) {
//       return school.name_ar || school.name;
//     }

//     if (isItalian) {
//       return school.name_it || school.name;
//     }

//     return school.name_en || school.name;
//   };

//   const getSchoolAddress = (school: School) => {
//     if (isArabic) {
//       return school.address_ar || school.address;
//     }

//     if (isItalian) {
//       return school.address_it || school.address;
//     }

//     return school.address_en || school.address;
//   };

//   // =========================
//   // State
//   // =========================

//   const [schools, setSchools] = useState<School[]>([]);
//   const [drafts, setDrafts] = useState<SchoolDraft[]>([]);
//   const [hiddenSchools, setHiddenSchools] = useState<number[]>([]);

//   const [editingSchoolId, setEditingSchoolId] = useState<number | null>(null);

//   const [editData, setEditData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//   });

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // =========================
//   // Hidden Schools
//   // =========================

//   useEffect(() => {
//     const saved = localStorage.getItem("hiddenSchools");

//     if (saved) {
//       try {
//         setHiddenSchools(JSON.parse(saved));
//       } catch {
//         localStorage.removeItem("hiddenSchools");
//       }
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("hiddenSchools", JSON.stringify(hiddenSchools));
//   }, [hiddenSchools]);

//   // =========================
//   // Restore
//   // =========================

//   const restoreSchool = (id: number) => {
//     setHiddenSchools((prev) => prev.filter((schoolId) => schoolId !== id));
//   };

//   // =========================
//   // Get Schools
//   // =========================

//   const getSchools = async () => {
//     try {
//       setError("");

//       const response = await fetch(`${API_URL}/schools`, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//         },
//         cache: "no-store",
//       });

//       const data = await response.json().catch(() => null);

//       if (!response.ok) {
//         throw new Error(data?.message || t.fetchError);
//       }

//       const schoolsData = Array.isArray(data) ? data : data?.data || [];

//       setSchools(schoolsData);
//     } catch (error) {
//       console.error("GET SCHOOLS ERROR:", error);

//       setError(error instanceof Error ? error.message : t.fetchError);
//     }
//   };

//   useEffect(() => {
//     const load = async () => {
//       setLoading(true);

//       await getSchools();

//       setLoading(false);
//     };

//     load();
//   }, [currentLanguage]);

//   // =========================
//   // ADD SCHOOL CARD
//   // =========================

//   const addSchoolCard = () => {
//     setDrafts((prev) => [
//       ...prev,
//       {
//         tempId: `${Date.now()}-${Math.random()}`,
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         image: null,
//         imagePreview: null,
//         saving: false,
//       },
//     ]);

//     setError("");
//   };

//   // =========================
//   // CHANGE DRAFT
//   // =========================

//   const handleDraftChange = (
//     tempId: string,
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;

//     setDrafts((prev) =>
//       prev.map((draft) =>
//         draft.tempId === tempId
//           ? {
//               ...draft,
//               [name]: value,
//             }
//           : draft,
//       ),
//     );
//   };

//   // =========================
//   // IMAGE
//   // =========================

//   const handleDraftImageChange = (
//     tempId: string,
//     e: ChangeEvent<HTMLInputElement>,
//   ) => {
//     const file = e.target.files?.[0];

//     if (!file) return;

//     const preview = URL.createObjectURL(file);

//     setDrafts((prev) =>
//       prev.map((draft) => {
//         if (draft.tempId !== tempId) {
//           return draft;
//         }

//         if (draft.imagePreview) {
//           URL.revokeObjectURL(draft.imagePreview);
//         }

//         return {
//           ...draft,
//           image: file,
//           imagePreview: preview,
//         };
//       }),
//     );
//   };

//   // =========================
//   // DELETE NEW CARD
//   // =========================

//   const deleteDraft = (tempId: string) => {
//     setDrafts((prev) => {
//       const draft = prev.find((item) => item.tempId === tempId);

//       if (draft?.imagePreview) {
//         URL.revokeObjectURL(draft.imagePreview);
//       }

//       return prev.filter((item) => item.tempId !== tempId);
//     });
//   };

//   // =========================
//   // ADD SCHOOL
//   // =========================

//   const handleAddSchool = async (
//     e: FormEvent<HTMLFormElement>,
//     draft: SchoolDraft,
//   ) => {
//     e.preventDefault();

//     if (!draft.name.trim()) {
//       setError(t.schoolRequired);
//       return;
//     }

//     try {
//       setError("");

//       setDrafts((prev) =>
//         prev.map((item) =>
//           item.tempId === draft.tempId
//             ? {
//                 ...item,
//                 saving: true,
//               }
//             : item,
//         ),
//       );

//       const formData = new FormData();

//       formData.append("name", draft.name.trim());

//       formData.append("email", draft.email.trim());

//       formData.append("phone", draft.phone.trim());

//       formData.append("address", draft.address.trim());

//       if (draft.image) {
//         formData.append("image", draft.image);
//       }

//       const response = await fetch(`${API_URL}/schools`, {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//         },
//         body: formData,
//       });

//       const data = await response.json().catch(() => null);

//       if (!response.ok) {
//         throw new Error(data?.message || t.addError);
//       }

//       if (data?.data) {
//         setSchools((prev) => [data.data, ...prev]);
//       } else {
//         await getSchools();
//       }

//       setDrafts((prev) => prev.filter((item) => item.tempId !== draft.tempId));

//       if (draft.imagePreview) {
//         URL.revokeObjectURL(draft.imagePreview);
//       }

//       alert(t.addSuccess);
//     } catch (error) {
//       console.error("ADD SCHOOL ERROR:", error);

//       setError(error instanceof Error ? error.message : t.addError);

//       setDrafts((prev) =>
//         prev.map((item) =>
//           item.tempId === draft.tempId
//             ? {
//                 ...item,
//                 saving: false,
//               }
//             : item,
//         ),
//       );
//     }
//   };

//   // =========================
//   // EDIT SCHOOL
//   // =========================

//   const startEditSchool = (school: School) => {
//     setEditingSchoolId(school.id);

//     setEditData({
//       name:
//         (isArabic
//           ? school.name_ar
//           : isItalian
//             ? school.name_it
//             : school.name_en) ||
//         school.name ||
//         "",

//       email: school.email || "",

//       phone: school.phone || "",

//       address:
//         (isArabic
//           ? school.address_ar
//           : isItalian
//             ? school.address_it
//             : school.address_en) ||
//         school.address ||
//         "",
//     });

//     setError("");
//   };

//   const handleEditChange = (
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value } = e.target;

//     setEditData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const cancelEdit = () => {
//     setEditingSchoolId(null);

//     setEditData({
//       name: "",
//       email: "",
//       phone: "",
//       address: "",
//     });

//     setError("");
//   };

//   const saveEditSchool = async (id: number) => {
//     if (!editData.name.trim()) {
//       setError(t.schoolRequired);
//       return;
//     }

//     try {
//       setError("");

//       const response = await fetch(`${API_URL}/schools/${id}`, {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: editData.name.trim(),
//           email: editData.email.trim(),
//           phone: editData.phone.trim(),
//           address: editData.address.trim(),
//         }),
//       });

//       const data = await response.json().catch(() => null);

//       if (!response.ok) {
//         throw new Error(data?.message || t.editError);
//       }

//       const updatedSchool = data?.data || data;

//       setSchools((prev) =>
//         prev.map((school) =>
//           school.id === id
//             ? {
//                 ...school,
//                 ...updatedSchool,
//               }
//             : school,
//         ),
//       );

//       setEditingSchoolId(null);

//       setEditData({
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//       });

//       alert(t.editSuccess);
//     } catch (error) {
//       console.error("EDIT SCHOOL ERROR:", error);

//       setError(error instanceof Error ? error.message : t.editError);
//     }
//   };

//   // =========================
//   // HIDE SCHOOL
//   // =========================

//   const deleteSchool = (id: number) => {
//     setHiddenSchools((prev) => (prev.includes(id) ? prev : [...prev, id]));
//   };

//   // =========================
//   // IMAGE URL
//   // =========================

//   const getImageUrl = (image: string | null) => {
//     if (!image) {
//       return null;
//     }

//     if (image.startsWith("http://") || image.startsWith("https://")) {
//       return image;
//     }

//     return `${STORAGE_URL}/${image}`;
//   };

//   // =========================
//   // LOADING
//   // =========================

//   if (loading) {
//     return (
//       <div
//         dir={direction}
//         className="min-h-screen flex items-center justify-center"
//       >
//         <p className="text-gray-400">{t.loading}</p>
//       </div>
//     );
//   }

//   const visibleSchools = schools.filter(
//     (school) => !hiddenSchools.includes(school.id),
//   );

//   return (
//     <div dir={direction} className="min-h-screen">
//       {/* =========================
//           RESTORE
//       ========================= */}

//       {hiddenSchools.length > 0 && (
//         <button
//           type="button"
//           onClick={() => {
//             const id = hiddenSchools[hiddenSchools.length - 1];

//             restoreSchool(id);
//           }}
//           className="
//             flex items-center gap-2
//             bg-[#1e2536]
//             hover:bg-[#2a3348]
//             text-white
//             font-bold
//             px-4 py-2.5
//             rounded-xl
//             transition
//             mb-4
//             text-sm
//           "
//         >
//           ↩ {t.restoreSchool}
//         </button>
//       )}

//       {/* =========================
//           HEADER
//       ========================= */}

//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-white">{t.schools}</h1>

//           <p className="text-gray-400 mt-1 text-sm">{t.manageSchools}</p>
//         </div>

//         <button
//           type="button"
//           onClick={addSchoolCard}
//           className="
//             flex items-center gap-2
//             bg-[#9E7C2F]
//             hover:bg-[#b58d36]
//             text-black
//             font-bold
//             px-4 py-2.5
//             rounded-xl
//             transition
//             text-sm
//           "
//         >
//           <span className="text-lg">+</span>

//           {t.addSchool}
//         </button>
//       </div>

//       {/* =========================
//           ERROR
//       ========================= */}

//       {error && (
//         <div
//           className="
//             bg-red-500/10
//             border border-red-500/30
//             text-red-400
//             p-3
//             rounded-xl
//             mb-5
//             text-sm
//           "
//         >
//           {error}
//         </div>
//       )}

//       {/* =========================
//           GRID
//       ========================= */}

//       <div
//         className="
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           lg:grid-cols-3
//           xl:grid-cols-4
//           gap-4
//         "
//       >
//         {/* =========================
//             NEW SCHOOL CARDS
//         ========================= */}

//         {drafts.map((draft) => (
//           <form
//             key={draft.tempId}
//             onSubmit={(e) => handleAddSchool(e, draft)}
//             className="
//               bg-[#121622]
//               border border-[#9E7C2F]
//               rounded-xl
//               overflow-hidden
//               shadow-lg
//             "
//           >
//             <div
//               className="
//                 h-32
//                 bg-[#181e2b]
//                 flex items-center justify-center
//                 overflow-hidden
//                 relative
//               "
//             >
//               {draft.imagePreview ? (
//                 <img
//                   src={draft.imagePreview}
//                   alt={t.preview}
//                   className="
//                     w-full
//                     h-full
//                     object-cover
//                   "
//                 />
//               ) : (
//                 <label
//                   htmlFor={`school-image-${draft.tempId}`}
//                   className="
//                     cursor-pointer
//                     flex flex-col
//                     items-center justify-center
//                     w-full
//                     h-full
//                     text-gray-400
//                     hover:text-white
//                   "
//                 >
//                   <span className="text-4xl mb-1">📷</span>

//                   <span className="text-xs">{t.addSchoolImage}</span>
//                 </label>
//               )}

//               <input
//                 id={`school-image-${draft.tempId}`}
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => handleDraftImageChange(draft.tempId, e)}
//                 className="hidden"
//               />

//               {draft.imagePreview && (
//                 <label
//                   htmlFor={`school-image-${draft.tempId}`}
//                   className="
//                     absolute bottom-2 right-2
//                     bg-black/70
//                     text-white
//                     px-2.5
//                     py-1.5
//                     rounded-lg
//                     cursor-pointer
//                     text-[11px]
//                   "
//                 >
//                   {t.changeImage}
//                 </label>
//               )}
//             </div>

//             <div className="p-3">
//               <input
//                 type="text"
//                 name="name"
//                 value={draft.name}
//                 onChange={(e) => handleDraftChange(draft.tempId, e)}
//                 placeholder={t.schoolName}
//                 className="
//                   w-full
//                   bg-[#181e2b]
//                   border border-[#1e2536]
//                   rounded-lg
//                   px-3 py-2
//                   text-white
//                   text-sm
//                   outline-none
//                   focus:border-[#9E7C2F]
//                   mb-2
//                 "
//               />

//               <input
//                 type="email"
//                 name="email"
//                 value={draft.email}
//                 onChange={(e) => handleDraftChange(draft.tempId, e)}
//                 placeholder={t.email}
//                 className="
//                   w-full
//                   bg-[#181e2b]
//                   border border-[#1e2536]
//                   rounded-lg
//                   px-3 py-2
//                   text-white
//                   text-sm
//                   outline-none
//                   focus:border-[#9E7C2F]
//                   mb-2
//                 "
//               />

//               <input
//                 type="text"
//                 name="phone"
//                 value={draft.phone}
//                 onChange={(e) => handleDraftChange(draft.tempId, e)}
//                 placeholder={t.phone}
//                 className="
//                   w-full
//                   bg-[#181e2b]
//                   border border-[#1e2536]
//                   rounded-lg
//                   px-3 py-2
//                   text-white
//                   text-sm
//                   outline-none
//                   focus:border-[#9E7C2F]
//                   mb-2
//                 "
//               />

//               <textarea
//                 name="address"
//                 value={draft.address}
//                 onChange={(e) => handleDraftChange(draft.tempId, e)}
//                 placeholder={t.address}
//                 rows={2}
//                 className="
//                   w-full
//                   bg-[#181e2b]
//                   border border-[#1e2536]
//                   rounded-lg
//                   px-3 py-2
//                   text-white
//                   text-sm
//                   outline-none
//                   focus:border-[#9E7C2F]
//                   resize-none
//                   mb-3
//                 "
//               />

//               <div className="flex gap-2">
//                 <button
//                   type="submit"
//                   disabled={draft.saving}
//                   className="
//                     flex-1
//                     bg-[#9E7C2F]
//                     hover:bg-[#b58d36]
//                     text-black
//                     font-bold
//                     py-2
//                     rounded-lg
//                     transition
//                     disabled:opacity-50
//                     text-sm
//                   "
//                 >
//                   {draft.saving ? t.saving : t.save}
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => deleteDraft(draft.tempId)}
//                   disabled={draft.saving}
//                   className="
//                     w-10
//                     flex items-center justify-center
//                     bg-red-500/10
//                     border border-red-500/20
//                     text-red-500
//                     hover:bg-red-500/20
//                     rounded-lg
//                   "
//                   title={t.cancel}
//                 >
//                   🗑️
//                 </button>
//               </div>
//             </div>
//           </form>
//         ))}

//         {/* =========================
//             EXISTING SCHOOLS
//         ========================= */}

//         {visibleSchools.map((school) => (
//           <div
//             key={school.id}
//             className="
//                 bg-[#121622]
//                 border border-[#1e2536]
//                 rounded-xl
//                 overflow-hidden
//                 hover:border-[#9E7C2F]
//                 transition
//                 group
//               "
//           >
//             {/* IMAGE */}

//             <div
//               className="
//                   h-32
//                   bg-[#181e2b]
//                   flex items-center justify-center
//                   overflow-hidden
//                 "
//             >
//               {school.image ? (
//                 <img
//                   src={getImageUrl(school.image) || ""}
//                   alt={getSchoolName(school)}
//                   className="
//                       w-full
//                       h-full
//                       object-cover
//                       group-hover:scale-105
//                       transition
//                       duration-300
//                     "
//                 />
//               ) : (
//                 <div className="text-5xl">🏫</div>
//               )}
//             </div>

//             {/* NORMAL / EDIT MODE */}

//             <div className="p-3">
//               {editingSchoolId === school.id ? (
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     value={editData.name}
//                     onChange={handleEditChange}
//                     placeholder={t.schoolName}
//                     className="
//                         w-full
//                         bg-[#181e2b]
//                         border border-[#9E7C2F]
//                         rounded-lg
//                         px-3 py-2
//                         text-white
//                         text-sm
//                         outline-none
//                         mb-2
//                       "
//                   />

//                   <input
//                     type="email"
//                     name="email"
//                     value={editData.email}
//                     onChange={handleEditChange}
//                     placeholder={t.email}
//                     className="
//                         w-full
//                         bg-[#181e2b]
//                         border border-[#1e2536]
//                         rounded-lg
//                         px-3 py-2
//                         text-white
//                         text-sm
//                         outline-none
//                         mb-2
//                       "
//                   />

//                   <input
//                     type="text"
//                     name="phone"
//                     value={editData.phone}
//                     onChange={handleEditChange}
//                     placeholder={t.phone}
//                     className="
//                         w-full
//                         bg-[#181e2b]
//                         border border-[#1e2536]
//                         rounded-lg
//                         px-3 py-2
//                         text-white
//                         text-sm
//                         outline-none
//                         mb-2
//                       "
//                   />

//                   <textarea
//                     name="address"
//                     value={editData.address}
//                     onChange={handleEditChange}
//                     placeholder={t.address}
//                     rows={2}
//                     className="
//                         w-full
//                         bg-[#181e2b]
//                         border border-[#1e2536]
//                         rounded-lg
//                         px-3 py-2
//                         text-white
//                         text-sm
//                         outline-none
//                         resize-none
//                         mb-3
//                       "
//                   />

//                   <div className="flex gap-2">
//                     <button
//                       type="button"
//                       onClick={() => saveEditSchool(school.id)}
//                       className="
//                           flex-1
//                           bg-[#9E7C2F]
//                           hover:bg-[#b58d36]
//                           text-black
//                           font-bold
//                           py-2
//                           rounded-lg
//                           text-sm
//                         "
//                     >
//                       {t.save}
//                     </button>

//                     <button
//                       type="button"
//                       onClick={cancelEdit}
//                       className="
//                           flex-1
//                           bg-[#1e2536]
//                           hover:bg-[#2a3348]
//                           text-white
//                           font-bold
//                           py-2
//                           rounded-lg
//                           text-sm
//                         "
//                     >
//                       {t.cancel}
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <>
//                   <h2
//                     className="
//                         text-base
//                         font-bold
//                         text-white
//                         line-clamp-1
//                       "
//                   >
//                     {getSchoolName(school)}
//                   </h2>

//                   <p className="text-gray-500 text-[11px] mt-1">
//                     {t.id} #{school.id}
//                   </p>

//                   <div className="mt-3 space-y-1.5">
//                     {school.email && (
//                       <p className="text-gray-400 text-xs truncate">
//                         ✉️ {school.email}
//                       </p>
//                     )}

//                     {school.phone && (
//                       <p className="text-gray-400 text-xs">📞 {school.phone}</p>
//                     )}

//                     {getSchoolAddress(school) && (
//                       <p className="text-gray-400 text-xs truncate">
//                         📍 {getSchoolAddress(school)}
//                       </p>
//                     )}
//                   </div>

//                   {/* ACTIONS */}

//                   <div
//                     className="
//                         flex items-center justify-between
//                         mt-4 pt-3
//                         border-t border-[#1e2536]
//                       "
//                   >
//                     <button
//                       type="button"
//                       onClick={() => startEditSchool(school)}
//                       className="
//                           text-blue-400
//                           hover:text-blue-300
//                           text-xs
//                           font-medium
//                         "
//                     >
//                       {t.edit}
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => deleteSchool(school.id)}
//                       className="
//                           p-1.5
//                           rounded-lg
//                           text-red-500
//                           hover:bg-red-500/10
//                           hover:text-red-400
//                           transition
//                         "
//                       title={t.hideSchool}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.8}
//                         stroke="currentColor"
//                         className="w-4 h-4"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="
//                               M6 7h12
//                               M9 7V5
//                               a1 1 0 0 1 1-1h4
//                               a1 1 0 0 1 1 1v2
//                               m2 0v12
//                               a2 2 0 0 1-2 2H9
//                               a2 2 0 0 1-2-2V7
//                               m3 4v6
//                               m4-6v6
//                             "
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* =========================
//           EMPTY
//       ========================= */}

//       {visibleSchools.length === 0 && drafts.length === 0 && (
//         <div
//           className="
//               bg-[#121622]
//               border border-[#1e2536]
//               rounded-xl
//               p-8
//               text-center
//               mt-4
//             "
//         >
//           <div className="text-4xl mb-3">🏫</div>

//           <p className="text-gray-300 text-base">{t.noSchools}</p>

//           <p className="text-gray-500 text-sm mt-1">{t.addFirstSchool}</p>

//           <button
//             type="button"
//             onClick={addSchoolCard}
//             className="
//                 mt-5
//                 bg-[#9E7C2F]
//                 hover:bg-[#b58d36]
//                 text-black
//                 font-bold
//                 px-4 py-2.5
//                 rounded-xl
//                 text-sm
//               "
//           >
//             + {t.addSchool}
//           </button>
//         </div>
//       )}
//     </div>
//   );






"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

import {
  School,
  GraduationCap,
  MapPin,
  Star,
  Building2,
  Sparkles,
  Plus,
  Search,
  Edit,
  Eye,
  EyeOff,
  Trash2,
  X,
  Save,
  Mail,
  Phone,
  ImagePlus,
  RefreshCw,
} from "lucide-react";

// ================= TYPES =================

type SchoolType = {
  id: number;
  name: string;
  name_ar: string;
  name_en: string;
  email: string;
  phone: string;
  address: string;
  address_ar: string;
  address_en: string;
  image: string | null;
};

type FormType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  image: File | null;
  imagePreview: string | null;
};

type DraftType = FormType & {
  id: number;
};

type LanguageType = "ar" | "en";

const STORAGE_KEY = "staticSchools";
const HIDDEN_KEY = "staticHiddenSchools";

// ================= INITIAL DATA =================

const initialSchools: SchoolType[] = [
  {
    id: 1,
    name: "Al Rowad Modern School",
    name_ar: "مدرسة الرواد الحديثة",
    name_en: "Al Rowad Modern School",
    email: "info@rowad-school.com",
    phone: "01000000000",
    address: "6 October, Giza",
    address_ar: "السادس من أكتوبر، الجيزة",
    address_en: "6 October, Giza",
    image: null,
  },
  {
    id: 2,
    name: "Al Rowad Language School",
    name_ar: "مدرسة الرواد للغات",
    name_en: "Al Rowad Language School",
    email: "languages@rowad-school.com",
    phone: "01100000000",
    address: "Sheikh Zayed, Giza",
    address_ar: "الشيخ زايد، الجيزة",
    address_en: "Sheikh Zayed, Giza",
    image: null,
  },
  {
    id: 3,
    name: "Future Generation School",
    name_ar: "مدرسة جيل المستقبل",
    name_en: "Future Generation School",
    email: "future@rowad-school.com",
    phone: "01200000000",
    address: "October Gardens, Giza",
    address_ar: "حدائق أكتوبر، الجيزة",
    address_en: "October Gardens, Giza",
    image: null,
  },
];

const emptyForm: FormType = {
  name: "",
  email: "",
  phone: "",
  address: "",
  image: null,
  imagePreview: null,
};

// ================= IMAGE READER =================

function readFileAsDataURL(
  file: File | null
): Promise<string | null> {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        resolve(null);
      }
    };

    reader.onerror = () => {
      reject(new Error("Image could not be read"));
    };

    reader.readAsDataURL(file);
  });
}

// ================= COMPONENT =================

export default function SchoolsPage() {
  const { language } = useLanguage();

  const currentLanguage: LanguageType =
    language === "ar" ? "ar" : "en";

  const [schools, setSchools] = useState<SchoolType[]>(initialSchools);
  const [hiddenSchools, setHiddenSchools] = useState<number[]>([]);
  const [drafts, setDrafts] = useState<DraftType[]>([]);

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [showHidden, setShowHidden] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const [editingSchoolId, setEditingSchoolId] = useState<number | null>(
    null
  );

  const [editData, setEditData] = useState<FormType>(emptyForm);

  const [schoolsLoaded, setSchoolsLoaded] = useState(false);
  const [hiddenLoaded, setHiddenLoaded] = useState(false);

  const isRtl = currentLanguage === "ar";

  // ================= TRANSLATIONS =================

  const t = {
    ar: {
      title: "مدارسنا",
      subtitle: "اكتشف المدارس التابعة لمنظومة الرواد الحديثة",
      add: "إضافة مدرسة",
      search: "ابحث عن مدرسة...",
      total: "إجمالي المدارس",
      active: "المدارس النشطة",
      hidden: "المدارس المخفية",
      name: "اسم المدرسة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      address: "العنوان",
      image: "صورة المدرسة",
      save: "حفظ البيانات",
      cancel: "إلغاء",
      edit: "تعديل",
      hide: "إخفاء",
      restore: "استعادة",
      delete: "حذف",
      empty: "لا توجد مدارس",
      noResults: "لا توجد نتائج مطابقة للبحث",
      addSuccess: "تمت إضافة المدرسة بنجاح",
      editSuccess: "تم تعديل بيانات المدرسة",
      required: "من فضلك أدخل اسم المدرسة",
      loading: "جاري تحميل المدارس...",
      hiddenTitle: "المدارس المخفية",
      showActive: "عرض المدارس النشطة",
      showHidden: "عرض المدارس المخفية",
      confirmDelete: "هل أنت متأكد من حذف هذه المدرسة؟",
      draft: "مدرسة جديدة",
      chooseImage: "اختر صورة",
      all: "كل المدارس",
      close: "إغلاق",
      emptyHint: "ابدأ بإضافة أول مدرسة إلى النظام",
    },

    en: {
      title: "Our Schools",
      subtitle: "Discover schools in Al Rowad Modern School system",
      add: "Add School",
      search: "Search schools...",
      total: "Total Schools",
      active: "Active Schools",
      hidden: "Hidden Schools",
      name: "School Name",
      email: "Email Address",
      phone: "Phone Number",
      address: "Address",
      image: "School Image",
      save: "Save Changes",
      cancel: "Cancel",
      edit: "Edit",
      hide: "Hide",
      restore: "Restore",
      delete: "Delete",
      empty: "No schools found",
      noResults: "No matching search results",
      addSuccess: "School added successfully",
      editSuccess: "School updated successfully",
      required: "Please enter the school name",
      loading: "Loading schools...",
      hiddenTitle: "Hidden Schools",
      showActive: "Show Active Schools",
      showHidden: "Show Hidden Schools",
      confirmDelete: "Are you sure you want to delete this school?",
      draft: "New School",
      chooseImage: "Choose Image",
      all: "All Schools",
      close: "Close",
      emptyHint: "Start by adding your first school",
    },
  };

  const words = t[currentLanguage];

  // ================= LOAD LOCAL STORAGE =================

  useEffect(() => {
    try {
      const savedSchools = localStorage.getItem(STORAGE_KEY);
      const savedHidden = localStorage.getItem(HIDDEN_KEY);

      if (savedSchools) {
        const parsedSchools = JSON.parse(savedSchools) as SchoolType[];

        // Remove old Italian fields from previously saved records.
        const cleanedSchools = parsedSchools.map((school) => {
          const legacySchool = school as SchoolType & {
            name_it?: string;
            address_it?: string;
          };

          const {
            name_it,
            address_it,
            ...cleanSchool
          } = legacySchool;

          return cleanSchool;
        });

        setSchools(cleanedSchools);
      }

      if (savedHidden) {
        setHiddenSchools(JSON.parse(savedHidden) as number[]);
      }
    } catch (error) {
      console.error("Local storage loading error:", error);
    } finally {
      setSchoolsLoaded(true);
      setHiddenLoaded(true);
      setLoading(false);
    }
  }, []);

  // ================= SAVE SCHOOLS =================

  useEffect(() => {
    if (!schoolsLoaded) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(schools));
    } catch (error) {
      console.error("Could not save schools:", error);

      alert(
        currentLanguage === "ar"
          ? "مساحة التخزين ممتلئة. جربي صورة أصغر."
          : "Storage is full. Try a smaller image."
      );
    }
  }, [schools, schoolsLoaded, currentLanguage]);

  // ================= SAVE HIDDEN SCHOOLS =================

  useEffect(() => {
    if (!hiddenLoaded) return;

    try {
      localStorage.setItem(HIDDEN_KEY, JSON.stringify(hiddenSchools));
    } catch (error) {
      console.error("Could not save hidden schools:", error);
    }
  }, [hiddenSchools, hiddenLoaded]);

  // ================= LANGUAGE HELPERS =================

  const getSchoolName = (school: SchoolType): string => {
    if (currentLanguage === "ar") {
      return school.name_ar || school.name;
    }

    return school.name_en || school.name;
  };

  const getSchoolAddress = (school: SchoolType): string => {
    if (currentLanguage === "ar") {
      return school.address_ar || school.address;
    }

    return school.address_en || school.address;
  };

  // ================= FILTER SCHOOLS =================

  const activeSchools = schools.filter(
    (school) => !hiddenSchools.includes(school.id)
  );

  const hiddenSchoolsData = schools.filter((school) =>
    hiddenSchools.includes(school.id)
  );

  const displayedSchools = showHidden
    ? hiddenSchoolsData
    : activeSchools;

  const filteredSchools = displayedSchools.filter((school) => {
    const query = search.toLowerCase();

    return (
      getSchoolName(school).toLowerCase().includes(query) ||
      (school.email || "").toLowerCase().includes(query) ||
      (school.phone || "").toLowerCase().includes(query) ||
      getSchoolAddress(school).toLowerCase().includes(query)
    );
  });

  // ================= DRAFT FUNCTIONS =================

  const updateDraft = (
    id: number,
    field: "name" | "email" | "phone" | "address",
    value: string
  ) => {
    setDrafts((previous) =>
      previous.map((draft) =>
        draft.id === id ? { ...draft, [field]: value } : draft
      )
    );
  };

  const handleDraftImage = (id: number, file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert(
        currentLanguage === "ar"
          ? "من فضلك اختاري ملف صورة صحيح"
          : "Please select a valid image"
      );
      return;
    }

    const preview = URL.createObjectURL(file);

    setDrafts((previous) =>
      previous.map((draft) =>
        draft.id === id
          ? {
              ...draft,
              image: file,
              imagePreview: preview,
            }
          : draft
      )
    );
  };

  const addDraft = () => {
    setDrafts((previous) => [
      ...previous,
      {
        id: Date.now(),
        ...emptyForm,
      },
    ]);

    setShowAddForm(true);
  };

  const removeDraft = (id: number) => {
    setDrafts((previous) =>
      previous.filter((draft) => draft.id !== id)
    );

    if (drafts.length <= 1) {
      setShowAddForm(false);
    }
  };

  // ================= ADD SCHOOL =================

  const saveNewSchool = async (draft: DraftType) => {
    if (!draft.name.trim()) {
      alert(words.required);
      return;
    }

    try {
      const imageData = await readFileAsDataURL(draft.image);

      const newSchool: SchoolType = {
        id: Date.now(),
        name: draft.name,
        name_ar: currentLanguage === "ar" ? draft.name : "",
        name_en: currentLanguage === "en" ? draft.name : "",
        email: draft.email,
        phone: draft.phone,
        address: draft.address,
        address_ar: currentLanguage === "ar" ? draft.address : "",
        address_en: currentLanguage === "en" ? draft.address : "",
        image: imageData,
      };

      setSchools((previous) => [...previous, newSchool]);

      setDrafts((previous) =>
        previous.filter((item) => item.id !== draft.id)
      );

      if (drafts.length <= 1) {
        setShowAddForm(false);
      }

      alert(words.addSuccess);
    } catch (error) {
      console.error(error);
      alert("Could not save the image.");
    }
  };

  // ================= EDIT SCHOOL =================

  const startEditing = (school: SchoolType) => {
    setEditingSchoolId(school.id);

    setEditData({
      name: getSchoolName(school),
      email: school.email || "",
      phone: school.phone || "",
      address: getSchoolAddress(school),
      image: null,
      imagePreview: school.image || null,
    });
  };

  const handleEditImage = (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert(
        currentLanguage === "ar"
          ? "من فضلك اختاري ملف صورة صحيح"
          : "Please select a valid image"
      );
      return;
    }

    setEditData((previous) => ({
      ...previous,
      image: file,
      imagePreview: URL.createObjectURL(file),
    }));
  };

  const saveEditSchool = async (id: number) => {
    if (!editData.name.trim()) {
      alert(words.required);
      return;
    }

    try {
      const imageData = editData.image
        ? await readFileAsDataURL(editData.image)
        : editData.imagePreview;

      setSchools((previous) =>
        previous.map((school) => {
          if (school.id !== id) return school;

          const updated: SchoolType = {
            ...school,
            name: editData.name,
            email: editData.email,
            phone: editData.phone,
            address: editData.address,
            image: imageData,
          };

          if (currentLanguage === "ar") {
            updated.name_ar = editData.name;
            updated.address_ar = editData.address;
          } else {
            updated.name_en = editData.name;
            updated.address_en = editData.address;
          }

          return updated;
        })
      );

      setEditingSchoolId(null);
      setEditData(emptyForm);

      alert(words.editSuccess);
    } catch (error) {
      console.error(error);
      alert("Could not save the image.");
    }
  };

  // ================= HIDE / RESTORE =================

  const toggleHidden = (id: number) => {
    setHiddenSchools((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  // ================= DELETE SCHOOL =================

  const deleteSchool = (id: number) => {
    if (!window.confirm(words.confirmDelete)) return;

    setSchools((previous) =>
      previous.filter((school) => school.id !== id)
    );

    setHiddenSchools((previous) =>
      previous.filter((item) => item !== id)
    );
  };

  // ================= RESET DATA =================

  const resetSchools = () => {
    const confirmed = window.confirm(
      currentLanguage === "ar"
        ? "هل تريدين استعادة البيانات الافتراضية؟ سيتم حذف التعديلات المحلية."
        : "Restore default schools? Your local changes will be lost."
    );

    if (!confirmed) return;

    setSchools(initialSchools);
    setHiddenSchools([]);
    setDrafts([]);
    setSearch("");
    setShowHidden(false);
    setShowAddForm(false);
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-10 h-10 animate-spin text-[#0e7490]" />
          <p className="text-gray-500 font-semibold">{words.loading}</p>
        </div>
      </div>
    );
  }

  // ================= UI =================

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-[#f8fafc] dark:bg-[#090d18] p-4 md:p-8"
    >
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0e7490]/10 flex items-center justify-center">
                <School className="w-6 h-6 text-[#0e7490]" />
              </div>

              <span className="text-sm font-bold tracking-widest text-[#9E7C2F] uppercase">
                AL ROWAD MODERN SCHOOL
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">
              {words.title}
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {words.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={resetSchools}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <RefreshCw size={18} />
              <span>
                {currentLanguage === "ar" ? "استعادة الافتراضي" : "Reset"}
              </span>
            </button>

            <button
              onClick={addDraft}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0e7490] hover:bg-[#155e75] text-white font-bold shadow-lg shadow-[#0e7490]/20 transition"
            >
              <Plus size={20} />
              {words.add}
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  {words.total}
                </p>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white mt-2">
                  {schools.length}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center">
                <Building2 className="text-[#0e7490]" size={26} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  {words.active}
                </p>
                <h2 className="text-3xl font-black text-green-600 mt-2">
                  {activeSchools.length}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-500/10 flex items-center justify-center">
                <GraduationCap className="text-green-600" size={26} />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-[#111827] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-semibold">
                  {words.hidden}
                </p>
                <h2 className="text-3xl font-black text-[#9E7C2F] mt-2">
                  {hiddenSchoolsData.length}
                </h2>
              </div>

              <div className="w-14 h-14 rounded-2xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center">
                <EyeOff className="text-[#9E7C2F]" size={26} />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative flex-1">
              <Search
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${
                  isRtl ? "right-4" : "left-4"
                }`}
                size={20}
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={words.search}
                className={`w-full py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490] ${
                  isRtl ? "pr-12 pl-4" : "pl-12 pr-4"
                }`}
              />
            </div>

            <button
              onClick={() => setShowHidden(!showHidden)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition ${
                showHidden
                  ? "bg-[#9E7C2F] text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              {showHidden ? <Eye size={18} /> : <EyeOff size={18} />}
              {showHidden ? words.showActive : words.showHidden}
            </button>
          </div>
        </div>

        {/* Add School Drafts */}
        {showAddForm && drafts.length > 0 && (
          <div className="space-y-5">
            {drafts.map((draft) => (
              <div
                key={draft.id}
                className="bg-white dark:bg-[#111827] rounded-2xl border-2 border-dashed border-[#0e7490]/40 p-6"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">
                    <Plus className="inline mr-2 text-[#0e7490]" />
                    {words.draft}
                  </h3>

                  <button
                    onClick={() => removeDraft(draft.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                      {words.name} *
                    </label>
                    <input
                      value={draft.name}
                      onChange={(e) =>
                        updateDraft(draft.id, "name", e.target.value)
                      }
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                      {words.email}
                    </label>
                    <input
                      type="email"
                      value={draft.email}
                      onChange={(e) =>
                        updateDraft(draft.id, "email", e.target.value)
                      }
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                      {words.phone}
                    </label>
                    <input
                      value={draft.phone}
                      onChange={(e) =>
                        updateDraft(draft.id, "phone", e.target.value)
                      }
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                      {words.address}
                    </label>
                    <input
                      value={draft.address}
                      onChange={(e) =>
                        updateDraft(draft.id, "address", e.target.value)
                      }
                      className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                      {words.image}
                    </label>

                    <div className="flex items-center gap-4 flex-wrap">
                      <label className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0e7490]/10 text-[#0e7490] font-bold">
                        <ImagePlus size={20} />
                        {words.chooseImage}
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          onChange={(e) =>
                            handleDraftImage(
                              draft.id,
                              e.target.files?.[0]
                            )
                          }
                        />
                      </label>

                      {draft.imagePreview && (
                        <img
                          src={draft.imagePreview}
                          alt="Preview"
                          className="w-20 h-20 object-cover rounded-xl"
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => saveNewSchool(draft)}
                    className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0e7490] text-white font-bold hover:bg-[#155e75] transition"
                  >
                    <Save size={18} />
                    {words.save}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Schools Grid */}
        {filteredSchools.length === 0 ? (
          <div className="bg-white dark:bg-[#111827] rounded-2xl p-12 text-center border border-gray-100 dark:border-gray-800">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-5">
              <School size={35} className="text-gray-400" />
            </div>

            <h3 className="text-xl font-black text-gray-800 dark:text-white mb-2">
              {words.empty}
            </h3>

            <p className="text-gray-500">
              {schools.length === 0 ? words.emptyHint : words.noResults}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredSchools.map((school) => (
              <div
                key={school.id}
                className="group bg-white dark:bg-[#111827] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 bg-gradient-to-br from-[#0e7490]/10 to-[#9E7C2F]/10 overflow-hidden">
                  {school.image ? (
                    <img
                      src={school.image}
                      alt={getSchoolName(school)}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <School size={75} className="text-[#0e7490]/40" />
                    </div>
                  )}

                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                        showHidden
                          ? "bg-gray-800 text-white"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {showHidden
                        ? words.hiddenTitle
                        : currentLanguage === "ar"
                        ? "نشطة"
                        : "Active"}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-[#0e7490]" size={26} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">
                        {getSchoolName(school)}
                      </h3>

                      <div className="flex items-center gap-2 text-[#9E7C2F] text-sm font-semibold">
                        <Sparkles size={15} />
                        AL ROWAD
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#0e7490]/10 flex items-center justify-center shrink-0">
                      <Star className="text-[#0e7490]" size={20} />
                    </div>
                  </div>

                  <div className="space-y-3 border-t border-gray-100 dark:border-gray-800 pt-5">
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                      <Mail size={17} className="text-[#0e7490] shrink-0" />
                      <span className="truncate">
                        {school.email || "—"}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                      <Phone size={17} className="text-[#0e7490] shrink-0" />
                      <span>{school.phone || "—"}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                      <MapPin size={17} className="text-[#0e7490] shrink-0" />
                      <span className="truncate">
                        {getSchoolAddress(school) || "—"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-3 gap-2 mt-6">
                    <button
                      onClick={() => startEditing(school)}
                      className="flex items-center justify-center gap-1 py-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-bold hover:bg-blue-100 transition"
                    >
                      <Edit size={16} />
                      {words.edit}
                    </button>

                    <button
                      onClick={() => toggleHidden(school.id)}
                      className="flex items-center justify-center gap-1 py-3 rounded-xl bg-yellow-50 dark:bg-yellow-500/10 text-[#9E7C2F] text-sm font-bold hover:bg-yellow-100 transition"
                    >
                      {showHidden ? (
                        <Eye size={16} />
                      ) : (
                        <EyeOff size={16} />
                      )}
                      {showHidden ? words.restore : words.hide}
                    </button>

                    <button
                      onClick={() => deleteSchool(school.id)}
                      className="flex items-center justify-center gap-1 py-3 rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 text-sm font-bold hover:bg-red-100 transition"
                    >
                      <Trash2 size={16} />
                      {words.delete}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Edit Modal */}
        {editingSchoolId !== null && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#111827] rounded-3xl shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-7">
                <h2 className="text-2xl font-black text-gray-900 dark:text-white">
                  {words.edit}
                </h2>

                <button
                  onClick={() => {
                    setEditingSchoolId(null);
                    setEditData(emptyForm);
                  }}
                  className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-red-500"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {words.name} *
                  </label>
                  <input
                    value={editData.name}
                    onChange={(e) =>
                      setEditData((previous) => ({
                        ...previous,
                        name: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {words.email}
                  </label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData((previous) => ({
                        ...previous,
                        email: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {words.phone}
                  </label>
                  <input
                    value={editData.phone}
                    onChange={(e) =>
                      setEditData((previous) => ({
                        ...previous,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {words.address}
                  </label>
                  <input
                    value={editData.address}
                    onChange={(e) =>
                      setEditData((previous) => ({
                        ...previous,
                        address: e.target.value,
                      }))
                    }
                    className="w-full p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#0b1220] text-gray-900 dark:text-white outline-none focus:border-[#0e7490]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-600 dark:text-gray-300 mb-2">
                    {words.image}
                  </label>

                  <div className="flex items-center gap-4 flex-wrap">
                    <label className="cursor-pointer flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0e7490]/10 text-[#0e7490] font-bold">
                      <ImagePlus size={20} />
                      {words.chooseImage}
                      <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) =>
                          handleEditImage(e.target.files?.[0])
                        }
                      />
                    </label>

                    {editData.imagePreview && (
                      <img
                        src={editData.imagePreview}
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-xl"
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-8">
                <button
                  onClick={() => {
                    setEditingSchoolId(null);
                    setEditData(emptyForm);
                  }}
                  className="px-6 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-bold"
                >
                  {words.cancel}
                </button>

                <button
                  onClick={() => saveEditSchool(editingSchoolId)}
                  className="flex items-center gap-2 px-7 py-3 rounded-xl bg-[#0e7490] hover:bg-[#155e75] text-white font-bold transition"
                >
                  <Save size={18} />
                  {words.save}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
