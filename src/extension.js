const Lang = imports.lang;
const St = imports.gi.St;

const Main = imports.ui.main;
const UserMenu = Main.panel.statusArea.userMenu;
const PanelUserMenu = UserMenu._iconBox.get_parent();

const ExtensionSystem = imports.ui.extensionSystem;
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;

const SETTINGS_SHOW_NAME = 'show-name';
const SETTINGS_SHOW_AVATAR = 'show-avatar';

const AntisocialMenuExtension = new Lang.Class({
    Name: 'AntisocialMenuExtension',

    _init: function() {
        this.settings = Convenience.getSettings();
        this.icon = new St.Icon({icon_name: 'system-shutdown-symbolic', style_class: 'system-status-icon'});
    },

    enable: function() {
        if(!this.settings.get_boolean(SETTINGS_SHOW_NAME)) {
            UserMenu._name.hide();
            PanelUserMenu.insert_child_at_index(this.icon, -1);
        }

        if(!this.settings.get_boolean(SETTINGS_SHOW_AVATAR))
            UserMenu._statusChooser.actor.hide();
        else
            UserMenu._statusChooser._combo.actor.hide();

        UserMenu._iconBox.hide();
        UserMenu._notificationsSwitch.actor.hide();

        this.hid = this.settings.connect('changed', Lang.bind(this, function() {
            ExtensionSystem.reloadExtension(ExtensionUtils.extensions[Me.metadata['uuid']]);
        }));
    },

    disable: function() {
        UserMenu._name.show();
        PanelUserMenu.remove_child(this.icon)

        UserMenu._statusChooser.actor.show();
        UserMenu._statusChooser._combo.actor.show();

        UserMenu._iconBox.show();
        UserMenu._notificationsSwitch.actor.show();

        this.settings.disconnect(this.hid);
    },
});

function init() {
    return new AntisocialMenuExtension();
}
