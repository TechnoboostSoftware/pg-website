$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function Owner() {
  $("#ownerBtn").removeClass("text-dark");
  $("#TenantBtn").addClass("text-dark");
  $("#ownerBtn").addClass("text-light");
  $("#ownerBtn").addClass("bg-main");
  $("#TenantBtn").removeClass("text-light");
  $("#TenantBtn").removeClass("bg-main");
  $(".ownerDisplay").removeClass("d-none");
  $(".tenantDisplay").addClass("d-none");
}
function Tenant() {
  $("#ownerBtn").addClass("text-dark");
  $("#TenantBtn").removeClass("text-dark");
  $("#ownerBtn").removeClass("text-light");
  $("#ownerBtn").removeClass("bg-main");
  $("#TenantBtn").addClass("text-light");
  $("#TenantBtn").addClass("bg-main");
  $(".ownerDisplay").addClass("d-none");
  $(".tenantDisplay").removeClass("d-none");
}
function search() {
  $("#searchDropdown").removeClass("d-none");
  $("#searchDropdown").addClass("d-flex");
  $(".searchbar").removeClass("fullRounded");
  $(".searchbar").addClass("halfRounded");
}

function register() {
  var Name = document.getElementById("registerName");
  var Number = document.getElementById("registerNumber");
  var Property = document.getElementById("registerProperty");
  var Address = document.getElementById("registerAddress");
  var Pan = document.getElementById("registerPan");
  let isError = false;
  var registerForPg = [Name, Number, Property, Address, Pan];
  for (let i = 0; i < registerForPg.length; i++) {
    if (registerForPg[i].value == "") {
      registerForPg[i].style.border = "2px solid red";
      isError = true;
    }
  }
}
function contactSubmit() {
  var Name = document.getElementById("contactName");
  var Number = document.getElementById("contactNo");
  var Address = document.getElementById("contactAddress");
  var Message = document.getElementById("contactMessage");
  let isError = false;
  var contact = [Name, Number, Address, Message];
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].value == "") {
      contact[i].style.border = "2px solid red";
      isError = true;
    }
  }
}

function removeErrorBorder(id) {
  document.getElementById(id).style.border = 'none'
}

function quesiton(ans) {
  $('.normalQuestion').addClass('notSelected')
  $('.normalQuestion').removeClass('selected')
  $(ans).addClass('selected')
  $(ans).removeClass('notSelected')
}