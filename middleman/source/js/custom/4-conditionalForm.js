function conditionalForm() {

  $('#datecreated').change(function(){

    selection = this.value;
    switch(selection) {
       case 'before':
           $('#before').show();
           $('#after').hide();
           break;
       case 'after':
           $('#before').hide();
           $('#after').show();
           break;
       case 'between':
           $('#before').show();
           $('#after').show();
           break;
    }

  });

};
