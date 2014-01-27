Ext.define('MedBlogs.view.FlashCards', {
	extend: 'Ext.Panel',
	xtype: 'flashCardScreen',
	
	requires: [
		'Ext.TitleBar',
		'MedBlogs.model.CardCategories',
		'MedBlogs.store.CardCategories'
	],
	

	config: {
		title: 'Flash Cards',
		iconCls: 'tagIcon',
		layout: 'card',

		items: [
			{
				docked: 'top',
				xtype: 'titlebar',
				title: 'Flash Cards'
			},
			{
	            xtype: 'dataview',
	            scrollable: true,
	            inline: true,
	            mode: 'MULTI',
	            cls: 'dataview-inline',
	            itemTpl: '<div class="img" style="background-image: url({photo});"></div><div class="name">{first_name}<br/>{last_name}</div>',
	            //'<div><img src="http://try.sencha.com/scripts/trycore/icon_run.gif"/><div class="name">{first_name}<br/>{last_name}</div></div>',
	            //'<div class="img" style="background-image: url({photo});"></div><div class="name">{first_name}<br/>{last_name}</div>',
	            store: 'CardCategories'
        	}
		]
	}
	
});