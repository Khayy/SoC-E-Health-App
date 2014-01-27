Ext.define('MedBlogs.model.CardCategories', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'first_name',
            'last_name',
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
