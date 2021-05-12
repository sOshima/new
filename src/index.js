import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divを生成する。
  const div = document.createElement("div");
  div.className = "list-row";

  //liを生成する。
  const li = document.createElement("li");
  li.innerText = inputText;

  //buttonタグを生成する。
  const completeButton = document.createElement("button");

  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromList(completeButton.parentNode);
    //完了した親要素を習得する。その中のテキストを取得する。
    const addTarget = completeButton.parentNode;
    //TODO
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化する。
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const incompleteButton = document.createElement("button");
  incompleteButton.innerText = "削除";

  incompleteButton.addEventListener("click", () => {
    //押された削除ボタンの親divを削除
    deleteFromList(incompleteButton.parentNode);
  });

  //divの子要素に入れる
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(incompleteButton);
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除する。
const deleteFromList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
