document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ledQuizForm");
  const question2 = document.getElementById("question2");

  form.addEventListener("change", (e) => {
    if (e.target.name === "need") {
      updateQuestion2(e.target.value);
    }
  });

  function updateQuestion2(selection) {
    question2.innerHTML = "";
    let html = "";

    if (selection === "LED Lights") {
      html = `
                <h2>What length?</h2>
                <div class="quantity-slider">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
                </div>
                <div id="sliders"></div>
            `;
    } else if (selection === "LED Transformers") {
      html = `
                <h2>How many volts and watts?</h2>
                <div class="options">
                    <button class="circle-option">Sample 1</button>
                    <button class="circle-option">Sample 2</button>
                    <button class="circle-option">Sample 3</button>
                    <button class="circle-option">Sample 4</button>
                    <button class="circle-option">Sample 5</button>
                    <button class="circle-option">Sample 6</button>
                    <button class="circle-option">Sample 7</button>
                    <button class="circle-option">Sample 8</button>
                    <button class="circle-option">Sample 9</button>
                    <button class="circle-option">Sample 10</button>
                </div>
            `;
    } else if (selection === "Service / Support") {
      html = `
                <h2>What is your budget?</h2>
                <div class="options">
                    <input type="radio" id="budget1" name="budget" value="5000-8000">
                    <label for="budget1" class="circle-option">$5,000 - $8,000</label>
                    <input type="radio" id="budget2" name="budget" value="8000-10000">
                    <label for="budget2" class="circle-option">$8,000 - $10,000</label>
                    <input type="radio" id="budget3" name="budget" value="10000+">
                    <label for="budget3" class="circle-option">$10,000+</label>
                </div>
            `;
    }

    question2.innerHTML = html;

    if (selection === "LED Lights") {
      const quantityInput = document.getElementById("quantity");
      const slidersContainer = document.getElementById("sliders");

      quantityInput.addEventListener("input", () => {
        updateSliders(quantityInput.value);
      });

      updateSliders(quantityInput.value);
    }
  }

  function updateSliders(quantity) {
    const slidersContainer = document.getElementById("sliders");
    slidersContainer.innerHTML = "";

    for (let i = 0; i < quantity; i++) {
      const sliderHtml = `
                <div class="slider-container">
                    <label for="length${i + 1}">Length ${i + 1}:</label>
                    <input type="range" id="length${i + 1}" name="length${
        i + 1
      }" min="2" max="20" value="2" class="slider">
                </div>
            `;
      slidersContainer.innerHTML += sliderHtml;
    }
  }
});
