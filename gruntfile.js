
module.exports = function(grunt) {

  grunt.registerTask('generateFonts', function() {
    var fs = require('fs');
    var util = require('util');

    var woffFile = fs.openSync('source/css/fonticons.woff.css', 'w');
    var woff2File = fs.openSync('source/css/fonticons.woff2.css', 'w');

    var files = fs.readdirSync('source/font');
    files.forEach(function(file) {
      if (!/\.woff/.test(file)) {
          return;
      }

      var b64 = fs.readFileSync('source/font/' + file).toString('base64');
      var format = file.indexOf('.woff2') >= 0 ? "woff2" : "woff";
      var fontWeight = 'normal';
      var fontStyle = 'normal';
      var fontFamily = file.split('.')[0].split('-')[0].split(/(?=[A-Z])/).join(' ');

      var template = '@font-face{font-family:%s;src:url(data:application/x-font-%s;charset=utf-8;base64,%s) format("%s");font-weight:%s;font-style:%s}\n';
      var css = util.format(template, fontFamily, format, b64, format, fontWeight, fontStyle);

      fs.write(format === 'woff' ? woffFile : woff2File, css);
    });

    fs.closeSync(woffFile);
    fs.closeSync(woff2File);

  });
};
