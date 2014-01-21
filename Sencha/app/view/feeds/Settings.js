Ext.define('MedBlogs.view.feeds.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsScreen',
	
	requires: [
		'Ext.MessageBox',
		'Ext.dataview.List',
		'MedBlogs.store.Subscriptions',
		'MedBlogs.model.Subscriptions'
	],
	
	config: {
		title: 'Settings',
		iconCls: 'settings',
		layout: 'fit',
		
		items: [
			{
				xtype: 'list',
				mode: 'MULTI',
				variableHeights: true,
				store: 'Subscriptions',
				itemTpl: ['<div class="feed_list">',
							'<div class="title">{name}</div>',
							'<span class="creator">Following: <b>{following}</b></span>',
							'<span class="date">Notifications: <b>{notifications}</b></span></div>'].join(" ")
		

			}
		]
	}
	
});