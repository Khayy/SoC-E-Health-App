Ext.define('MedBlogs.model.FlashCards', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'cardSubject',
            'question',
            'answer'
        ]
    }
});