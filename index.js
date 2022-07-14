const input=document.querySelector("#userimages");

input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector("#displayimage").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });