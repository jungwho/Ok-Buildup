const mainContainer = document.querySelector(".main-container");
const pageContainer = document.querySelector(".page-container");

const num = 6; // 한 페이지에 표시할 항목 수
let index = 1;

function updatePage() {
  let pageData = data.slice((index - 1) * num, (index - 1) * num + num);

  pageData.forEach((item) => {
    const card = document.createElement("a");
    card.href = item.link;

    // 카드 내용 추가
    card.innerHTML = `
    <a class="news-box">
        <div class="img-box">
          <img src="images/example.png" />
        </div>
        <p class="news-title">${item.title}</p>
        <div class="news-description">${item.description}</div>
      </a>`;
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
