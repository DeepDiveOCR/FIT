import { reactive } from 'vue';

export const messages = {
  ko: {
    welcome: '여행의 모든 순간,\nAI 여행 도우미와 함께하세요',
    start: '시작하기',
    login_required: '서비스 이용에는\n로그인이 필요합니다',
    login_signup: '로그인/회원가입',
    destination_title: '여행 목적지와 관심사를 선택하세요',
    logout: '로그아웃',
    login: '로그인',
    signup: '회원가입',
    email: '이메일',
    password: '비밀번호',
    name: '이름',
    password_confirm: '비밀번호 확인',
    select_language: '언어 선택',
    input_email: '이메일 입력',
    input_password: '비밀번호 입력',
    input_name: '이름 입력',
    input_password_confirm: '비밀번호 재입력',
    lang_ko: '한국어',
    lang_en: 'English',
    lang_zh: '中文',
    lang_ja: '日本語',
    or: '또는',
    login_with_google: 'Google로 로그인',
    error_name_required: '이름을 입력하세요.',
    error_password_mismatch: '비밀번호가 일치하지 않습니다.',
    error_email_in_use: '이미 가입된 이메일입니다.',
    error_invalid_email: '이메일 형식이 올바르지 않습니다.',
    error_weak_password: '비밀번호는 6자 이상이어야 합니다.',
    error_user_not_found: '이메일 또는 비밀번호가 올바르지 않습니다.',
    error_popup_closed: 'Google 로그인 창이 닫혔습니다.',
    error_unknown: '알 수 없는 오류가 발생했습니다.',
    bookmark_title: '좋아요/북마크 모아보기',
    bookmark_back_home: '메인으로 돌아가기',
    bookmark_empty: '아직 저장한 장소가 없어요.',
    bookmark_review_title: '✍️ 여행 리뷰 남기기',
    bookmark_review_placeholder: '어떤 경험을 하셨나요?',
    bookmark_review_btn: '리뷰 등록',
    bookmark_review_success: '리뷰가 등록되었습니다!',
    bookmark_history_title: '📊 활동 히스토리',
    bookmark_history_empty: '아직 활동 기록이 없어요.',
    bookmark_place_img_alt: '장소 이미지',
    dest_title: '어디로 여행가시나요?',
    dest_subtitle: '여행 목적지와 관심사를 알려주세요.',
    dest_input_placeholder: '예: 부산, 경주, Jeju',
    dest_category_food: '음식(식도락)',
    dest_category_shopping: '쇼핑',
    dest_category_culture: '문화/행사',
    dest_category_transport: '교통정보',
    dest_next_btn: '다음',
    pref_title: '거의 다 왔어요!',
    pref_subtitle: '더 정확한 추천을 위해 취향을 알려주세요.',
    pref_section_food: '🌶️ 음식 취향',
    pref_section_shopping: '🛍️ 쇼핑 취향',
    pref_section_attraction: '🏞️ 관광지 취향',
    pref_section_sns: '📸 SNS 감성',
    pref_section_purpose: '🎯 여행 목적',
    pref_section_free: '💬 자유롭게 알려주세요 (선택)',
    pref_free_placeholder: '예: 저는 방탄소년단 팬이에요! / 활동적인 액티비티를 좋아해요.',
    pref_recommend_btn: '나만을 위한 추천 받기',
    pref_food_mild: '맵찔이',
    pref_food_seafood: '해산물러버',
    pref_food_vegan: '채식 위주',
    pref_shop_dutyfree: '면세점',
    pref_shop_souvenir: '기념품',
    pref_shop_local: '로컬시장',
    pref_attraction_nature: '자연',
    pref_attraction_city: '도시',
    pref_attraction_culture: '전통문화',
    pref_sns_life_shot: '인생샷',
    pref_sns_casual: '일상적인',
    pref_sns_artistic: '예술적인',
    pref_purpose_healing: '힐링',
    pref_purpose_food: '맛집탐방',
    pref_purpose_culture: '문화체험',
    pref_purpose_activity: '액티비티',
    recommend_title: '맞춤 추천 결과',
    recommend_back_home: '메인으로 돌아가기',
    recommend_card_img_alt: '장소 이미지',
    recommend_review_badge: 'AI 리뷰 요약',
    recommend_bookmark_btn: '좋아요/북마크 모아보기',
    place_jinmi: '진미식당',
    place_jinmi_desc: '맵고 진한 양념의 전통 불고기',
    place_jinmi_review: '현지인과 여행객 모두에게 사랑받는 곳. 특히 양념 맛이 일품이라는 평이 많습니다.',
    place_haeundae: '해운대 시장',
    place_haeundae_desc: '로컬 먹거리와 기념품이 가득',
    place_haeundae_review: '활기찬 분위기 속에서 다양한 길거리 음식을 맛볼 수 있어 방문객 만족도가 높습니다.',
    welcome_google_user: '환영합니다!',
    select_language_for_setup: '언어를 선택해주세요',
    complete_setup: '설정 완료',
    bookmark_title: '좋아요/북마크 모아보기',
    delete_bookmark_alert: '북마크가 삭제되었습니다.',
    add_bookmark_alert: '북마크가 추가되었습니다.',
    delete_account_btn: '회원탈퇴',
    delete_account_confirm: '정말로 회원탈퇴를 하시겠습니까?\n이 작업은 되돌릴 수 없습니다.',
    delete_account_success: '회원탈퇴가 완료되었습니다.',
    delete_account_cancel: '취소',
    review_placeholder: '이 장소에 대한 리뷰를 남겨주세요...',
    review_submit: '리뷰 등록',
    review_success: '리뷰가 등록되었습니다!',
    review_empty: '아직 리뷰가 없습니다.',
    management_btn: '관리페이지',
    management_title: '관리자 페이지',
    management_reviews: '전체 리뷰',
    management_stats: '방문 통계',
    management_users: '사용자 통계',
    management_back: '돌아가기',
  },
  en: {
    welcome: 'Every moment of your trip,\nwith AI Travel Assistant',
    start: 'Start',
    login_required: 'Login is required to use the service',
    login_signup: 'Login/Sign Up',
    destination_title: 'Select your destination and interests',
    logout: 'Logout',
    login: 'Login',
    signup: 'Sign Up',
    email: 'Email',
    password: 'Password',
    name: 'Name',
    password_confirm: 'Confirm Password',
    select_language: 'Select Language',
    input_email: 'Enter your email',
    input_password: 'Enter your password',
    input_name: 'Enter your name',
    input_password_confirm: 'Re-enter your password',
    lang_ko: 'Korean',
    lang_en: 'English',
    lang_zh: 'Chinese',
    lang_ja: 'Japanese',
    or: 'or',
    login_with_google: 'Login with Google',
    error_name_required: 'Please enter your name.',
    error_password_mismatch: 'Passwords do not match.',
    error_email_in_use: 'This email is already registered.',
    error_invalid_email: 'Invalid email format.',
    error_weak_password: 'Password must be at least 6 characters.',
    error_user_not_found: 'Incorrect email or password.',
    error_popup_closed: 'Google login window was closed.',
    error_unknown: 'An unknown error occurred.',
    bookmark_title: 'Bookmark/Like Collection',
    bookmark_back_home: 'Back to Main',
    bookmark_empty: 'No places saved yet.',
    bookmark_review_title: '✍️ Leave a Travel Review',
    bookmark_review_placeholder: 'What experience did you have?',
    bookmark_review_btn: 'Register Review',
    bookmark_review_success: 'Review registered!',
    bookmark_history_title: '📊 Activity History',
    bookmark_history_empty: 'No activity history yet.',
    bookmark_place_img_alt: 'Place Image',
    dest_title: 'Where do you want to travel?',
    dest_subtitle: 'Tell us your destination and interests.',
    dest_input_placeholder: 'e.g., Busan, Gyeongju, Jeju',
    dest_category_food: 'Food (Eating Out)',
    dest_category_shopping: 'Shopping',
    dest_category_culture: 'Culture/Events',
    dest_category_transport: 'Transportation',
    dest_next_btn: 'Next',
    pref_title: 'Almost there!',
    pref_subtitle: 'To get more accurate recommendations, tell us your preferences.',
    pref_section_food: '🌶️ Food Preferences',
    pref_section_shopping: '🛍️ Shopping Preferences',
    pref_section_attraction: '🏞️ Attraction Preferences',
    pref_section_sns: '📸 SNS Style',
    pref_section_purpose: '🎯 Travel Purpose',
    pref_section_free: '💬 Tell us freely (optional)',
    pref_free_placeholder: 'e.g., I am a BTS fan! / I like active activities.',
    pref_recommend_btn: 'Get personalized recommendations just for me',
    pref_food_mild: 'Spicy',
    pref_food_seafood: 'Seafood Lover',
    pref_food_vegan: 'Vegan',
    pref_shop_dutyfree: 'Duty-Free',
    pref_shop_souvenir: 'Souvenir',
    pref_shop_local: 'Local Market',
    pref_attraction_nature: 'Nature',
    pref_attraction_city: 'City',
    pref_attraction_culture: 'Traditional Culture',
    pref_sns_life_shot: 'Life Shot',
    pref_sns_casual: 'Casual',
    pref_sns_artistic: 'Artistic',
    pref_purpose_healing: 'Healing',
    pref_purpose_food: 'Food Exploration',
    pref_purpose_culture: 'Cultural Experience',
    pref_purpose_activity: 'Activity',
    recommend_title: 'Personalized Recommendation Results',
    recommend_back_home: 'Back to Main',
    recommend_card_img_alt: 'Place Image',
    recommend_review_badge: 'AI Review Summary',
    recommend_bookmark_btn: 'Bookmark/Like Collection',
    place_jinmi: '진미식당',
    place_jinmi_desc: 'Traditional bulgogi with spicy and rich seasoning',
    place_jinmi_review: 'Loved by both locals and travelers. The seasoning is especially praised.',
    place_haeundae: '해운대 시장',
    place_haeundae_desc: 'Full of local food and souvenirs',
    place_haeundae_review: 'You can taste various street food in a lively atmosphere, which makes visitors satisfied.',
    welcome_google_user: 'Welcome!',
    select_language_for_setup: 'Please select your language',
    complete_setup: 'Complete Setup',
    bookmark_title: 'Bookmark/Like Collection',
    delete_bookmark_alert: 'Bookmark deleted.',
    add_bookmark_alert: 'Bookmark added.',
    delete_account_btn: 'Delete Account',
    delete_account_confirm: 'Are you sure you want to delete your account?\nThis action cannot be undone.',
    delete_account_success: 'Account deletion completed.',
    delete_account_cancel: 'Cancel',
    review_placeholder: 'Write a review for this place...',
    review_submit: 'Submit Review',
    review_success: 'Review submitted successfully!',
    review_empty: 'No reviews yet.',
    management_btn: 'Admin Panel',
    management_title: 'Admin Panel',
    management_reviews: 'All Reviews',
    management_stats: 'Visit Statistics',
    management_users: 'User Statistics',
    management_back: 'Back',
  },
  zh: {
    welcome: '旅行的每一刻，\n与AI旅行助手同行',
    start: '开始',
    login_required: '使用服务需要登录',
    login_signup: '登录/注册',
    destination_title: '请选择目的地和兴趣',
    logout: '登出',
    login: '登录',
    signup: '注册',
    email: '邮箱',
    password: '密码',
    name: '姓名',
    password_confirm: '确认密码',
    select_language: '选择语言',
    input_email: '请输入邮箱',
    input_password: '请输入密码',
    input_name: '请输入姓名',
    input_password_confirm: '请再次输入密码',
    lang_ko: '韩语',
    lang_en: '英语',
    lang_zh: '中文',
    lang_ja: '日语',
    or: '或',
    login_with_google: '使用Google登录',
    error_name_required: '请输入姓名。',
    error_password_mismatch: '两次输入的密码不一致。',
    error_email_in_use: '该邮箱已被注册。',
    error_invalid_email: '邮箱格式不正确。',
    error_weak_password: '密码至少为6位。',
    error_user_not_found: '邮箱或密码错误。',
    error_popup_closed: 'Google登录窗口已关闭。',
    error_unknown: '发生未知错误。',
    bookmark_title: '书签/收藏夹',
    bookmark_back_home: '返回主页',
    bookmark_empty: '还没有保存的地点。',
    bookmark_review_title: '✍️ 留下旅行评论',
    bookmark_review_placeholder: '您有什么体验？',
    bookmark_review_btn: '注册评论',
    bookmark_review_success: '评论已注册！',
    bookmark_history_title: '📊 活动历史',
    bookmark_history_empty: '还没有活动记录。',
    bookmark_place_img_alt: '地点图片',
    dest_title: '您想去哪里旅行？',
    dest_subtitle: '请告诉我们您的目的地和兴趣。',
    dest_input_placeholder: '例如：釜山, 庆州, 济州',
    dest_category_food: '美食(外出就餐)',
    dest_category_shopping: '购物',
    dest_category_culture: '文化/活动',
    dest_category_transport: '交通信息',
    dest_next_btn: '下一步',
    pref_title: '快完成了！',
    pref_subtitle: '为了获得更准确的推荐，请告诉我们您的偏好。',
    pref_section_food: '🌶️ 食物偏好',
    pref_section_shopping: '🛍️ 购物偏好',
    pref_section_attraction: '🏞️ 景点偏好',
    pref_section_sns: '📸 SNS风格',
    pref_section_purpose: '🎯 旅行目的',
    pref_section_free: '💬 请自由地告诉我们（可选）',
    pref_free_placeholder: '例如：我是防弹少年团粉丝！ / 我喜欢活跃的活动。',
    pref_recommend_btn: '为我获取个性化推荐',
    pref_food_mild: '辣',
    pref_food_seafood: '海鲜爱好者',
    pref_food_vegan: '素食主义者',
    pref_shop_dutyfree: '免税店',
    pref_shop_souvenir: '纪念品',
    pref_shop_local: '当地市场',
    pref_attraction_nature: '自然',
    pref_attraction_city: '城市',
    pref_attraction_culture: '传统文化',
    pref_sns_life_shot: '人生照片',
    pref_sns_casual: '日常的',
    pref_sns_artistic: '艺术的',
    pref_purpose_healing: '治愈',
    pref_purpose_food: '美食探索',
    pref_purpose_culture: '文化体验',
    pref_purpose_activity: '活动',
    recommend_title: '个性化推荐结果',
    recommend_back_home: '返回主页',
    recommend_card_img_alt: '地点图片',
    recommend_review_badge: 'AI评论摘要',
    recommend_bookmark_btn: '书签/收藏夹',
    place_jinmi: '진미식당',
    place_jinmi_desc: '辣味浓郁的传统烤牛肉',
    place_jinmi_review: '深受当地人和游客喜爱，尤其是调味料备受好评。',
    place_haeundae: '해운대 시장',
    place_haeundae_desc: '当地美食和纪念品丰富',
    place_haeundae_review: '在热闹的氛围中可以品尝到各种街头小吃，游客满意度很高。',
    welcome_google_user: '欢迎！',
    select_language_for_setup: '请选择您的语言',
    complete_setup: '完成设置',
    bookmark_title: '书签/收藏夹',
    delete_bookmark_alert: '书签已删除。',
    add_bookmark_alert: '书签已添加。',
    delete_account_btn: '删除账户',
    delete_account_confirm: '您确定要删除您的账户吗？\n此操作无法撤销。',
    delete_account_success: '账户删除完成。',
    delete_account_cancel: '取消',
    review_placeholder: '为这个地方写评论...',
    review_submit: '提交评论',
    review_success: '评论提交成功！',
    review_empty: '还没有评论。',
    management_btn: '管理面板',
    management_title: '管理面板',
    management_reviews: '所有评论',
    management_stats: '访问统计',
    management_users: '用户统计',
    management_back: '返回',
  },
  ja: {
    welcome: '旅のすべての瞬間を\nAI旅行アシスタントと共に',
    start: 'はじめる',
    login_required: 'サービス利用にはログインが必要です',
    login_signup: 'ログイン/新規登録',
    destination_title: '目的地と関心カテゴリを選択してください',
    logout: 'ログアウト',
    login: 'ログイン',
    signup: '新規登録',
    email: 'メールアドレス',
    password: 'パスワード',
    name: '名前',
    password_confirm: 'パスワード確認',
    select_language: '言語を選択',
    input_email: 'メールアドレスを入力',
    input_password: 'パスワードを入力',
    input_name: '名前を入力',
    input_password_confirm: 'もう一度パスワードを入力',
    lang_ko: '韓国語',
    lang_en: '英語',
    lang_zh: '中国語',
    lang_ja: '日本語',
    or: 'または',
    login_with_google: 'Googleでログイン',
    error_name_required: '名前を入力してください。',
    error_password_mismatch: 'パスワードが一致しません。',
    error_email_in_use: 'このメールアドレスは既に登録されています。',
    error_invalid_email: 'メールアドレスの形式が正しくありません。',
    error_weak_password: 'パスワードは6文字以上で入力してください。',
    error_user_not_found: 'メールアドレスまたはパスワードが正しくありません。',
    error_popup_closed: 'Googleログインウィンドウが閉じられました。',
    error_unknown: '不明なエラーが発生しました。',
    bookmark_title: 'ブックマーク/お気に入りコレクション',
    bookmark_back_home: 'メインに戻る',
    bookmark_empty: 'まだ保存した場所がありません。',
    bookmark_review_title: '✍️ 旅行レビューを残す',
    bookmark_review_placeholder: 'どのような体験をしましたか？',
    bookmark_review_btn: 'レビューを登録',
    bookmark_review_success: 'レビューが登録されました！',
    bookmark_history_title: '📊 活動履歴',
    bookmark_history_empty: 'まだ活動履歴がありません。',
    bookmark_place_img_alt: '場所画像',
    dest_title: 'どこに旅行しますか？',
    dest_subtitle: '目的地と関心カテゴリをお知らせください。',
    dest_input_placeholder: '例：釜山, 慶州, 濟州',
    dest_category_food: '食事（外食）',
    dest_category_shopping: 'ショッピング',
    dest_category_culture: '文化/イベント',
    dest_category_transport: '交通情報',
    dest_next_btn: '次へ',
    pref_title: 'ほぼ完了！',
    pref_subtitle: 'より正確な推奨を得るために、あなたの好みをお知らせください。',
    pref_section_food: '🌶️ 食事好み',
    pref_section_shopping: '🛍️ ショッピング好み',
    pref_section_attraction: '🏞️ 観光地好み',
    pref_section_sns: '📸 SNSスタイル',
    pref_section_purpose: '🎯 旅行目的',
    pref_section_free: '💬 自由にお知らせください（オプション）',
    pref_free_placeholder: '例：私はBTSファンです！ / アクティブなアクティビティが好きです。',
    pref_recommend_btn: '私だけの個別推奨を得る',
    pref_food_mild: '辛口',
    pref_food_seafood: '海鮮好み',
    pref_food_vegan: 'ベジタリアン',
    pref_shop_dutyfree: '免税店',
    pref_shop_souvenir: '記念品',
    pref_shop_local: '当地市場',
    pref_attraction_nature: '自然',
    pref_attraction_city: '都市',
    pref_attraction_culture: '伝統文化',
    pref_sns_life_shot: '人生ショット',
    pref_sns_casual: 'カジュアル',
    pref_sns_artistic: 'アーティスティック',
    pref_purpose_healing: 'ヒーリング',
    pref_purpose_food: 'グルメ探訪',
    pref_purpose_culture: '文化体験',
    pref_purpose_activity: 'アクティビティ',
    recommend_title: '個別推奨結果',
    recommend_back_home: 'メインに戻る',
    recommend_card_img_alt: '場所画像',
    recommend_review_badge: 'AIレビュー要約',
    recommend_bookmark_btn: 'ブックマーク/お気に入りコレクション',
    place_jinmi: '진미식당',
    place_jinmi_desc: '辛くて濃厚な味付けの伝統プルコギ',
    place_jinmi_review: '地元の人にも旅行者にも愛されているお店。特に味付けが絶品と評判です。',
    place_haeundae: '해운대 시장',
    place_haeundae_desc: 'ローカルフードとお土産が豊富',
    place_haeundae_review: '活気のある雰囲気の中で様々なストリートフードを味わえ、訪問者の満足度が高いです。',
    welcome_google_user: 'ようこそ！',
    select_language_for_setup: '言語を選択してください',
    complete_setup: '設定完了',
    bookmark_title: 'ブックマーク/お気に入りコレクション',
    delete_bookmark_alert: 'ブックマークが削除されました。',
    add_bookmark_alert: 'ブックマークが追加されました。',
    delete_account_btn: 'アカウント削除',
    delete_account_confirm: '本当にアカウントを削除しますか？\nこの操作は元に戻せません。',
    delete_account_success: 'アカウント削除が完了しました。',
    delete_account_cancel: 'キャンセル',
    review_placeholder: 'この場所のレビューを書いてください...',
    review_submit: 'レビュー投稿',
    review_success: 'レビューが投稿されました！',
    review_empty: 'まだレビューがありません。',
    management_btn: '管理パネル',
    management_title: '管理パネル',
    management_reviews: 'すべてのレビュー',
    management_stats: '訪問統計',
    management_users: 'ユーザー統計',
    management_back: '戻る',
  },
};

export const i18nState = reactive({
  lang: 'ko',
});

export function $t(key) {
  return messages[i18nState.lang]?.[key] || messages.ko[key] || key;
} 