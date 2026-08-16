# 아임나코805 공개 정적 자산 호스팅

앱인토스 미니앱들이 **공개 URL로 노출해야 하는 자산**을 GitHub Pages로 제공한다.

- **주 용도:** 이용약관·개인정보처리방침 (앱인토스 콘솔의 약관 등록 URL)
- **함께 두는 것:** OG 공유 이미지 등 `https://` 절대 경로가 필요한 자산
- 공개 주소: https://mkjjo-mini.github.io/legal/

## ⚠️ 레포 이름을 바꾸지 말 것

이름은 `legal`이지만 실제 범위는 위와 같이 더 넓다. **이름이 내용보다 좁다는 걸 알면서도 그대로 둔다.**

바꾸면 GitHub Pages 경로(`mkjjo-mini.github.io/legal/...`)가 통째로 바뀌고 **기존 URL이 죽는다.** 레포 자체는 리다이렉트되지만 Pages 주소는 그렇지 않다. 콘솔에 등록된 약관 링크가 깨지면 검수·법적 표시의무 문제가 된다. 같은 이유로 **비공개로 돌리지 않는다.**

서버(Vercel 등) 수명과 무관하게 URL이 고정되도록 GitHub Pages를 쓰는 것도 같은 맥락이다.

## 구조

```
content/{slug}.js     문안 원본 (여기만 고친다)
build.js              생성기 — node build.js
{slug}/terms.html     생성물 (직접 편집 금지)
{slug}/privacy.html   생성물 (직접 편집 금지)
{slug}/og-share.png   OG 공유 이미지
```

## ⚠️ 앱 내 화면과 반드시 동기화

각 문서는 미니앱 안의 화면(`src/pages/terms.tsx`·`privacy.tsx`)과 **내용이 같아야 한다.** 콘솔 등록 URL의 내용과 앱 내 문구가 다르면 그 자체가 표시의무 위반·검수 반려 사유다.

**한쪽을 고치면 반드시 다른 쪽도 고치고 `node build.js`를 다시 실행한다.**

## 미니앱별 현황

| 미니앱 | 약관·처리방침 | OG 이미지 |
|--------|--------------|-----------|
| `oneul-saju-card` (오늘의 사주) | 이 레포에서 호스팅 | `oneul-saju-card/og-share.png` |
| `three-line-diary` (오늘조각) | **앱 내 화면으로만 구현**(`src/screens/Terms.tsx`·`Privacy.tsx`) — 웹 버전 없음 | `three-line-diary/og-share.png` |

> ⚠️ 3호기는 약관을 앱 화면으로만 제공한다. 웹 버전이 필요해지는 시점(콘솔이 URL을 요구하거나 외부 공유가 생길 때)에는 **앱 화면 문안을 그대로 옮겨** `content/three-line-diary.js`를 만들고 두 벌을 동기화해야 한다. 2026-08-16에 처리방침 §4(의견 보내기와 함께 전달되는 정보 — 기기 식별자·구독 상태)가 추가됐으므로 그 내용까지 포함해야 한다.

## 문서 갱신 절차

1. `content/{slug}.js` 수정
2. `node build.js`
3. 앱 레포의 `terms.tsx`·`privacy.tsx`도 동일하게 수정
4. 커밋·푸시 (푸시 후 1~2분 내 Pages 반영)

## 신규 미니앱 추가

`content/{new-slug}.js`를 기존 파일 형식대로 만들고 `node build.js`를 실행하면 폴더·index 링크가 자동 생성된다.
