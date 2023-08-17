// Area Triangle
            document.addEventListener("DOMContentLoaded", function() {
            const hInput = document.getElementById("hInput");
            const blInput = document.getElementById("blInput");
            const calculateButtonA = document.getElementById("calcAButton");
            const resultElementA = document.getElementById("resultA");
            calculateButtonA.addEventListener("click", function() {
                const heightValue = parseFloat(hInput.value);
                const baseLengthValue = parseFloat(blInput.value);
                if (!isNaN(heightValue) && !isNaN(baseLengthValue)) {
                    const area = 0.5 * heightValue * baseLengthValue;
                    resultElementA.textContent = alert("Result your calculate for Triangle Area (A) = " + area + "cm")
                }
            });
            const resetAButton = document.getElementById("rAButton");
            resetAButton.addEventListener("click", function() {
                hInput.value = "";
                blInput.value = "";
            });
        });
// Circumference Triangle
        document.addEventListener("DOMContentLoaded", function() {
            const s1Input = document.getElementById("s1Input");
            const s2Input = document.getElementById("s2Input");
            const s3Input = document.getElementById("s3Input");
            const calculateButtonC = document.getElementById("calcCButton");
            const resultElementC = document.getElementById("resultC");
            calculateButtonC.addEventListener("click", function() {
                const s1Value = parseFloat(s1Input.value);
                const s2Value = parseFloat(s2Input.value);
                const s3Value = parseFloat(s3Input.value);
                if (!isNaN(s1Value) && !isNaN(s2Value) && !isNaN(s3Value)) {
                    const area = s1Value + s2Value + s3Value
                    resultElementC.textContent = alert("Result your calculate for Triangle Circumference (C) = " + area + "cm")
                }
            });
            const resetCButton = document.getElementById("rCButton");
            resetCButton.addEventListener("click", function() {
                s1Input.value = "";
                s2Input.value = "";
                s3Input.value = "";
            });
        });