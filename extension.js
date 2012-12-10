const Panel = imports.ui.main.panel;

let actors, userMenu;

function init() {
    let statusArea = Panel.statusArea || Panel._statusArea;
    userMenu = statusArea.userMenu; 
    actors = [userMenu._iconBox, userMenu._statusChooser.actor, userMenu._notificationsSwitch.actor];

    let menuItems = userMenu.menu._getMenuItems();

    menuItems.forEach(function(menuItem) {
        let label = menuItem.actor._delegate.label;

        if(label && _(label.get_text()) == _('Online Accounts'))
            actors.push(menuItem.actor);
    });
}

function enable() {
    actors.forEach(function(actor) {
        actor.hide();
    });
}

function disable() {
    actors.forEach(function(actor) {
        actor.show();
    });
}
