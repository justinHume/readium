Readium.Models.OptionsPresenter = Backbone.Model.extend({

	initialize: function() {
		var book = this.get("book");
		if(!book) {
			throw "ebook must be set in the constructor";
		}
		this.resetOptions();

		// keep self up to date with book
		book.on("change:font_size", this.resetOptions, this);
		book.on("change:two_up", this.resetOptions, this);
		book.on("change:current_theme", this.resetOptions, this);
		book.on("change:current_margin", this.resetOptions, this);
	},

	applyOptions: function() {
		var book = this.get("book");
		book.set(this.toJSON());
	},

	resetOptions: function() {
		var book = this.get("book");
		this.set({
			"font_size": 		book.get("font_size"),
	    	"two_up": 			book.get("two_up"),
	    	"current_theme": 	book.get("current_theme"),
	    	"current_margin": 	book.get("current_margin") 
		});
	}

});