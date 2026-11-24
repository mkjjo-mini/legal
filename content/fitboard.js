/**
 * Toile (뚜왈) — 이용약관·개인정보처리방침 원문
 *
 * 레포 이름·슬러그는 코드명 `fitboard` 그대로 둔다(공개 주소 고정). 사용자에게 보이는 이름만 Toile.
 * Toile 은 앱인토스 미니앱이 아니라 App Store·Google Play 로 배포하는 독립 앱이다.
 *  · 이용약관 URL         → fitboard/terms.html
 *  · 개인정보 처리방침 URL → fitboard/privacy.html
 *  · fitboard/index.html 은 제휴 심사용 매체 소개라 이 파일과 무관하다(직접 작성).
 *
 * ⚠️ 앱과 같은 내용이어야 한다. 앱은 이 두 주소를 연다(fitboard `src/features/legal/copy.ts`).
 * ⚠️ 처리 범위가 바뀌면(새 SDK·새 AI 공급자·위치 사용 등) 여기와 스토어 「앱이 수집하는 개인정보」 신고를 함께 고친다.
 * ⚠️ 초안 — 출시 전 법률 검토 필요(오너 결정 2026-11-08).
 * ⚠️ 남이 담은 사본(오너 결정 2026-11-22): 공개 코디를 담으면 담은 사람 보관함에 사본이 생기고, 원본을 내리거나 탈퇴해도 남는다.
 *    올린 사람이 요청하면 10일 안에 내린다(약관 제6조·제9조, 처리방침 3·6·8). 삭제 요구권(§36 · GDPR Art.17)은 약관으로 없앨 수 없다 — 요청 경로는 반드시 둔다.
 * ⚠️ 동의 구조(2026-11-22): 동의 대상은 약관뿐. 처리방침은 고지 문서라 동의로 묶지 않는다 — 수탁사·국외 이전 업체는
 *    처리방침 4번 목록만 고치고 알리면 된다(개인정보 보호법 §26②·§28조의8①3호). 업체를 더할 땐 처리 위치·맡은 일·넘어가는 정보·연락처 네 가지를 채운다.
 *    업체가 자기 목적(AI 학습 등)으로 쓰면 위탁이 아니라 제3자 제공이라 별도 동의가 필요하다 — 계약 조건을 먼저 확인.
 *
 * 코드 확인 기준: 2026-11-15 (fitboard main 373346c + PR #163 추천 기록 · #165 분석 사람 식별).
 *  · 로그인: 이메일 6자리 코드(Supabase Auth, 메일 발송 Resend) · Apple · Google
 *  · 저장: Supabase(서울 ap-northeast-2) DB·Storage — 비공개 보관함 archive/ · 공개 피드 feed/
 *  · 서버: Cloudflare Workers(앱 화면) · Supabase Edge Functions
 *  · AI: Anthropic(옷 인식·공개 사진 검사) · Google Gemini(AI 코디 이미지)
 *  · 날씨: Apple WeatherKit — 사용자가 고른 도시 단위. 기기 위치(GPS)는 쓰지 않는다
 *  · 분석: PostHog(EU·독일 프랑크푸르트) — 회원 uuid 로 identify(이메일 X) · 세션 리플레이·autocapture 끔, URL·사진 경로·이메일·자유 텍스트 금지(`src/lib/analytics.ts`)
 *  · 추천 기록: Supabase `rec_requests`·`rec_events`(노출·반응·머문 시간, 1년 보관 · 후보 목록 90일) — fitboard `docs/rec-learning.md`
 *  · 쇼핑: 제휴 링크(Rakuten·링크프라이스) — 누르면 판매처·제휴 네트워크 사이트로 나간다
 */

const SELLER = {
  companyName: '아임나코805',
  representative: '조미경',
  address: '서울특별시 서초구 반포대로18길 36(서초동, 서초센트럴IPARK)',
  businessRegistrationNumber: '776-11-01043',
  mailOrderSalesNumber: '제2026-서울서초-1184호',
  phone: '0507-1357-1334',
  email: 'imnaco805@gmail.com',
};

const EFFECTIVE_DATE = '2026-11-24'; // 제4조에 크리에이터·비즈니스 계정 예외 한 줄(크리에이터·비즈니스 약관으로 따로 동의) · 이용약관 — 제13조에 「거부하지 않으면 동의로 본다」 문구 추가
const PRIVACY_DATE = '2026-11-24'; // 크리에이터·비즈니스 신청 항목·목적·보유 기간 추가 · 개인정보처리방침 — PostHog 서버를 EU(독일)로 옮김 · 법적 근거·국외 이전 항목 보강 · 영문판에 맞춤 추천·조회 기록 고지
const APP = 'Toile (뚜왈)';

const terms = {
  slug: 'fitboard',
  appName: APP,
  docType: 'terms',
  docTitle: '이용약관',
  effectiveDate: EFFECTIVE_DATE,
  seller: SELLER,
  sections: [
    ['제1조 목적', `이 약관은 ${SELLER.companyName}(이하 "회사")가 제공하는 Toile 앱과 관련 서비스(이하 "서비스")를 이용하는 조건과 절차, 회사와 이용자의 권리·의무를 정해요.`],

    ['제2조 서비스 내용', '서비스는 다음 기능을 제공해요.\n\n· 코디 사진 담기: 카메라·사진 앨범·다른 앱의 공유·웹 주소로 코디 사진을 담아요.\n· 옷장: AI가 사진 속 옷을 인식해 개인 옷장을 만들어요.\n· 조합: 가진 옷으로 만들 수 있는 조합과 AI 코디 이미지를 보여줘요.\n· 착용 기록·날씨: 입은 날을 기록하고, 고른 도시의 날씨에 맞는 코디를 보여줘요.\n· 발견: 다른 이용자가 공개한 코디와 추천 코디를 보여줘요.\n· 쇼핑: 판매처 공식몰로 연결되는 상품 링크를 보여줘요.\n\n회사는 서비스 내용을 바꾸거나 일부를 중단할 수 있어요. 이용자에게 불리한 중요한 변경은 미리 앱 안에서 알려드려요.'],

    ['제3조 가입과 계정', '· 만 14세 이상이면 이메일 인증, Apple 또는 Google 계정으로 가입할 수 있어요.\n· 계정은 본인만 써야 하고, 다른 사람에게 넘기거나 빌려줄 수 없어요.\n· 이용자는 언제든 설정 > 계정 삭제에서 탈퇴할 수 있어요. 탈퇴하면 담은 사진과 기록이 모두 지워지고, 공개한 코디도 즉시 내려가요. 다만 다른 이용자가 이미 담아 간 공개 코디의 사본은 그 이용자의 보관함에 남아요(제6조).'],

    ['제4조 담은 사진은 나만 봐요', '· 이용자가 담은 코디 사진과 옷장은 기본적으로 본인만 볼 수 있어요.\n· 웹 주소·다른 앱의 공유로 담은 사진, 다른 이용자의 공개 코디에서 담아 온 사진은 공개할 수 없어요.\n· 다만 크리에이터·비즈니스 계정이 코디를 공개하면 그 코디에 든 옷의 옷장 대표 사진이 함께 보여요. 이 계정은 신청할 때 「크리에이터·비즈니스 약관」에 따로 동의해요.\n· 웹 주소로 담을 때는 이용자가 지정한 한 페이지에서 이용자가 고른 사진 한 장만 개인적으로 보관하는 목적으로 담고, 원래 출처 주소를 함께 보관해요. 회사는 페이지를 목록으로 수집하거나 자동으로 돌아다니지 않아요.\n· 사이트가 저장 거부를 표시한 경우(robots.txt, nopin 등)에는 담지 않아요.\n· 이용자는 개인적인 이용 범위를 넘어 담은 사진을 복제·배포하지 않아야 해요.'],

    ['제5조 코디 공개', '이용자는 본인이 직접 찍은 코디 사진과 AI로 만든 코디 이미지를 「발견」에 공개할 수 있어요.\n\n[공개 조건]\n· 만 19세 이상이어야 해요.\n· 직접 찍은 사진: 앱 카메라로 찍은 사진, 또는 사진 앨범에서 고른 사진 중 「제가 직접 찍었고, 사진 속 다른 사람에게 동의를 받았어요」를 직접 체크한 사진만 공개할 수 있어요.\n· AI로 만든 이미지: 「AI로 만든 이미지예요. 실존 인물이나 남의 로고를 넣지 않았어요」를 직접 체크한 이미지만 공개할 수 있어요. 공개하면 「AI」 표시가 붙어요.\n· 처음 공개할 때 이 약관의 공개 조항과 불쾌한 콘텐츠 금지에 동의해야 해요.\n· 회사는 공개 전에 음란·폭력·혐오 사진인지 자동으로 검사하고, 해당하면 공개하지 않아요.\n\n[내리기]\n이용자는 언제든 공개한 코디를 내릴 수 있어요. 내리면 「발견」과 프로필에서 더 이상 보이지 않아요. 다만 내리기 전에 다른 이용자가 담은 사본은 그 이용자의 보관함에 남아요(제6조).'],

    ['제6조 공개 코디의 이용 허락', '이용자가 코디를 공개하면, 회사에 다음 범위의 이용을 허락하는 것으로 봐요.\n\n· 목적: 서비스 안에서 다른 이용자에게 보여주고, 추천 코디로 제시하는 것\n· 범위: 서비스 안에서의 표시와, 표시에 필요한 복제·크기 조절·저장\n· 기간: 이용자가 공개를 내리거나 탈퇴할 때까지. 그 전에 다른 이용자가 담은 사본은 아래 [다른 이용자가 담은 사본]을 따라요\n· 대가: 없음\n\n[다른 이용자가 담은 사본]\n· 다른 이용자는 공개 코디를 자기 보드에 담을 수 있어요. 담으면 그 이용자의 보관함에 사진 사본이 생기고, 그 이용자만 볼 수 있어요. 담아 간 사진은 다시 공개할 수 없어요(제4조).\n· 이 사본은 이용자가 공개를 내리거나 코디를 지우거나 탈퇴한 뒤에도, 담은 이용자가 지울 때까지 남아요. 이용자는 코디를 공개할 때 이 범위의 복제와 보관을 허락하는 것으로 봐요.\n· 사본도 내리고 싶으면 제9조의 [내 사진의 사본 내리기]로 요청할 수 있어요.\n· 회사가 제9조에 따라 공개 코디를 가리거나 지우면 사본도 함께 가려요.\n\n저작권은 이용자에게 그대로 남아요. 회사는 앱스토어 스크린샷·광고 등 서비스 밖 마케팅에 공개 코디를 쓰지 않아요. 그런 목적에 쓰려면 이용자에게 따로 동의를 받아요.'],

    ['제7조 공개하는 이용자의 보증과 책임', '코디를 공개하는 이용자는 다음을 보증해요.\n\n· 사진을 본인이 직접 찍었고, 사진에 대한 권리를 가지고 있어요.\n· 사진에 다른 사람이 나왔다면 그 사람에게 공개 동의를 받았어요.\n· 사진이 다른 사람의 저작권·초상권·개인정보 등 권리를 침해하지 않아요.\n\n이 보증이 사실과 달라 제3자가 회사에 이의를 제기하거나 손해배상을 청구하면, 공개한 이용자가 자신의 책임과 비용으로 해결해야 해요. 이 때문에 회사에 손해가 생기면 회사는 그 이용자에게 배상을 청구할 수 있어요. 다만 회사에 고의 또는 과실이 있으면 그 범위에서는 회사가 책임져요.'],

    ['제8조 금지 행위', '이용자는 다음 행위를 하면 안 돼요.\n\n· 다른 사람이 찍은 사진을 직접 찍었다고 표시해 공개하는 행위\n· 다른 사람의 얼굴이나 신체가 나온 사진을 그 사람 동의 없이 공개하거나 프로필 사진으로 쓰는 행위\n· 음란·폭력·혐오·차별 사진이나 불법 정보를 올리는 행위\n· 다른 사람의 계정을 쓰거나, 서비스를 자동화된 방법으로 대량 이용하는 행위\n· 서비스의 정상적인 운영을 방해하는 행위\n\n회사는 불쾌하거나 부적절한 콘텐츠를 용납하지 않아요. 이를 어기면 사전 통지 없이 콘텐츠를 내리고 이용을 제한할 수 있어요.'],

    ['제9조 신고와 권리 침해 처리', '[앱 안 신고]\n공개 코디의 「신고」에서 「내 얼굴이 나왔어요」, 「내 사진인데 다른 사람이 올렸어요」, 「불쾌하거나 부적절해요」 등을 고를 수 있어요. 신고하면 신고한 이용자에게서 그 코디가 즉시 숨겨져요. 「이 사용자의 사진 모두 숨기기」로 특정 이용자를 차단할 수도 있어요.\n\n[권리 침해 신고(저작권법 제103조)]\n자신의 저작권·초상권 등이 침해됐다고 판단하는 권리자는 아래 수신인에게 침해 사진, 신고인 성명·연락처, 권리자임을 알 수 있는 내용을 보내 주세요.\n\n· 수신인: ' + SELLER.representative + '\n· 주소: ' + SELLER.address + '\n· 전화: ' + SELLER.phone + '\n· 이메일: ' + SELLER.email + '\n\n[처리 기준]\n· 접수 후 영업일 2일 안에 해당 사진의 공개를 중단하고 신고인과 게시자에게 결과를 알려요.\n· 게시자는 정당한 권리가 있음을 소명해 재게시를 요청할 수 있어요.\n· 처리 이력을 보관해요.\n· 권리 침해가 반복되는 계정은 공개 업로드를 정지하고, 정도가 심하면 이용을 해지할 수 있어요.\n\n[사생활 침해·명예훼손(정보통신망법 제44조의2)]\n공개 코디에 자신의 얼굴이나 신체가 동의 없이 나왔거나, 사생활 침해·명예훼손을 당했다고 판단하면 위 수신인이나 앱 안 신고로 삭제 또는 임시조치를 요청할 수 있어요.\n· 회사는 요청을 받으면 지체 없이 해당 코디를 삭제하거나, 다른 이용자가 볼 수 없게 가리는 임시조치를 하고 요청인과 게시자에게 알려요.\n· 권리 침해 여부를 판단하기 어렵거나 다툼이 예상되면 30일 이내로 임시조치를 해요.\n· 게시자는 임시조치 기간 안에 재게시를 요청할 수 있고, 기간 안에 요청이 없으면 회사는 해당 코디를 삭제해요.\n· 회사는 필요한 조치를 한 뒤 그 내용을 게시판 등에 공개할 수 있어요.\n\n[내 사진의 사본 내리기]\n공개했던 사진을 다른 이용자의 보관함에서도 내리고 싶으면 위 이메일로 요청해 주세요. 탈퇴한 뒤에도 요청할 수 있어요.\n· 회사는 본인이 올린 사진인지 확인한 뒤 10일 안에 사본을 내리고 결과를 알려요.\n· 사진에 만 19세 미만인 사람이 나온 것으로 확인되면 요청이 없어도 원본과 사본을 즉시 내려요.\n\n회사는 공개 사진이 다른 사람의 권리를 침해하는지를 자동으로 판정하지 않아요. 신고를 받아 처리해요.'],

    ['제10조 AI 기능', '· 옷 인식, 색·종류 분류, AI 코디 이미지는 AI가 만들어서 실제와 다를 수 있어요. 이용자가 언제든 고칠 수 있어요.\n· AI 코디 이미지는 이용자가 공개하기 전까지 본인만 볼 수 있어요. 공개 조건과 이용 허락은 제5조와 제6조를 따라요.\n· AI 기능은 정해진 횟수 안에서 쓸 수 있고, 횟수는 앱 안에서 안내해요.'],

    ['제11조 쇼핑 링크', '· 쇼핑에 보이는 상품 링크는 제휴 링크예요. 이용자가 링크를 통해 구매하면 회사가 판매처로부터 수수료를 받을 수 있어요.\n· 회사는 판매자가 아니에요. 주문·결제·배송·교환·환불은 각 판매처의 약관을 따르고, 판매처가 책임져요.'],

    ['제12조 회사의 책임 제한', '· 회사는 천재지변, 통신 장애 등 회사가 통제할 수 없는 사유로 서비스를 제공하지 못하면 책임을 지지 않아요.\n· 회사는 이용자가 올리거나 담은 사진의 내용에 대해 회사의 고의 또는 과실이 없는 한 책임을 지지 않아요.\n· 회사는 무료로 제공하는 서비스와 관련해 관련 법령이 정한 범위를 넘는 책임은 지지 않아요.'],

    ['제13조 약관 변경', `회사는 관련 법령을 어기지 않는 범위에서 약관을 바꿀 수 있어요. 바꿀 때는 변경 내용과 시행일을 시행 7일 전부터(이용자에게 불리한 변경은 30일 전부터) 앱 안과 이 화면에 알려드려요.\n\n알려드린 시행일 전까지 거부 의사를 밝히지 않고 서비스를 계속 이용하면 바뀐 약관에 동의한 것으로 봐요. 이 점은 변경을 알릴 때마다 따로 분명하게 안내해요. 변경에 동의하지 않으면 탈퇴할 수 있어요.`],

    ['제14조 분쟁 해결', '이 약관은 대한민국 법을 따라요. 서비스와 관련한 분쟁은 민사소송법에 따른 관할 법원에서 해결해요.\n\n이 약관의 한국어판과 영어판 내용이 다르면, 이용자가 앱에서 쓰는 언어의 판을 따라요.'],

    ['부칙', `이 약관은 ${EFFECTIVE_DATE}부터 적용돼요.`],
  ],
};

const privacy = {
  slug: 'fitboard',
  appName: APP,
  docType: 'privacy',
  docTitle: '개인정보처리방침',
  effectiveDate: PRIVACY_DATE,
  seller: SELLER,
  sections: [
    ['1. 처리하는 항목', `${SELLER.companyName}(이하 "회사")는 Toile 서비스를 제공하는 데 필요한 최소한의 정보만 처리해요.\n\n[가입·로그인]\n· 이메일 주소(이메일 인증 가입 시)\n· Apple 또는 Google 계정 식별자와 이메일(해당 계정으로 가입 시)\n\n[이용자가 담은 것]\n· 코디 사진과 옷 사진, 그 사진에서 인식하거나 이용자가 입력한 정보(옷의 종류·색 등 속성, 코디의 스타일·상황·계절 등 태그, 옷 이름 등)\n· 웹 주소로 담은 경우 원래 출처 주소\n· 착용 기록, 저장한 조합, AI 코디 이미지\n· 날씨를 볼 도시(이용자가 고른 도시. 기기 위치는 수집하지 않아요)\n\n[공개·신고]\n· 공개 프로필 이름, 만 19세 이상 여부, 본인 촬영 선언 여부\n· 신고 내용과 처리 이력, 차단한 이용자 목록, 숨긴 코디와 이용자 목록\n\n[크리에이터·비즈니스 신청 — 신청하는 이용자만]\n· 크리에이터 신청: 소개, 채널 주소, 팔로워 수(선택)\n· 비즈니스 신청: 상호, 사업자등록번호, 대표자 이름, 스토어 주소, 담당자 이메일, 연락처(선택)\n· 신청 종류와 상태(확인 중·승인·돌려보냄), 신청·처리 시각, 운영팀이 확인하며 적은 내용\n· 승인되면 계정 종류와 승인 시각\n· 대표자·담당자처럼 다른 사람의 정보를 적을 때는 그 사람에게 알린 뒤 적어 주세요.\n\n[자동으로 생기는 정보]\n· 앱 이용 기록(어떤 화면을 열고 어떤 기능을 썼는지), 기기·운영체제 종류, 앱 언어, 접속 시각\n· 서비스 안에서의 반응(담기·하트·숨기기·입기 등)과 조회 기록(어떤 코디가 보였고 열어 봤는지, 머문 시간)\n· 이용 기록은 이메일이 아닌 회원 식별 번호로 묶어요.\n· 웹 주소·사진 경로·이메일·옷 이름 같은 내용은 이용 기록에 남기지 않아요. 화면 녹화(세션 리플레이)도 하지 않아요.\n\n사진 앨범에서 사진을 담기 전에 사진의 위치 정보 등 촬영 정보(EXIF)를 기기에서 지운 뒤 올려요.`],

    ['2. 처리 목적과 법적 근거', '· 회원 식별과 로그인\n· 담은 사진 보관, 옷 인식, 옷장·조합·착용 기록·날씨 코디 제공\n· 공개 코디 표시, 불쾌한 사진 검사, 신고·권리 침해 처리, 부정 이용 방지\n· 담은 정보와 이용 기록을 바탕으로 한 맞춤 추천(발견의 추천 코디 고르기·순서 정하기)\n· 서비스 개선을 위한 이용 통계 분석(이름·이메일 같은 직접 식별 정보 없이 회원 식별 번호로 분석)\n· 크리에이터·비즈니스 계정 신청의 확인과 승인\n· 문의 응대\n\n[동의 없이 처리하는 정보와 법적 근거]\n회사는 아래 근거로 처리하고, 따로 동의를 받지 않아요.\n· 가입·로그인 정보, 이용자가 담은 것, 공개 코디, 맞춤 추천 — 이용자와 맺은 서비스 이용 계약의 이행(개인정보 보호법 제15조 제1항 제4호)\n· 크리에이터·비즈니스 신청 정보 — 이용자가 신청한 계정 종류를 주기 위한 확인과 그 이행(같은 항 제4호). 신청 확인과 그 계정 종류의 운영에만 써요.\n· 불쾌한 사진 검사, 신고·권리 침해 처리, 부정 이용 방지, 이용 통계 — 회사의 정당한 이익(같은 항 제6호)\n· 법령이 요구하는 보관·제출 — 법률상 의무(같은 항 제2호)\n\n동의가 필요한 처리(광고성 알림, 제3자 제공 등)가 생기면 그 기능을 쓰는 때에 그 항목만 따로 동의받아요.'],

    ['3. 보유 기간과 파기', '· 탈퇴하면 계정, 담은 사진, 옷장·조합·착용 기록, 공개 코디를 지체 없이 지워요. 지운 정보는 되살릴 수 없어요.\n· 이용자가 사진이나 코디를 지우면 그 즉시 지워요.\n· 다만 공개했던 코디를 다른 이용자가 담아 간 사본은 그 이용자의 보관함에 남아요. 담은 이용자가 지우거나, 올린 이용자가 내려 달라고 요청하면(요청 후 10일 안) 지워요. 탈퇴한 뒤에도 요청할 수 있어요.\n· 탈퇴한 뒤의 요청을 처리할 수 있도록, 탈퇴할 때 공개했던 코디의 식별 번호와 이메일을 알아볼 수 없게 바꾼 값을 남겨요. 그 코디의 사본이 모두 없어지면 지워요. 사본 내리기 요청을 확인하는 데만 써요.\n· 크리에이터·비즈니스 신청 정보는 승인되면 그 계정 종류를 유지하는 동안 보관해요. 돌려보낸 신청은 처리한 날부터 5년 뒤에 지워요(같은 신청이 되풀이되는지 확인하고 심사 결과에 대한 문의·분쟁에 답하려고 회사가 정한 기간이에요. 법이 정한 기간이 아니라 상거래 분쟁의 청구 기한(상법 제64조)을 고려했어요). 탈퇴하면 그 전이라도 함께 지워요.\n· 권리 침해 신고 처리 이력은 분쟁 대응을 위해 처리 완료 후 3년간 보관한 뒤 지워요. 법이 정한 기간이 아니라 손해배상 청구 기한(민법 제766조)을 고려해 회사가 정한 기간이에요.\n· 이용 기록(이용 통계, 반응·조회 기록)은 수집 후 1년이 지나면 지우거나, 개인을 알아볼 수 없는 합계 숫자로만 남겨요. 탈퇴하면 그 전이라도 함께 지워요.\n· 법령이 보관을 요구하는 정보는 그 기간 동안 보관해요.'],

    ['4. 처리 위탁과 국외 이전', '회사는 서비스 제공을 위해 아래 업체에 개인정보 처리를 맡겨요(위탁). 일부는 국외에서 처리돼요.\n\n[국외 이전의 근거]\n아래 근거로, 이 조항의 내용을 공개하고 별도 동의 없이 이전해요.\n· 독일(PostHog): 개인정보 보호위원회가 우리나라와 보호 수준이 같다고 인정한 유럽연합(EU) 안에서 처리해요(개인정보 보호법 제28조의8 제1항 제5호).\n· 그 밖의 나라: 이용자와 맺은 계약을 이행하는 데 필요한 처리 위탁·보관이에요(같은 항 제3호).\n· 이전 시기와 방법: 이용자가 해당 기능을 쓸 때마다 암호화된 통신(HTTPS)으로 전송해요.\n· 보유 기간: 업체는 맡은 일을 마치면 지워요. 늦어도 이용자가 탈퇴하거나 위탁 계약이 끝나면 지워요. 이용 통계는 최대 1년이에요.\n\n[업체 목록] 업체(처리 위치) — 맡은 일 / 넘어가는 정보 / 업체 연락처\n· Supabase, Inc. (대한민국 서울) — 계정·사진·기록 저장, 로그인 / 가입·로그인 정보, 사진, 옷장·조합·착용 기록 / privacy@supabase.com\n· Cloudflare, Inc. (미국, 전 세계 거점) — 앱 화면 제공·전송 / 접속 정보(IP 주소, 기기·브라우저 종류), 로그인 상태 정보 / privacyquestions@cloudflare.com\n· Resend, Inc. (일본 도쿄) — 로그인 인증 메일 발송 / 이메일 주소 / support@resend.com\n· Anthropic, PBC (미국) — 사진 속 옷 인식, 공개 전 불쾌한 사진 검사 / 코디 사진 / privacy@anthropic.com. 회사와의 계약상 AI 학습에 쓰지 않아요\n· Google LLC (미국) — AI 코디 이미지 생성 / 옷 사진 / googlekrsupport@google.com. 유료 API 약관상 AI 학습·제품 개선에 쓰지 않아요\n· Apple Inc. (미국) — 고른 도시의 날씨 조회 / 도시 이름만, 이용자 식별 정보 없음 / apple.com/legal/privacy/contact\n· PostHog, Inc. (독일 프랑크푸르트) — 이용 통계 분석 / 이용 기록, 기기 정보, 회원 식별 번호(이메일 제외) / privacy@posthog.com\n\n[거부 방법]\n국외 이전을 원하지 않으면 서비스를 이용하지 않거나 탈퇴할 수 있어요. 다만 이 업체들 없이는 서비스를 제공할 수 없어요.\n\n[업체가 바뀔 때]\n업체를 추가하거나 바꾸면 이 목록을 지체 없이 고쳐 공개하고 앱 안에서 알려드려요. 위탁 업체 변경은 알려드리는 사항이라 다시 동의받지 않아요.'],

    ['5. 제3자 제공', '회사는 이용자의 개인정보를 제3자에게 제공하지 않아요. 다만 법령에 따라 수사기관 등이 요구하는 경우는 예외예요.\n\n「발견」에 코디를 공개하면 그 사진과 공개 프로필 이름이 다른 이용자에게 보여요. 다른 이용자가 그 코디를 담으면 그 이용자의 보관함에 사본이 남아요. 이건 이용자가 직접 선택한 공개예요.\n\n쇼핑의 상품 링크를 누르면 판매처·제휴 네트워크(Rakuten, 링크프라이스 등) 사이트로 이동해요. 그 사이트에서의 정보 처리는 각 사이트의 개인정보처리방침을 따라요.'],

    ['6. 정보주체의 권리와 행사 방법', '· 이용자는 앱 안에서 담은 사진·옷·기록을 직접 보고, 고치고, 지울 수 있어요.\n· 공개한 코디는 언제든 내릴 수 있어요.\n· 설정 > 계정 삭제에서 탈퇴하면 정보가 지워져요. 다른 이용자가 담아 간 공개 코디의 사본은 남는데, 아래 보호책임자에게 요청하면 지워요(3번).\n· 그 밖에 열람·정정·삭제·처리 정지를 원하면 아래 개인정보 보호책임자에게 요청해 주세요. 지체 없이 처리해요.'],

    ['7. 만 14세 미만 아동', '서비스는 만 14세 미만 아동의 가입을 받지 않아요. 만 14세 미만 아동의 정보가 수집된 사실을 알게 되면 즉시 지워요.'],

    ['8. 안전성 확보 조치', '· 담은 사진은 비공개 저장소에 두고, 담은 본인만 접근할 수 있게 접근 권한을 제한해요. 공개 코디를 다른 이용자가 담으면 그 사본은 담은 이용자의 비공개 저장소에 있어요.\n· 공개 코디는 별도의 공개 저장소로 복사해 비공개 저장소와 분리해요.\n· 모든 통신은 암호화(HTTPS)해요.\n· 이용 기록에는 개인을 직접 알아볼 수 있는 내용을 남기지 않아요.'],

    ['9. 개인정보 보호책임자', `· 성명: ${SELLER.representative}\n· 이메일: ${SELLER.email}\n· 전화: ${SELLER.phone}\n\n개인정보 침해에 대한 신고나 상담은 개인정보침해신고센터(privacy.kisa.or.kr, 국번없이 118), 개인정보분쟁조정위원회(kopico.go.kr, 1833-6972)에도 할 수 있어요.`],

    ['10. 처리방침의 변경', `이 개인정보처리방침은 ${PRIVACY_DATE}부터 적용돼요.\n\n· 처리 항목·목적·보유 기간처럼 중요한 내용이 바뀌면 시행 전에 앱 안과 이 화면에서 바뀌기 전과 후를 비교해 알려드려요.\n· 위탁 업체 목록 같은 변경은 이 화면을 지체 없이 고치고 앱 안에서 알려드려요.\n· 처리방침은 동의받는 문서가 아니라 알려드리는 문서예요. 동의가 필요한 변경은 그 항목만 따로 동의받아요.`],
  ],
};

/* ───────────────────────── English (global) ─────────────────────────
 * 번역이 아니라 영어권 이용자용 한 벌이다 — 한국법 조항(저작권법 §103 · 정보통신망법 §44-2)은 그대로 두되
 * DMCA 신고 절차 · GDPR/UK GDPR 처리 근거·권리 · CCPA · 13세 미만(COPPA) 조항을 더한다.
 * 조항 번호는 한국어판과 같게 맞춘다(Article 9 = 제9조) — 한쪽을 고치면 같은 번호를 고친다.
 * ⚠️ 영어권 법률 검토 따로 필요. DMCA 면책을 받으려면 미국 저작권청에 지정 대리인(Designated Agent) 등록이 필요하다(미등록).
 * ⚠️ EU·영국 분석 동의 배너는 아직 없다 — 그래서 분석 근거를 「정당한 이익 + 이의 제기」로 적었다. 배너를 넣으면 「동의」로 고친다.
 */
const SELLER_EN = {
  companyName: 'IMNACO805 (아임나코805)',
  representative: 'Cho Mikyung',
  address: '36, Banpo-daero 18-gil, Seocho-gu, Seoul, Republic of Korea',
  businessRegistrationNumber: '776-11-01043',
  phone: '+82-507-1357-1334',
  email: SELLER.email,
};

const APP_EN = 'Toile';

const termsEn = {
  slug: 'fitboard',
  appName: APP_EN,
  lang: 'en',
  docType: 'terms-en',
  docTitle: 'Terms of Service',
  effectiveDate: EFFECTIVE_DATE,
  seller: SELLER_EN,
  sections: [
    ['1. About these terms', `These Terms of Service ("Terms") govern your use of the Toile app and related services (the "Service") provided by ${SELLER_EN.companyName} ("we", "us"). By creating an account or using the Service, you agree to these Terms. Our Privacy Policy explains how we handle your data; it is a notice, not something you agree to.`],

    ['2. What Toile does', 'Toile lets you:\n\n· Save outfit photos from your camera, photo library, the share sheet, or a web address.\n· Build a personal wardrobe — AI identifies the clothes in your photos.\n· See combinations and AI outfit images made from clothes you already own.\n· Log what you wore and see outfits suited to the weather in a city you choose.\n· Browse outfits other people chose to make public, and recommended outfits.\n· Follow product links to retailers\' official stores.\n\nWe may change or discontinue parts of the Service. We will tell you in the app before a significant change that affects you negatively.'],

    ['3. Your account', '· You must be at least 13 years old to use Toile. If you live in the European Economic Area or the United Kingdom, you must be at least 16, or the age of digital consent in your country if lower. In Korea, the minimum age is 14.\n· Your account is for you alone. Do not share or transfer it.\n· You can delete your account at any time in Settings > Delete account. This permanently deletes your photos and records, and immediately removes any outfits you made public. Copies that other users already saved from your public outfits stay in their libraries (see section 6).'],

    ['4. What you save is private', '· Outfit photos and wardrobe items you save are visible only to you by default.\n· Photos saved from a web address or the share sheet, and photos saved from someone else\'s public outfit, can never be made public.\n· One exception: when a creator or business account makes an outfit public, the wardrobe cover photo of each item in that outfit is shown with it. These accounts agree to the separate Creator and Business Terms when they apply.\n· When you save from a web address, Toile saves only the one photo you choose, from the one page you specify, for your personal use, together with the original source address. We do not crawl or bulk-collect pages.\n· We do not save from sites that opt out (for example via robots.txt or a "nopin" tag).\n· Do not copy or distribute saved photos beyond personal use.'],

    ['5. Making an outfit public', 'You may share to Discover an outfit photo that you took yourself, or an outfit image made with AI.\n\n[Conditions]\n· You must be at least 18 years old (19 in Korea).\n· Photos you took: only photos taken with the in-app camera, or library photos where you check "I took this photo myself and have consent from anyone else in it", can be made public.\n· AI-made images: only images where you check "Made with AI. No real people or other brands\' logos" can be made public. They carry an "AI" label once public.\n· The first time you post, you confirm the conditions in these Terms.\n· Before a photo goes public we automatically check it for sexual, violent or hateful content, and do not publish it if it fails.\n\n[Taking it down]\nYou can make a public outfit private again at any time. It no longer appears in Discover or on your profile. Copies that other users saved before then stay in their libraries (see section 6).'],

    ['6. License for public outfits', 'When you make an outfit public, you grant us the following license:\n\n· Purpose: showing it to other users within the Service and offering it as a recommended outfit\n· Scope: displaying it within the Service, and the copying, resizing and storage needed to do so\n· Term: until you make it private again or delete your account. Copies other users saved before then follow [Copies saved by other users] below\n· Fee: none\n· Non-exclusive and worldwide (so users anywhere can see it in the app)\n\n[Copies saved by other users]\n· Other users can save a public outfit to their own boards. This puts a copy of the photo in that user’s library, visible only to them. They cannot make it public again (section 4).\n· That copy stays after you make the outfit private, delete it, or delete your account, until the user who saved it deletes it. By making an outfit public, you permit this copying and storage.\n· To have copies taken down as well, ask us under [Taking down copies of your photo] in section 9.\n· If we hide or remove a public outfit under section 9, we hide its copies too.\n\nYou keep the copyright. We do not use public outfits for marketing outside the Service, such as App Store screenshots or ads, without asking you separately.'],

    ['7. Your promises and responsibility', 'When you make an outfit public, you promise that:\n\n· You took the photo yourself and hold the rights to it.\n· Anyone else who appears in it has agreed to it being public.\n· It does not infringe anyone\'s copyright, image rights, privacy or other rights.\n\nIf these promises are untrue and a third party makes a claim against us, you are responsible for resolving it at your own cost, and you agree to compensate us for resulting losses, to the extent permitted by law. This does not apply to the extent the loss was caused by our own intentional misconduct or negligence.'],

    ['8. What you must not do', 'Do not:\n\n· Post a photo someone else took as if you took it\n· Post a photo showing another person\'s face or body without their consent, or use one as your profile photo\n· Post sexual, violent, hateful or discriminatory content, or anything illegal\n· Use someone else\'s account, or use the Service in bulk by automated means\n· Interfere with the normal operation of the Service\n\nWe have zero tolerance for objectionable content. If you break these rules, we may remove content and restrict your account without notice.'],

    ['9. Reports and rights complaints', '[In-app reports]\nOn any public outfit, tap Report and choose a reason such as "My face is in this photo", "This is my photo but someone else posted it", or "Offensive or inappropriate". The outfit is hidden from you immediately. You can also hide all photos from a specific user.\n\n[Copyright notices (including the U.S. DMCA)]\nIf you believe a public outfit infringes your copyright, send a notice to the contact below with:\n· your physical or electronic signature;\n· the photo you believe infringes (a screenshot or description of where it appears);\n· the work you claim is infringed;\n· your name, address, phone and email;\n· a statement that you have a good-faith belief the use is not authorized by the owner, its agent or the law; and\n· a statement, under penalty of perjury, that the information is accurate and that you are the owner or authorized to act for the owner.\n\nContact: ' + SELLER_EN.representative + ', ' + SELLER_EN.address + ' · ' + SELLER_EN.phone + ' · ' + SELLER_EN.email + '\n\nIf your outfit was removed and you believe this was a mistake, you can send a counter-notice to the same contact.\n\n[Image rights, privacy and defamation]\nIf a public outfit shows your face or body without your consent, or otherwise violates your privacy or reputation, you can ask us through the contact above or an in-app report to remove it. We will promptly remove it or hide it from everyone. Where it is unclear whether rights were violated, we may hide it for up to 30 days while the poster responds; if the poster does not ask to restore it within that time, we delete it.\n\n[How we handle complaints]\n· Within 2 business days of receiving a valid complaint, we stop showing the photo publicly and notify both the complainant and the poster.\n· We keep records of how complaints were handled.\n· We suspend public posting for accounts that repeatedly infringe, and may terminate them in serious cases.\n\n[Taking down copies of your photo]\nIf you want a photo you once made public taken down from other users’ libraries too, email the contact above. You can ask even after deleting your account.\n· After confirming you posted the photo, we take the copies down within 10 days and tell you the result.\n· If we find that a photo shows a minor, we take down the original and its copies immediately, without a request.\n\nWe do not automatically judge whether a photo infringes someone\'s rights. We act on reports.'],

    ['10. AI features', '· Clothing recognition, color and category labels, and AI outfit images are generated by AI and may be inaccurate. You can correct them at any time.\n· AI outfit images are visible only to you until you make them public. Sections 5 and 6 set the conditions and license for making them public.\n· AI features are available up to the limits shown in the app.'],

    ['11. Shopping links', '· Product links are affiliate links. If you buy through them, we may earn a commission from the retailer, at no extra cost to you.\n· We are not the seller. Orders, payments, delivery, returns and refunds are governed by and the responsibility of each retailer.'],

    ['12. Limitation of liability', 'The Service is provided free of charge and "as is". To the extent permitted by law, we are not liable for:\n\n· failures caused by events beyond our reasonable control, such as natural disasters or network outages;\n· content that users save or post, unless we acted intentionally or negligently;\n· indirect or consequential losses.\n\nNothing in these Terms limits liability that cannot be limited by law, or your statutory rights as a consumer.'],

    ['13. Changes to these terms', 'We may update these Terms in line with applicable law. We will announce changes and their effective date in the app and on this page at least 7 days in advance (30 days for changes that disadvantage you).\n\nIf you keep using the Service past the effective date without telling us you object, you accept the updated Terms. We will say this clearly each time we announce a change. If you do not agree, you may delete your account.'],

    ['14. Governing law and disputes', 'These Terms are governed by the laws of the Republic of Korea. Disputes will be resolved by the competent court under the Korean Civil Procedure Act. If you are a consumer living in the EEA, the UK or another country whose law gives you mandatory protections, you keep those protections and may bring a claim in the courts of your country.\n\nIf the Korean and English versions of these Terms differ, the version in the language you use the app in applies to you.'],

    ['Effective date', `These Terms apply from ${EFFECTIVE_DATE}.`],
  ],
};

const privacyEn = {
  slug: 'fitboard',
  appName: APP_EN,
  lang: 'en',
  docType: 'privacy-en',
  docTitle: 'Privacy Policy',
  effectiveDate: PRIVACY_DATE,
  seller: SELLER_EN,
  sections: [
    ['1. What we collect', `${SELLER_EN.companyName} ("we") is the controller of your personal data for Toile. We collect only what we need to run the Service.\n\n[Sign-in]\n· Your email address (if you sign in with email)\n· Your Apple or Google account identifier and email (if you sign in with Apple or Google)\n\n[What you save]\n· Outfit and clothing photos, and the details we recognize in them or you enter (clothing attributes such as category and color, outfit tags such as style, occasion and season, and item names)\n· The original web address, if you saved a photo from one\n· Wear logs, saved combinations and AI outfit images\n· The city you choose for weather (we never collect your device location)\n\n[Public posts and reports]\n· Your public profile name, whether you are an adult, and whether you declared a photo as your own\n· Reports you make or receive and how they were handled, the users you have blocked, and the outfits and users you have hidden\n\n[Creator and business applications — only if you apply]\n· Creator application: your introduction and channel address, and optionally your follower count\n· Business application: business name, business registration number, representative's name, store address, contact email, and optionally a phone number\n· The type and status of your application (in review, approved, returned), when you applied and when we decided, and notes our team makes while reviewing it\n· If approved, your account type and when it was approved\n· If you enter another person's details, such as a representative or contact person, please tell them first.\n\n[Collected automatically]\n· Usage events (which screens and features you use), device and OS type, app language, and timestamps\n· Your reactions in the app (saving, liking, hiding, wearing) and viewing records (which outfits were shown to you, which you opened, and how long you stayed)\n· We link usage records to a member ID, not your email.\n· We never record web addresses, photo paths, email addresses or item names in usage events, and we do not use session recording.\n\nBefore a photo leaves your device, we remove its embedded metadata (EXIF), including location.`],

    ['2. Why we use it, and our legal bases', 'For users in the EEA and UK, we rely on the following legal bases under the GDPR and UK GDPR:\n\n· Contract — to create your account, store your photos, recognize clothing, and provide your wardrobe, combinations, wear log, weather outfits, public posts and personalized recommendations (choosing and ordering the outfits recommended in Discover, based on what you save and how you use the app); and, if you apply for a creator or business account, to review your application at your request and run that account type\n· Legitimate interests — to keep the Service safe (checking public photos for objectionable content, handling reports, preventing abuse) and to improve it with usage statistics linked to a member ID rather than your name or email. You can object at any time (see section 6).\n· Legal obligation — to respond to valid legal requests and keep records required by law\n· Consent — to make an outfit public. You can withdraw consent by making it private again.'],

    ['3. How long we keep it', '· When you delete your account, we delete your account, photos, wardrobe, combinations, wear log and public outfits without delay. Deleted data cannot be recovered.\n· When you delete a photo or outfit, we delete it right away.\n· Copies that other users saved from an outfit you made public stay in their libraries. We delete them when that user deletes them, or within 10 days of your asking us to. You can ask even after deleting your account.\n· So that we can act on a request made after you delete your account, we keep the ID numbers of outfits you had made public and a one-way hash of your email. We delete these once no copies of those outfits remain, and use them only to verify takedown requests.\n· Creator and business application details are kept for as long as you hold that account type. If we return an application, we delete it 5 years after the decision (a period we chose, not a statutory one, to spot repeated applications and to answer questions or disputes about the decision). If you delete your account, they are deleted then.\n· Records of how rights complaints were handled are kept for 3 years after the complaint is closed, to deal with disputes. This period is our own choice, not a statutory one.\n· Usage records (usage statistics, and what you viewed and reacted to) are deleted after 1 year, or kept only as aggregate numbers that cannot identify you. If you delete your account, they are deleted then.\n· We keep data longer only where the law requires it.'],

    ['4. Service providers and international transfers', 'We use the following providers to run Toile. Some process data outside your country, including in the United States. Where data is transferred out of the EEA or UK, we rely on the provider\'s Standard Contractual Clauses (and the UK Addendum) or an adequacy decision. These providers act as our processors: they handle data only to do the job listed, when you use that feature, over encrypted connections (HTTPS). They delete data when the job is done, and at the latest when you delete your account or our contract with them ends.\n\n[Providers] provider (location) — what they do / data involved / contact\n· Supabase, Inc. (servers in Seoul, Korea) — account, photo and record storage; sign-in / sign-in details, photos, wardrobe, combinations and wear log / privacy@supabase.com\n· Cloudflare, Inc. (USA, global network) — delivering the app / connection data (IP address, device and browser type), sign-in session / privacyquestions@cloudflare.com\n· Resend, Inc. (servers in Tokyo, Japan) — sending sign-in emails / email address / support@resend.com\n· Anthropic, PBC (USA) — recognizing clothing; checking public photos for objectionable content / outfit photos / privacy@anthropic.com. Under our contract, not used to train models\n· Google LLC (USA) — generating AI outfit images / clothing photos / support.google.com/policies. Under the paid API terms, not used to train models or improve Google products\n· Apple Inc. (USA) — weather for the city you chose / city only, no identifiers / apple.com/legal/privacy/contact\n· PostHog, Inc. (servers in Frankfurt, Germany, EU) — usage analytics / usage events, device info, member ID (no email) / privacy@posthog.com\n\n[When providers change]\nWhen we add or replace a provider, we update this list promptly and announce it in the app. Changing a provider does not require new consent from you.\n\nKorea has been recognized by the European Commission and the UK as providing adequate data protection.'],

    ['5. Sharing', 'We do not sell your personal information, and we do not share it for cross-context behavioral advertising (as defined under the California Consumer Privacy Act). We do not give it to third parties, except where required by law.\n\nIf you make an outfit public, that photo and your public profile name are visible to other users, and a copy stays in the library of anyone who saves it. This is your choice.\n\nShopping links take you to retailer and affiliate-network sites (such as Rakuten). Their own privacy policies apply there.'],

    ['6. Your rights', '· In the app, you can view, edit and delete your photos, items and records yourself, make public outfits private, and delete your account. Copies other users saved from your public outfits are not removed automatically — email us and we will delete them (section 3).\n· Depending on where you live, you may also have the right to access, correct, delete or export your data, to restrict or object to processing (including analytics based on legitimate interests), and to withdraw consent.\n· California residents have the right to know, delete and correct their personal information, and not to be discriminated against for exercising these rights. We do not sell or share personal information.\n· To exercise a right, email us at the address below. We respond within the time required by law (one month in the EEA and UK). We will not charge you.\n· In the EEA or UK, you can also complain to your local data protection authority.'],

    ['7. Children', 'Toile is not for children under 13 (under 16 in the EEA and UK, or the age of digital consent if lower; under 14 in Korea). We do not knowingly collect data from them. If we learn we have, we delete it immediately.'],

    ['8. Security', '· Saved photos are kept in private storage that only the person who saved them can access. When another user saves your public outfit, their copy sits in their private storage.\n· Public outfits are copied to separate public storage, apart from private storage.\n· All connections are encrypted (HTTPS).\n· Usage events contain nothing that directly identifies you.'],

    ['9. Contact', `· Privacy contact: ${SELLER_EN.representative}\n· Email: ${SELLER_EN.email}\n· Phone: ${SELLER_EN.phone}`],

    ['10. Changes to this policy', `This Privacy Policy applies from ${PRIVACY_DATE}.\n\n· If we change something significant — what we collect, why, or how long we keep it — we will show you what changed, before and after, in the app and on this page before it takes effect.\n· For changes such as the list of providers, we update this page promptly and announce it in the app.\n· This policy is a notice, not something you agree to. If a change needs your consent, we ask for that consent separately.`],
  ],
};

/**
 * 크리에이터·비즈니스 약관 — 신청할 때만 따로 동의받는 추가 약관(오너 결정 2026-11-24).
 *  · 주소: fitboard/partner-terms.html · partner-terms-en.html
 *  · 앱은 신청 화면에서 이 문서를 열고, 동의한 판(PARTNER_DATE)·시각·언어를 기록한다(fitboard account 세션).
 *  · 내용을 바꾸면 PARTNER_DATE 를 올린다 — 앱의 동의 판 번호도 같이 올려야 한다.
 *  · 수익 나누기·정산을 시작하면 제8조를 채우고 처리방침(정산 정보·세법 보관 5년)도 함께 고친다.
 */
const PARTNER_DATE = '2026-11-24';

const partnerTerms = {
  slug: 'fitboard',
  appName: APP,
  docType: 'partner-terms',
  docTitle: '크리에이터·비즈니스 약관',
  effectiveDate: PARTNER_DATE,
  seller: SELLER,
  sections: [
    ['제1조 이 약관은', `이 약관은 Toile의 크리에이터 계정과 비즈니스 계정에 적용돼요. Toile 이용약관(이하 "이용약관")에 더해지는 약관이고, 두 약관의 내용이 다르면 이 약관을 먼저 따라요.\n\n크리에이터·비즈니스 계정을 신청할 때 이 약관에 동의해요. 회사는 동의한 약관의 시행일과 동의한 시각을 기록해요.`],
    ['제2조 신청과 승인', '· 신청할 때 적는 정보는 사실이어야 해요. 다른 사람의 정보를 적을 때는 그 사람에게 먼저 알려야 해요.\n· 회사는 신청 내용을 확인해 승인하거나 돌려보내요. 회사가 모든 신청을 승인해야 하는 것은 아니에요.\n· 적은 정보가 바뀌면 회사에 알려 주세요.\n· 신청 정보를 어떻게 처리하고 얼마나 보관하는지는 개인정보처리방침에 적혀 있어요.'],
    ['제3조 옷장 대표 사진이 함께 보여요', '· 크리에이터·비즈니스 계정이 코디를 공개하면, 그 코디에 든 옷마다 옷장에 둔 대표 사진이 다른 이용자에게 그대로 보여요. 대표 사진을 웹 주소나 공유로 담았더라도 마찬가지예요. 이용약관 제4조의 예외예요.\n· 공개한 코디에 들지 않은 옷의 사진은 보이지 않아요.\n· 대표 사진을 바꾸면 바뀐 사진이 보여요.\n· 다른 이용자가 그 코디를 담으면 대표 사진도 사본에 함께 복사돼요. 사본은 이용약관 제6조와 제9조를 따라요.'],
    ['제4조 대표 사진에 대한 보증', '크리에이터·비즈니스 계정은 공개 코디에 함께 보이는 옷장 대표 사진에 대해 다음을 보증해요.\n\n· 직접 찍었거나, 공개해도 된다는 권리나 허락이 있는 사진이에요.\n· 다른 사람이나 다른 회사의 상품 사진을 허락 없이 쓰지 않았어요.\n· 사진에 다른 사람이 나왔다면 그 사람에게 공개 동의를 받았어요.\n\n회사는 옷 사진을 공개 전에 따로 검사하지 않아요. 신고를 받으면 이용약관 제9조에 따라 처리해요. 이 보증이 사실과 다를 때의 책임은 이용약관 제7조와 같아요.'],
    ['제5조 이용 허락', '공개 코디에 함께 보이는 옷장 대표 사진도 이용약관 제6조의 이용 허락 대상이에요. 범위는 같아요 — 서비스 안에서 보여주는 것과 그에 필요한 복제·크기 조절·저장, 그리고 다른 이용자가 담은 사본이에요. 저작권은 이용자에게 그대로 남아요.'],
    ['제6조 대가를 받은 코디', '브랜드나 판매자에게서 돈·상품·할인 같은 대가를 받고 코디를 공개할 때는, 보는 사람이 그 사실을 알 수 있게 밝혀야 해요. 자기 회사나 자기가 파는 상품을 소개할 때도 같아요.\n\n· 지금은 사진 안에 「광고」나 「협찬」처럼 알아볼 수 있는 표시를 넣어 주세요.\n· 앱에 표시 기능이 생기면 그 기능으로 표시해야 해요.'],
    ['제7조 승인을 거두는 경우', '· 신청 정보가 거짓이거나, 권리 침해가 반복되거나, 이 약관이나 이용약관을 어기면 회사는 승인을 거둘 수 있어요. 거두기 전에 이유를 알리고, 급한 경우에는 먼저 조치한 뒤 알려요.\n· 이용자는 언제든 개인 계정으로 돌아가겠다고 요청할 수 있어요. 아래 문의 이메일로 보내 주세요.\n· 개인 계정으로 돌아가면 옷장 대표 사진은 더 이상 다른 이용자에게 보이지 않아요. 그 전에 다른 이용자가 담은 사본은 이용약관 제6조와 제9조를 따라요.'],
    ['제8조 수익', '지금은 수익 나누기나 정산이 없어요. 시작하게 되면 조건을 이 약관에 넣고, 그 조건에 따로 동의받아요.'],
    ['제9조 약관의 변경', '이 약관을 바꿀 때는 시행 7일 전(이용자에게 불리한 변경은 30일 전)에 앱 안에서 알려요. 그 밖의 절차는 이용약관 제13조와 같아요.'],
    ['부칙', `이 약관은 ${PARTNER_DATE}부터 적용돼요.`],
  ],
};

const partnerTermsEn = {
  slug: 'fitboard',
  appName: APP_EN,
  lang: 'en',
  docType: 'partner-terms-en',
  docTitle: 'Creator and Business Terms',
  effectiveDate: PARTNER_DATE,
  seller: SELLER_EN,
  sections: [
    ['1. About these terms', 'These terms apply to creator accounts and business accounts on Toile. They add to the Toile Terms of Service (the "Terms"). If the two differ, these terms come first.\n\nYou agree to these terms when you apply for a creator or business account. We record which version you agreed to and when.'],
    ['2. Applying and approval', '· The details you give us must be true. If you enter another person’s details, tell them first.\n· We review each application and either approve or return it. We are not obliged to approve every application.\n· Tell us if your details change.\n· Our Privacy Policy explains how we handle application details and how long we keep them.'],
    ['3. Your wardrobe cover photos are shown', '· When a creator or business account makes an outfit public, the cover photo you set in your wardrobe for each item in that outfit is shown to other users as it is — even if you saved that photo from a web address or the share sheet. This is an exception to section 4 of the Terms.\n· Photos of items that are not in a public outfit are not shown.\n· If you change a cover photo, the new one is shown.\n· When another user saves the outfit, the cover photos are copied with it. Those copies follow sections 6 and 9 of the Terms.'],
    ['4. Your promises about cover photos', 'For the wardrobe cover photos shown with your public outfits, you promise that:\n\n· You took them yourself, or you have the right or permission to show them publicly.\n· You have not used another person’s or company’s product photo without permission.\n· Anyone who appears in them has agreed to it being public.\n\nWe do not check item photos before they go public. We act on reports under section 9 of the Terms. If these promises are untrue, section 7 of the Terms applies.'],
    ['5. License', 'Wardrobe cover photos shown with a public outfit are covered by the license in section 6 of the Terms, with the same scope: showing them within the Service, the copying, resizing and storage needed to do so, and copies saved by other users. You keep the copyright.'],
    ['6. Paid or gifted outfits', 'If a brand or seller gave you money, products, discounts or anything else of value for an outfit you make public, you must make that clear to people who see it. The same applies when you show your own company’s products or products you sell.\n\n· For now, put a clear label such as "Ad" or "Sponsored" in the photo itself.\n· Once the app has a labeling feature, you must use it.'],
    ['7. Withdrawing approval', '· We may withdraw approval if your application details were false, if you repeatedly infringe others’ rights, or if you break these terms or the Terms. We will tell you why first; in urgent cases we act first and tell you afterwards.\n· You can ask to go back to a personal account at any time by emailing us at the address below.\n· Once you are a personal account again, your wardrobe cover photos are no longer shown to other users. Copies saved before then follow sections 6 and 9 of the Terms.'],
    ['8. Earnings', 'There is no revenue sharing or payout at this time. If we start one, we will add the conditions to these terms and ask you to agree to them separately.'],
    ['9. Changes to these terms', 'We will tell you in the app at least 7 days before a change takes effect (30 days if the change is unfavorable to you). Otherwise, the process in the Terms applies.'],
    ['Effective date', `These terms apply from ${PARTNER_DATE}.`],
  ],
};

module.exports = [terms, privacy, termsEn, privacyEn, partnerTerms, partnerTermsEn];
