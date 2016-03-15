const router = FlowRouter.group({})

router.route('/', {
  name: 'index',
  action: function (){
    BlazeLayout.render('index')
  }
})