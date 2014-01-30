Ext.define('MedBlogs.controller.FlashCardsController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            navigationContainer: 'flashcardsNavigation',
            cardScreen: 'flashcardsNavigation cardScreen',
            selectScreen: 'flashcardsNavigation flashcardSelectScreen',
            selectGrid: '#categoryDataview',
            submitButton: '#submitButton',
            skipButton: '#skipButton',
            doneButton: '#doneCardsButton',
            checkButton: '#answerButton',
            yesButton: '#yesButton',
            noButton: '#noButton',
            answerPanel: 'flashcardsNavigation cardScreen #cardPanel #answerPanel',
            buttonPanel: 'flashcardsNavigation cardScreen #cardPanel #buttonPanel'
        },

        control: {
            navigationContainer: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
        	selectGrid: {
           		itemtap: 'onCategoryTap'
		    },
            submitButton: {
                tap: 'onSubmitSelect'
            },
            skipButton: {
                tap: 'onSkipSelect'
            },
            doneButton: {
                tap: 'onDoneSelect'
            },
            checkButton:  {
                tap: function(){
                    this.hideButton(this.getCheckButton());
                    this.incrementTotal();
                    this.hideButton(this.getSkipButton());
                    this.showButton(this.getAnswerPanel());
                    this.showButton(this.getButtonPanel());
                }
            },
            yesButton:  {
                tap: function(){
                    this.incrementCorrect();
                    this.loadNewQuestion();
                }
            },
            noButton:  {
                tap: function(){
                    this.incrementIncorrect();
                    this.loadNewQuestion();
                }
            }
        }
    },

    // @private
    $total: 0,
    // @private
    getTotal: function() {
        return this.$total;
    },
    // @private
    setTotal: function(value) {
        this.$total = value;
        //this.updateView();
    },
    incrementTotal: function() {
        this.$total++;
        //this.updateView();
    },


    // @private
    $skipped: 0,
    // @private
    getSkipped: function() {
        return this.$skipped;
    },
    // @private
    setSkipped: function(value) {
        this.$skipped = value;
        //this.updateView();
    },
    incrementSkipped: function() {
        this.$skipped++;
        //this.updateView();
    },


    // @private
    $correct: 0,
    // @private
    getCorrect: function() {
        return this.$correct;
    },
    // @private
    setCorrect: function(value) {
        this.$correct = value;
        //this.updateView();
    },
    incrementCorrect: function() {
        this.$correct++;
        //this.updateView();
    },

    // @private
    $incorrect: 0,
    // @private
    getIncorrect: function() {
        return this.$incorrect;
    },
    // @private
    setIncorrect: function(value) {
        this.$incorrect = value;
        //this.updateView();
    },
    incrementIncorrect: function() {
        this.$incorrect++;
        //this.updateView();
    },


    onCategoryTap: function(list, index, node, record) {
    	if (typeof(this.selectedCategories) === 'undefined') {
	    	this.selectedCategories = [];
    	}
        // check and only show on select 
        if(list.isSelected(record) === false) {
            this.showButton(this.getSubmitButton());
        	this.selectedCategories.push(record);
        } else {
            if(list.getSelectionCount() === 1)
                 this.hideButton(this.getSubmitButton());
	        Ext.Array.remove(this.selectedCategories, record);
        }
    },

    onMainPush: function(view, item) {
        //deselect categories
        //this.getFeedList().deselectAll();
        this.getNavigationContainer().getNavigationBar().leftBox.query('button')[0].hide();
        if (item.xtype == "flashcardSelectScreen") {
            this.hideButton(this.getSubmitButton());
            this.hideButton(this.getSkipButton());
            this.hideButton(this.getDoneButton());
        } else if (item.xtype == "cardScreen") {
            this.resetForm();
            this.hideButton(this.getSubmitButton());
            this.showButton(this.getSkipButton());
            this.showButton(this.getDoneButton());
        }
    },

    onMainPop: function(view, item) {
        if (item.xtype == "flashcardSelectScreen") {
            this.hideButton(this.getSubmitButton());
            this.hideButton(this.getSkipButton());
            this.hideButton(this.getDoneButton());
        } else if (item.xtype == "cardScreen") {
            Ext.getStore('FlashCards').removeAll();
            Ext.getStore('FlashCards').sync();
            this.hideButton(this.getSubmitButton());
            this.hideButton(this.getSkipButton());
            this.hideButton(this.getDoneButton());
        }
    },

    onSubmitSelect: function() {
        if (!this.cardScreen) {
            Ext.create('MedBlogs.store.FlashCards', { id: 'FlashCards' });
            Ext.getStore('FlashCards').load();
            this.cardScreen = Ext.create('MedBlogs.view.flashcards.Card');
        }  else {
            Ext.create('MedBlogs.store.FlashCards', { id: 'FlashCards' });
            Ext.getStore('FlashCards').load();
            this.loadNewQuestion();
        }
        
        if(typeof(this.getAnswerPanel()) !== 'undefined'){
            this.showButton(this.getAnswerPanel());
            this.showButton(this.getButtonPanel());
        }

        this.cardScreen.setRecord(Ext.getStore('FlashCards').getAt(0));
        // Push the show contact view into the navigation view
        this.getNavigationContainer().push(this.cardScreen);
    },

    onSkipSelect: function() {
       this.incrementTotal();
       this.incrementSkipped();
       this.loadNewQuestion();
    },

    onDoneSelect: function() {
        Ext.Msg.alert("Well Done", "<p>Correct answers: " + 
            this.getCorrect() + " / " + this.getTotal() + "<br/>" + 
            "Inorrect answers: " + 
            this.getIncorrect() + " / " + this.getTotal() + "<br/>" + 
            "Skipped questions: " + 
            this.getSkipped() + " / " + this.getTotal() + "</p>" 
            , Ext.emptyFn);
        this.getNavigationContainer().pop();
    },

    showButton: function(genericButton) {

        if (!genericButton.isHidden()) {
            return;
        }

        genericButton.show();
    },

    hideButton: function(genericButton) {

        if (genericButton.isHidden()) {
            return;
        }

        genericButton.hide();
    },

    loadNewQuestion: function() {
        Ext.getStore('FlashCards').removeAt(0);
        Ext.getStore('FlashCards').sync();
        if(Ext.getStore('FlashCards').getCount()===0) {
            Ext.getStore('FlashCards').load();
            console.log('load store again');
        }
        this.resetForm();
    },

    loadMoreQuestions: function() {
    
    },

    resetForm: function() {
        this.showButton(this.getSkipButton());
        this.showButton(this.getCheckButton());
        this.hideButton(this.getAnswerPanel());
        this.hideButton(this.getButtonPanel());
        this.cardScreen.setRecord(Ext.getStore('FlashCards').getAt(0));
    },
});
