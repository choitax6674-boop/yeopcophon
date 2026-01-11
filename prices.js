// js/prices.js

const PHONE_LIST = [
  { model: "S25(256G)",        price: "1,155,000원" },
  { model: "S25(512G)",        price: "1,298,000원" },
  { model: "S25+(256G)",       price: "1,353,000원" },
  { model: "S25+(512G)",       price: "1,496,000원" },
  { model: "S25ULTRA(256G)",   price: "1,698,400원" },
  { model: "S25ULTRA(512G)",   price: "1,841,400원" },
  { model: "S25엣지(256G)",    price: "1,496,000원" },
  { model: "S25엣지(512G)",    price: "1,639,000원" },
  { model: "Z플립7(256G)",     price: "1,485,000원" },
  { model: "Z플립7(512G)",     price: "1,643,400원" },
  { model: "Z폴드7(256G)",     price: "2,379,300원" },
  { model: "Z폴드7(512G)",     price: "2,537,700원" },
  { model: "아이폰17(256G)",   price: "1,287,000원" },
  { model: "아이폰17(512G)",   price: "1,584,000원" },
  { model: "아이폰17PRO(256G)",price: "1,782,000원" },
  { model: "아이폰17PRO(512G)",price: "2,090,000원" },
  { model: "아이폰17AIR(256G)",price: "1,584,000원" },
  { model: "아이폰17AIR(512G)",price: "1,881,000원" },
];

const CASH_PRICES = {
  SK:   { move: {}, change: {} },
  KT:   { move: {}, change: {} },
  "LGU+": { move: {}, change: {} },
};

// ✅ 예시(너가 가진 정책값 그대로 넣으면 됨) - 여기부터 채우기
CASH_PRICES.SK.move["S25(256G)"] = -300000;
CASH_PRICES.SK.change["S25(256G)"] = 340000;
CASH_PRICES.SK.move["S25(512G)"] = -170000;
CASH_PRICES.SK.change["S25(512G)"] = 480000;
CASH_PRICES.SK.move["S25+(256G)"] = -110000;
CASH_PRICES.SK.change["S25+(256G)"] = 540000;
CASH_PRICES.SK.move["S25+(512G)"] = 20000;
CASH_PRICES.SK.change["S25+(512G)"] = 680000;
CASH_PRICES.SK.move["S25ULTRA(256G)"] = 230000;
CASH_PRICES.SK.change["S25ULTRA(256G)"] = 890000;
CASH_PRICES.SK.move["S25ULTRA(512G)"] = 380000;
CASH_PRICES.SK.change["S25ULTRA(512G)"] = 1040000;
CASH_PRICES.SK.move["S25엣지(256G)"] = -70000;
CASH_PRICES.SK.change["S25엣지(256G)"] = 580000;
CASH_PRICES.SK.move["S25엣지(512G)"] = 60000;
CASH_PRICES.SK.change["S25엣지(512G)"] = 720000;
CASH_PRICES.SK.move["Z플립7(256G)"] = -150000;
CASH_PRICES.SK.change["Z플립7(256G)"] = 500000;
CASH_PRICES.SK.move["Z플립7(512G)"] = 0;
CASH_PRICES.SK.change["Z플립7(512G)"] = 710000;
CASH_PRICES.SK.move["Z폴드7(256G)"] = 850000;
CASH_PRICES.SK.change["Z폴드7(256G)"] = 1240000;
CASH_PRICES.SK.move["Z폴드7(512G)"] = 1010000;
CASH_PRICES.SK.change["Z폴드7(512G)"] = 1400000;
CASH_PRICES.SK.move["아이폰17(256G)"] = -90000;
CASH_PRICES.SK.change["아이폰17(256G)"] = 620000;
CASH_PRICES.SK.move["아이폰17(512G)"] = 200000;
CASH_PRICES.SK.change["아이폰17(512G)"] = 920000;
CASH_PRICES.SK.move["아이폰17PRO(256G)"] = 400000;
CASH_PRICES.SK.change["아이폰17PRO(256G)"] = 1120000;
CASH_PRICES.SK.move["아이폰17PRO(512G)"] = 710000;
CASH_PRICES.SK.change["아이폰17PRO(512G)"] = 1430000;
CASH_PRICES.SK.move["아이폰17AIR(256G)"] = 350000;
CASH_PRICES.SK.change["아이폰17AIR(256G)"] = 910000;
CASH_PRICES.SK.move["아이폰17AIR(512G)"] = 650000;
CASH_PRICES.SK.change["아이폰17AIR(512G)"] = 1210000;

CASH_PRICES.KT.move["S25(256G)"] = -120000;
CASH_PRICES.KT.change["S25(256G)"] = 20000;
CASH_PRICES.KT.move["S25(512G)"] = 10000;
CASH_PRICES.KT.change["S25(512G)"] = 160000;
CASH_PRICES.KT.move["S25+(256G)"];
CASH_PRICES.KT.change["S25+(256G)"];
CASH_PRICES.KT.move["S25+(512G)"];
CASH_PRICES.KT.change["S25+(512G)"];
CASH_PRICES.KT.move["S25ULTRA(256G)"] = 390000;
CASH_PRICES.KT.change["S25ULTRA(256G)"] = 590000;
CASH_PRICES.KT.move["S25ULTRA(512G)"] = 540000;
CASH_PRICES.KT.change["S25ULTRA(512G)"] = 740000;
CASH_PRICES.KT.move["S25엣지(256G)"] = 210000;
CASH_PRICES.KT.change["S25엣지(256G)"] = 190000;
CASH_PRICES.KT.move["S25엣지(512G)"] = 350000;
CASH_PRICES.KT.change["S25엣지(512G)"] = 330000;
CASH_PRICES.KT.move["Z플립7(256G)"] = 200000;
CASH_PRICES.KT.change["Z플립7(256G)"] = 300000;
CASH_PRICES.KT.move["Z플립7(512G)"] = 360000;
CASH_PRICES.KT.change["Z플립7(512G)"] = 460000;
CASH_PRICES.KT.move["Z폴드7(256G)"] = 1090000;
CASH_PRICES.KT.change["Z폴드7(256G)"] = 1190000;
CASH_PRICES.KT.move["Z폴드7(512G)"] = 1250000;
CASH_PRICES.KT.change["Z폴드7(512G)"] = 1350000;
CASH_PRICES.KT.move["아이폰17(256G)"] = 50000;
CASH_PRICES.KT.change["아이폰17(256G)"] = 150000;
CASH_PRICES.KT.move["아이폰17(512G)"] = 350000;
CASH_PRICES.KT.change["아이폰17(512G)"] = 450000;
CASH_PRICES.KT.move["아이폰17PRO(256G)"] = 550000;
CASH_PRICES.KT.change["아이폰17PRO(256G)"] = 650000;
CASH_PRICES.KT.move["아이폰17PRO(512G)"] = 860000;
CASH_PRICES.KT.change["아이폰17PRO(512G)"] = 960000;
CASH_PRICES.KT.move["아이폰17AIR(256G)"] = 300000;
CASH_PRICES.KT.change["아이폰17AIR(256G)"] = 350000;
CASH_PRICES.KT.move["아이폰17AIR(512G)"] = 600000;
CASH_PRICES.KT.change["아이폰17AIR(512G)"] = 650000;

CASH_PRICES["LGU+"].move["S25(256G)"] = -340000;
CASH_PRICES["LGU+"].change["S25(256G)"] = 140000;
CASH_PRICES["LGU+"].move["S25(512G)"] = -200000;
CASH_PRICES["LGU+"].change["S25(512G)"] = 280000;
CASH_PRICES["LGU+"].move["S25+(256G)"] = -140000;
CASH_PRICES["LGU+"].change["S25+(256G)"] = 340000;
CASH_PRICES["LGU+"].move["S25+(512G)"] = 0;
CASH_PRICES["LGU+"].change["S25+(512G)"] = 480000;
CASH_PRICES["LGU+"].move["S25ULTRA(256G)"] = 190000;
CASH_PRICES["LGU+"].change["S25ULTRA(256G)"] = 680000;
CASH_PRICES["LGU+"].move["S25ULTRA(512G)"] = 340000;
CASH_PRICES["LGU+"].change["S25ULTRA(512G)"] = 830000;
CASH_PRICES["LGU+"].move["S25엣지(256G)"] = -200000;
CASH_PRICES["LGU+"].change["S25엣지(256G)"] = 380000;
CASH_PRICES["LGU+"].move["S25엣지(512G)"] = -60000;
CASH_PRICES["LGU+"].change["S25엣지(512G)"] = 520000;
CASH_PRICES["LGU+"].move["Z플립7(256G)"] = -110000;
CASH_PRICES["LGU+"].change["Z플립7(256G)"] = 120000;
CASH_PRICES["LGU+"].move["Z플립7(512G)"] = 40000;
CASH_PRICES["LGU+"].change["Z플립7(512G)"] = 280000;
CASH_PRICES["LGU+"].move["Z폴드7(256G)"] = 870000;
CASH_PRICES["LGU+"].change["Z폴드7(256G)"] = 1140000;
CASH_PRICES["LGU+"].move["Z폴드7(512G)"] = 1030000;
CASH_PRICES["LGU+"].change["Z폴드7(512G)"] = 1300000;
CASH_PRICES["LGU+"].move["아이폰17(256G)"] = -300000;
CASH_PRICES["LGU+"].change["아이폰17(256G)"] = 360000;
CASH_PRICES["LGU+"].move["아이폰17(512G)"] = 0;
CASH_PRICES["LGU+"].change["아이폰17(512G)"] = 660000;
CASH_PRICES["LGU+"].move["아이폰17PRO(256G)"] = 190000;
CASH_PRICES["LGU+"].change["아이폰17PRO(256G)"] = 860000;
CASH_PRICES["LGU+"].move["아이폰17PRO(512G)"] = 500000;
CASH_PRICES["LGU+"].change["아이폰17PRO(512G)"] = 1170000;
CASH_PRICES["LGU+"].move["아이폰17AIR(256G)"] = 260000;
CASH_PRICES["LGU+"].change["아이폰17AIR(256G)"] = 660000;
CASH_PRICES["LGU+"].move["아이폰17AIR(512G)"] = 560000;
CASH_PRICES["LGU+"].change["아이폰17AIR(512G)"] = 960000;

// ✅ 예시 끝(나머지도 동일하게 계속 입력)

// 👉 price.html에서 쓰기 위해 전역으로 공개
window.PHONE_LIST = PHONE_LIST;
window.CASH_PRICES = CASH_PRICES;
