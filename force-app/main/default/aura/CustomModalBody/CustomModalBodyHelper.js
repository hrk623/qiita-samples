({
  showSpinner: function(c) {
    const spinner = c.find('spinner');
    $A.util.removeClass(spinner, 'slds-hide');
  },
  hideSpinner: function(c) {
    const spinner = c.find('spinner');
    $A.util.addClass(spinner, 'slds-hide');
  }
});
