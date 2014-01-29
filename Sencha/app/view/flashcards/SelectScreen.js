Ext.define('MedBlogs.view.flashcards.SelectScreen', {
	extend: 'Ext.Panel',
	xtype: 'flashcardSelectScreen',
	
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
	            xtype: 'dataview',
	            id: 'categoryDataview',
	            scrollable: true,
	            inline: true,
	            mode: 'MULTI',
	            cls: 'dataview-inline',
	            selectedCls: 'card-cat-selected',
	            itemTpl: '<div class="card_container"><div class="img" style="background-image: url({image});"></div><div class="category_title">{category}</div></div>',
	            store: 'CardCategories'
        	}
		]
	}
	
});