// Apply Markdown code quotes to selection, code block for multiline selection, or single quote for empty selection (note multiline blocks need to end with a newline)

var sel = getSelectedText();
var selRange = getSelectedRange();

if (!sel || sel.length == 0) {
  setSelectedText("`");
  setSelectedRange(selRange[0]+1,0);
}
else if (1 < sel.split(/\n/).length) {
  setSelectedText("```\n"+sel+"```");
  setSelectedRange(selRange[0]+selRange[1]+7,0);
}
else {
  setSelectedText("`"+sel+"`");
  setSelectedRange(selRange[0]+selRange[1]+2,0);
}
