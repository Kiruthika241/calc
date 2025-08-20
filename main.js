    let result = document.getElementById("result");
    let history = document.getElementById("history");
    let modeLabel = document.getElementById("modeLabel");

    function append(value) {
      result.value += value;
    }

    function clearResult() {
      result.value = "";
      history.innerText = "";
    }

    function deleteChar() {
      result.value = result.value.slice(0, -1);
    }

    function calculate() {
      try {
        history.innerText = result.value;
        result.value = eval(result.value);
      } catch {
        result.value = "Error";
      }
    }

    // Keyboard Support
    document.addEventListener("keydown", function(e) {
      if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        append(e.key);
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        deleteChar();
      } else if (e.key.toLowerCase() === "c") {
        clearResult();
      }
    });

    // Dark Mode Toggle
    function toggleDarkMode() {
      document.body.classList.toggle("dark");
      const slider = document.querySelector(".slider");
      if (document.body.classList.contains("dark")) {
        modeLabel.textContent = "Dark";
        slider.textContent = "🌙";
      } else {
        modeLabel.textContent = "Light ";
        slider.textContent = "☀️";
      }
    }