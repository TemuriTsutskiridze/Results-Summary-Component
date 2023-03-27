`use strict`

import data from './data.json' assert { type: "json" }

let summary = document.getElementById("summary");

function createDomElement(tag, className, category, category_color, icon, color, textContent) {
    const element = document.createElement(tag);
    element.classList.add(className);

    if (category) {
        element.textContent = category;
    }
    if (category_color) {
        element.style.color = category_color;
    }
    if (icon) {
        element.setAttribute("src", icon);
    }
    if (color) {
        element.style.background = color;
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

for (let i = 0; i < data.length; i++) {
    
    const { category, category_color, score, icon, color } = data[i];

    // box creation
    const summary_box = createDomElement("li", "summary-box", null, null, null, color);
    summary.append(summary_box);
    
    // creation of left container of the box
    const left_container = createDomElement("div", "left-container");
    summary_box.append(left_container);

    // creation of img
    const left_container_img = createDomElement("img", null, null, null, icon);
    left_container.append(left_container_img);

    // creation of category text
    const category_text = createDomElement("p", "category", category, category_color);
    left_container.append(category_text);

    
    // creation of point system
    const score_element = createDomElement("p", "score_paragraph");
    const out_of_score = createDomElement("span", "out_of_score", null, null, null, null, " / 100");
    score_element.append(score, out_of_score);
    summary_box.append(score_element);
}