`use strict`

import data from './data.json' assert { type: "json" }

let summary = document.getElementById("summary");

for (let i = 0; i < data.length; i++) {
    const summary_box = document.createElement("div");
    const { category, category_color, score, icon, color } = data[i];

    // box creation
    summary_box.classList.add("summary-box");
    summary_box.style.background = color;
    summary.append(summary_box);
    
    // creation of left container of the box
    const left_container = document.createElement("div");
    left_container.classList.add("left-container");
    summary_box.append(left_container);

    const left_container_img = document.createElement("img");
    left_container_img.setAttribute("src", icon);
    left_container.append(left_container_img);

    const category_element = document.createElement("p");
    category_element.classList.add("category");
    category_element.textContent = category;
    category_element.style.color = category_color;
    left_container.append(category_element);

    // creation of point system

    const score_element = document.createElement("p");
    score_element.classList.add("score_paragraph");
    const score_span = document.createElement("span");
    score_span.classList.add("score");
    score_span.textContent = score;
    score_element.append(score_span, " / 100");
    summary_box.append(score_element);
}