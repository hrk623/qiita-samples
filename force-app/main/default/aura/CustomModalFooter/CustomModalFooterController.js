({
  onCancelClicked: function(c, e, h) {
    c.find('overlayLib').notifyClose();
  },
  onSaveClicked: function(c, e, h) {
    c.set('v.isDisabled', true);
    $A.get(`e.c:CustomModalEvent`)
      .setParams({
        type: 'SAVE'
      })
      .fire();
  }
});
