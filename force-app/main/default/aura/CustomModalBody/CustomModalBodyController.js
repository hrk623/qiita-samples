({
  onCustomModalEvent: function(c, e, h) {
    const eventType = e.getParams().type;
    if (eventType === 'SAVE') {
      h.showSpinner(c);

      // TODO: ここで値の保存処理をする

      // 保存が完了したらモーダルを閉じる
      setTimeout(function() {
        console.log('Saved!');
        h.hideSpinner(c);
        c.find('overlayLib').notifyClose();
      }, 3000);
    }
  }
});
