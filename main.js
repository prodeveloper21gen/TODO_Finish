import { getData1 } from "./dom.js";
import { Get, Get2 } from "./api.js";

const MAINbtn = document.querySelector('.MAINbtn');
const JOBSEARCHbtn = document.querySelector('.JOBSEARCHbtn');
const ADMINbtn = document.querySelector('.ADMINbtn');
const MAbtn = document.querySelector('.MAbtn');
const Main = document.querySelector('.Main');
const JobSearch = document.querySelector('.JobSearch');
const Admin = document.querySelector('.Admin');
const MANAGEAPPLICANTS = document.querySelector('.MANAGEAPPLICANTS');
const addBtn = document.querySelector('.addBtn');
const addBtn2 = document.querySelector('.addBtn2');
const addModal = document.querySelector('.addModal');
const addModal2 = document.querySelector('.addModal2');
const CancelAdd = document.querySelector('.CancelAdd');
const CancelAdd2 = document.querySelector('.CancelAdd2');
const CancelEdit = document.querySelector('.CancelEdit');
const CancelEdit2 = document.querySelector('.CancelEdit2');
const editModal = document.querySelector('.editModal');
const editModal2 = document.querySelector('.editModal2');
const smCancel = document.querySelector('.smCancel');
const smApply = document.querySelector('.smApply');
const seeMoreModal = document.querySelector('.seeMoreModal');

function showSection(section, button) {
    Main.style.display = 'none';
    JobSearch.style.display = 'none';
    Admin.style.display = 'none';
    MANAGEAPPLICANTS.style.display = 'none';

    section.style.display = 'block';

    localStorage.setItem('activeSection', section.className);
    localStorage.setItem('activeButton', button.className);
}

function updateButtonStyles(activeButton) {
    const buttons = [MAINbtn, JOBSEARCHbtn, ADMINbtn, MAbtn];
    buttons.forEach(btn => {
        btn.style.backgroundColor = '#2195f300';
        btn.style.borderRight = '2px solid #2195f300';
        btn.style.color = '#414141';
    });
    activeButton.style.backgroundColor = '#2196F314';
    activeButton.style.borderRight = '2px solid #2196F3';
    activeButton.style.color = '#0099ff';
}

MAINbtn.onclick = () => {
    updateButtonStyles(MAINbtn);
    showSection(Main, MAINbtn);
};

JOBSEARCHbtn.onclick = () => {
    updateButtonStyles(JOBSEARCHbtn);
    showSection(JobSearch, JOBSEARCHbtn);
};

ADMINbtn.onclick = () => {
    updateButtonStyles(ADMINbtn);
    showSection(Admin, ADMINbtn);
};

MAbtn.onclick = () => {
    updateButtonStyles(MAbtn);
    showSection(MANAGEAPPLICANTS, MAbtn);
};

document.addEventListener('DOMContentLoaded', function () {
    const activeSectionClass = localStorage.getItem('activeSection');
    const activeButtonClass = localStorage.getItem('activeButton');

    if (activeSectionClass && activeButtonClass) {
        const activeSection = document.querySelector(`.${activeSectionClass}`);
        const activeButton = document.querySelector(`.${activeButtonClass}`);
        if (activeSection && activeButton) {
            showSection(activeSection, activeButton);
            updateButtonStyles(activeButton);
        }
    } else {
        showSection(Main, MAINbtn);
        updateButtonStyles(MAINbtn);
    }
});

addBtn.onclick = () => {
    addModal.showModal();
};

addBtn2.onclick = () => {
    addModal2.showModal();
};

CancelAdd.onclick = () => {
    addModal.close();
};

CancelAdd2.onclick = () => {
    addModal2.close();
};

CancelEdit.onclick = () => { 
    editModal.close();
};

CancelEdit2.onclick = () => { 
    editModal2.close();
};

smCancel.onclick = () => {
    seeMoreModal.close();
};

smApply.onclick = () => {
    addModal2.showModal();
    seeMoreModal.close();
};

Get();
Get2();