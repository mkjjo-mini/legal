# 아임나코805 법무 문서 호스팅

앱인토스 미니앱들의 **이용약관·개인정보처리방침**을 정적 페이지로 제공한다. 앱인토스 콘솔의 약관 등록 URL, OG 공유 이미지 호스팅에 사용한다.

- 공개 주소: https://mkjjo-mini.github.io/legal/
- 서버(Vercel 등) 수명과 무관하게 URL이 고정되도록 GitHub Pages를 사용한다. **콘솔에 등록한 약관 URL이 죽으면 검수·법적 표시의무 문제가 되므로** 이 레포는 함부로 이름을 바꾸거나 비공개로 돌리지 말 것.

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

## 문서 갱신 절차

1. `content/{slug}.js` 수정
2. `node build.js`
3. 앱 레포의 `terms.tsx`·`privacy.tsx`도 동일하게 수정
4. 커밋·푸시 (푸시 후 1~2분 내 Pages 반영)

## 신규 미니앱 추가

`content/{new-slug}.js`를 기존 파일 형식대로 만들고 `node build.js`를 실행하면 폴더·index 링크가 자동 생성된다.
