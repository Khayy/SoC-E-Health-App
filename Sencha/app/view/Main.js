Ext.define('MedBlogs.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
    	'MedBlogs.view.Settings',
    	'MedBlogs.view.Feeds',
    	'MedBlogs.view.FlashCards',
    	'MedBlogs.view.PinnedPosts',
        'Ext.ux.touch.SwipeTabs'
    ],
    
    config: {
		plugins: 'swipetabs',
        tabBarPosition: 'bottom',

		fullscreen: true, 
		
        items: [
            {
            	xtype: 'settingsScreen'
            },
            {
	            xtype: 'feedsScreen',
            },
            {
	            xtype: 'pinnedPostsScreen'
            },
            {
            	xtype: 'flashCardScreen'
            }
        ]
    }
});
