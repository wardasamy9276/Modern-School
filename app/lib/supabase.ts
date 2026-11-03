import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://qlgfmefwukiikwgghzmq.supabase.co"; // رابط مشروعك الذي ظهر في إعدادات المشروع العامّة
const supabaseAnonKey = "sb_publishable_LjlOcufZZdDAm-P1rkIC4w_aOCapbgP";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);