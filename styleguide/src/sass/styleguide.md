#Testing a Styleguide for Greenwire

"KSS-NODE" is a NodeJS implementation of [Knyle Style Sheets](https://github.com/kneath/kss) (KSS).
KSS-NODE enables us to generate a beatiful styleguide for CSS, that suports LESS, SASS and Stylus.

This is a **template** based on the kss-node-template created by [Tanjo, Hiroyuki](https://github.com/htanjo)
for [kss-node](https://github.com/hughsk/kss-node) styleguide.

##How to apply this template in p3_styleguide:

1. To modify the style of the KSS-NODE Styleguide, the files are contained in styleguide/template/

2. To modify the contents, we should add the comments in the file we are working on.
The comments should be written in a very [specific way](https://github.com/kneath/kss/blob/master/SPEC.md).
In this case, we are working with gww.styleguide.scss located in /src/sass

3. Once we made all the changes we wanted, in .../sass/ we use the next command line:

`kss-node [css-directory] [styleguide-directory] --[style-language] [input-file] [template-directory]`

Specifically:

`kss-node src/sass styleguide --S src/sass/ggw.styleguide.scss --template styleguide/template`


