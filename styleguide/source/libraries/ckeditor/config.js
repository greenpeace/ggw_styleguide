/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbar = [
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat' ] },
    { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ 'Copy', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
		{ name: 'insert',  items: [ 'Image', 'SpecialChar', 'Iframe' ] },
		{ name: 'styles', items: [ 'Format' ] },
    { name: 'paragraph', groups: [ 'list'], items: [ 'NumberedList', 'BulletedList'] }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Horizontalrule','Table';

	// Set the most common block elements.
	config.format_tags = 'p;h2;h3;h4';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced;tableresize';
};
