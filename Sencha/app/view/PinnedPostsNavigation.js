Ext.define('MedBlogs.view.PinnedPostsNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'pinnedNavigation',

    requires: [
        'MedBlogs.view.pinned.PinnedPosts',
        'MedBlogs.view.pinned.PostDetail'
    ],

    config: {
        title: 'Pinned Posts',
		iconCls: 'favIcon',
		layout: 'card',
        autoDestroy: false,

        /*navigationBar: {
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
        },*/

        items: [
            { xtype: 'pinnedPostsScreen' }
        ]
    }
});
