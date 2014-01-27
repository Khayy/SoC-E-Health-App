Ext.define('MedBlogs.model.FlashCards', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'category',
            'question',
            'answer'
        ]
    }
});