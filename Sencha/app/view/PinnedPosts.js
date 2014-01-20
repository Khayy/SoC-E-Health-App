Ext.define('MedBlogs.view.PinnedPosts', {
	extend: 'Ext.Panel',
	xtype: 'pinnedPostsScreen',
	
	requires: [
		'Ext.TitleBar'
	],
	
	config: {
		title: 'Pinned Posts',
		iconCls: 'listIcon',
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Pinned Posts'
			}
		]
	}
	
});