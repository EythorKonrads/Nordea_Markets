;(function() {
    
       var staffSearchForm = document.querySelector('#searchbar');
       if(staffSearchForm) {
           var selectField = staffSearchForm.querySelector('#selectme');
           staffSearchForm.addEventListener('submit', onSubmitForm);
           if(selectField) {
              selectField.addEventListener('change', onSubmitForm);
            }
       }
    
       function onSubmitForm(e) {
           e.preventDefault();
       }
    
       var starfsmannalisti = document.querySelector('#staff-results');
              if(starfsmannalisti) {
                  var staffInput = document.querySelector('#staff-input');
                  if(staffInput) {
                      staffInput.addEventListener('keyup',staffFilter);
                  }
              }
    
              function staffFilter(e) {
                     var filterValue = e.target.value;
                     var staffItems = starfsmannalisti.querySelectorAll('.search-results__item');
                     if(staffItems.length) {
                         for(var i = 0; i < staffItems.length; i++) {
                             var tr = staffItems[i];
                             var show = false;
                             var columns = staffItems[i].querySelectorAll('.search-text');
                             if(columns.length) {
                                 for(var x = 0; x < columns.length; x++) {
                                     var str = columns[x].innerHTML.replace(/(<([^>]+)>)/ig,"");
                                     var startLocation = str.toLowerCase().search(filterValue.toLowerCase());
                                     if(startLocation > -1) {
                                      console.log(startLocation);
                                         show = true;
                                         var text = str.substr(startLocation,filterValue.length);
                                         str = str.replace(text, text.bold());
                                         columns[x].innerHTML = str;
                                     } else {
                                         columns[x].innerHTML = str;
                                     }
                                 }
                             }
                             if (show) {
                                 tr.style.display = 'block';
                             } else {
                                 tr.style.display = 'none';
                             }
                         }
                     }
                 }
    
    
    
    
    })();
    