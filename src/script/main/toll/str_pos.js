/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
@ ShowValues : Php de ki strpos gibi kullan   */


function str_pos (haystack, needle, offset)
{
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}