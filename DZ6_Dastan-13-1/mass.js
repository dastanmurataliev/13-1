const  list = [];

const hello = document.getElementById('btn');
const name = document.getElementById('name');

function render() {
    const MainDiv = document.createElement('div');
    MainDiv.setAttribute("class", "list");
    for (let i = 0; i < list.length; i++) {
        const divList = document.createElement('div');
        divList.setAttribute("class", "block");
        const p = document.createElement('p');
        p.innerHTML = list[i].text;
        divList.append(p);
        MainDiv.append(divList);
    }

    const form = document.querySelector(".block");
    document.querySelector(".list").remove();
    form.append(MainDiv)
}

hello.onclick = function () {
        const obj = {
            id: list.length,
            text: "hello  "  + name.value
        }
        this.append(list);
        list.push(obj);
        render()
}

const mass = [0]
const mass2 = ["4444,333,21,1233,2424"];
const mass3 = ["55531,3000,41,3343"];
const mass4 = ["23135678,333,441,80878"];
const mass5 = ["23231,333,137090,6544"];
const massive = {...mass,mass2,mass3,mass4,mass5
}
console.log(massive)

const object = {
    key1:{
        id: "1"
    },
    key2:{
        id: "2"
    },
    key3:{
        id: "3"
    },
    key4:{
        id: "4"
    },
    key5:{
        id: "5"
    },
}

const newObject = {
    ...object,
    key6: {
        id: "6"
    },
    key7: {
        id: "7"
    },
    key8: {
        id: "8"
    },
}
console.log(newObject)

