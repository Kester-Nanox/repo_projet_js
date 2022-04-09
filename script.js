
const root = document.querySelector('body');

function createElement(tag, text, attributes, parent = null) {

    const textContent = text || null;
    const allAttributes = attributes || {};
    const element = document.createElement(tag);

    if(allAttributes['style']) {
        element.setAttribute('style',allAttributes['style'])
    }
    if(text) {
        element.innerHTML = text;
    }
    if(!parent) {
        root.appendChild(element);
    } else {
        parent.appendChild(element);
    }
    return element;
}

const myDiv = createElement('div');
const data = [ 'Hello', 'world', 'toto', 'tata'];

function createCards ()  {
    data.forEach(el => {
        createElement('p', { text: el, color: 'red' }, myDiv);
    })
}
const pAttribute = {'style':'color:red;background-color:black',
    'class':'myClass'}
createElement('p','test function',pAttribute);

const prop_access = (obj, path = null) => {
    if(path){
        path = path.split('.')
        for (let i=0; i<path.length; i++){
            obj = obj[path[i]];
        }
    }
    return JSON.stringify(obj);
};


const m3oToken = "ZWVmNGU2NjYtOGJiZC00N2NjLTg1YzYtYmY0YzNkNGZkNGI0";

function testApiToken() {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${m3oToken}`);

    const formdata = new FormData();
    formdata.append("contract_address", "0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb");
    formdata.append("token_id", "1");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    fetch("https://api.m3o.com/v1/nft/Assets", requestOptions)
        .then(response => response.json())
        .then(result => createElement('p',prop_access(result),pAttribute))
}
testApiToken();