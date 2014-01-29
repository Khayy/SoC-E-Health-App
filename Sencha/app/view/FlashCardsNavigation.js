Ext.define('MedBlogs.view.FlashCardsNavigation', {
    extend: 'Ext.navigation.View',
    xtype: 'flashcardsNavigation',

    requires: [
        'MedBlogs.view.flashcards.SelectScreen',
        'MedBlogs.view.flashcards.Card'
    ],

    config: {
		title: 'Flash Cards',
		iconCls: 'tagIcon',
		layout: 'card',
		
        autoDestroy: false,
        
        items: [
            { xtype: 'flashcardSelectScreen' }
        ]
    }
});