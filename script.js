// Define a global variable to store calculated BMI
let calculatedBMI = 0;

document.getElementById('calculate-result').addEventListener('click', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const BMIResult = document.getElementById('bmi-result');
    const recommendationsDiv = document.getElementById('recommendations');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        BMIResult.textContent = "โปรดป้อนส่วนสูงและน้ำหนักที่ถูกต้อง";
        recommendationsDiv.innerHTML = '';
    } else {
        // Calculate BMI and store it in the global variable
        const h1 = height / 100; // Convert height from cm to meters
        calculatedBMI = weight / (h1 * h1);
        BMIResult.textContent = `ค่า BMI ของคุณคือ: ${calculatedBMI.toFixed(2)}`;

        // Call the function to get recommendations
        const PD = document.getElementById('disease').value;
        const AGE = parseInt(document.getElementById('age').value);
        const recommendations = getRecommendations(PD, AGE);

        recommendationsDiv.innerHTML = '';

        if (recommendations.length > 0) {
            recommendationsDiv.innerHTML = "<strong>กิจกรรมที่แนะนำ:</strong><br>";
            recommendations.forEach((activity, idx) => {
                recommendationsDiv.innerHTML += `${idx + 1}. ${activity}<br>`;
            });
        } else {
            recommendationsDiv.innerHTML = "ไม่มีคำแนะนำ";
        }
    }
});

// Define the getRecommendations function as shown in the previous response

function getRecommendations(PD, AGE) {
    let recommendedActivities = [];

    if (calculatedBMI < 18.5) {
        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("อ่านหนังสือ", "รดน้ำต้นไม้", "วาดรูป");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("รดน้ำต้นไม", "วาดรูป");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เต้นแอโรบิค", "เต้น cover", "เต้นลีลาศ");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("เต้น cover", "เต้นลีลาศ");
            }
        }
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("โยคะ", "รดน้ำต้นไม");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("รดน้ำต้นไม");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("โยคะ", "เล่นบอร์ดเกม");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("โยคะ", "เล่นบอร์ดเกม");
            }
        } else if (PD === "ไม่มี") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("วิ่งในสวน", "เล่นกีฬา", "ว่ายน้ำ", "วาดรูป");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("วิ่งในสวน", "เล่นกีฬา", "ว่ายน้ำ");
            }
        } else if (PD === "เบาหวาน") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("เดินเล่น", "โยคะ", "ทำสวน");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("โยคะ", "ทำสวน");
            }
        }
    } else if (calculatedBMI >= 24.9 && calculatedBMI < 29.9) {
        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("ว่ายน้ำ", "รำมวยไทยเก็ก", "Art");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("ว่ายน้ำ", "รำมวยไทยเก็ก");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("โยคะ", "รำมวยไทยเก็ก", "แอโรบิคทางน้ำ");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("โยคะ", "รำมวยไทยเก็ก");
            }
        }
    } else if (calculatedBMI >= 30) {
        if (PD === "โรคหัวใจ") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("ว่ายน้ำ", "โยคะ", "แอโรบิคทางน้ำ");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("ว่ายน้ำ", "โยคะ", "แอโรบิคทางน้ำ");
            }
        } else if (PD === "ปวดกระดูก") {
            if (AGE >= 60 && AGE <= 65) {
                recommendedActivities.push("โยคะ", "รำมวยไทยเก็ก", "รำไทย");
            } else if (AGE > 65 && AGE <= 70) {
                recommendedActivities.push("โยคะ", "รำมวยไทยเก็ก");
            }
        }
    }

    return recommendedActivities;
}

