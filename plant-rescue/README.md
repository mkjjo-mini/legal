# plant-rescue (식물 살리기) — 공개 자산

| 파일 | 용도 | 누가 읽나 |
|---|---|---|
| `index.html` | 서비스 소개 페이지 — 제휴 프로그램 심사·채널 등록용 공개 주소 | 사람(심사 담당자) |
| `catalog.json` | 「함께 쓰면 좋아요」 상품 목록 | 앱(`plant-rescue/src/features/affiliate/remoteCatalog.ts`) |

공개 주소: `https://mkjjo-mini.github.io/legal/plant-rescue/` · `…/plant-rescue/catalog.json`

## catalog.json 고치는 법

```json
{
  "version": 1,
  "updatedAt": "2026-10-01",
  "items": [
    { "id": "mister", "category": "mister", "channel": "toss", "productName": "상품명 원문", "url": "https://toss.im/_m/xxxxx" }
  ]
}
```

푸시 후 1~2분 안에 반영되고, 앱은 최대 10분 묵은 값을 볼 수 있다(Pages 캐시 — 급히 내릴 때도 이만큼 걸린다). **앱 검수는 다시 받지 않는다.** 지면을 급히 내리려면 `items`를 `[]`로 비운다.

| 필드 | 규칙 |
|---|---|
| `id` | 항목마다 **다른 값**(영문·숫자·`-`·`_`, 40자 이내). 예: `mister-1`, `mister-2`. 같은 `id`가 둘이면 첫 항목만 쓴다 |
| `category` | **어느 결과 화면에 나올지를 정한다.** `pot` · `soil` · `wateringCan` · `mister` · `saucer` · `stake` · `hygrometer` · `growLight` · `drainNet` 중 하나. 그 밖은 앱이 버린다 |
| `channel` | `toss` 또는 `coupang` |
| `url` | `https`만. `toss` → `toss.im` · `toss.shopping` / `coupang` → `link.coupang.com` · `coupa.ng`. 그 밖의 주소는 앱이 버린다 |
| `productName` | 제휴처 **상품명 원문 그대로**, 60자 이내. 우리가 쓴 용도·장점 문구를 덧붙이지 않는다. 가격·할인율(`원`·`%`·`만원` 등)이나 보이지 않는 문자가 들어 있으면 앱이 그 항목을 버린다. ⚠️ `category`는 우리가 적는 값이라 앱이 상품의 실제 종류까지 확인하지는 못한다 — **화이트리스트 품목이 맞는지는 넣는 사람이 확인한다** |

## 몇 개까지 나오나

- 같은 종류(`category`)는 **2개까지**, 한 화면 합계는 **3개까지**(L9). 3번째부터는 파일에 있어도 나오지 않는다 — 파일 위쪽에 적은 항목이 먼저다
- 한 화면에 종류가 여럿이면 종류마다 1개씩 먼저 채우고, 자리가 남을 때만 두 번째 상품이 나온다

## ⚠️ 넣으면 안 되는 것

- 비료·식물 보조제·약제류·유인 성분이 든 트랩 — 상품명에 그런 낱말이 있으면 앱이 그 항목을 버린다
- 상품명이 **결과를 약속하는 말처럼 읽히는 상품**(예: 「한방에 싹」) — 앱이 자동으로 걸러내지 못한다. 벌레·병 결과 화면에 나오는 종류(분무기·온습도계)는 특히 넣는 사람이 확인한다
- 상품 이미지·가격 — 필드 자체가 없다
- 쉐어링크·쿠팡 파트너스에서 **직접 만든 링크가 아닌 주소**

## 켜고 끄기는 여기서 하지 않는다

이 파일에 상품을 넣어도 앱의 제휴 지면이 꺼져 있으면(`AFFILIATE_ENABLED = false`) **앱은 이 파일을 요청조차 하지 않는다.** 지면을 켜는 것은 앱 번들(검수 대상)에서만 한다. 조건은 `miniapp-strategy/products/plant-note/prd/v1-steps/_gates.md`의 G-AFF.

## 레포 이름·공개 설정을 바꾸지 말 것

주소가 죽으면 상품 영역이 조용히 사라진다(앱은 멈추지 않는다). 루트 README의 같은 경고 참조.
