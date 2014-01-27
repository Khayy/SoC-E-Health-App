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
            items: [
                {
                    xtype: 'button',
                    id: 'settingsButton',
                    text: 'Settings',
                    align: 'right',
                    hidden: false
                },
                {
                    xtype: 'button',
                    id: 'doneButton',
                    text: 'Done',
                    align: 'right',
                    hidden: true
                }
            ]
        },

        items: [
            { xtype: 'feedsScreen' }
        ]
    }
});
