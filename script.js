console.log("Hello from script.js");
document.getElementById("btn").addEventListener("click", () => {
  const msg = document.getElementById("msg");
  msg.textContent = "Button clicked! ✅";
});
