
/*!
 * Globalize v1.3.0-tableau.0 2017-08-07T16:33Z Released under the MIT license
 * http://git.io/TrdQbw
 */
"undefined"!=typeof process&&"node"===process.release.name?global.localizeGlobalNamespace=global:window.localizeGlobalNamespace=window,function(a,b){a.TabGlobalize=b()}(localizeGlobalNamespace,function(){function a(b){if(!(this instanceof a))return new a(b);i(b,"locale"),k(b,"locale"),this._locale=b}var b=function(a){return"string"==typeof a?a:"number"==typeof a?""+a:JSON.stringify(a)},c=function(a,c){return a=a.replace(/{[0-9a-zA-Z-_. ]+}/g,function(a){return a=a.replace(/^{([^}]*)}$/,"$1"),b(c[a])})},d=function(){var a=arguments[0];return[].slice.call(arguments,1).forEach(function(b){var c;for(c in b)a[c]=b[c]}),a},e=function(a,b,e){var f;return b=a+(b?": "+c(b,e):""),f=new Error(b),f.code=a,d(f,e),f},f=function(a){return[].reduce.call(a,function(a,b){return 0|(a=(a<<5)-a+b.charCodeAt(0))},0)},g=function(a,b,c,d){var e;return d=d||JSON.stringify(c),e=f(a+b+d),e>0?"a"+e:"b"+Math.abs(e)},h=function(a,b,c,d){if(!c)throw e(a,b,d)},i=function(a,b){h("E_MISSING_PARAMETER","Missing required parameter `{name}`.",void 0!==a,{name:b})},j=function(a,b,c,d){h("E_INVALID_PAR_TYPE","Invalid `{name}` parameter ({value}). {expected} expected.",c,{expected:d,name:b,value:a})},k=function(a,b){j(a,b,void 0===a||"string"==typeof a,"a string")},l=function(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")},m=function(a,b,c){var d;for("string"!=typeof a&&(a=String(a)),d=a.length;d<b;d+=1)a=c?a+"0":"0"+a;return a};return a.locale=function(a){return k(a,"locale"),arguments.length&&(this._locale=a),this._locale},a._createError=e,a._formatMessage=c,a._regexpEscape=l,a._runtimeKey=g,a._stringPad=m,a._validateParameterPresence=i,a._validateParameterTypeString=k,a._validateParameterType=j,a}),function(a,b){b(a.TabGlobalize)}(localizeGlobalNamespace,function(a){var b=a._runtimeKey,c=a._validateParameterType,d=function(a){return null!==a&&""+a=="[object Object]"},e=function(a,b){c(a,b,void 0===a||d(a)||Array.isArray(a),"Array or Plain Object")},f=function(a){return function(b){return"number"!=typeof b&&"string"!=typeof b||(b=[].slice.call(arguments,0)),e(b,"variables"),a(b)}};return a._messageFormatterFn=f,a._messageFormat=function(){return{number:function(a,b){if(isNaN(a))throw new Error("'"+a+"' isn't a number.");return a-(b||0)},plural:function(a,b,c,d,e){if({}.hasOwnProperty.call(d,a))return d[a]();b&&(a-=b);var f=c(a,e);return f in d?d[f]():d.other()},select:function(a,b){return{}.hasOwnProperty.call(b,a)?b[a]():b.other()}}}(),a._validateParameterTypeMessageVariables=e,a.messageFormatter=a.prototype.messageFormatter=function(){return a[b("messageFormatter",this._locale,[].slice.call(arguments,0))]},a.formatMessage=a.prototype.formatMessage=function(a){return this.messageFormatter(a).apply({},[].slice.call(arguments,1))},a}),function(a,b){b(a.TabGlobalize)}(localizeGlobalNamespace,function(a){var b=a._runtimeKey,c=a._validateParameterPresence,d=a._validateParameterType,e=function(a,b){d(a,b,void 0===a||"number"==typeof a,"Number")},f=function(a){return function(b){return c(b,"value"),e(b,"value"),a(b)}};return a._pluralGeneratorFn=f,a._validateParameterTypeNumber=e,a.plural=a.prototype.plural=function(a,b){return c(a,"value"),e(a,"value"),this.pluralGenerator(b)(a)},a.pluralGenerator=a.prototype.pluralGenerator=function(c){return c=c||{},a[b("pluralGenerator",this._locale,[c])]},a});
(function( root, factory ) {
  root.Localize = root.Localize || {};
  root.Localize.msg = new root.TabGlobalize('en');
  factory( root.TabGlobalize, root.Localize );
  if (root.Localize.initFormattersAndParsers) {
    root.Localize.initFormattersAndParsers();
  }
}(localizeGlobalNamespace, function( Globalize ) {
var validateParameterTypeNumber = Globalize._validateParameterTypeNumber;
var validateParameterPresence = Globalize._validateParameterPresence;
var pluralGeneratorFn = Globalize._pluralGeneratorFn;
var validateParameterTypeMessageVariables = Globalize._validateParameterTypeMessageVariables;
var messageFormat = Globalize._messageFormat;
var messageFormatterFn = Globalize._messageFormatterFn;

Globalize.a1662346136 = pluralGeneratorFn(function(n) {
  var s = String(n).split('.'), v0 = !s[1];
  return (n == 1 && v0) ? 'one' : 'other';
});
Globalize.a495382896 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b375773432 = messageFormatterFn((function(  ) {
  return function (d) { return "File:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2075137611 = messageFormatterFn((function(  ) {
  return function (d) { return "Find"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1601228281 = messageFormatterFn((function(  ) {
  return function (d) { return "Navigate to:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b35925874 = messageFormatterFn((function(  ) {
  return function (d) { return "Tooltip text:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1167768531 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter the text, if any, user should see when they hover over your button."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b825278119 = messageFormatterFn((function(  ) {
  return function (d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1751365225 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1287370805 = messageFormatterFn((function(  ) {
  return function (d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b188525739 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1785102427 = messageFormatterFn((function(  ) {
  return function (d) { return "Certification icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1244229286 = messageFormatterFn((function(  ) {
  return function (d) { return "Certified by"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1758048177 = messageFormatterFn((function(  ) {
  return function (d) { return "Data connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a882984915 = messageFormatterFn((function(  ) {
  return function (d) { return "External server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b236621279 = messageFormatterFn((function(  ) {
  return function (d) { return "File icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2002208184 = messageFormatterFn((function(  ) {
  return function (d) { return "Live connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b217021229 = messageFormatterFn((function(  ) {
  return function (d) { return "Last extract:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a888757650 = messageFormatterFn((function(  ) {
  return function (d) { return "No data connections"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1764201384 = messageFormatterFn((function(  ) {
  return function (d) { return "See more details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1801004092 = messageFormatterFn((function(  ) {
  return function (d) { return "Tableau Server connection icon"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1055494454 = messageFormatterFn((function(  ) {
  return function (d) { return "This workbook connects to"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1718027933 = messageFormatterFn((function(  ) {
  return function (d) { return "Choose an Extension"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1761576738 = messageFormatterFn((function(  ) {
  return function (d) { return "Recent Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347847875 = messageFormatterFn((function(  ) {
  return function (d) { return "No recently used extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1269404979 = messageFormatterFn((function(  ) {
  return function (d) { return "More..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b940322012 = messageFormatterFn((function(  ) {
  return function (d) { return "Learn more about Extensions"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1768779612 = messageFormatterFn((function(  ) {
  return function (d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1746867806 = messageFormatterFn((function(  ) {
  return function (d) { return "Click Browse... to select an extension manifest"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1590185954 = messageFormatterFn((function(  ) {
  return function (d) { return "What are Dashboard Extensions?"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1024696899 = messageFormatterFn((function(  ) {
  return function (d) { return "They give your dashboard super-powers! " + d.LEARN_MORE + " about extensions and where to download them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1168676373 = messageFormatterFn((function(  ) {
  return function (d) { return "Choose an Extension..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1204236182 = messageFormatterFn((function(  ) {
  return function (d) { return "Choose"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1133050893 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b285286090 = messageFormatterFn((function(  ) {
  return function (d) { return "Selected file is too large. Select a file less than " + d.fileSize + "MB"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012804157 = messageFormatterFn((function(  ) {
  return function (d) { return "Wrong number of files selected"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a25492626 = messageFormatterFn((function(  ) {
  return function (d) { return "File reading aborted"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a586234441 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a snapshot of the view to your comment"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a169003142 = messageFormatterFn((function(  ) {
  return function (d) { return "Comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a544430526 = messageFormatterFn((function(  ) {
  return function (d) { return "Close panel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1053674704 = messageFormatterFn((function(  ) {
  return function (d) { return "Add a comment…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1015530127 = messageFormatterFn((function(  ) {
  return function (d) { return "No comments on this view."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b229925326 = messageFormatterFn((function(  ) {
  return function (d) { return "@Mention someone to notify them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1889096782 = messageFormatterFn((function(  ) {
  return function (d) { return "Post"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2079754917 = messageFormatterFn((function(  ) {
  return function (d) { return "View"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b417380523 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't create a snapshot of the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1104549106 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2089505580 = messageFormatterFn((function(  ) {
  return function (d) { return "Loading comments..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1524561682 = messageFormatterFn((function(  ) {
  return function (d) { return "Check your internet connection and retry."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b904005292 = messageFormatterFn((function(  ) {
  return function (d) { return "Check your internet connection and refresh to try again"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1513402832 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to get comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a333220967 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to get image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a490842535 = messageFormatterFn((function(  ) {
  return function (d) { return "Failed to download image"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1465273848 = messageFormatterFn((function(  ) {
  return function (d) { return "Applying the snapshot's filters and selection to the view..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1885602008 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't apply snapshot from " + d.user + " to the view"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1250654285 = messageFormatterFn((function(  ) {
  return function (d) { return "Message is too long"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1392247716 = messageFormatterFn((function(  ) {
  return function (d) { return "Couldn't send."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1523397989 = messageFormatterFn((function(  ) {
  return function (d) { return "Tap to retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1237763732 = messageFormatterFn((function(  ) {
  return function (d) { return "Retry"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b274322310 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to load comments"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1797312956 = messageFormatterFn((function(  ) {
  return function (d) { return "User will not be notified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a853218484 = messageFormatterFn((function(  ) {
  return function (d) { return "User does not have permissions to see this view and will not be notified"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a221714838 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified."; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.a631426777 = messageFormatterFn((function(  ) {
  return function (d) { return "User Removed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b127737520 = messageFormatterFn((function( plural, pluralFuncs ) {
  return function (d) { return plural(d.itemCount, 0, pluralFuncs.en, { one: function() { return "User";}, other: function() { return d.formattedItemCount + " users";} }) + " will not be notified about " + d.comment; }
})(messageFormat.plural, {"en": Globalize("en").pluralGenerator()}), Globalize("en").pluralGenerator({}));
Globalize.b1117524006 = messageFormatterFn((function(  ) {
  return function (d) { return "An unknown error has occurred"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b163283605 = messageFormatterFn((function(  ) {
  return function (d) { return "Remove snapshot"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1423669119 = messageFormatterFn((function(  ) {
  return function (d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a18627952 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b103099487 = messageFormatterFn((function(  ) {
  return function (d) { return "Delete"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1995720738 = messageFormatterFn((function(  ) {
  return function (d) { return "This message has already been deleted."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1713758616 = messageFormatterFn((function(  ) {
  return function (d) { return "You do not have permission to delete this comment."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1471531500 = messageFormatterFn((function(  ) {
  return function (d) { return "You no longer have permission to view the comments."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a253711618 = messageFormatterFn((function(  ) {
  return function (d) { return "You no longer have add comment permission."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2069839777 = messageFormatterFn((function(  ) {
  return function (d) { return "Contact your administrator."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b251899894 = messageFormatterFn((function(  ) {
  return function (d) { return "Dismiss"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b699475681 = messageFormatterFn((function(  ) {
  return function (d) { return "Unable to complete action"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a961972272 = messageFormatterFn((function(  ) {
  return function (d) { return "Copy error message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b815372396 = messageFormatterFn((function(  ) {
  return function (d) { return "Go to support"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b255654840 = messageFormatterFn((function(  ) {
  return function (d) { return "Yes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1809682794 = messageFormatterFn((function(  ) {
  return function (d) { return "No"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b793588198 = messageFormatterFn((function(  ) {
  return function (d) { return "Error copied to clipboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a733957981 = messageFormatterFn((function(  ) {
  return function (d) { return "Automatic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b168589764 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Editing Properties"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a116826502 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Range Options"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1596155136 = messageFormatterFn((function(  ) {
  return function (d) { return "Axis Titles"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1231669957 = messageFormatterFn((function(  ) {
  return function (d) { return "Days"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1607536880 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1278768609 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed end"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a247547112 = messageFormatterFn((function(  ) {
  return function (d) { return "Fixed start"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b970394972 = messageFormatterFn((function(  ) {
  return function (d) { return "General"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a125144769 = messageFormatterFn((function(  ) {
  return function (d) { return "Hours"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1581978018 = messageFormatterFn((function(  ) {
  return function (d) { return "Include zero"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1260422356 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1511552441 = messageFormatterFn((function(  ) {
  return function (d) { return "Independent axis ranges for each row or column"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1420855721 = messageFormatterFn((function(  ) {
  return function (d) { return "Interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a517883563 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter a valid number."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2101016678 = messageFormatterFn((function(  ) {
  return function (d) { return "Enter a valid date."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2108222031 = messageFormatterFn((function(  ) {
  return function (d) { return "Logarithmic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1973292878 = messageFormatterFn((function(  ) {
  return function (d) { return "Logarithm base must be greater than one."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1209983741 = messageFormatterFn((function(  ) {
  return function (d) { return "Log axis origin must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1229928788 = messageFormatterFn((function(  ) {
  return function (d) { return "Major Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1770199800 = messageFormatterFn((function(  ) {
  return function (d) { return "Major tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1616793128 = messageFormatterFn((function(  ) {
  return function (d) { return "Minor Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a732038404 = messageFormatterFn((function(  ) {
  return function (d) { return "Minor tick interval must be greater than zero."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a157011665 = messageFormatterFn((function(  ) {
  return function (d) { return "Minutes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b490170985 = messageFormatterFn((function(  ) {
  return function (d) { return "Months"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b932790308 = messageFormatterFn((function(  ) {
  return function (d) { return "None"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a22527915 = messageFormatterFn((function(  ) {
  return function (d) { return "Quarters"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b403943712 = messageFormatterFn((function(  ) {
  return function (d) { return "Range"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a121722113 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2072550554 = messageFormatterFn((function(  ) {
  return function (d) { return "Reversed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1761425869 = messageFormatterFn((function(  ) {
  return function (d) { return "Scale"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1829038991 = messageFormatterFn((function(  ) {
  return function (d) { return "Seconds"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a878507177 = messageFormatterFn((function(  ) {
  return function (d) { return "Show times"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1448908740 = messageFormatterFn((function(  ) {
  return function (d) { return "Subtitle"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2012938208 = messageFormatterFn((function(  ) {
  return function (d) { return "Synchronize dual axes"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1494018867 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick interval"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a739891352 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick interval (powers of)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1431600146 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick Marks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b298200556 = messageFormatterFn((function(  ) {
  return function (d) { return "Tick origin"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2012363722 = messageFormatterFn((function(  ) {
  return function (d) { return "Title"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1131194227 = messageFormatterFn((function(  ) {
  return function (d) { return "Edit Button"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1525100723 = messageFormatterFn((function(  ) {
  return function (d) { return "Uniform axis range for all rows or columns"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b733444312 = messageFormatterFn((function(  ) {
  return function (d) { return "Unit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a251521713 = messageFormatterFn((function(  ) {
  return function (d) { return "Weeks"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2023043528 = messageFormatterFn((function(  ) {
  return function (d) { return "Years"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a364363623 = messageFormatterFn((function(  ) {
  return function (d) { return "that localize/widgets now requires to exist"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1807992602 = messageFormatterFn((function(  ) {
  return function (d) { return "Accept"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1764312750 = messageFormatterFn((function(  ) {
  return function (d) { return "Ask a question about this data..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a215358936 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b239655127 = messageFormatterFn((function(  ) {
  return function (d) { return "Semantic model initialization failed"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a13537619 = messageFormatterFn((function(  ) {
  return function (d) { return "Semantic model initialization finished successfully"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b39031186 = messageFormatterFn((function(  ) {
  return function (d) { return "Initializing semantic model..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a31177243 = messageFormatterFn((function(  ) {
  return function (d) { return "Next"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1942727245 = messageFormatterFn((function(  ) {
  return function (d) { return d.PROJECT_NAME; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a322493263 = messageFormatterFn((function(  ) {
  return function (d) { return "You do not have permission to move to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a849829004 = messageFormatterFn((function(  ) {
  return function (d) { return "Content cannot be moved to “" + d.PROJECT_NAME + "”"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b707568333 = messageFormatterFn((function(  ) {
  return function (d) { return d.SITE_NAME + " (site root)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1232024503 = messageFormatterFn((function(  ) {
  return function (d) { return "New field name:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a160034452 = messageFormatterFn((function(  ) {
  return function (d) { return "Size of bins:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1684408186 = messageFormatterFn((function(  ) {
  return function (d) { return "Range of Values:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1653049642 = messageFormatterFn((function(  ) {
  return function (d) { return "Min:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1146506973 = messageFormatterFn((function(  ) {
  return function (d) { return "Diff:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b818949672 = messageFormatterFn((function(  ) {
  return function (d) { return "Max:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b994644441 = messageFormatterFn((function(  ) {
  return function (d) { return "CntD:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1029603530 = messageFormatterFn((function(  ) {
  return function (d) { return "Suggest Bin Size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b256468981 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1133392248 = messageFormatterFn((function(  ) {
  return function (d) { return "Continue"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b290167621 = messageFormatterFn((function(  ) {
  return function (d) { return "Continue without signing in"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2021629502 = messageFormatterFn((function(  ) {
  return function (d) { return "Connect to " + d.DATA_SOURCE; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1323884826 = messageFormatterFn((function(  ) {
  return function (d) { return "Before you connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1942925832 = messageFormatterFn((function(  ) {
  return function (d) { return "Sign in with your " + d.DATA_SOURCE + " account to see the dashboard with your data, or continue without signing in to quickly see it with sample data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1237574269 = messageFormatterFn((function(  ) {
  return function (d) { return "Make sure you’re using the cloud-based version of ServiceNow and have permission to access the necessary data. When you sign in, use your ServiceNow credentials, which may differ from those you use for single sign-on."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1673713816 = messageFormatterFn((function(  ) {
  return function (d) { return "You must be a company Administrator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1663350618 = messageFormatterFn((function(  ) {
  return function (d) { return " on your QuickBooks Online account to use Tableau to connect to QuickBooks Online."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a69096519 = messageFormatterFn((function(  ) {
  return function (d) { return "Only one Company Administrator per company"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1663349657 = messageFormatterFn((function(  ) {
  return function (d) { return " can use Tableau to connect to QuickBooks Online. If another Company Administrator has used Tableau, that administrator must give up the Tableau Online application privilege so that you can use them."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b245754859 = messageFormatterFn((function(  ) {
  return function (d) { return "Sign in to " + d.DATA_SOURCE + " to see your data in the dashboard. Or continue without signing in to see sample data."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1032192403 = messageFormatterFn((function(  ) {
  return function (d) { return "Font family"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1290261712 = messageFormatterFn((function(  ) {
  return function (d) { return "Font size"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1140385221 = messageFormatterFn((function(  ) {
  return function (d) { return "Bold"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a127906416 = messageFormatterFn((function(  ) {
  return function (d) { return "Italic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b701353968 = messageFormatterFn((function(  ) {
  return function (d) { return "Underline"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b2039644186 = messageFormatterFn((function(  ) {
  return function (d) { return "Color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1727521758 = messageFormatterFn((function(  ) {
  return function (d) { return "Left"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1033369644 = messageFormatterFn((function(  ) {
  return function (d) { return "Center"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1759424137 = messageFormatterFn((function(  ) {
  return function (d) { return "Right"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1411453506 = messageFormatterFn((function(  ) {
  return function (d) { return "Link"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1409474530 = messageFormatterFn((function(  ) {
  return function (d) { return "Text"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1486940408 = messageFormatterFn((function(  ) {
  return function (d) { return "Insert"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1062030329 = messageFormatterFn((function(  ) {
  return function (d) { return "Insert field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b60826821 = messageFormatterFn((function(  ) {
  return function (d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1887314314 = messageFormatterFn((function(  ) {
  return function (d) { return "Clear Formatting"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b269137057 = messageFormatterFn((function(  ) {
  return function (d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b730326866 = messageFormatterFn((function(  ) {
  return function (d) { return "Apply"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b973344233 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1131409766 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1143501173 = messageFormatterFn((function(  ) {
  return function (d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b394653372 = messageFormatterFn((function(  ) {
  return function (d) { return "OK"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b729480610 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b738849811 = messageFormatterFn((function(  ) {
  return function (d) { return "Reset"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b988082435 = messageFormatterFn((function(  ) {
  return function (d) { return "Edit"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1944966956 = messageFormatterFn((function(  ) {
  return function (d) { return "Unlink"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b443006251 = messageFormatterFn((function(  ) {
  return function (d) { return "Sort By"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a434622246 = messageFormatterFn((function(  ) {
  return function (d) { return "Alphabetic"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a2118864080 = messageFormatterFn((function(  ) {
  return function (d) { return "Data source order"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b952501343 = messageFormatterFn((function(  ) {
  return function (d) { return "Field"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a603830175 = messageFormatterFn((function(  ) {
  return function (d) { return "Manual sort"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1476047259 = messageFormatterFn((function(  ) {
  return function (d) { return "Sort Order"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1088821292 = messageFormatterFn((function(  ) {
  return function (d) { return "Ascending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1383025708 = messageFormatterFn((function(  ) {
  return function (d) { return "Descending"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1590542138 = messageFormatterFn((function(  ) {
  return function (d) { return "Aggregation"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1655818490 = messageFormatterFn((function(  ) {
  return function (d) { return "Clear"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1410814403 = messageFormatterFn((function(  ) {
  return function (d) { return "Field Name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a787778813 = messageFormatterFn((function(  ) {
  return function (d) { return "Move up"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b599368426 = messageFormatterFn((function(  ) {
  return function (d) { return "Move down"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b955194377 = messageFormatterFn((function(  ) {
  return function (d) { return "Move to top"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b727685727 = messageFormatterFn((function(  ) {
  return function (d) { return "Move to bottom"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a676088830 = messageFormatterFn((function(  ) {
  return function (d) { return "Close"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1586131674 = messageFormatterFn((function(  ) {
  return function (d) { return "Close dialog"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b637250120 = messageFormatterFn((function(  ) {
  return function (d) { return "Custom color"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1041600694 = messageFormatterFn((function(  ) {
  return function (d) { return "Wait indicator"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1537425502 = messageFormatterFn((function(  ) {
  return function (d) { return "Use Dashboard"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a347884167 = messageFormatterFn((function(  ) {
  return function (d) { return "All data sources"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b737053074 = messageFormatterFn((function(  ) {
  return function (d) { return "Start from one of our pre-built dashboards. All you have to do is sign in to your data source."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b962698757 = messageFormatterFn((function(  ) {
  return function (d) { return "Learn more"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1120231480 = messageFormatterFn((function(  ) {
  return function (d) { return "Create workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1676883838 = messageFormatterFn((function(  ) {
  return function (d) { return "Create Workbook"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1379445792 = messageFormatterFn((function(  ) {
  return function (d) { return "Cancel"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1734214183 = messageFormatterFn((function(  ) {
  return function (d) { return "Workbook name"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1254004607 = messageFormatterFn((function(  ) {
  return function (d) { return "Select project"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a354889190 = messageFormatterFn((function(  ) {
  return function (d) { return "Creating workbook..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1851628779 = messageFormatterFn((function(  ) {
  return function (d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1016822261 = messageFormatterFn((function(  ) {
  return function (d) { return "Building an extract with your data..."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1389107356 = messageFormatterFn((function(  ) {
  return function (d) { return "If you're connecting to a lot of data, this could take some time. You'll receive an email when the dashboard is ready for you."; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b794508294 = messageFormatterFn((function(  ) {
  return function (d) { return "Got it"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1575499934 = messageFormatterFn((function(  ) {
  return function (d) { return "Available layouts"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1989638466 = messageFormatterFn((function(  ) {
  return function (d) { return "For use with"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1116887064 = messageFormatterFn((function(  ) {
  return function (d) { return "Remember Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1370683774 = messageFormatterFn((function(  ) {
  return function (d) { return "Authentication:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a574248635 = messageFormatterFn((function(  ) {
  return function (d) { return "Integrated Authentication"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1908111791 = messageFormatterFn((function(  ) {
  return function (d) { return "LDAP"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1686686450 = messageFormatterFn((function(  ) {
  return function (d) { return "Teradata Database"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1196419402 = messageFormatterFn((function(  ) {
  return function (d) { return "Username and Password"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1548150663 = messageFormatterFn((function(  ) {
  return function (d) { return "Windows Authentication"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1004668240 = messageFormatterFn((function(  ) {
  return function (d) { return "Copy"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a937602621 = messageFormatterFn((function(  ) {
  return function (d) { return "Cut"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1469545038 = messageFormatterFn((function(  ) {
  return function (d) { return "Paste"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1974204014 = messageFormatterFn((function(  ) {
  return function (d) { return "Read uncommitted data"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1092070077 = messageFormatterFn((function(  ) {
  return function (d) { return "Require Encryption"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b878911198 = messageFormatterFn((function(  ) {
  return function (d) { return "Require SSL (recommended)"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a523671253 = messageFormatterFn((function(  ) {
  return function (d) { return "Keep your data safe by encrypting the data connection"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b800318825 = messageFormatterFn((function(  ) {
  return function (d) { return "Detailed Error Message"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a395986907 = messageFormatterFn((function(  ) {
  return function (d) { return "Optional"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1490613485 = messageFormatterFn((function(  ) {
  return function (d) { return "Sign In"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b978483684 = messageFormatterFn((function(  ) {
  return function (d) { return "Signing In…"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1488394852 = messageFormatterFn((function(  ) {
  return function (d) { return "Username:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b566931201 = messageFormatterFn((function(  ) {
  return function (d) { return "Password:"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a830499952 = messageFormatterFn((function(  ) {
  return function (d) { return d.prompt + ":"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b472212763 = messageFormatterFn((function(  ) {
  return function (d) { return "Connect"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a736621501 = messageFormatterFn((function(  ) {
  return function (d) { return "To a File"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a1339801156 = messageFormatterFn((function(  ) {
  return function (d) { return "To a Server"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.a195733597 = messageFormatterFn((function(  ) {
  return function (d) { return "Hide connection details"; }
})(), Globalize("en").pluralGenerator({}));
Globalize.b1992678718 = messageFormatterFn((function(  ) {
  return function (d) { return "Show connection details"; }
})(), Globalize("en").pluralGenerator({}));
}));
