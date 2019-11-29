window.onresize = function () {
                if (window.innerWidth <= 880) {
                    document.querySelector('#hamburger').style.display = "block";
                }
            };
            window.onload = function () {
                document.querySelector('#backup-nav').classList.add('hiddenNav');
                document.querySelector('#hamburger').style.display = "block";
                document.querySelector('.main').style.padding = " 110px 0 0 0";
            };

            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
            }

            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
            }