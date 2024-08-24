import { Get, Get2, addTask, addTask2, Delete, editTask, Delete2, editTask2} from "./api.js";

const saveTask = document.querySelector('.saveTask');
const saveTask2 = document.querySelector('.saveTask2');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const addModal = document.querySelector('.addModal');
const addModal2 = document.querySelector('.addModal2');
const bob1 = document.querySelector('.bob1');
const bob2 = document.querySelector('.bob2');
const editModal = document.querySelector('.editModal');
const editModal2 = document.querySelector('.editModal2');
const saveEditTask = document.querySelector('.saveEditTask');
const saveEditTask2 = document.querySelector('.saveEditTask2');
const seeMoreModal = document.querySelector('.seeMoreModal');

function getData1(data) {
    box1.innerHTML = '';
    data.forEach(element => {
        const tbody = document.createElement('tr');
        tbody.innerHTML = `
        <td>${element.title}</td>
        <td>${element.category}</td>
        <td>${element.level}</td>
        <td>${element.location}</td>
        <td>${element.phoneNumber}</td>
        <td><p id="appTd">${element.application}</p></td>
        <td>${element.closing}</td>
        <td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td>
        `;
        box1.appendChild(tbody);

        tbody.querySelector('.deleteBtn').onclick = () => {
            Delete(element.id);
        };
        tbody.querySelector('.editBtn').onclick = () => {
            document.querySelector('#editTitle').value = element.title;
            document.querySelector('#editCategorySelect')
            document.querySelector('#editCategorySelect').options[editCategorySelect.selectedIndex].innerHTML = element.category;
            document.querySelector('#editLevel').options[editLevel.selectedIndex].innerHTML = element.level;
            document.querySelector('#editLocInp').value = element.location;
            document.querySelector('#editClosing').value = element.closing;
            document.querySelector('#editPhone').value = element.phoneNumber;
            document.querySelector('#editDescription').value = element.desc;
            document.querySelector('#editEssentialCriteria').value = element.EC;
            document.querySelector('#editDesirableCriteria').value = element.DC;
            document.querySelector('#editBenifits').value = element.Benifit;

            editModal.showModal();

            saveEditTask.onclick = () => {
                const obj = {
                    title: document.querySelector('#editTitle').value,
                    category: document.querySelector('#editCategorySelect').options[editCategorySelect.selectedIndex].innerHTML,
                    level: document.querySelector('#editLevel').options[editLevel.selectedIndex].innerHTML,
                    location: document.querySelector('#editLocInp').value,
                    closing: document.querySelector('#editClosing').value,
                    phoneNumber: document.querySelector('#editPhone').value,
                    desc: document.querySelector('#editDescription').value,
                    EC: document.querySelector('#editEssentialCriteria').value,
                    DC: document.querySelector('#editDesirableCriteria').value,
                    Benifit: document.querySelector('#editBenifits').value,
                }
                document.querySelector('#editTitle').value = '';
                document.querySelector('#editCategorySelect').options[editCategorySelect.selectedIndex].innerHTML = 'Category';
                document.querySelector('#editLevel').options[editLevel.selectedIndex].innerHTML = 'Level';
                document.querySelector('#editLocInp').value = '';
                document.querySelector('#editClosing').value = '';
                document.querySelector('#editPhone').value = '';
                document.querySelector('#editDescription').value = '';
                document.querySelector('#editEssentialCriteria').value = '';
                document.querySelector('#editDesirableCriteria').value = '';
                document.querySelector('#editBenifits').value = '';
                editTask(obj, element.id);
                editModal.close();
        
                Get();
                Get2();
            }
        }
    });
}

saveTask.onclick = () => {
    const obj = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#formCategorySelect').options[formCategorySelect.selectedIndex].innerHTML,
        level: document.querySelector('#level').options[editCategorySelect.selectedIndex].innerHTML,
        location: document.querySelector('#locInp').value,
        closing: document.querySelector('#closing').value,
        phoneNumber: document.querySelector('#phoneNumber').value,
        desc: document.querySelector('#Description').value,
        EC: document.querySelector('#EssentialCriteria').value,
        DC: document.querySelector('#DesirableCriteria').value,
        Benifit: document.querySelector('#Benifits').value,
    }
    document.querySelector('#title').value = '';
    document.querySelector('#formCategorySelect').options[formCategorySelect.selectedIndex].innerHTML = 'Category';
    document.querySelector('#level').options[editCategorySelect.selectedIndex].innerHTML = 'Level';
    document.querySelector('#locInp').value = '';
    document.querySelector('#closing').value = '';
    document.querySelector('#phoneNumber').value = '';
    document.querySelector('#Description').value = '';
    document.querySelector('#EssentialCriteria').value = '';
    document.querySelector('#DesirableCriteria').value = '';
    document.querySelector('#Benifits').value = '';
    addTask(obj);
    Get2();
    addModal.close();
}

export function getData2(data) {
    bob1.innerHTML = '';
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h1>${element.title}</h1>
        <p>${element.category}</p>
        <p id="cardLevel">${element.level}</p>
        <p id="cardLoc">${element.location}</p>
        <button class="seeMoreBtn"><p id="butt">SEE MORE</p></button>
        `;
        card.querySelector('.seeMoreBtn').onclick = () => {
            card.querySelector('.seeMoreBtn').style.animation = 'pulse 0.3s ease-out';
            seeMoreModal.showModal();
            document.querySelector('#smTitle').innerHTML = element.title;
            document.querySelector('#smClosing').innerHTML = element.closing;
            document.querySelector('#smCategory').innerHTML = element.category;
            document.querySelector('#smLevel').innerHTML = element.level;
            document.querySelector('#smLocation').innerHTML = element.location;
            document.querySelector('#smDescription').innerHTML = element.desc;
            document.querySelector('#smEC').innerHTML = element.EC;
            document.querySelector('#smDC').innerHTML = element.DC;
            document.querySelector('#smBenifit').innerHTML = element.Benifit;
        }
        bob1.appendChild(card);
    });
}

export function getData3(data) {
    bob2.innerHTML = '';
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h1>${element.title}</h1>
        <p>${element.category}</p>
        <p id="cardLevel">${element.level}</p>
        <p id="cardLoc">${element.location}</p>
        <button class="seeMoreBtn"><p id="butt">SEE MORE</p></button>
        `;
        card.querySelector('.seeMoreBtn').onclick = () => {
            seeMoreModal.showModal();
            document.querySelector('#smTitle').innerHTML = element.title;
            document.querySelector('#smClosing').innerHTML = element.closing;
            document.querySelector('#smCategory').innerHTML = element.category;
            document.querySelector('#smLevel').innerHTML = element.level;
            document.querySelector('#smLocation').innerHTML = element.location;
            document.querySelector('#smDescription').innerHTML = element.desc;
            document.querySelector('#smEC').innerHTML = element.EC;
            document.querySelector('#smDC').innerHTML = element.DC;
            document.querySelector('#smBenifit').innerHTML = element.Benifit;
        }
        bob2.appendChild(card);
    });
}

export function userData1(data) {
    box2.innerHTML = '';
    data.forEach(element => {
        const tbody = document.createElement('tr');
        tbody.innerHTML = `
        <td class='tduser'><img src="${element.image}" class="userImg" alt=""> <h4>${element.firstName} ${element.lastName}</h4></td>
        <td>${element.email}</td>
        <td>${element.location}</td>
        <td>${element.phoneNumber}</td>
        <td><p class="restd">${element.response}</p></td>
        <td><button class="editBtn">Edit</button><button class="deleteBtn">Delete</button></td>
        `;
        box2.appendChild(tbody);

        tbody.querySelector('.deleteBtn').onclick = () => {
            Delete2(element.id);
        };
        tbody.querySelector('.editBtn').onclick = () => {
            document.querySelector('#editfirstName').value = element.firstName;
            document.querySelector('#editLocInp2').value = element.location;
            document.querySelector('#editPhone2').value = element.phoneNumber;
            document.querySelector('#editAddress').value = element.address;
            document.querySelector('#editEmail').value = element.email;
            document.querySelector('#editImgInp').value = element.image;

            editModal2.showModal();
            saveEditTask2.onclick = () => {
                const obj = {
                    firstName: document.querySelector('#editfirstName').value,
                    lastName: document.querySelector('#editlastName').value,
                    location: document.querySelector('#editLocInp2').value,
                    phoneNumber: document.querySelector('#editPhone2').value,
                    address: document.querySelector('#editAddress').value,
                    email: document.querySelector('#editEmail').value,
                    image: document.querySelector('#editImgInp').value,
                }
                editTask2(obj, element.id);
                editModal2.close();
                Get2();
                Get();
            }
        }
    });
}

saveTask2.onclick = () => {
    const obj = {
        firstName: document.querySelector('#firstName').value,
        lastName: document.querySelector('#lastName').value,
        location: document.querySelector('#locInp2').value,
        phoneNumber: document.querySelector('#phoneNumber2').value,
        address: document.querySelector('#address').value,
        email: document.querySelector('#email').value,
        image: document.querySelector('#imgInp').value,
    }
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#locInp2').value = '';
    document.querySelector('#phoneNumber2').value = '';
    document.querySelector('#address').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#imgInp').value = '';
    addTask2(obj);
    addModal2.close();
    Get();
    Get2();
}

export { getData1 };