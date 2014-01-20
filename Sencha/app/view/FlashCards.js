Ext.define('MedBlogs.view.FlashCards', {
	extend: 'Ext.Panel',
	xtype: 'flashCardScreen',
	
	requires: [
		'Ext.TitleBar'
	],
	

	config: {
		title: 'Flash Cards',
		iconCls: 'cardIcon',
		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Flash Cards'
			}
		]
	}
	
});