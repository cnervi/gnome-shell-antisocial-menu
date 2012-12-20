const St = imports.gi.St;
const Panel = imports.ui.main.panel;

const ShowName = false;

let icon, actors, userMenu, panelUserMenu;

function init() {
    let statusArea = Panel.statusArea || Panel._statusArea;
    userMenu = statusArea.userMenu; 
    panelUserMenu = userMenu._iconBox.get_parent();
    actors = [userMenu._iconBox, userMenu._statusChooser.actor, userMenu._notificationsSwitch.actor];
    icon = new St.Icon({icon_name: 'system-shutdown', style_class: 'system-status-icon'});
    let menuItems = userMenu.menu._getMenuItems();

    menuItems.forEach(function(menuItem) {
        let label = menuItem.actor._delegate.label;

        if(label && _(label.get_text()) == _('Online Accounts'))
            actors.push(menuItem.actor);
    });
}

function enable() {
    if(!ShowName) {
        userMenu._name.hide()
        panelUserMenu.insert_child_at_index(icon, -1);
    }

    actors.forEach(function(actor) {
        actor.hide();
    });
}

function disable() {
    if(!ShowName) {
        userMenu._name.show()
        panelUserMenu.remove_child(icon);
    }

    actors.forEach(function(actor) {
        actor.show();
    });
}
