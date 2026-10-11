#!/usr/bin/env node
/**
 * 법무 문서 정적 사이트 생성기
 *
 * content/{slug}.js 의 문안 데이터를 읽어 {slug}/terms.html·privacy.html 과 index.html을 만든다.
 * 실행: node build.js
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const CONTENT_DIR = path.join(ROOT, 'content');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function renderBody(text) {
  return escapeHtml(text)
    .split('\n\n')
    .map((block) => `<p>${block.split('\n').join('<br>')}</p>`)
    .join('\n      ');
}

const NAV = {
  support: ['지원 안내', 'support.html'],
  terms: ['이용약관', 'terms.html'],
  privacy: ['개인정보처리방침', 'privacy.html'],
  'marketing-consent': ['마케팅 정보 수신 동의', 'marketing-consent.html'],
};

function renderDoc(doc, docTypes) {
  const { appName, docTitle, effectiveDate, seller, sections, slug, docType } = doc;
  // 그 서비스에 실제로 있는 문서만 잇는다(없는 문서로 가는 링크를 만들지 않는다).
  const others = Object.keys(NAV)
    .filter((k) => k !== docType && docTypes.includes(k))
    .map((k) => NAV[k]);
  // 사업자 정보는 문안 파일이 적은 항목만 보여준다(골린은 상호·이메일만 둔다).
  const sellerRows = [
    ['상호', seller.companyName],
    ['대표자', seller.representative],
    ['사업장 주소', seller.address],
    ['사업자등록번호', seller.businessRegistrationNumber],
    ['통신판매업 신고번호', seller.mailOrderSalesNumber],
    ['문의·불만 처리 전화', seller.phone],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `      <div><dt>${label}</dt><dd>${escapeHtml(value)}</dd></div>`)
    .concat(
      seller.email
        ? [`      <div><dt>문의·불만 처리 이메일</dt><dd><a href="mailto:${escapeHtml(seller.email)}">${escapeHtml(seller.email)}</a></dd></div>`]
        : []
    )
    .join('\n');
  const body = sections
    .map(([title, text]) => `    <section>\n      <h2>${escapeHtml(title)}</h2>\n      ${renderBody(text)}\n    </section>`)
    .join('\n');

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(appName)} ${escapeHtml(docTitle)}</title>
<link rel="stylesheet" href="../style.css">
</head>
<body>
<main>
  <header>
    <p class="app">${escapeHtml(appName)}</p>
    <h1>${escapeHtml(docTitle)}</h1>
    <p class="date">시행일: ${escapeHtml(effectiveDate)}</p>
  </header>
${body}
  <section class="seller">
    <h2>사업자 정보</h2>
    <dl>
${sellerRows}
    </dl>
  </section>
  <nav class="footer-nav">
    ${others.map((o) => `<a href="${o[1]}">${o[0]}</a>`).join('\n    ')}
    <a href="../index.html">전체 문서 목록</a>
  </nav>
</main>
</body>
</html>
`;
}

const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.js'));
const apps = [];

for (const file of files) {
  const docs = require(path.join(CONTENT_DIR, file));
  const slug = path.basename(file, '.js');
  const dir = path.join(ROOT, slug);
  fs.mkdirSync(dir, { recursive: true });

  const docTypes = docs.map((d) => d.docType);
  for (const doc of docs) {
    const out = path.join(dir, `${doc.docType}.html`);
    fs.writeFileSync(out, renderDoc(doc, docTypes), 'utf8');
    console.log(`✓ ${slug}/${doc.docType}.html`);
  }
  apps.push({ slug, appName: docs[0].appName, effectiveDate: docs[0].effectiveDate, docTypes });
}

const indexHtml = `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>아임나코805 서비스 약관·개인정보처리방침</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<main>
  <header>
    <p class="app">아임나코805</p>
    <h1>서비스 약관·개인정보처리방침</h1>
    <p class="date">각 서비스의 이용약관과 개인정보처리방침을 확인할 수 있어요.</p>
  </header>
${apps
  .map(
    (a) => `  <section>
    <h2>${escapeHtml(a.appName)}</h2>
    <p>${Object.keys(NAV)
      .filter((k) => a.docTypes.includes(k))
      .map((k) => `<a href="${a.slug}/${NAV[k][1]}">${NAV[k][0]}</a>`)
      .join(' · ')}</p>
    <p class="date">시행일: ${escapeHtml(a.effectiveDate)}</p>
  </section>`
  )
  .join('\n')}
</main>
</body>
</html>
`;
fs.writeFileSync(path.join(ROOT, 'index.html'), indexHtml, 'utf8');
console.log('✓ index.html');
