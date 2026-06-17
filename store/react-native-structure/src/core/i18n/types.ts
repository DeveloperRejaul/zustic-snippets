type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;

type NestedKeys<T> = (
  T extends object
    ? {
        [K in Extract<keyof T, string>]:
        //@ts-ignore
          `${K}${DotPrefix<NestedKeys<T[K]>>}`
      }[Extract<keyof T, string>]
    : ""
);
export type TranslationKey = NestedKeys<Root>;
export interface Root {
  welcome_to_dr_chashi: WelcomeToDrChashi
  home: Home
  profile_update: ProfileUpdate
  delivery_address: DeliveryAddress
  helpline: Helpline
  common: Common
  about_dr_chashi: AboutDrChashi
  detection_history: DetectionHistory
  detection_success_result: DetectionSuccessResult
  order_history: OrderHistory
  take_picture: TakePicture
  menu: Menu
  weather_forecasting: WeatherForecasting
  my_activity: MyActivity
  completed_course: CompletedCourse
  early_warning: EarlyWarning
  major_diseases_and_insects: MajorDiseasesAndInsects
  location_based_fertilizer: LocationBasedFertilizer
  detection_failed_result: DetectionFailedResult
  add_update_land: AddUpdateLand
  ecom_home_page: EcomHomePage
  filter: Filter
  ecom_most_popular: EcomMostPopular
  ecom_all_company: EcomAllCompany
  ecom_pesticide_product: EcomPesticideProduct
  ecom_wishlist: EcomWishlist
  search: Search
  ecom_place_order: EcomPlaceOrder
  company_products: CompanyProducts
  product_details_page: ProductDetailsPage
  dialouge_page: DialougePage
  training_certification_page: TrainingCertificationPage
  my_course: MyCourse
  all_course: AllCourse
  ecom_shipping_address: EcomShippingAddress
  course_start_page: CourseStartPage
  quiz_page: QuizPage
  rating_page: RatingPage
  enroll_page: EnrollPage
  dealer_list: DealerList
  dealer_details: DealerDetails
  quick_start: QuickStart
  gap: Gap
  insurance: Insurance
  loan: Loan
  savings: Savings
  reference: Reference
  faq: Faq
  course_result: CourseResult
  quiz_assessment_error_question_list: QuizAssessmentErrorQuestionList
  certificate_page: CertificatePage
  profile_modal: ProfileModal
  system_info: SystemInfo
  agro_shop: AgroShop
  agro_shop_filter_result: AgroShopFilterResult
  agro_shop_search: AgroShopSearch
  agro_shop_cart: AgroShopCart
  agro_shop_name_of_product: AgroShopNameOfProduct
  payment_method: PaymentMethod
  my_orders: MyOrders
  order_again: OrderAgain
  "return_&_refund": ReturnRefund
  payment_result: PaymentResult
  bagan: Bagan
  location_select: LocationSelect
  shop_details: ShopDetails
  pay: Pay
  otp_verification: OtpVerification
  internet_status: string
  server_status: string
  server_problem_message: string
  internet_problem_message: string
  internet_btn_text: string
  copy_number: string
  call_number: string
  location: Location
}

export interface WelcomeToDrChashi {
  welcome_to: string
  short_details: string
  select_language: string
  next_button_text: string
  login: string
  phone_number: string
  otp_verification: string
  resend: string
  otp_verification_message: string
  confirm: string
  key_list: string[]
}

export interface Home {
  complete_profile: string
  welcome_message: string
  detection: string
  detection_short_message: string
  detection_long_message: string
  my_activity: string
  early_warnings: string
  major_diseases_and_nsects: string
  agricultural_products: string
  Location_based_fertilizer: string
  app_voice: string
  training_and_certification: string
  training_and_certification_details: string
  explore_now: string
  quick_start: string
  nearest_dealer: string
  ecom: string
  insurance: string
  loan: string
  gap: string
  continue: string
  more_options: string
  farmer_saving: string
  coming_soon: string
  footer_text: string
  coming_soon_extra_text_1: string
  please_give_location_permission: string
  failed_to_fetch_weather_data: string
  permission_denied: string
  location_permission_is_required: string
  cancel: string
  open_settings: string
  system_info: string
  location_permission_is_required_for_detection: string
  please_update_message_1: string
  please_update_message_2: string
  key_list: string[]
}

export interface ProfileUpdate {
  full_name: string
  profession: string
  gender: string
  phone_number: string
  delivery_address: string
  land_information: string
  update: string
  division: string
  district: string
  sub_district: string
  union: string
  address: string
  add_address: string
  add_land_information: string
  profile_update_title: string
  delete_land: string
  no_profession_selected: string
  no_gender_selected: string
  add_delivery_address: string
  address_added: string
  address_updated: string
  address_failed: string
  addupdate_failed: string
  address_delete: string
  adddelete_failed: string
  landadd_successful: string
  landadd_failed: string
  landinfo_updated: string
  landupdate_failed: string
  landinfo_delete: string
  landdelete_failed: string
  land_value: string
  profileupdate_success: string
  profileupdate_failed: string
  key_list: string[]
}

export interface DeliveryAddress {
  full_name: string
  division: string
  district: string
  sub_district: string
  union: string
  address: string
  phone_number: string
  add_address: string
  update: string
  cancel: string
  add_delivery_address: string
  edit_delivery_address: string
  key_list: string[]
}

export interface Helpline {
  helpline: string
  helpline_time: string
  helpline_message: string
  call_helpline: string
  whats_app_no: string
  call_now: string
  copy: string
  phone_no: string
  fb_link: string
  message: string
  copy_number: string
  call_number: string
  key_list: string[]
}

export interface Common {
  reference: string
  faq: string
  no_information_found: string
  coming_soon: string
  development: string
  working: string
  chat_feature: string
  stay_tuned: string
  no_data_found: string
  key_list: string[]
}

export interface AboutDrChashi {
  about_dr_chashi: string
  our_team: string
  our_consultant: string
  image_gallery: string
  see_all: string
  about_dr_chashi_details: string
  privacy_policy_link: string
  terms_and_conditions_link: string
  privacy_policy_text: string
  terms_and_conditions_text: string
  learn_more: string
  genius_farms_link: string
  dr_chashi_link: string
  copyright_text: string
  key_list: string[]
}

export interface DetectionHistory {
  deletection_title: string
  load_more_button_text: string
  key_list: string[]
}

export interface DetectionSuccessResult {
  detection_result_title: string
  crop_name: string
  description: string
  organic_management: string
  organic_products: string
  chemical_solutions: string
  farmer_safety: string
  more: string
  disease_name: string
  less: string
  key_list: string[]
}

export interface OrderHistory {
  order_history: string
  ongoing: string
  delivered: string
  delivery: string
  payment: string
  done: string
  pending: string
  order_id: string
  price: string
  date: string
  key_list: string[]
}

export interface TakePicture {
  wrong_method: string
  right_method: string
  crop_centric_focus: string
  crop_centric_focus_details: string
  accurate_snapshot_principles: string
  accurate_snapshot_principles_details: string
  open_camera: string
  upload_photo: string
  take_picture: string
  one: string
  two: string
  key_list: string[]
}

export interface Menu {
  edit_profile: string
  detection_history: string
  about_dr_chashi: string
  my_achievements: string
  reference: string
  order_history: string
  helpline: string
  faq: string
  Logout: string
  app_voice: string
  partnership: string
  consultant: string
  my_shop: string
  coming_soon: string
  account_delete: string
  account_delete_message: string
  yes: string
  no: string
  key_list: string[]
}

export interface WeatherForecasting {
  weather_forecasting: string
  details: string
  "7_days_forecast": string
  humidity: string
  pressure: string
  key_list: string[]
}

export interface MyActivity {
  my_activity: string
  total_detections: string
  total_scanned: string
  total_diseases_scanned: string
  total_pests_scanned: string
  weekly_detections: string
  disease: string
  pest: string
  completed_course: string
  see_all: string
  detection: string
  course: string
  all_detection: string
  my_points: string
  use_point_for_discount: string
  order: string
  all: string
  no_order: string
  key_list: string[]
}

export interface CompletedCourse {
  completed_course: string
  all_completed_course: string
  free: string
  review: string
  button: string
  key_list: string[]
}

export interface EarlyWarning {
  early_warning: string
  warning: string
  advice: string
  location: string
  sms_notification: string
  allow_yes: string
  allow_no: string
  are_you_sure: string
  allow_sms_text: string
  unsubscribe_sms_text: string
  sms_notification_turn_on: string
  sms_notification_turn_off: string
  there_is_no_warning: string
  key_list: string[]
}

export interface MajorDiseasesAndInsects {
  major_diseases_and_insects: string
  search_crops: string
  diseases: string
  insects: string
  select_crops_to_check: string
  key_list: string[]
}

export interface LocationBasedFertilizer {
  location_based_fertilizer: string
  select_division: string
  select_district: string
  select_sub_district: string
  union: string
  soil_type: string
  crop_category: string
  land_type: string
  crop_name_rice: string
  land_size_decimal: string
  get_result_button_text: string
  result: string
  referance_text_1: string
  referance_text_url: string
  referance_text_2: string
  select_agro_ecology_zone: string
  search_zone_or_district_name: string
  location_and_extent: string
  season_name: string
  crop_name: string
  fertilizer_information: string
  selected_zone: string
  selected_crop: string
  selected_season: string
  nutrients: string
  measure_decimal: string
  fertilizer_reference: string
  crop_pattern: string
  reference_from: string
  select_season_name: string
  select_crop_name: string
  select_crop_pattern_name: string
  key_list: string[]
}

export interface DetectionFailedResult {
  detection_failed_result_title: string
  disease: string
  not_found: string
  insects: string
  reasons: string
  try_again: string
  key_list: string[]
}

export interface AddUpdateLand {
  land_info: string
  division: string
  district: string
  sub_district: string
  address: string
  land_size: string
  add: string
  delete_land: string
  land_name: string
  select_division: string
  select_district: string
  select_sub_district: string
  enter_landname: string
  enter_landsize: string
  provide_address: string
  key_list: string[]
}

export interface EcomHomePage {
  title: string
  ecom_search_product: string
  ecom_product_category: string
  ecom_most_popular: string
  ecom_see_all_popular: string
  ecom_company: string
  ecom_see_all_company: string
  taka: string
  review: string
  key_list: string[]
}

export interface Filter {
  ecom_filter_result: string
  ecom_product_filter: string
  reset_all_product_filter: string
  filter_product_category: string
  filter_price_range: string
  filter_low: string
  filter_high: string
  filter_company: string
  apply_filter_button: string
  sub_category: string
  course_filter: string
  filter_course_category: string
  filter_applied: string
  key_list: string[]
}

export interface EcomMostPopular {
  ecom_most_popular: string
  ecom_all_popular: string
  review: string
  tk: string
  key_list: string[]
}

export interface EcomAllCompany {
  ecom_company: string
  ecom_company_list: string
  key_list: string[]
}

export interface EcomPesticideProduct {
  Sub_category: string
  all_pesticide_products: string
  popup_page_select: string
  popup_page_package: string
  cancel: string
  next: string
  review: string
  tk: string
  key_list: string[]
}

export interface EcomWishlist {
  product_you_love: string
  wishlist: string
  key_list: string[]
}

export interface Search {
  search: string
  search_product: string
  recent_searches: string
  search_course: string
  search_result: string
  search_for: string
  key_list: string[]
}

export interface EcomPlaceOrder {
  place_order: string
  shipping_address: string
  bill_details: string
  payment_method: string
  confirm: string
  item_total: string
  variant: string
  sub_total: string
  delivery_charge: string
  total: string
  tk: string
  order_successfully: string
  order_failed: string
  bkash: string
  key_list: string[]
}

export interface CompanyProducts {
  company_details: string
  all_products: string
  company_product: string
  more: string
  less: string
  key_list: string[]
}

export interface ProductDetailsPage {
  product_discription: string
  product_ingredients: string
  mode_of_action: string
  product_solution: string
  product_company: string
  product_rating: string
  product_review: string
  more: string
  less: string
  reviews: string
  rating: string
  select_variation: string
  select_color: string
  see_all: string
  shop_details: string
  product_you_may_like: string
  details: string
  add_to_cart: string
  place_order: string
  qty: string
  tk: string
  price: string
  bdt: string
  address_alert: string
  product_added: string
  key_list: string[]
}

export interface DialougePage {
  popup_page_select: string
  popup_page_package: string
  cancel: string
  next: string
  add_to_cart: string
  add_more: string
  confirm: string
  key_list: string[]
}

export interface TrainingCertificationPage {
  training_certification: string
  search_course: string
  course_category: string
  my_course: string
  my_course_info: string
  my_course_button: string
  course_popular: string
  course_see_all: string
  course_bookmark: string
  bookmark_see_all: string
  no_course_found: string
  key_list: string[]
}

export interface MyCourse {
  my_course: string
  last_viewed: string
  all_my_course: string
  free: string
  start: string
  reviews: string
  key_list: string[]
}

export interface AllCourse {
  free: string
  start: string
  all_course: string
  continue: string
  reviews: string
  key_list: string[]
}

export interface EcomShippingAddress {
  shipping_address: string
  use_shipping_address: string
  full_name: string
  division: string
  district: string
  sub_district: string
  address: string
  phone_number: string
  enter_shipping_address: string
  button: string
  add: string
  title: string
  update_shipping: string
  update: string
  delete: string
  warning: string
  delete_address: string
  name_required: string
  division_required: string
  district_equired: string
  subdistrict_required: string
  address_required: string
  number_required: string
  min: string
  add_title: string
  max: string
  key_list: string[]
}

export interface CourseStartPage {
  course_reviews: string
  description: string
  all_lesson: string
  more: string
  less: string
  start_quiz: string
  reviews: string
  see_all: string
  rating_us: string
  button_enroll: string
  button_see_question: string
  quiz_description: string
  all_review: string
  key_list: string[]
}

export interface QuizPage {
  quiz: string
  question: string
  back_button: string
  next_button: string
  key_list: string[]
}

export interface RatingPage {
  submit_review: string
  review_text_box: string
  review_tips: string
  submit_button: string
  key_list: string[]
}

export interface EnrollPage {
  free: string
  enrollment_details: string
  date: string
  user_name: string
  contact_number: string
  address: string
  category: string
  price: string
  discount: string
  total: string
  payment_method: string
  cancel_button: string
  confirm_button: string
  key_list: string[]
}

export interface DealerList {
  authorize_dealer: string
  nearest_dealer: string
  see_all: string
  cant_find_your_shop: string
  cant_find_your_shop_description: string
  contact_us: string
  call_to_dr_chashi: string
  copy: string
  call_now: string
  phone_no: string
  distance: string
  search_shop_name: string
  key_list: string[]
}

export interface DealerDetails {
  dealer_details: string
  dealer_name: string
  contact_no: string
  shop_address: string
  my_shop: string
  key_list: string[]
}

export interface QuickStart {
  menu_text: string
  weather: string
  detection: string
  my_activity: string
  early_warning: string
  major_disease: string
  fertilizer: string
  training: string
  dealer: string
  ecom: string
  insurance: string
  loan: string
  gap: string
  savings: string
  key_list: string[]
}

export interface Gap {
  gap: string
  gap_footer_text: string
  gap_farmers_have_to_do: string
  all_the_rules_and_regulations: string
  see: string
  key_list: string[]
}

export interface Insurance {
  insurance: string
  select_category: string
  insurance_package: string
  see_all: string
  all_insurance: string
  key_list: string[]
}

export interface Loan {
  loan: string
  select_category: string
  apply_for_loan: string
  gender: string
  full_name: string
  phone_number: string
  address: string
  write_address: string
  submit: string
  key_list: string[]
}

export interface Savings {
  savings: string
  select_category: string
  apply_for_savings: string
  gender: string
  full_name: string
  phone_number: string
  address: string
  write_address: string
  submit: string
  key_list: string[]
}

export interface Reference {
  reference_text: string
  key_list: string[]
}

export interface Faq {
  faq_text: string
  faq_top_text: string
  key_list: string[]
}

export interface CourseResult {
  course_result_top: string
  sorry: string
  congratulations: string
  total_mark: string
  obtained_mark: string
  percentage: string
  result_pass: string
  result_fail: string
  course_back: string
  try_again: string
  get_certificate: string
  key_list: string[]
}

export interface QuizAssessmentErrorQuestionList {
  quiz_assessment_error_text: string
  key_list: string[]
}

export interface CertificatePage {
  certificate: string
  download_certificate: string
  certificate_generated: string
  certificate_download_confirmation: string
  cancel: string
  open: string
  key_list: string[]
}

export interface ProfileModal {
  go_to_profile: string
  message_text: string
  header_text: string
  key_list: string[]
}

export interface SystemInfo {
  system_info_title: string
  key_list: string[]
}

export interface AgroShop {
  search_product: string
  product_category: string
  most_popular: string
  see_all: string
  want_to_open: string
  apply_now: string
  call_now: string
  title: string
  products: string
  to_open: string
  key_list: string[]
}

export interface AgroShopFilterResult {
  product_filter: string
  reset_all_product_filter: string
  filter_product_category: string
  filter_price_range: string
  filter_low: string
  filter_high: string
  filter_company: string
  apply_filter_button: string
  sub_category: string
  filter_applied: string
  agro_shop_filter_result: string
  key_list: string[]
}

export interface AgroShopSearch {
  search: string
  search_product: string
  recent_searches: string
  search_result: string
  search_for: string
  key_list: string[]
}

export interface AgroShopCart {
  cart: string
  details: string
  place_order: string
  tk: string
  total: string
  items: string
  price: string
  sub_total: string
  warning: string
  delete_product: string
  shop_now: string
  empty: string
  currently_empty: string
  please_increase_the_item_quantity_to_continue: string
  unavailable_item: string
  key_list: string[]
}

export interface AgroShopNameOfProduct {
  product_discription: string
  select_variation: string
  select_color: string
  see_our_return_policy: string
  product_rating: string
  product_review: string
  see_all: string
  shop_details: string
  product_you_may_like: string
  details: string
  add_to_cart: string
  place_order: string
  bdt: string
  key_list: string[]
}

export interface PaymentMethod {
  shipping_address: string
  full_name: string
  division: string
  district: string
  sub_district: string
  union: string
  address: string
  phone_number: string
  delivery: string
  total: string
  bill_details: string
  item_total: string
  "vendor_sub-total": string
  your_discount: string
  delivery_charge_subtotal: string
  use_point: string
  payment_method: string
  key_list: string[]
}

export interface MyOrders {
  all: string
  to_pay: string
  shipped: string
  received: string
  cancel: string
  pay_now: string
  return_refund: string
  order_again: string
  shop_now: string
  copy: string
  order_id: string
  total: string
  items: string
  qty: string
  size: string
  color: string
  give_rating: string
  title: string
  key_list: string[]
}

export interface OrderAgain {
  details: string
  place_order: string
  key_list: string[]
}

export interface ReturnRefund {
  return_refund: string
  select_return_reason: string
  "return_&_refund": string
  select_a_reason: string
  reason: string
  type_your_reason: string
  attention: string
  refund_policy: string
  return_order: string
  are_you_sure: string
  text: string
  no_selected_return: string
  alert: string
  key_list: string[]
}

export interface PaymentResult {
  payment_result: string
  verifying: string
  wait: string
  payment_successful: string
  verified_successful: string
  payment_failed: string
  again_verify: string
  continue_shopping: string
  try_again: string
  key_list: string[]
}

export interface Bagan {
  tips: string
  title: string
  innovative_training: string
  special_for_bagan: string
  key_list: string[]
}

export interface LocationSelect {
  title: string
  message: string
  key_list: string[]
}

export interface ShopDetails {
  title: string
  see_all: string
  popular_products: string
  all_products: string
  key_list: string[]
}

export interface Pay {
  title: string
  failure: string
  cancel: string
  key_list: string[]
}

export interface OtpVerification {
  otp_verification: string
  verify_account: string
  enjoy_shopping: string
  send_otp: string
  resend_otp: string
  submit_button: string
  sending_otp: string
  key_list: string[]
}

export interface Location {
  searching: string
  activity_null: string
  permission_denied: string
  timeout: string
  position_unavailable: string
  gps_off: string
  unknown_error: string
}
