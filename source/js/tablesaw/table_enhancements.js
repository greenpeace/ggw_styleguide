// Any table with a select all ID will also select teh checkboxes on each row

$('.js-selectall').click(function (e) {
    $(this).closest('table').find('.form-checkbox').prop('checked', this.checked);
});
