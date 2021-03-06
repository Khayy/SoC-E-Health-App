Ext.define('MedBlogs.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'MedBlogs.view.FeedsNavigation',
    	'MedBlogs.view.feeds.Settings',
    	'MedBlogs.view.feeds.Feeds',
        'MedBlogs.view.feeds.FeedDetail',
    	'MedBlogs.view.FlashCardsNavigation',
    	'MedBlogs.view.flashcards.Card',
    	'MedBlogs.view.flashcards.SelectScreen',
    	'MedBlogs.view.PinnedPostsNavigation',
        'MedBlogs.view.Help',
        'Ext.ux.touch.SwipeTabs'
    ],
    
    config: {
		plugins: 'swipetabs',
        tabBarPosition: 'bottom',

		fullscreen: true, 
		defaults: {
            scroll: 'vertical'
        },
        
        items: [
            {
                xtype: 'feedsNavigation'
            },
            {
	            xtype: 'pinnedNavigation'
            },
            {
            	xtype: 'flashcardsNavigation'
            },
            {
                xtype: 'helpScreen'
            }
        ]
    }
});
