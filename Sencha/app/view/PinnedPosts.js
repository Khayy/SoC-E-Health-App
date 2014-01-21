Ext.define('MedBlogs.view.PinnedPosts', {
	extend: 'Ext.Panel',
	xtype: 'pinnedPostsScreen',
	
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'MedBlogs.store.Tasks',
		'MedBlogs.model.Tasks'
	],
	
	config: {
		title: 'Pinned Posts',
		iconCls: 'listIcon',
		layout: 'card',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Pinned Posts'
			},
			{
				xtype: 'list',
				variableHeights: true,
				store: 'Tasks',
				itemTpl: ['<div class="feed_list">',
							'<div class="category">{category}</div>',
							'<span class="title">{title}</span><br/>',
							//'<span class="link">{link}</span>',
							'<span class="creator">{creator}</span>',
							'<span class="date">{date}</span>',
							'<br/><span class="description">{description}</span></div>'].join(" ")

			}
		]
	}
	
});