let data = [];
let mmm = document.getElementById("ull");

$("#masterkey").on("click", () => {
  $.ajax({
    url: "/fetchmasterdata",
    method: "POST",
    dataType: "json",
    data: { user: "admin" },
    success: function (response) {
      data = response.data;
      for (let i = 0; i < data.length; i++) {
        let ttr = document.createElement("tr");
        let mis = `<td>${data[i].username}</td>
        <td>${data[i].buy}</td>
        <td>${data[i].help}</td>
        <td>${data[i].chat}</td>`;

        ttr.innerHTML = mis;
        mmm.appendChild(ttr);
      }
      //console.log(data.length);
    },
    error: function (response) {
      console.log("error!");
    },
  });
});
