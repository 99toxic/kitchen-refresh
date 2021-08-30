(function() {
  var code_content;

  jQuery(function() {
    return jQuery(".show-html").each(function() {
      var code_cont, element, hide_link, show_link;
      element   = jQuery(this);
      show_link = jQuery("<a href='#' style='margin-left: 12px;'>Show HTML</a>");
      hide_link = jQuery("<a href='#' style='margin-left: 12px;'>Hide HTML</a>");
      code_cont = code_content(element);
      show_link.click(function(event) {
        show_link.hide();
        hide_link.show();
        code_cont.show();
        return event.preventDefault();
      });
      hide_link.click(function(event) {
        show_link.show();
        hide_link.hide();
        code_cont.hide();
        return event.preventDefault();
      });
      element.after(code_cont);
      element.after(hide_link);
      element.after(show_link);
      hide_link.hide();
      return code_cont.hide();
    });
  });

  code_content = function(element) {
    var code, html, pre;
    html = element.clone().wrap('<div>').parent().html();
    pre  = jQuery("<pre  class='prettyprint lang-html'>");
    code = jQuery("<code class='prettyprint lang-html'>");
    html = ("      " + html).replace(/\ \ \ \ \ \ /g, "");
    code.text(html);
    pre.append(code);
    return pre;
  };

}).call(this);