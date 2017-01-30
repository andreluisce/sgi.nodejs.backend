var mongoose = require('mongoose');
var statesSchema = mongoose.Schema({
    name: {
        name: String        
    }
});

var State = module.exports = mongoose.model('states', statesSchema);

//Get genres
module.exports.getEstados = (callback, limit)=> {
    State.find(callback).limit(limit);
}