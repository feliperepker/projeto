    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
        console.log(navigator.geolocation)
    }

    function showLocation(position){
        const long = position.coords.longitude;
        const lat = position.coords.lat;
        
        const url = `https://maps.google.com/maps?q=${lat},${long}&t=&z=13&ie=UTF8&iwloc=&output=embed`

        window.open(url,'map')
    }

    function showNotifications(){
        if(!("Notification" in window)){
            console.log('Navegador não suporta notificações')
        }else if(Notification.permission ==='granted'){
            const notify = new Notification('Olá, bem vindo(a) de volta!')
        }else if(Notification.permission !== "denied"){
            Notification.requestPermission(function(permission){
                if(permission === "granted"){
                    const notify = new Notification('Olá, bem vindo(a)')
                }
            })
        }
    }