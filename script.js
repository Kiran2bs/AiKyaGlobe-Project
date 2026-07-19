// GOMBE — Channapatna Woodcraft Exports
// Small helper script: mobile menu open/close + products dropdown on tap.
// You do not need to edit this file when updating content.

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      var expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  // On mobile, tapping "Products" opens the dropdown instead of navigating.
  var dropdownParent = document.querySelector('.has-dropdown > a');
  var dropdownWrap = document.querySelector('.has-dropdown');
  if (dropdownParent && dropdownWrap) {
    dropdownParent.addEventListener('click', function (e) {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        dropdownWrap.classList.toggle('open');
      }
    });
  }

  // Mark current page's nav link as active
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
});
