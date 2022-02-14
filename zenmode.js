api.addButtonToToolbar({
    title: 'Zen mode',
    icon: 'fullscreen',
    action: function() {
         $("body").toggleClass("zen-mode");
    },
    shortcut: 'alt+z'
});