Telegram.WebApp.ready();
Telegram.WebApp.onEvent('themeChanged', function() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
});
Telegram.WebApp.expand();
var button1 = Telegram.WebApp.MainButton;
button1.show();
button1.text = 'Оплатить!';
button1.setParams({"color": "#8f8d6a", "textColor": "#fffee6"})
button1.onClick(function () {
    Telegram.WebApp.MainButton.hide();
});
