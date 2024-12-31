function hideTyping() {
  document.getElementById("hide").style.display = "none";
}

function showHNY() {
  document.getElementById("hny").style.display = "flex";
}

function hideHNY() {
  document.getElementById("hny").style.display = "none";
}

function hideStackedHNY() {
  // Remove all "HAPPY NEW YEAR" texts
  const hnyTexts = document.querySelectorAll("span");
  hnyTexts.forEach((text) => text.remove());
}

function loopHNY() {
  // Create a new span element for each "HAPPY NEW YEAR"
  const hnySpan = document.createElement("span");
  hnySpan.textContent = "HAPPY NEW YEAR";
  hnySpan.style.position = "fixed"; //
  const fullWidth = window.innerWidth;
  const fullHeight = window.innerHeight;

  // Generate random positions
  const fontSize = Math.random() * 200 + 100;
  const left = Math.random() * (fullWidth - fontSize * 6);
  const top = Math.random() * (fullHeight - fontSize);
  const deg = Math.random() * 60 - 30;

  // Span Styles
  hnySpan.style.left = `${left}px`;
  hnySpan.style.top = `${top}px`;
  hnySpan.style.fontSize = `${fontSize}px`;
  hnySpan.style.transform = `rotate(${deg}deg)`;
  hnySpan.style.color = "#56453f";
  hnySpan.style.fontWeight = "800";
  hnySpan.style.textTransform = "uppercase";
  hnySpan.style.lineHeight = "0.8";
  hnySpan.style.background =
    "linear-gradient(135deg, #5335cf 0%, #de005e 25%, #f66e48 50%, #de005e 75%, #5335cf 100%)";
  hnySpan.style.backgroundSize = "400%";
  hnySpan.style.webkitBackgroundClip = "text";
  hnySpan.style.webkitTextFillColor = "transparent";
  hnySpan.style.animation = "animate 10s linear infinite";
  hnySpan.style.webkitTextStrokeWidth = "1px";
  hnySpan.style.webkitTextStrokeColor = "black";
  hnySpan.style.pointerEvents = "none";

  // Append the span to the body
  document.body.appendChild(hnySpan);
}

function stackHNY() {
  const intervalId = setInterval(loopHNY, 200);

  // Stop stacking after 1 minute
  setTimeout(() => {
    clearInterval(intervalId);
    hideStackedHNY();
    hideHNY();
    setTimeout(() => {
      myMessage();
    }, 3000);
  }, 20000);
}

// Ensure typing text is displayed first
setTimeout(hideTyping, 12100);
setTimeout(() => {
  showHNY();
}, 13000);
setTimeout(() => {
  stackHNY();
}, 18000);

//Message
function myMessage() {
  const wrapper = document.getElementById("wrapperMessage");
  wrapper.style.display = "block";
  const read = document.querySelector(".read");
  const question = document.querySelector(".question");
  const no = document.querySelector(".no");
  const btn_group = document.querySelector(".btn-group");
  const image = document.querySelector(".image");
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  yesBtn.addEventListener("click", () => {
    read.style.padding = "30px";
    read.style.textAlign = "left";
    read.style.fontSize = "16px";
    read.style.verticalAlign = "middle";
    read.style.alignItems = "center";
    read.justifyContent = "center";
    read.innerHTML =
      "<b>Happy New Year so much!</b><br><br>Thank you for being part of my 2024. Angas ng discord server dahil nakilala kita. Thank you for loving me the way you can. I know you tried. Thank you for all the memories. Sa lahat ng sleep dates, bed rot days, food trips, and all. I really appreciate lahat ng ginawa/ginagawa mo for me. Lalo na sa mga situations na nag-eeffort ka talaga to make my life easier. Alam kong kapag may problema ako, nag-iisip ka talaga kung paano mo ko matutulungan. Thank you for assembling your PC and letting me borrow almost all the parts just so we can play together and I can do my thing. Also, just letting you know na kinikilig pa rin ako sa pag-setup mo ng work pc ko habang tulog ako para paggising ko is magwowork na lang ako. Sobrang sweet n'on. Thank you so much, baby ko. Happy Holidays, pogi! muah muah<br><br><b>Yours,<br>Shy/Kikay/Shaina/babymo</b>";
    question.style.display = "none";
    btn_group.style.display = "none";
    image.style.display = "none";
    no.style.display = "none";
  });
  noBtn.addEventListener("mouseover", () => {
    const i =
      Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j =
      Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    noBtn.style.left = i + "px";
    noBtn.style.top = j + "px";
  });
}
