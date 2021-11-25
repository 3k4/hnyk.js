
let wds = Array.from(document.getElementsByTagName("h-word"));
let wc = Array.from(document.getElementsByTagName("h-control"))[0];
//Translate words list
let twl = JSON.parse(document.getElementById("translatewordlist").textContent);
//Languages
let lgs = [];
let lgscbb;

function buildControl(callFn) {
    lgscbb = document.createElement("select");
    lgscbb.title = "Select your language";

    for (const lg of lgs) {
        const lgopt = document.createElement("option");
        lgopt.appendChild(document.createTextNode(lg));
        lgopt.value = lg;

        lgscbb.appendChild(lgopt);
    }

    wc.appendChild(lgscbb);
    lgscbb.addEventListener("change", callFn);
}

function replaceText(languageList) {
    //<h-word>のリスト化と内容テキストの取り出し
    let words = [];
    for (const wd of wds) {
        const translatetext = languageList[wd.getAttribute("text")];
        if (translatetext) {
            wd.textContent = translatetext;
        }
    }
}

function changeLanguage() {
    replaceText(twl[lgscbb.value]);
}

function main() {
    for (const a in twl) {
        lgs.push(a);
    }

    buildControl(changeLanguage);

    //最初にテキストを入れるために<select>タグの1番最初の言語で初期化
    replaceText(twl[lgscbb.value]);
}

main();