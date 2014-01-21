Ext.define('MedBlogs.view.FeedsNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'feedsNavigation',

    requires: [
        'MedBlogs.view.feeds.Feeds',
        'MedBlogs.view.feeds.FeedDetail',
        'MedBlogs.view.feeds.Settings'
    ],

    config: {
        title: 'Announcements',
        iconCls: 'alertIcon',
        layout: 'card',
        autoDestroy: false,

        navigationBar: {
            splitNavigation: (Ext.theme.name == "Blackberry") ? {
                xtype: 'toolbar',
                items: [{
                    docked: 'right',
                    xtype: 'button',
                    iconCls: 'settings',
                    id: 'settingsButton'
                }]
            } : false,
            //Could be used to obtain light grey themed titlebars, toolbars and navbars 
            //ui: (Ext.theme.name == "Blackberry") ? 'light' : 'sencha',
            items: [
                {
                    xtype: 'button',
                    id: 'settingsButton',
                    text: 'Settings',
                    align: 'right',
                    hidden: false,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            { xtype: 'feedsScreen' }
        ]
    }
});
