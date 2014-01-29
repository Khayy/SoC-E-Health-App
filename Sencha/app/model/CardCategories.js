Ext.define('MedBlogs.model.CardCategories', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'image',
            'category',
            'sessionIds',
            'bio',
            'position',
            'photo',
            'affiliation',
            'url',
            'twitter'
        ]
    }
});
