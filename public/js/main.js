//console.log(buy);

$("#buybtn").on("click", function () {
  $.ajax({
    url: "/updatebuy",
    method: "POST",
    dataType: "json",
    data: {
      user: user,
    },
    success: function (response) {
      let bb = response.dataa;
      document.getElementById("buyy").innerHTML = bb;
    },
    error: function (response) {
      console.log("error!");
    },
  });
});

$("#helpbtn").on("click", function () {
  $.ajax({
    url: "/updatehelp",
    method: "POST",
    dataType: "json",
    data: {
      user: user,
    },
    success: function (response) {
      let bb = response.dataa;
      document.getElementById("helpp").innerHTML = bb;
    },
    error: function (response) {
      console.log("error!");
    },
  });
});

$("#chatbtn").on("click", function () {
  $.ajax({
    url: "/updatechat",
    method: "POST",
    dataType: "json",
    data: {
      user: user,
    },
    success: function (response) {
      let bb = response.dataa;
      document.getElementById("chatt").innerHTML = bb;
    },
    error: function (response) {
      console.log("error!");
    },
  });
});
