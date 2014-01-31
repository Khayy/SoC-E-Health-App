Ext.define('MedBlogs.view.flashcards.Card', {
    extend: 'Ext.Container',
    xtype: 'cardScreen',

    requires: [
    ],

    config: {
        title: 'Flash Cards',
        layout: {
            type:'vbox',
            align: 'center'
        },
        defaults: {
            width:'90%'
        },
        scrollable:true,
        items: [
            {
                xtype: 'panel',
                id: 'cardPanel',
                layout: {
                    type: 'vbox',
                    align: 'center',
                    pack: 'center'
                },
                defaults: {
                    width: '90%'
                },
                items: [
                     {
                            id: 'category',
                            tpl: '<div id="cardSubject">{cardSubject}</div>'
                    },
                    {
                        xtype: 'fieldset',
                        id: 'questionPanel',
                        title: 'Question:',
                        items: [
                            {
                                id: 'question',
                                tpl: '<div class="flashcardItem">{question}</div>'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'answerButton',
                        margin:5,
                        text: 'Check Answer',
                        width: '60%',
                        align: 'center'
                    },
                    {
                        xtype: 'fieldset',
                        id: 'answerPanel',
                        title: 'Answer:',
                        items: [
                            {
                                id: 'answer',
                                tpl: '<div class="flashcardItem">{answer}</div>'
                            }
                        ],
                        hidden: true
                    },
                    {
                        xtype: 'panel',
                        id: 'buttonPanel',
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        hidden: true,
                        cls:'buttonFlashcards',
                        title: 'How did you do?',
                        items: [
                            {
                                xtype: 'button',
                                id: 'yesButton',
                                text: 'Correct',
                                width: '40%',
                                margin: 5
                            },
                            {
                                xtype: 'button',
                                id: 'noButton',
                                text: 'Incorrect',
                                width: '40%',
                                margin: 5
                            }
                        ]
                    }
                ]
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            var cs = this.down('#category');
            cs.setData(newRecord.data);
            var q = this.down('#question');
            q.setData(newRecord.data);
            var a = this.down('#answer');
            a.setData(newRecord.data);
            //this.down('#questionPanel').setData(newRecord.data.question);
            //this.down('#answerPanel').setData(newRecord.data);
        }
    }
});
