({
  onButtonClick: function(c, e, h) {
    // モーダルボディのコンポーネントを作成
    const createCustomModalBodyPromise = h.createComponent(c, h, 'c:CustomModalBody', {
      lastName: '林',
      firstName: '恵美',
      email: 'ehayashi@example.com'
    });

    // モーダルフッターのコンポーネントを作成
    const createCustomModalFooterPromise = h.createComponent(c, h, 'c:CustomModalFooter', {});

    Promise.all([createCustomModalBodyPromise, createCustomModalFooterPromise])
      .then(
        $A.getCallback(function([customModalBody, customModaFooter]) {
          // lighting:overlay を使ってモーダルを表示
          c.find('overlayLib').showCustomModal({
            header: '顧客情報の編集',
            body: customModalBody,
            footer: customModaFooter
          });
        })
      )
      .catch(function(reason) {
        console.error(reason);
      });
  }
});
