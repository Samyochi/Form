document.getElementById("characterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    age: form.age.value,
    gender: form.gender.value,
    height: form.height.value,
    power1: form.power1.value,
    power2: form.power2.value,
    power3: form.power3.value,
    power4: form.power4.value,
    power5: form.power5.value,
    power6: form.power6.value,
    power7: form.power7.value,
    story: form.story.value,
  };

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.text())
    .then((response) => {
      alert("ส่งข้อมูลสำเร็จ: " + response);
      form.reset();
    })
    .catch((error) => {
      console.error("เกิดข้อผิดพลาด:", error);
      alert("ส่งข้อมูลไม่สำเร็จ");
    });
});
