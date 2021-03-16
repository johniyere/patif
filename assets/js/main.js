
(() => {
    window.onscroll = function() {

        // if (window.location.pathname === '/') {
        //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //         document.getElementById('topnav').classList.add('scroll');
        //     } else {
        //         document.getElementById('topnav').classList.remove('scroll');
        //     }
        // }
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById('topnav').classList.add('scroll');
        } else {
            document.getElementById('topnav').classList.remove('scroll');
        }
    }

})();