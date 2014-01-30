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

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'submitButton',
                    text: 'Submit',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'skipButton',
                    text: 'Skip',
                    align: 'right',
                    hidden: true
                },
                {
                    xtype: 'button',
                    id: 'doneCardsButton',
                    text: 'Done',
                    align: 'left',
                    hidden: true
                }
            ]
        },
        
        items: [
            { xtype: 'flashcardSelectScreen' }
        ]
    }
});