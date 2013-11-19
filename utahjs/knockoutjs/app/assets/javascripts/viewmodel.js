function ViewModel() {
    var self = this;

    self.typedName = ""; 

    self.activities = ko.observableArray([
        { name: 'run' },
        { name: 'jump' },
        { name: 'climb' }
    ]);
 
    self.addActivity = function() {
        self.activities.push({ name: self.typedName });
    };
 
    self.removeActivity = function() {
        self.activities.remove(this);
    }
}

var viewModel = new ViewModel();
ko.applyBindings(viewModel);