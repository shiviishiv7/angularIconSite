import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TextcopiedComponent } from './textcopied/textcopied.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularIconSite2';
  originalitems = ["search",
    "home",
    "account_circle",
    "settings",
    "done",
    "info",
    "check_circle",
    "delete",
    "shopping_cart",
    "visibility",
    "favorite",
    "logout",
    "description",
    "favorite_border",
    "lock",
    "face",
    "schedule",
    "language",
    "help_outline",
    "fingerprint",
    "manage_accounts",
    "filter_alt",
    "event",
    "thumb_up",
    "verified",
    "calendar_today",
    "dashboard",
    "login",
    "list",
    "visibility_off",
    "date_range",
    "check_circle_outline",
    "highlight_off",
    "help",
    "article",
    "question_answer",
    "paid",
    "lightbulb",
    "task_alt",
    "shopping_bag",
    "open_in_new",
    "trending_up",
    "perm_identity",
    "credit_card",
    "account_balance",
    "history",
    "fact_check",
    "report_problem",
    "delete_outline",
    "assignment",
    "arrow_right_alt",
    "star_rate",
    "verified_user",
    "account_balance_wallet",
    "build",
    "autorenew",
    "print",
    "work",
    "view_list",
    "analytics",
    "today",
    "store",
    "delete_forever",
    "savings",
    "admin_panel_settings",
    "lock_open",
    "room",
    "code",
    "grade",
    "add_shopping_cart",
    "update",
    "receipt",
    "watch_later",
    "contact_support",
    "pets",
    "power_settings_new",
    "done_all",
    "explore",
    "bookmark",
    "account_box",
    "reorder",
    "note_add",
    "bookmark_border",
    "shopping_basket",
    "pending_actions",
    "payment",
    "drag_indicator",
    "launch",
    "supervisor_account",
    "touch_app",
    "thumb_up_off_alt",
    "assessment",
    "zoom_in",
    "pending",
    "done_outline",
    "exit_to_app",
    "open_in_full",
    "leaderboard",
    "preview",
    "feedback",
    "view_in_ar",
    "timeline",
    "assignment_ind",
    "work_outline",
    "android",
    "card_giftcard",
    "published_with_changes",
    "dns",
    "assignment_turned_in",
    "swap_horiz",
    "accessibility",
    "sync_alt",
    "book",
    "pan_tool",
    "stars",
    "flight_takeoff",
    "bug_report",
    "alarm",
    "cached",
    "label",
    "supervised_user_circle",
    "gavel",
    "contact_page",
    "flutter_dash",
    "translate",
    "get_app",
    "add_task",
    "edit_calendar",
    "space_dashboard",
    "extension",
    "record_voice_over",
    "minimize",
    "accessibility_new",
    "help_center",
    "hourglass_empty",
    "thumb_down",
    "trending_flat",
    "sticky_note_2",
    "rule",
    "support",
    "dashboard_customize",
    "source",
    "view_headline",
    "settings_applications",
    "find_in_page",
    "announcement",
    "loyalty",
    "close_fullscreen",
    "group_work",
    "redeem",
    "tips_and_updates",
    "nightlight_round",
    "grading",
    "swap_vert",
    "sensors",
    "dangerous",
    "restore",
    "privacy_tip",
    "book_online",
    "compare_arrows",
    "euro_symbol",
    "subject",
    "arrow_circle_up",
    "track_changes",
    "table_view",
    "https",
    "copyright",
    "ads_click",
    "bookmarks",
    "api",
    "query_builder",
    "disabled_by_default",
    "3d_rotation",
    "toc",
    "build_circle",
    "input",
    "perm_media",
    "settings_phone",
    "backup",
    "zoom_out",
    "arrow_circle_down",
    "circle_notifications",
    "swipe",
    "open_with",
    "view_module",
    "perm_contact_calendar",
    "file_present",
    "label_important",
    "speaker_notes",
    "wysiwyg",
    "card_membership",
    "perm_phone_msg",
    "pageview",
    "integration_instructions",
    "upgrade",
    "g_translate",
    "trending_down",
    "class",
    "change_history",
    "production_quantity_limits",
    "accessible",
    "calendar_view_month",
    "offline_bolt",
    "settings_accessibility",
    "model_training",
    "expand",
    "settings_backup_restore",
    "aspect_ratio",
    "donut_large",
    "bookmark_add",
    "thumbs_up_down",
    "segment",
    "maximize",
    "schedule_send",
    "thumb_down_off_alt",
    "view_column",
    "arrow_circle_right",
    "settings_ethernet",
    "view_agenda",
    "alarm_on",
    "theaters",
    "important_devices",
    "invert_colors",
    "commute",
    "youtube_searched_for",
    "unpublished",
    "open_in_browser",
    "addchart",
    "no_accounts",
    "opacity",
    "settings_input_antenna",
    "system_update_alt",
    "tour",
    "turned_in",
    "view_week",
    "mark_as_unread",
    "shop",
    "history_toggle_off",
    "bookmark_added",
    "not_started",
    "saved_search",
    "hide_source",
    "search_off",
    "plagiarism",
    "contactless",
    "flight_land",
    "anchor",
    "mediation",
    "assignment_late",
    "view_carousel",
    "donut_small",
    "highlight_alt",
    "turned_in_not",
    "flaky",
    "settings_input_component",
    "fit_screen",
    "edit_off",
    "remove_shopping_cart",
    "camera_enhance",
    "all_inbox",
    "settings_voice",
    "settings_remote",
    "assignment_return",
    "toll",
    "view_quilt",
    "lock_clock",
    "online_prediction",
    "pregnant_woman",
    "hourglass_full",
    "arrow_circle_left",
    "add_to_drive",
    "next_plan",
    "swap_horizontal_circle",
    "event_seat",
    "restore_from_trash",
    "accessible_forward",
    "view_sidebar",
    "markunread_mailbox",
    "tab",
    "calendar_view_week",
    "vertical_split",
    "dynamic_form",
    "settings_power",
    "request_page",
    "hotel_class",
    "try",
    "offline_pin",
    "calendar_view_day",
    "smart_button",
    "remove_done",
    "card_travel",
    "outbox",
    "rowing",
    "view_stream",
    "outlet",
    "play_for_work",
    "data_exploration",
    "find_replace",
    "chrome_reader_mode",
    "alarm_add",
    "gif",
    "compress",
    "http",
    "settings_brightness",
    "backup_table",
    "spellcheck",
    "assignment_returned",
    "settings_overscan",
    "wifi_protected_setup",
    "credit_card_off",
    "restore_page",
    "settings_input_composite",
    "quickreply",
    "polymer",
    "comment_bank",
    "view_day",
    "new_label",
    "swap_vertical_circle",
    "line_weight",
    "batch_prediction",
    "send_and_archive",
    "outbound",
    "cancel_schedule_send",
    "generating_tokens",
    "settings_bluetooth",
    "horizontal_split",
    "picture_in_picture",
    "bookmark_remove",
    "code_off",
    "token",
    "percent",
    "perm_data_setting",
    "shop_two",
    "settings_cell",
    "flip_to_front",
    "perm_scan_wifi",
    "speaker_notes_off",
    "eject",
    "free_cancellation",
    "settings_input_hdmi",
    "alarm_off",
    "disabled_visible",
    "sensors_off",
    "gif_box",
    "app_blocking",
    "work_off",
    "hourglass_disabled",
    "line_style",
    "perm_device_information",
    "subtitles_off",
    "picture_in_picture_alt",
    "switch_access_shortcut",
    "update_disabled",
    "settings_input_svideo",
    "voice_over_off",
    "fax",
    "view_array",
    "flip_to_back",
    "open_in_new_off",
    "all_out",
    "label_off",
    "switch_access_shortcut_add",
    "rounded_corner",
    "text_rotate_vertical",
    "tab_unselected",
    "explore_off",
    "balance",
    "question_mark",
    "private_connectivity",
    "filter_alt_off",
    "text_rotation_none",
    "not_accessible",
    "shop_2",
    "perm_camera_mic",
    "pin_invoke",
    "extension_off",
    "pin_end",
    "text_rotation_angledown",
    "text_rotate_up",
    "currency_exchange",
    "text_rotation_down",
    "text_rotation_angleup",
    "lock_reset",
    "satellite_alt",
    "rocket_launch",
    "shopping_cart_checkout",
    "app_shortcut",
    "swipe_left",
    "join_full",
    "swipe_right",
    "swipe_up",
    "join_inner",
    "assured_workload",
    "swipe_down",
    "join_left",
    "view_timeline",
    "commit",
    "install_desktop",
    "terminal",
    "pinch",
    "install_mobile",
    "add_card",
    "join_right",
    "swipe_vertical",
    "123",
    "swipe_right_alt",
    "webhook",
    "rocket",
    "view_cozy",
    "swipe_down_alt",
    "html",
    "view_comfy_alt",
    "event_repeat",
    "swipe_up_alt",
    "javascript",
    "swipe_left_alt",
    "abc",
    "density_medium",
    "view_compact_alt",
    "view_kanban",
    "css",
    "display_settings",
    "php",
    "data_thresholding",
    "pan_tool_alt",
    "density_small",
    "hls",
    "density_large",
    "hls_off",

    "close",
    "menu",
    "expand_more",
    "arrow_back",
    "chevron_right",
    "arrow_forward_ios",
    "arrow_back_ios",
    "arrow_drop_down",
    "cancel",
    "more_vert",
    "chevron_left",
    "arrow_forward",
    "check",
    "expand_less",
    "more_horiz",
    "refresh",
    "apps",
    "payments",
    "arrow_upward",
    "east",
    "campaign",
    "arrow_back_ios_new",
    "arrow_downward",
    "arrow_right",
    "menu_open",
    "double_arrow",
    "fullscreen",
    "unfold_more",
    "maps_home_work",
    "arrow_drop_up",
    "west",
    "arrow_left",
    "south",
    "home_work",
    "north",
    "first_page",
    "fullscreen_exit",
    "north_east",
    "arrow_drop_down_circle",
    "last_page",
    "expand_circle_down",
    "unfold_less",
    "subdirectory_arrow_right",
    "legend_toggle",
    "south_east",
    "assistant_direction",
    "app_settings_alt",
    "subdirectory_arrow_left",
    "north_west",
    "waterfall_chart",
    "switch_left",
    "south_west",
    "switch_right",
    "pivot_table_chart",
    "offline_share",
    "apps_outage",

    "add",
    "add_circle_outline",
    "add_circle",
    "content_copy",
    "send",
    "clear",
    "mail",
    "save",
    "link",
    "filter_list",
    "remove",
    "inventory_2",
    "insights",
    "sort",
    "remove_circle_outline",
    "inventory",
    "bolt",
    "create",
    "reply",
    "flag",
    "add_box",
    "remove_circle",
    "push_pin",
    "block",
    "calculate",
    "undo",
    "how_to_reg",
    "content_paste",
    "file_copy",
    "report",
    "shield",
    "backspace",
    "archive",
    "save_alt",
    "policy",
    "tag",
    "change_circle",
    "redo",
    "content_cut",
    "forward",
    "inbox",
    "outlined_flag",
    "drafts",
    "ballot",
    "link_off",
    "biotech",
    "stacked_bar_chart",
    "markunread",
    "delete_sweep",
    "report_gmailerrorred",
    "square_foot",
    "stream",
    "where_to_vote",
    "add_link",
    "copy_all",
    "dynamic_feed",
    "move_to_inbox",
    "waves",
    "unarchive",
    "reply_all",
    "select_all",
    "text_format",
    "low_priority",
    "font_download",
    "weekend",
    "upcoming",
    "how_to_vote",
    "gesture",
    "attribution",
    "content_paste_search",
    "next_week",
    "content_paste_off",
    "report_off",
    "content_paste_go",
    "font_download_off",
    "save_as",
    "filter_list_off",
    "flag_circle",
    "deselect",

    "person",
    "notifications",
    "groups",
    "people",
    "share",
    "person_outline",
    "school",
    "person_add",
    "public",
    "emoji_events",
    "group",
    "notifications_active",
    "engineering",
    "construction",
    "people_alt",
    "group_add",
    "psychology",
    "health_and_safety",
    "travel_explore",
    "emoji_emotions",
    "whatsapp",
    "notifications_none",
    "sports_esports",
    "thumb_up_alt",
    "sentiment_satisfied",
    "water_drop",
    "location_city",
    "emoji_objects",
    "ios_share",
    "precision_manufacturing",
    "sentiment_very_satisfied",
    "person_add_alt",
    "military_tech",
    "science",
    "history_edu",
    "cake",
    "sentiment_dissatisfied",
    "coronavirus",
    "emoji_people",
    "sentiment_very_dissatisfied",
    "self_improvement",
    "person_remove",
    "poll",
    "female",
    "sports_soccer",
    "domain",
    "whatshot",
    "people_outline",
    "recommend",
    "mood",
    "male",
    "masks",
    "person_off",
    "sentiment_neutral",
    "connect_without_contact",
    "workspace_premium",
    "person_add_alt_1",
    "back_hand",
    "architecture",
    "hiking",
    "notifications_off",
    "recycling",
    "waving_hand",
    "luggage",
    "thumb_down_alt",
    "front_hand",
    "mood_bad",
    "emoji_nature",
    "catching_pokemon",
    "emoji_symbols",
    "switch_account",
    "nights_stay",
    "king_bed",
    "sports_basketball",
    "notification_add",
    "sports",
    "sports_kabaddi",
    "reduce_capacity",
    "emoji_transportation",
    "emoji_food_beverage",
    "sick",
    "social_distance",
    "transgender",
    "sports_tennis",
    "real_estate_agent",
    "deck",
    "interests",
    "elderly",
    "outdoor_grill",
    "vaccines",
    "clean_hands",
    "follow_the_signs",
    "add_moderator",
    "sanitizer",
    "piano",
    "fireplace",
    "plus_one",
    "surfing",
    "add_reaction",
    "sports_motorsports",
    "sports_handball",
    "edit_notifications",
    "cruelty_free",
    "sports_baseball",
    "pages",
    "sports_volleyball",
    "sports_football",
    "cookie",
    "kayaking",
    "skateboarding",
    "single_bed",
    "public_off",
    "downhill_skiing",
    "personal_injury",
    "compost",
    "safety_divider",
    "remove_moderator",
    "notifications_paused",
    "man",
    "person_remove_alt_1",
    "heart_broken",
    "woman",
    "6_ft_apart",
    "sports_cricket",
    "nordic_walking",
    "sports_mma",
    "paragliding",
    "group_off",
    "sports_golf",
    "party_mode",
    "co2",
    "pix",
    "group_remove",
    "kitesurfing",
    "snowboarding",
    "hive",
    "snowshoeing",
    "ice_skating",
    "sports_rugby",
    "sports_hockey",
    "sledding",
    "fitbit",
    "south_america",
    "no_luggage",
    "piano_off",
    "sports_martial_arts",
    "scale",
    "domain_add",
    "boy",
    "girl",
    "elderly_woman",

    "editEdit",
    "navigate_next",
    "photo_camera",
    "image",
    "picture_as_pdf",
    "tune",
    "circle",
    "receipt_long",
    "timer",
    "auto_stories",
    "navigate_before",
    "add_a_photo",
    "collections",
    "auto_awesome",
    "remove_red_eye",
    "palette",
    "music_note",
    "wb_sunny",
    "add_photo_alternate",
    "brush",
    "flash_on",
    "euro",
    "auto_fix_high",
    "control_point",
    "adjust",
    "looks_one",
    "style",
    "camera",
    "camera_alt",
    "audiotrack",
    "straighten",
    "photo_library",
    "portrait",
    "video_camera_front",
    "rotate_right",
    "grid_on",
    "color_lens",
    "crop_free",
    "crop_square",
    "timelapse",
    "collections_bookmark",
    "landscape",
    "slideshow",
    "lens",
    "panorama_fish_eye",
    "looks_two",
    "filter_drama",
    "filter_vintage",
    "auto_awesome_motion",
    "compare",
    "healing",
    "image_search",
    "crop",
    "rotate_left",
    "wb_incandescent",
    "blur_on",
    "looks_3",
    "center_focus_strong",
    "wb_cloudy",
    "flare",
    "dehaze",
    "auto_awesome_mosaic",
    "face_retouching_natural",
    "filter_none",
    "colorize",
    "brightness_4",
    "cases",
    "assistant",
    "filter_center_focus",
    "nature_people",
    "photo",
    "broken_image",
    "flash_off",
    "brightness_5",
    "tag_faces",
    "crop_original",
    "details",
    "flip_camera_android",
    "grain",
    "brightness_1",
    "loupe",
    "flip",
    "brightness_6",
    "flip_camera_ios",
    "movie_creation",
    "filter_1",
    "add_to_photos",
    "panorama",
    "image_not_supported",
    "center_focus_weak",
    "animation",
    "filter",
    "movie_filter",
    "view_comfy",
    "auto_fix_normal",
    "crop_din",
    "nature",
    "looks_4",
    "control_point_duplicate",
    "brightness_7",
    "leak_add",
    "photo_size_select_actual",
    "video_camera_back",
    "texture",
    "timer_off",
    "photo_camera_front",
    "transform",
    "incomplete_circle",
    "bedtime",
    "view_compact",
    "motion_photos_on",
    "rotate_90_degrees_ccw",
    "mic_external_on",
    "gradient",
    "music_off",
    "looks_5",
    "thermostat_auto",
    "assistant_photo",
    "photo_album",
    "hdr_strong",
    "shutter_speed",
    "exposure_plus_1",
    "exposure",
    "filter_tilt_shift",
    "filter_2",
    "looks",
    "hide_image",
    "vrpano",
    "crop_16_9",
    "flash_auto",
    "currency_rupee",
    "linked_camera",
    "blur_circular",
    "tonality",
    "looks_6",
    "motion_photos_auto",
    "brightness_2",
    "photo_filter",
    "wb_twilight",
    "iso",
    "brightness_3",
    "photo_size_select_small",
    "filter_hdr",
    "crop_7_5",
    "crop_rotate",
    "hdr_weak",
    "crop_portrait",
    "photo_size_select_large",
    "filter_3",
    "camera_front",
    "crop_5_4",
    "filter_frames",
    "camera_roll",
    "filter_b_and_w",
    "exposure_zero",
    "crop_3_2",
    "burst_mode",
    "blur_linear",
    "crop_landscape",
    "switch_camera",
    "switch_video",
    "filter_9_plus",
    "filter_7",
    "photo_camera_back",
    "motion_photos_paused",
    "filter_4",
    "monochrome_photos",
    "exposure_plus_2",
    "filter_5",
    "face_retouching_off",
    "grid_off",
    "wb_iridescent",
    "rotate_90_degrees_cw",
    "auto_fix_off",
    "wb_shade",
    "leak_remove",
    "filter_9",
    "panorama_photosphere",
    "exposure_neg_1",
    "timer_10",
    "filter_8",
    "motion_photos_off",
    "video_stable",
    "hdr_on",
    "filter_6",
    "blur_off",
    "vignette",
    "30fps_select",
    "panorama_horizontal",
    "image_aspect_ratio",
    "dirty_lens",
    "raw_on",
    "camera_rear",
    "60fps_select",
    "timer_3",
    "motion_photos_pause",
    "panorama_wide_angle_select",
    "24mp",
    "logo_dev",
    "exposure_neg_2",
    "contrast",
    "autofps_select",
    "panorama_horizontal_select",
    "panorama_photosphere_select",
    "panorama_wide_angle",
    "hdr_plus",
    "mic_external_off",
    "wb_auto",
    "panorama_vertical_select",
    "hdr_enhanced_select",
    "12mp",
    "mp",
    "panorama_vertical",
    "hevc",
    "currency_pound",
    "23mp",
    "18mp",
    "hdr_off",
    "11mp",
    "currency_yen",
    "raw_off",
    "20mp",
    "10mp",
    "15mp",
    "17mp",
    "16mp",
    "2mp",
    "13mp",
    "3mp",
    "22mp",
    "8mp",
    "14mp",
    "19mp",
    "21mp",
    "6mp",
    "9mp",
    "4mp",
    "7mp",
    "5mp",
    "currency_ruble",
    "currency_lira",
    "deblur",
    "currency_yuan",
    "currency_franc",
    "bedtime_off",

    "email",
    "location_on",
    "call",
    "phone",
    "business",
    "chat",
    "mail_outline",
    "vpn_key",
    "list_alt",
    "qr_code_scanner",
    "chat_bubble_outline",
    "alternate_email",
    "forum",
    "chat_bubble",
    "textsms",
    "contact_mail",
    "qr_code_2",
    "qr_code",
    "person_search",
    "sentiment_satisfied_alt",
    "message",
    "comment",
    "contacts",
    "app_registration",
    "import_contacts",
    "contact_phone",
    "live_help",
    "import_export",
    "rss_feed",
    "forward_to_inbox",
    "hourglass_bottom",
    "hourglass_top",
    "mark_email_read",
    "read_more",
    "call_end",
    "mark_email_unread",
    "more_time",
    "document_scanner",
    "clear_all",
    "dialpad",
    "key",
    "phone_enabled",
    "mark_chat_unread",
    "3p",
    "screen_share",
    "cancel_presentation",
    "call_split",
    "call_made",
    "present_to_all",
    "unsubscribe",
    "hub",
    "stay_current_portrait",
    "mark_chat_read",
    "add_ic_call",
    "domain_verification",
    "phonelink_ring",
    "call_received",
    "phonelink_lock",
    "phone_disabled",
    "duo",
    "stay_primary_portrait",
    "ring_volume",
    "phonelink_setup",
    "location_off",
    "swap_calls",
    "voicemail",
    "call_merge",
    "mobile_screen_share",
    "phonelink_erase",
    "person_add_disabled",
    "cell_wifi",
    "call_missed_outgoing",
    "speaker_phone",
    "domain_disabled",
    "stop_screen_share",
    "desktop_access_disabled",
    "call_missed",
    "print_disabled",
    "pause_presentation",
    "dialer_sip",
    "rtt",
    "wifi_calling",
    "portable_wifi_off",
    "invert_colors_off",
    "stay_current_landscape",
    "spoke",
    "sip",
    "nat",
    "stay_primary_landscape",
    "comments_disabled",
    "no_sim",
    "co_present",
    "send_time_extension",
    "key_off",
    "cell_tower",
    "vpn_key_off",
    "mark_unread_chat_alt",

    "file_download",
    "file_upload",
    "download",
    "folder",
    "grid_view",
    "upload_file",
    "cloud_upload",
    "text_snippet",
    "folder_open",
    "cloud",
    "request_quote",
    "cloud_download",
    "drive_file_rename_outline",
    "attachment",
    "upload",
    "download_for_offline",
    "create_new_folder",
    "downloading",
    "folder_shared",
    "cloud_done",
    "topic",
    "download_done",
    "cloud_queue",
    "cloud_off",
    "approval",
    "drive_file_move",
    "workspaces",
    "drive_folder_upload",
    "file_download_done",
    "attach_email",
    "rule_folder",
    "cloud_circle",
    "snippet_folder",
    "file_download_off",
    "file_open",
    "drive_file_move_rtl",
    "newspaper",
    "cloud_sync",
    "folder_zip",
    "folder_delete",
    "difference",
    "format_overline",
    "folder_off",


    "local_shipping",
    "place",
    "menu_book",
    "local_offer",
    "map",
    "badge",
    "category",
    "restaurant",
    "directions_car",
    "volunteer_activism",
    "local_fire_department",
    "my_location",
    "local_mall",
    "flight",
    "near_me",
    "handyman",
    "directions_run",
    "restaurant_menu",
    "medical_services",
    "layers",
    "lunch_dining",
    "local_hospital",
    "directions_walk",
    "park",
    "pin_drop",
    "celebration",
    "local_library",
    "local_atm",
    "local_activity",
    "local_cafe",
    "delivery_dining",
    "rate_review",
    "person_pin",
    "directions_bike",
    "design_services",
    "fastfood",
    "directions_bus",
    "local_police",
    "directions_car_filled",
    "miscellaneous_services",
    "local_grocery_store",
    "home_repair_service",
    "local_phone",
    "zoom_out_map",
    "hotel",
    "cleaning_services",
    "person_pin_circle",
    "navigation",
    "money",
    "directions",
    "local_florist",
    "local_gas_station",
    "local_parking",
    "local_post_office",
    "train",
    "two_wheeler",
    "traffic",
    "alt_route",
    "electrical_services",
    "local_bar",
    "pedal_bike",
    "directions_boat",
    "agriculture",
    "beenhere",
    "add_business",
    "360",
    "liquor",
    "moving",
    "add_location_alt",
    "local_airport",
    "local_dining",
    "sailing",
    "maps_ugc",
    "ramen_dining",
    "local_taxi",
    "local_printshop",
    "hail",
    "local_drink",
    "local_pizza",
    "not_listed_location",
    "theater_comedy",
    "trip_origin",
    "add_location",
    "local_laundry_service",
    "dinner_dining",
    "directions_bus_filled",
    "bakery_dining",
    "transfer_within_a_station",
    "terrain",
    "icecream",
    "wine_bar",
    "takeout_dining",
    "multiple_stop",
    "local_pharmacy",
    "store_mall_directory",
    "museum",
    "nightlife",
    "emergency",
    "set_meal",
    "add_road",
    "local_see",
    "route",
    "departure_board",
    "hardware",
    "diamond",
    "festival",
    "plumbing",
    "edit_location",
    "car_rental",
    "electric_car",
    "ev_station",
    "local_convenience_store",
    "layers_clear",
    "attractions",
    "edit_road",
    "pest_control",
    "run_circle",
    "dry_cleaning",
    "edit_location_alt",
    "moped",
    "edit_attributes",
    "satellite",
    "wrong_location",
    "local_movies",
    "directions_boat_filled",
    "car_repair",
    "taxi_alert",
    "tram",
    "breakfast_dining",
    "atm",
    "brunch_dining",
    "transit_enterexit",
    "subway",
    "electric_bike",
    "hvac",
    "directions_transit",
    "electric_scooter",
    "bus_alert",
    "local_car_wash",
    "church",
    "streetview",
    "local_hotel",
    "soup_kitchen",
    "compass_calibration",
    "forest",
    "directions_subway",
    "directions_railway",
    "electric_moped",
    "local_play",
    "electric_rickshaw",
    "mode_of_travel",
    "no_meals",
    "railway_alert",
    "bike_scooter",
    "near_me_disabled",
    "pest_control_rodent",
    "castle",
    "snowmobile",
    "connecting_airports",
    "directions_transit_filled",
    "airline_stops",
    "no_transfer",
    "egg",
    "directions_railway_filled",
    "directions_subway_filled",
    "mosque",
    "zoom_in_map",
    "airlines",
    "flight_class",
    "egg_alt",
    "temple_buddhist",
    "temple_hindu",
    "fort",
    "kebab_dining",
    "synagogue",
    "factory",
    "warehouse",
    "signpost",
    "stadium",
    "merge",
    "u_turn_left",
    "turn_right",
    "turn_left",
    "straight",
    "roundabout_right",
    "u_turn_right",
    "fork_right",
    "turn_sharp_right",
    "turn_slight_left",
    "turn_slight_right",
    "roundabout_left",
    "turn_sharp_left",
    "fork_left",
    "ramp_right",
    "ramp_left",
    "play_arrow",
    "play_circle_filled",
    "videocam",
    "mic",
    "play_circle",
    "volume_up",
    "pause",
    "play_circle_outline",
    "volume_off",
    "replay",
    "skip_next",
    "library_books",
    "speed",
    "stop",
    "fiber_manual_record",
    "movie",
    "skip_previous",
    "new_releases",
    "playlist_add",
    "loop",
    "equalizer",
    "fast_forward",
    "web",
    "video_library",
    "playlist_add_check",
    "mic_off",
    "library_add",
    "video_call",
    "pause_circle",
    "subscriptions",
    "repeat",
    "volume_mute",
    "stop_circle",
    "shuffle",
    "not_interested",
    "mic_none",
    "sort_by_alpha",
    "library_music",
    "fast_rewind",
    "videocam_off",
    "volume_down",
    "pause_circle_filled",
    "queue_music",
    "recent_actors",
    "hearing",
    "web_asset",
    "subtitles",
    "library_add_check",
    "album",
    "note",
    "pause_circle_outline",
    "fiber_new",
    "games",
    "playlist_play",
    "radio",
    "av_timer",
    "replay_circle_filled",
    "branding_watermark",
    "queue",
    "forward_10",
    "replay_10",
    "closed_caption",
    "video_settings",
    "featured_play_list",
    "control_camera",
    "airplay",
    "add_to_queue",
    "slow_motion_video",
    "repeat_one",
    "snooze",
    "call_to_action",
    "hd",
    "repeat_on",
    "high_quality",
    "closed_caption_off",
    "replay_30",
    "playlist_add_check_circle",
    "5g",
    "featured_video",
    "shuffle_on",
    "music_video",
    "forward_30",
    "replay_5",
    "queue_play_next",
    "art_track",
    "hearing_disabled",
    "forward_5",
    "explicit",
    "4k",
    "playlist_add_circle",
    "fiber_smart_record",
    "video_label",
    "remove_from_queue",
    "closed_caption_disabled",
    "repeat_one_on",
    "surround_sound",
    "play_disabled",
    "web_asset_off",
    "sd",
    "missed_video_call",
    "interpreter_mode",
    "10k",
    "fiber_pin",
    "fiber_dvr",
    "4k_plus",
    "1k",
    "2k",
    "8k",
    "1k_plus",
    "9k_plus",
    "8k_plus",
    "3k",
    "7k_plus",
    "3k_plus",
    "5k",
    "6k_plus",
    "7k",
    "5k_plus",
    "9k",
    "2k_plus",
    "6k",
    "playlist_remove",
    "video_file",
    "audio_file",

    "star",
    "check_box",
    "check_box_outline_blank",
    "radio_button_unchecked",
    "radio_button_checked",
    "star_border",
    "toggle_on",
    "star_outline",
    "toggle_off",
    "star_half",
    "indeterminate_check_box",
    "star_purple500",
    "star_border_purple500",

    "warning",
    "error",
    "error_outline",
    "warning_amber",
    "notification_important",
    "add_alert",
    "auto_delete",

    "attach_money",
    "format_list_bulleted",
    "mode_edit",
    "monetization_on",
    "attach_file",
    "edit_note",
    "post_add",
    "bar_chart",
    "checklist",
    "drag_handle",
    "insert_drive_file",
    "show_chart",
    "format_quote",
    "format_list_numbered",
    "border_color",
    "table_chart",
    "pie_chart",
    "insert_photo",
    "notes",
    "format_bold",
    "insert_emoticon",
    "text_fields",
    "table_rows",
    "title",
    "mode",
    "auto_graph",
    "publish",
    "insert_chart_outlined",
    "mode_comment",
    "query_stats",
    "checklist_rtl",
    "mode_edit_outline",
    "insert_invitation",
    "insert_link",
    "functions",
    "format_italic",
    "format_align_left",
    "format_color_fill",
    "horizontal_rule",
    "add_comment",
    "insert_chart",
    "format_size",
    "draw",
    "linear_scale",
    "bubble_chart",
    "format_underlined",
    "stacked_line_chart",
    "money_off",
    "insert_comment",
    "vertical_align_bottom",
    "vertical_align_top",
    "format_align_center",
    "height",
    "format_paint",
    "format_color_text",
    "merge_type",
    "format_align_right",
    "scatter_plot",
    "area_chart",
    "format_list_numbered_rtl",
    "highlight",
    "schema",
    "format_align_justify",
    "add_chart",
    "format_shapes",
    "money_off_csred",
    "pie_chart_outline",
    "short_text",
    "align_horizontal_left",
    "format_indent_increase",
    "strikethrough_s",
    "vertical_align_center",
    "format_color_reset",
    "multiline_chart",
    "score",
    "border_all",
    "format_line_spacing",
    "format_indent_decrease",
    "numbers",
    "format_clear",
    "align_vertical_bottom",
    "horizontal_distribute",
    "space_bar",
    "align_horizontal_center",
    "align_horizontal_right",
    "vertical_distribute",
    "format_strikethrough",
    "superscript",
    "data_object",
    "margin",
    "square",
    "wrap_text",
    "border_clear",
    "subscript",
    "align_vertical_center",
    "align_vertical_top",
    "border_style",
    "padding",
    "border_outer",
    "candlestick_chart",
    "data_array",
    "hexagon",
    "border_inner",
    "border_left",
    "rectangle",
    "border_bottom",
    "format_textdirection_l_to_r",
    "border_horizontal",
    "border_right",
    "format_textdirection_r_to_l",
    "border_top",
    "border_vertical",
    "line_axis",
    "text_increase",
    "insert_page_break",
    "move_up",
    "pentagon",
    "move_down",
    "text_decrease",
    "polyline",

    "support_agent",
    "wifi",
    "account_tree",
    "sync",
    "event_available",
    "priority_high",
    "phone_in_talk",
    "event_note",
    "confirmation_number",
    "sms",
    "live_tv",
    "ondemand_video",
    "wifi_off",
    "event_busy",
    "drive_eta",
    "do_not_disturb_on",
    "wc",
    "more",
    "power",
    "do_not_disturb",
    "time_to_leave",
    "sync_problem",
    "vpn_lock",
    "do_disturb_on",
    "enhanced_encryption",
    "folder_special",
    "running_with_errors",
    "network_check",
    "do_disturb",
    "sms_failed",
    "phone_callback",
    "system_update",
    "adb",
    "voice_chat",
    "phone_forwarded",
    "personal_video",
    "power_off",
    "airline_seat_recline_normal",
    "vibration",
    "do_disturb_alt",
    "do_not_disturb_alt",
    "sync_disabled",
    "no_encryption",
    "tap_and_play",
    "sd_card",
    "phone_missed",
    "airline_seat_recline_extra",
    "mms",
    "imagesearch_roller",
    "disc_full",
    "no_encryption_gmailerrorred",
    "bluetooth_audio",
    "sd_card_alert",
    "do_not_disturb_off",
    "airline_seat_individual_suite",
    "sim_card_alert",
    "phone_paused",
    "phone_locked",
    "do_disturb_off",
    "airline_seat_flat",
    "network_locked",
    "airline_seat_flat_angled",
    "phone_bluetooth_speaker",
    "tv_off",
    "directions_off",
    "airline_seat_legroom_normal",
    "airline_seat_legroom_extra",
    "airline_seat_legroom_reduced",
    "sync_lock",


    "keyboard_arrow_down",
    "phone_iphone",
    "smartphone",
    "keyboard_arrow_right",
    "computer",
    "security",
    "smart_display",
    "desktop_windows",
    "phone_android",
    "keyboard_backspace",
    "keyboard_arrow_up",
    "laptop",
    "keyboard_arrow_left",
    "smart_toy",
    "keyboard",
    "headphones",
    "tv",
    "memory",
    "keyboard_return",
    "headset_mic",
    "point_of_sale",
    "mouse",
    "keyboard_voice",
    "developer_board",
    "videogame_asset",
    "router",
    "keyboard_double_arrow_right",
    "device_hub",
    "cast_for_education",
    "headset",
    "laptop_mac",
    "cast",
    "watch",
    "tablet_mac",
    "devices_other",
    "keyboard_double_arrow_left",
    "laptop_chromebook",
    "keyboard_double_arrow_down",
    "keyboard_tab",
    "desktop_mac",
    "monitor",
    "phonelink",
    "speaker",
    "keyboard_double_arrow_up",
    "gamepad",
    "toys",
    "keyboard_alt",
    "sim_card",
    "connected_tv",
    "tablet_android",
    "cast_connected",
    "laptop_windows",
    "device_unknown",
    "scanner",
    "keyboard_hide",
    "tablet",
    "keyboard_capslock",
    "earbuds",
    "speaker_group",
    "start",
    "browser_updated",
    "headset_off",
    "home_max",
    "headphones_battery",
    "smart_screen",
    "power_input",
    "dock",
    "browser_not_supported",
    "home_mini",
    "earbuds_battery",
    "phonelink_off",
    "developer_board_off",
    "videogame_asset_off",
    "adf_scanner",
    "keyboard_command_key",
    "keyboard_control_key",
    "keyboard_option_key",
    "watch_off",



    "storefront",
    "apartment",
    "fitness_center",
    "business_center",
    "spa",
    "house",
    "meeting_room",
    "corporate_fare",
    "cottage",
    "ac_unit",
    "family_restroom",
    "other_houses",
    "checkroom",
    "grass",
    "all_inclusive",
    "airport_shuttle",
    "child_care",
    "beach_access",
    "pool",
    "kitchen",
    "holiday_village",
    "casino",
    "roofing",
    "room_service",
    "sports_bar",
    "room_preferences",
    "free_breakfast",
    "bathtub",
    "escalator_warning",
    "child_friendly",
    "villa",
    "food_bank",
    "foundation",
    "gite",
    "night_shelter",
    "golf_course",
    "microwave",
    "stairs",
    "backpack",
    "wash",
    "no_photography",
    "house_siding",
    "cabin",
    "elevator",
    "smoking_rooms",
    "countertops",
    "hot_tub",
    "water_damage",
    "soap",
    "fire_extinguisher",
    "charging_station",
    "carpenter",
    "rv_hookup",
    "baby_changing_station",
    "umbrella",
    "smoke_free",
    "tapas",
    "rice_bowl",
    "balcony",
    "no_food",
    "do_not_touch",
    "houseboat",
    "fence",
    "wheelchair_pickup",
    "iron",
    "bento",
    "bungalow",
    "tty",
    "chalet",
    "crib",
    "dry",
    "no_meeting_room",
    "escalator",
    "do_not_step",
    "no_drinks",
    "stroller",
    "no_cell",
    "no_flash",
    "no_backpack",
    "no_stroller",
    "Dev",



    "light_mode",
    "restart_alt",
    "dark_mode",
    "task",
    "password",
    "summarize",
    "sell",
    "signal_cellular_alt",
    "devices",
    "settings_suggest",
    "quiz",
    "widgets",
    "storage",
    "battery_full",
    "credit_score",
    "thermostat",
    "gps_fixed",
    "price_check",
    "medication",
    "pin",
    "price_change",
    "gpp_good",
    "tungsten",
    "battery_charging_full",
    "reviews",
    "note_alt",
    "fmd_good",
    "air",
    "graphic_eq",
    "bluetooth",
    "access_time",
    "dvr",
    "sports_score",
    "nightlight",
    "water",
    "share_location",
    "gpp_maybe",
    "cable",
    "location_searching",
    "cameraswitch",
    "shortcut",
    "monitor_weight",
    "device_thermostat",
    "signal_wifi_4_bar",
    "battery_std",
    "airplane_ticket",
    "wallpaper",
    "data_usage",
    "radar",
    "gpp_bad",
    "developer_mode",
    "bloodtype",
    "wifi_tethering",
    "mode_night",
    "signal_cellular_4_bar",
    "monitor_heart",
    "network_wifi",
    "flashlight_on",
    "airplanemode_active",
    "access_time_filled",
    "splitscreen",
    "fmd_bad",
    "battery_alert",
    "signal_wifi_statusbar_4_bar",
    "send_to_mobile",
    "mobile_friendly",
    "lens_blur",
    "usb",
    "screen_search_desktop",
    "sim_card_download",
    "screen_rotation",
    "signal_wifi_statusbar_connected_no_internet_4",
    "system_security_update_good",
    "gps_not_fixed",
    "bluetooth_connected",
    "remember_me",
    "pattern",
    "battery_saver",
    "nfc",
    "mode_standby",
    "network_cell",
    "brightness_high",
    "screenshot",
    "play_lesson",
    "storm",
    "signal_wifi_0_bar",
    "data_saver_off",
    "brightness_low",
    "data_saver_on",
    "brightness_medium",
    "ad_units",
    "bluetooth_searching",
    "mobiledata_off",
    "security_update_good",
    "bluetooth_disabled",
    "grid_4x4",
    "signal_wifi_off",
    "hdr_auto",
    "battery_unknown",
    "signal_wifi_bad",
    "wifi_calling_3",
    "settings_system_daydream",
    "access_alarms",

    "signal_wifi_connected_no_internet_4",
    "aod",
    "add_to_home_screen",
    "signal_cellular_0_bar",
    "flourescent",
    "gps_off",
    "security_update",
    "flashlight_off",
    "4g_mobiledata",
    "access_alarm",
    "wifi_lock",
    "signal_wifi_statusbar_null",
    "grid_3x3",
    "sd_storage",
    "reset_tv",
    "brightness_auto",
    "do_not_disturb_on_total_silence",
    "signal_cellular_connected_no_internet_4_bar",
    "nearby_error",
    "system_security_update",
    "security_update_warning",
    "airplanemode_inactive",
    "1x_mobiledata",
    "screen_lock_portrait",
    "signal_cellular_connected_no_internet_0_bar",
    "system_security_update_warning",
    "wifi_tethering_off",
    "4g_plus_mobiledata",
    "edgesensor_high",
    "signal_wifi_4_bar_lock",
    "lte_mobiledata",
    "add_alarm",
    "bluetooth_drive",
    "media_bluetooth_on",
    "signal_cellular_nodata",
    "signal_cellular_off",
    "location_disabled",
    "30fps",
    "signal_cellular_null",
    "mobile_off",
    "screen_lock_rotation",
    "edgesensor_low",
    "60fps",
    "rsvp",
    "grid_goldenratio",
    "lte_plus_mobiledata",
    "screen_lock_landscape",
    "usb_off",
    "3g_mobiledata",
    "timer_10_select",
    "punch_clock",
    "signal_cellular_no_sim",
    "g_mobiledata",
    "timer_3_select",
    "lan",
    "h_mobiledata",
    "media_bluetooth_off",
    "medication_liquid",
    "e_mobiledata",
    "h_plus_mobiledata",
    "r_mobiledata",
    "hdr_on_select",
    "hdr_auto_select",
    "hdr_off_select",
    "nearby_off",
    "ssid_chart",
    "phishing",
    "wifi_tethering_error",
    "wifi_password",
    "wifi_find",
    "wifi_channel",

    "feed",
    "manage_search",
    "chair",
    "bed",
    "podcasts",
    "yard",
    "shower",
    "coffee",
    "window",
    "door_front",
    "light",
    "garage",
    "dining",
    "flatware",
    "coffee_maker",
    "camera_indoor",
    "blender",
    "bedroom_parent",
    "bathroom",
    "bedroom_baby",
    "chair_alt",
    "door_back",
    "camera_outdoor",
    "door_sliding",
    "living",
    "bedroom_child",
    "doorbell",
    "table_restaurant",
    "table_bar",

    "sensor_door",
    "sensor_window",
    "shield_moon"]
  filteritem = []
  constructor(private snak: MatSnackBar) {
    this.filteritem = this.originalitems
  }
  searchIcon: string = ''
  seachCalled() {
    console.log(this.searchIcon)
    this.filteritem = this.originalitems.filter(item => item.includes(this.searchIcon))
  }
  itemclick(item: string) {
    let text = `<mat-icon>${item}</mat-icon>`
    navigator.clipboard.writeText(text)

    this.snak.openFromComponent(TextcopiedComponent, {
      duration: 1 * 1000,
    })
  }
}
