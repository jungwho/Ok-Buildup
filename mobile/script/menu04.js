const mainContainer = document.querySelector(".main-container");
const pageContainer = document.querySelector(".page-container");

const num = 6; // 한 페이지에 표시할 항목 수
let index = 1;

function updatePage() {
  let pageData = data.slice((index - 1) * num, (index - 1) * num + num);

  pageData.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item-box";

    // 카드 내용 추가
    card.innerHTML = `
        <div class="img-box">
          <img src=${item.src} />
        </div>
        <div class="text-box">
          <p class="text-title">${item.title}</p>
          <p class="text-description">${item.description}</p>
          <button style="background-color: #f7f7fb" onClick="window.location.href = ${item.link}>
            <p style="color: #505050">보러가기</p>
            <img src="images/menu04/next01.png" />
          </button>
          <button  style="background-color: #4b79ee" onClick="window.location.href = 'main-consult.html'">
            <p style="color: white">상담문의</p>
            <img src="images/menu04/next02.png" />
          </button>
        </div>`;
    mainContainer.appendChild(card);
  });

  pageContainer.textContent = `${index} / ${Math.ceil(data.length / num)}`;
}

function previousPage() {
  if (index > 1) {
    index--;
    mainContainer.innerHTML = ""; // 기존 내용 삭제
    updatePage();
  }
}

function nextPage() {
  const totalPages = Math.ceil(data.length / num);
  if (index < totalPages) {
    index++;
    mainContainer.innerHTML = ""; // 기존 내용 삭제
    updatePage();
  }
}

updatePage();
