function getRecommendations(BMI, PD, AGE) {
    let recommendedActivities = [];

    if (BMI < 18.5) {
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
    } else if (BMI >= 18.5 && BMI < 24.9) {
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
    } else if (BMI >= 24.9 && BMI < 29.9) {
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
    } else if (BMI >= 30) {
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

document.getElementById('get-recommendations').addEventListener('click', () => {
    const BMI = parseFloat(document.getElementById('bmi').value);
    const PD = document.getElementById('disease').value;
    const AGE = parseInt(document.getElementById('age').value);

    const recommendations = getRecommendations(BMI, PD, AGE);
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = '';

    if (recommendations.length > 0) {
        recommendations.forEach((activity, idx) => {
            recommendationsDiv.innerHTML += `${idx + 1}. ${activity}<br>`;
        });
    } else {
        recommendationsDiv.innerHTML = "ไม่มีคำแนะนำ";
    }
});
