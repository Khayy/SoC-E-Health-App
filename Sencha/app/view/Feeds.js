Ext.define('MedBlogs.view.Feeds', {
	extend: 'Ext.Panel',
	xtype: 'feedsScreen',
	
	requires: [
		'Ext.TitleBar',
		'Ext.dataview.List',
		'MedBlogs.store.Announcements',
		'MedBlogs.model.Announcements'
	],
	
	config: {
		title: 'Announcements',
		iconCls: 'alertIcon',
		layout: 'card',
		
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Announcements'
			},
			{
				xtype: 'list',
				variableHeights: true,
				store: 'Announcements',
				itemTpl: ['<div class="feed_list">',
							'<span class="title">{title}</span>',
							' <span class="link">{link}</span>',
							' <span class="date">{date}</span>',
							' <span class="creator">{creator}</span>',
							' <span class="category">{category}</span>',
							' <span class="description">{description}</span></div>'].join(" ")
		

			}
		]
	}
	
});