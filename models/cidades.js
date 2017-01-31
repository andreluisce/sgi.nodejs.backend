var City = mongoose.model('City', {
  name: String,
  state: { type: Schema.Types.ObjectId, ref: 'State' }
});