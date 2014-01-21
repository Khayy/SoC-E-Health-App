Ext.define('MedBlogs.model.HelpModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: 'text', type: 'string' },
            { name: 'category', type: 'boolean' }
        ]
    }
});