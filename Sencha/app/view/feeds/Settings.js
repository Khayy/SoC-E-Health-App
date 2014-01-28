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
							'<span class="date">Notifications: <b>{notifications}</b></span></div>'].join(" "),
				listeners: {
					refresh: function(me) {
						//var store = Ext.getStore('Subscriptions');
						
						var data = me.getStore().getData().items;
						
						for (var i =0; i < data.length; i++) {
							if (data[i].get('following') === 'yes') {
								me.select(i,true,false);
							}
						}
					}
				}
			}
		]
	}
	
});