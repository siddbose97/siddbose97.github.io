(function(){
    console.log('Hello')
    $('#btn-register').click(function(event){        
        
        if(event)
            event.preventDefault()

        var visitor = {
            name: $('#contact-name').val(),
            email: $('#contact-email').val(),
            subject: $('#contact-subject').val(),
            message: $('#contact-message').val()
        }

        $.ajax({
            url:'/api/subscriber',
            type: 'POST',
            data: visitor,
            success: function(response){
                var text = $('#btn-register').val();
                console.log(text)
                console.log('Info Received: ' + JSON.stringify(response))
                
                if(text === 'Send Message'){
                    $('#btn-register').val('Sent!')
                    console.log('im here')
                } else{
                    $('#btn-register').val('Send Message');
                }

            },
            error: function(){}
        })
        console.log('Submitted' + JSON.stringify(visitor))

    })
})()