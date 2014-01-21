Ext.define('MedBlogs.view.feeds.Feeds', {
	extend: 'Ext.Panel',
	xtype: 'feedsScreen',
	
	requires: [
		'Ext.MessageBox',
		'Ext.dataview.List',
		'MedBlogs.store.Announcements',
		'MedBlogs.model.Announcements'
	],
	
	config: {
		title: 'Announcements',
		iconCls: 'alertIcon',
		layout: 'fit',
		
		items: [
			{
				xtype: 'list',
				variableHeights: true,
				store: 'Announcements',
				itemTpl: ['<div class="feed_list">',
							'<div class="category">{category}</div>',
							'<span class="title">{title}</span><br/>',
							'<span class="creator">{creator}</span>',
							'<span class="date">{date}</span>',
							'<br/><span class="description">{description}</span></div>'].join(" ")
		

			}
		]
	}
	
});