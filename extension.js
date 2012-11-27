const UserMenu = imports.ui.main.panel._statusArea.userMenu;

let actors = [UserMenu._iconBox, UserMenu._statusChooser.actor, UserMenu._notificationsSwitch.actor];

function init() {
    let menuItems = UserMenu.menu._getMenuItems();

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
