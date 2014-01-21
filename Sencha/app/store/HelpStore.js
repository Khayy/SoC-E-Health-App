Ext.define('MedBlogs.store.HelpStore', {
    extend: 'Ext.data.TreeStore',
    requires: [
        'MedBlogs.model.HelpModel'
    ],

    config: {
        defaultRootProperty: 'items',
        model: 'MedBlogs.model.HelpModel',

        // XXX: AccordionList Now show data from JSON
        proxy: {
            type: 'ajax',
            url: 'helpData.json'
        }
    }

});