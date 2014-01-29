Ext.define('MedBlogs.view.flashcards.Card', {
    extend: 'Ext.Container',

    requires: [
    ],

    config: {
        title: 'Flash Cards',
        layout: 'vbox',

		items: [
            {
                id: 'question',
                tpl: '<div class="flash_card_question">{question}</div>'
            },
            {
                id: 'answer',
                tpl: '<div class="flash_card_answer">{answer}</div>'
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#question').setData(newRecord.data);
            this.down('#answer').setData(newRecord.data);
        }
    }
});
