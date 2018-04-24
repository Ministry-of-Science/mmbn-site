/* jshint undef: true, unused: true */
/* global $, console, location */



$(function () {

  console.log(
    '%c\n' +
    '███╗   ███╗███╗   ███╗██████╗ ███╗   ██╗\n' +
    '████╗ ████║████╗ ████║██╔══██╗████╗  ██║\n' +
    '██╔████╔██║██╔████╔██║██████╔╝██╔██╗ ██║\n' +
    '██║╚██╔╝██║██║╚██╔╝██║██╔══██╗██║╚██╗██║\n' +
    '██║ ╚═╝ ██║██║ ╚═╝ ██║██████╔╝██║ ╚████║\n' +
    '╚═╝     ╚═╝╚═╝     ╚═╝╚═════╝ ╚═╝  ╚═══╝\n' +
    "\n" +
    "           JACK IN, EXECUTE!           \n\n",

    'color: #07d0eb'
  );



  // Automatically open external links in new tabs
  $("a[href^=http]").each(function () {
    if (this.href.indexOf(location.hostname) == -1) {
      $(this).attr("target", "_blank");
    }
  });

});
