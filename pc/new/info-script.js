const navLinks = document.querySelectorAll(".info-nav");

// 창업뉴스 데이터
const data01 = [
  {
    title: "101. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 101,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "102. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 102,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "103. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 102,
    date: "010-0000-0000",
    link: "",
  },
];

// 창업분석 데이터
const data02 = [
  {
    title: "201. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 201,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "202. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 202,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "203. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 202,
    date: "010-0000-0000",
    link: "",
  },
];

// 창업아이템 데이터
const data03 = [
  {
    title: "301. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 301,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "302. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 302,
    date: "010-0000-0000",
    link: "",
  },
  {
    title: "303. 성공적인 매장 양도양수를 위한 5가지 필수 팁",
    description:
      "매장을 양도하거나 양수하려는 과정은 쉽지 않은 일입니다. 여러 가지 요소를 신중하게 고려해야 성공적으로 거래를 마무리할 수 있습니다. 오늘은 매장 양도양수를 계획하고 있는 여러분을 위해 반드시 알아두어야 할 5가지 필수 팁을 소개해드리겠습니다.",
    src: "new/images/info/example.png",
    num: 302,
    date: "010-0000-0000",
    link: "",
  },
];

const infoSlider = document.querySelector(".info-slider");

const onClickInfo = (idx, data) => {
  navLinks.forEach((nav) => nav.classList.remove("active"));
  navLinks[idx].classList.add("active");

  infoSlider.innerHTML = "";

  data.forEach((item) => {
    const card = document.createElement("a");
    card.style = "display: flex; flex: 0 0 100%; border-radius: 10px; overflow: hidden; background-color: white";
    card.href = item.link;

    card.innerHTML = `
          <div style="position: relative; width: 60%; height: 100%; padding: 5%">
            <img src="new/images/info/hot-tag.png" style="position: absolute; top: 0; left: 0; width: 60px" />
            <img src="public/images/main/logo.png" style="width: 130px" />
            <p style="margin: 30px 0; font-size: 25px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600">
              ${item.title}
            </p>
            <p style="margin: 25px 0">0000.00.00</p>
            <p
              style="
                display: -webkit-box;
                -webkit-line-clamp: 3; /* 3줄로 제한 */
                -webkit-box-orient: vertical; /* 세로 방향으로 정렬 */
                overflow: hidden; /* 넘치는 텍스트 숨기기 */
                text-overflow: ellipsis; /* 넘친 텍스트를 '...'으로 표시 */
                text-align: justify;
                font-size: 17px;
              "
            >
              ${item.description}
            </p>
          </div>
          <div style="width: 40%; height: 100%; border-radius: 10px; overflow: hidden">
            <img src=${item.src} style="width: 100%; aspect-ratio: 1" />
          </div>
      `;

    infoSlider.appendChild(card);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // 기본값으로 첫 번째 데이터 렌더링
  onClickInfo(0, data01);
});

let index2 = 0;

const onClickNext2 = () => {
  if (index2 === infoSlider.children.length - 1) index2 = 0;
  else index2++;

  infoSlider.style.transform = `translateX(-${index2 * 100}%)`;
};

const onClickPrev2 = () => {
  if (index2 === 0) index2 = infoSlider.children.length - 1;
  else index2--;

  infoSlider.style.transform = `translateX(-${index2 * 100}%)`;
};
