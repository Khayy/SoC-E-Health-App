Ext.define('MedBlogs.controller.FlashCardsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            flashCardScreen: 'flashCardScreen'
        },

        control: {
            'flashCardScreen dataview': {
                itemtap: 'onCategoryTap'
            }

        }
    },

    onCategoryTap: function(list, index, node, record) {
        // check and only show on select 
        if(list.isSelected(record) === false)
            Ext.Msg.confirm(record.get('first_name'), "Would you like to select " + record.get('first_name') + "?", Ext.emptyFn);
    }
});
