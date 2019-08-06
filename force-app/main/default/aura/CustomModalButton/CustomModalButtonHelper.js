({
  createComponent: function(c, h, componentDef, componentAttributes) {
    return new Promise(function(resolve, reject) {
      $A.createComponent(componentDef, componentAttributes, function(
        newComponent,
        status,
        errorMessage
      ) {
        if (status === "SUCCESS") resolve(newComponent);
        else if (status === "ERROR") reject(errorMessage);
      });
    });
  }
});
