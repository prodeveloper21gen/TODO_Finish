import { getData1, getData2, getData3, userData1 } from "./dom.js";

const Api = 'https://66b99baffa763ff550f8d5e8.mockapi.io/apiBack/todo';
const searchInp1 = document.querySelector('.searchInp1');
const searchInp2 = document.querySelector('.searchInp2');
const selectCategory = document.querySelector('#selectCategory');
const selectLevel = document.querySelector('#selectLevel');
let idx = null;

const Api2 = 'https://66b99baffa763ff550f8d5e8.mockapi.io/apiBack/users';

async function searchTasks(query) {
    try {
        const { data } = await axios.get(Api);
        const filteredData = data.filter(task =>
            task.title.toLowerCase().includes(query.toLowerCase())
        );
        getData1(filteredData);
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

async function searchTasks2(query) {
    try {
        const { data } = await axios.get(Api2);
        const filteredData = data.filter(task =>
            task.firstName.toLowerCase().includes(query.toLowerCase())
        );
        userData1(filteredData);
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

searchInp1.oninput = () => {
    searchTasks(searchInp1.value);
}

searchInp2.oninput = () => {
    searchTasks2(searchInp2.value);
}

async function Get() {
    try {
        const { data } = await axios.get(Api);
        getData1(data);
        getData2(data);
        getData3(data);
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function Get2() {
    try {
        const { data } = await axios.get(Api2);
        userData1(data);
    } catch (error) {
        console.log(error.response? error.response.data : error.message);
    }
}

export async function Delete(id) {
    try {
        await axios.delete(`${Api}/${id}`);
        await Get();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function Delete2(id) {
    try {
        await axios.delete(`${Api2}/${id}`);
        await Get2();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function addTask(obj) {
    try {
        await axios.post(Api, obj);
        await Get();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function addTask2(obj) {
    try {
        await axios.post(Api2, obj);
        await Get2();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function editTask(obj, id) {
    try {
        await axios.put(`${Api}/${id}`, obj);
        Get();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

export async function editTask2(obj, id) {
    try {
        await axios.put(`${Api2}/${id}`, obj);
        Get2();
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

async function filterTasks() {
    try {
        const { data } = await axios.get(Api);
        let filteredData = data;

        const selectedCategory = selectCategory.options[selectCategory.selectedIndex].innerHTML;
        const selectedLevel = selectLevel.options[selectLevel.selectedIndex].innerHTML;

        if (selectedCategory !== 'All category') {
            filteredData = filteredData.filter(task => task.category === selectedCategory);
        }

        if (selectedLevel !== 'All level') {
            filteredData = filteredData.filter(task => task.level === selectedLevel);
        }

        getData3(filteredData);
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
}

selectCategory.onchange = filterTasks;
selectLevel.onchange = filterTasks;

export { Api, Get };
