Ext.define('MedBlogs.view.Settings', {
	extend: 'Ext.Panel',
	xtype: 'settingsScreen',
	
	requires: [
		'Ext.TitleBar'
	],
	
	config: {
		title: 'Settings',
		iconCls: 'settings',
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Subscription settings'
			}
		]
	}
	
});