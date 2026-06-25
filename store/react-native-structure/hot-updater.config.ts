import { bare } from "@hot-updater/bare";
import { supabaseDatabase, supabaseStorage } from "@hot-updater/supabase";
import { config } from "dotenv";
import { defineConfig } from "hot-updater";
import { HotUpdater } from '@hot-updater/react-native';

config({ path: ".env.hotupdater" });


export default defineConfig({
  build: bare({ enableHermes: true }),
  storage: supabaseStorage({
    supabaseUrl: process.env.HOT_UPDATER_SUPABASE_URL!,
    supabaseAnonKey: process.env.HOT_UPDATER_SUPABASE_ANON_KEY!,
    bucketName: process.env.HOT_UPDATER_SUPABASE_BUCKET_NAME!,
  }),
  database: supabaseDatabase({
    supabaseUrl: process.env.HOT_UPDATER_SUPABASE_URL!,
    supabaseAnonKey: process.env.HOT_UPDATER_SUPABASE_ANON_KEY!,
  }),
  updateStrategy: "appVersion",
});


// DOC: https://hot-updater.dev/
export const HotUpdaterAppHOC = HotUpdater.wrap({
  baseURL: "https://asdfasdfasdf.supabase.co/functions/v1/update-server",
  updateStrategy: "appVersion",  
  updateMode: "auto",   
  reloadOnForceUpdate: false, 
})