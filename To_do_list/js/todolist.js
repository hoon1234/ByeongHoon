//변수 선언
const lists = document.querySelector('.middle');
const form = document.querySelector('.list-footer');
const input = document.querySelector('.text_input');
const addBtn = document.querySelector('.btn_submit');

// list-footer에서 submit을 하는 코드
form.addEventListener('submit', event => {
    event.preventDefault();
    Add();
});

function Add() {
    // 1. 사용자가 입력한 텍스트를 받아온다.
    const text = input.value;
    if(text === '') {
        input.focus(); 
        return;
    }
    // 2. 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
    const item = createItem(text);    
    // 3. lists 컨테이너 안에 새로 마든 아이템을 추가한다. 
    lists.appendChild(item);

    // 4. 새로 추가된 아이템으로 스크롤링
    item.scrollIntoView({block: 'center'});

    // 5. 인풋을 초기화 한다
    input.value='';
    input.focus(); 
}
let id = 0; // UUID
function createItem(text) {
    const itemRow = document.createElement('ol');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML= `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">            
            <i class="fa-solid fa-square-minus" data-id=${id}></i>                
            </button>
        </div>
        <div class="items__divider"></div>`;
    id++;
    return itemRow;
}
lists.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const deleted = document.querySelector(`.item__row[data-id="${id}"]`);
        deleted.remove();
    }
});