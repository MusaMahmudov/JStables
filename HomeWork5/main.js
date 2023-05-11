let cont = document.getElementById("content");
let tab1 = document.getElementsByTagName("li")[0];
let tab2 = document.getElementsByTagName("li")[1];
let tab3 = document.getElementsByTagName("li")[2];
let tab4 = document.getElementsByTagName("li")[3];
let tab5 = document.getElementsByTagName("li")[4];
let tab6 = document.getElementsByTagName("li")[5];
let arr = document.getElementsByTagName("li");
console.log(cont);
function changecolor1() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab1.classList.add("white");

  let content = `<div class="one">
  <h1>Tab one</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u1
  </p>
</div>
  `;
  cont.innerHTML = content;
}
function changecolor2() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab2.classList.add("white");

  let content = `<div class="two">
  <h1>Tab two</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u2
  </p>
</div>
  `;
  cont.innerHTML = content;
}
function changecolor3() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab3.classList.add("white");

  let content = `<div class="three">
  <h1>Tab three</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u3
  </p>
</div>
  `;
  cont.innerHTML = content;
}
function changecolor4() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab4.classList.add("white");

  let content = `<div class="four">
  <h1>Tab four</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u4
  </p>
</div>
  `;
  cont.innerHTML = content;
}

function changecolor5() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab5.classList.add("white");

  let content = `<div class="five">
  <h1>Tab five</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u5
  </p>
</div>
  `;
  cont.innerHTML = content;
}
function changecolor6() {
  for (let li of arr) {
    if (li.classList.contains("white")) {
      li.classList.remove("white");
    }
  }
  tab6.classList.add("white");

  let content = `<div class="six">
  <h1>Tab six</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ab
    modi. Repellat fugit reprehenderit voluptate magni atque! Molestias
    excepturi placeat, sequi nam harum, magni consequuntur atque dolor a
    laudantium deserunt. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Sint, ab modi. Repellat fugit reprehenderit
    voluptate magni atque! Molestias excepturi placeat, sequi nam harum,
    magni consequuntur atque dolor a laudantium deserunt.laudantium
    deserunt. Lorem ipsum u6
  </p>
</div>
  `;
  cont.innerHTML = content;
}

tab1.addEventListener("click", changecolor1);
tab2.addEventListener("click", changecolor2);
tab3.addEventListener("click", changecolor3);
tab4.addEventListener("click", changecolor4);
tab5.addEventListener("click", changecolor5);
tab6.addEventListener("click", changecolor6);
